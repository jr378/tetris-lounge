import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form API route handler.
 *
 * Currently logs submissions to the console. To connect to an email service:
 *
 * 1. Install your preferred email package (e.g., nodemailer, @sendgrid/mail, resend)
 * 2. Set environment variables for API keys
 * 3. Replace the console.log below with your send logic
 *
 * Example with Resend:
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from: '...', to: '...', subject, html });
 */

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

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Length check
    if (body.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log("[Contact] New booking inquiry from:", body.email);

    // No email service configured yet — return 503 so the client
    // falls back to mailto and the inquiry still reaches you.
    // When you add Resend/SendGrid, replace this block with send logic.
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  } catch (error) {
    console.error("[Contact] Failed to process inquiry:", error);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
