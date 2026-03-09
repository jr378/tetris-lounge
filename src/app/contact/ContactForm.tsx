"use client";

import { useState } from "react";
import { band, contact } from "@/content";

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Booking Inquiry — ${form.act || band.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nEvent Date: ${form.eventDate || "Not specified"}\nLocation: ${form.location || "Not specified"}\nAct: ${form.act || "Either/Both"}\n\n${form.message}`
    );
    window.location.href = `mailto:${band.email}?subject=${subject}&body=${body}`;
    setStatus("submitted");
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow text-sm";

  if (status === "submitted") {
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
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          {contact.form.fallbackRetry}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text mb-1.5"
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
            className="block text-sm font-medium text-text mb-1.5"
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
            className="block text-sm font-medium text-text mb-1.5"
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
            className="block text-sm font-medium text-text mb-1.5"
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
          className="block text-sm font-medium text-text mb-1.5"
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
          className="block text-sm font-medium text-text mb-1.5"
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
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent hover:bg-accent-hover text-text-on-ink font-semibold text-sm tracking-wide transition-all border border-white/[0.12] shadow-sm hover:shadow-md hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream"
      >
        {contact.form.sendButton}
      </button>

      <p className="text-xs text-muted/60">
        {contact.form.privacyNote}
      </p>
    </form>
  );
}
