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
  eventDate?: string;
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

    // Log the submission (replace with email service in production)
    console.log("[Contact] New booking inquiry from:", body.email);

    return NextResponse.json(
      { success: true, message: "Inquiry received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact] Failed to process inquiry:", error);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
