import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { band } from "@/content";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  startTime?: string;
  setLength?: string;
  attendance?: string;
  location?: string;
  act?: string;
  message: string;
  // Anti-spam fields
  website?: string; // honeypot — should always be empty
  formStartedAt?: number; // client timestamp (ms) when the form was mounted
}

const MAX_MESSAGE_LENGTH = 5000;
const MIN_FORM_FILL_MS = 3000; // forms submitted faster than this are almost certainly bots
const MAX_URLS_IN_MESSAGE = 3;

// Simple in-memory rate limiter: max 5 requests per IP per 15 minutes.
// NOTE: in-memory only; in a multi-instance deployment, swap for Redis/Upstash.
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function looksLikeSpam(body: ContactPayload): string | null {
  // Honeypot — real users never see or fill this field.
  if (body.website && body.website.trim().length > 0) {
    return "honeypot";
  }

  // Submission speed — bots blast forms in well under a second.
  if (typeof body.formStartedAt === "number") {
    const elapsed = Date.now() - body.formStartedAt;
    if (elapsed < MIN_FORM_FILL_MS) {
      return "too-fast";
    }
  }

  // URL flood — most legitimate booking inquiries don't contain links at all.
  const urlMatches = body.message.match(/https?:\/\/|www\./gi) ?? [];
  if (urlMatches.length > MAX_URLS_IN_MESSAGE) {
    return "url-flood";
  }

  // Cyrillic/CJK in name field is a strong spam indicator on a US-only band site.
  if (/[Ѐ-ӿ぀-ヿ一-鿿]/.test(body.name)) {
    return "non-latin-name";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (body.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // Silently swallow spam — return success so the bot moves on.
    const spamReason = looksLikeSpam(body);
    if (spamReason) {
      return NextResponse.json({ success: true });
    }

    if (!process.env.RESEND_API_KEY) {
      // Falls back to mailto on the client.
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const lines = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.phone && `Phone: ${body.phone}`,
      body.eventType && `Event Type: ${body.eventType}`,
      body.eventDate && `Event Date: ${body.eventDate}`,
      body.startTime && `Start Time: ${body.startTime}`,
      body.setLength && `Set Length: ${body.setLength}`,
      body.attendance && `Expected Attendance: ${body.attendance}`,
      body.location && `Location: ${body.location}`,
      body.act && `Act: ${body.act}`,
      "",
      body.message,
    ]
      .filter(Boolean)
      .join("\n");

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Tetris Lounge Website <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_TO_EMAIL || "jackreed16@gmail.com";

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: body.email,
      subject: `Booking Inquiry — ${body.act || band.name}`,
      text: lines,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Contact] Failed to send email:", error);
    }
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
