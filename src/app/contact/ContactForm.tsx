"use client";

import { useState, useRef, useEffect } from "react";
import { band, contact } from "@/content";

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  startTime: string;
  setLength: string;
  attendance: string;
  location: string;
  act: string;
  message: string;
  website: string; // honeypot — must remain empty
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  startTime: "",
  setLength: "",
  attendance: "",
  location: "",
  act: "",
  message: "",
  website: "",
};

const MESSAGE_MAX = 5000;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "mailto"
  >("idle");
  const resultRef = useRef<HTMLDivElement>(null);
  const formStartedAt = useRef<number>(Date.now());

  useEffect(() => {
    if (status === "sent" || status === "mailto") {
      resultRef.current?.focus();
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Booking Inquiry — ${form.act || band.name}`
    );
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.eventType && `Event Type: ${form.eventType}`,
      `Event Date: ${form.eventDate || "Not specified"}`,
      form.startTime && `Start Time: ${form.startTime}`,
      form.setLength && `Set Length: ${form.setLength}`,
      form.attendance && `Expected Attendance: ${form.attendance}`,
      `Location: ${form.location || "Not specified"}`,
      `Act: ${form.act || "Either/Both"}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const body = encodeURIComponent(lines);
    return `mailto:${band.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formStartedAt: formStartedAt.current }),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      // If email service isn't configured (503), fall back to mailto
      if (res.status === 503) {
        window.location.href = buildMailto();
        setStatus("mailto");
        return;
      }

      setStatus("error");
    } catch {
      // Network error — fall back to mailto
      window.location.href = buildMailto();
      setStatus("mailto");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow text-sm";

  const labelClasses = "block text-sm font-medium text-text mb-1.5";

  if (status === "sent") {
    return (
      <div ref={resultRef} tabIndex={-1} className="text-center py-12 outline-none">
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
          {contact.form.successHeading}
        </h2>
        <p className="text-muted mb-6">{contact.form.successMessage}</p>
        <button
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          {contact.form.successRetry}
        </button>
      </div>
    );
  }

  if (status === "mailto") {
    return (
      <div ref={resultRef} tabIndex={-1} className="text-center py-12 outline-none">
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
          {contact.form.fallbackHeading}
        </h2>
        <p className="text-muted mb-6">
          {contact.form.fallbackMessage}{" "}
          <a
            href={`mailto:${band.email}`}
            className="text-ink hover:text-accent underline"
          >
            {band.email}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          {contact.form.fallbackRetry}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div role="alert" className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
          {contact.form.errorMessage}{" "}
          <a
            href={`mailto:${band.email}`}
            className="underline font-medium"
          >
            {band.email}
          </a>
          .
        </div>
      )}

      {/* Name & Email (required) */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
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
          <label htmlFor="email" className={labelClasses}>
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

      {/* Phone & Event Type */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(optional)"
          />
        </div>
        <div>
          <label htmlFor="eventType" className={labelClasses}>
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select...</option>
            <option value="Venue">Venue</option>
            <option value="Private Party">Private Party</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Fundraiser">Fundraiser</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Date & Start Time */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eventDate" className={labelClasses}>
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
          <label htmlFor="startTime" className={labelClasses}>
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Set Length & Attendance */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="setLength" className={labelClasses}>
            Expected Set Length
          </label>
          <select
            id="setLength"
            name="setLength"
            value={form.setLength}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Not sure</option>
            <option value="60 min">60 min</option>
            <option value="90 min">90 min</option>
            <option value="2 hours">2 hours</option>
          </select>
        </div>
        <div>
          <label htmlFor="attendance" className={labelClasses}>
            Expected Attendance
          </label>
          <select
            id="attendance"
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select...</option>
            <option value="Under 50">Under 50</option>
            <option value="50–100">50–100</option>
            <option value="100–250">100–250</option>
            <option value="250+">250+</option>
          </select>
        </div>
      </div>

      {/* Location & Act */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="location" className={labelClasses}>
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
        <div>
          <label htmlFor="act" className={labelClasses}>
            Which act?
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
      </div>

      {/* Honeypot — hidden from real users, bots fill it in */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      {/* Message (required) */}
      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <label htmlFor="message" className={labelClasses + " mb-0"}>
            Message <span className="text-accent">*</span>
          </label>
          <span
            className={`text-xs tabular-nums ${
              form.message.length > MESSAGE_MAX * 0.9
                ? "text-accent"
                : "text-muted/60"
            }`}
            aria-live="polite"
          >
            {form.message.length.toLocaleString()} / {MESSAGE_MAX.toLocaleString()}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your event — any details that will help us prepare."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent hover:bg-accent-hover text-text-on-ink font-semibold text-sm tracking-wide transition-all border border-white/[0.12] shadow-sm hover:shadow-md hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "sending"
          ? contact.form.sendingButton
          : contact.form.sendButton}
      </button>

      <p className="text-xs text-muted/60">
        Tell us a little about your event — we&apos;ll follow up with
        availability and next steps.
      </p>
    </form>
  );
}
