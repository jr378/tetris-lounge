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

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
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

    // Log the submission (replace with email service in production)
    console.log("=== New Booking Inquiry ===");
    console.log(`Name: ${body.name}`);
    console.log(`Email: ${body.email}`);
    console.log(`Event Date: ${body.eventDate || "Not specified"}`);
    console.log(`Location: ${body.location || "Not specified"}`);
    console.log(`Act: ${body.act || "Either/Both"}`);
    console.log(`Message: ${body.message}`);
    console.log("===========================");

    return NextResponse.json(
      { success: true, message: "Inquiry received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
