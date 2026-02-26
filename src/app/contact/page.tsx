import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactForm } from "./ContactForm";
import { contact } from "@/content";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="default"
        subtitle={contact.hero.subtitle}
        title={contact.hero.title}
        description={contact.hero.description}
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
