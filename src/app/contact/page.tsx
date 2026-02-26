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

      {/* Great Fit For */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            {contact.greatFit.heading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {contact.greatFit.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
