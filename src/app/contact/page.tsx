import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book Tetris Lounge or Nowhere Men for your next event. Fill out our booking form and we'll be in touch.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="default"
        subtitle="Get in Touch"
        title="Book the Band"
        description="Interested in Tetris Lounge, Nowhere Men, or both? Fill out the form below and we'll get back to you."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
