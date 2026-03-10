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
}

const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Basic validation
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

    // If Resend is not configured, return 503 so the client falls back to mailto
    if (!process.env.RESEND_API_KEY) {
      console.log("[Contact] RESEND_API_KEY not set — falling back to mailto");
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

    await resend.emails.send({
      from: "Tetris Lounge Website <onboarding@resend.dev>",
      to: band.email,
      replyTo: body.email,
      subject: `Booking Inquiry — ${body.act || band.name}`,
      text: lines,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
