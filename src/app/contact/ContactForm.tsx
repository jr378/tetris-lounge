"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  eventDate: string;
  location: string;
  act: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  eventDate: "",
  location: "",
  act: "",
  message: "",
};

const BOOKING_EMAIL = "thenowheremenatl@gmail.com";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "fallback" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(initialState);
      } else {
        fallbackMailto();
        setStatus("fallback");
      }
    } catch {
      fallbackMailto();
      setStatus("fallback");
    }
  };

  const fallbackMailto = () => {
    const subject = encodeURIComponent(
      `Booking Inquiry — ${form.act || "Tetris Lounge / Nowhere Men"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nEvent Date: ${form.eventDate || "Not specified"}\nLocation: ${form.location || "Not specified"}\nAct: ${form.act || "Either/Both"}\n\n${form.message}`
    );
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-cream text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow text-sm";

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
          Inquiry Received
        </h2>
        <p className="text-warm-gray mb-6">
          Thanks for reaching out. We&apos;ll be in touch.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
          Opening Your Email Client
        </h2>
        <p className="text-warm-gray mb-6">
          Your email app should have opened with the inquiry details
          pre-filled. If it didn&apos;t, you can email us directly at{" "}
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="text-accent hover:text-accent-hover underline"
          >
            {BOOKING_EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          Try the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div
          className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm"
          role="alert"
        >
          Something went wrong. Please try again, or email us directly at{" "}
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="underline font-medium"
          >
            {BOOKING_EMAIL}
          </a>
          .
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="eventDate"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Venue or city"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="act"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Which act are you interested in?
        </label>
        <select
          id="act"
          name="act"
          value={form.act}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Either / Both</option>
          <option value="Tetris Lounge">Tetris Lounge</option>
          <option value="Nowhere Men">Nowhere Men</option>
          <option value="Both">Both acts</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your event — type, expected attendance, any details that will help us prepare."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-charcoal font-semibold text-sm tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>

      <p className="text-xs text-warm-gray/60">
        Your information is used only to respond to your inquiry.
      </p>
    </form>
  );
}
