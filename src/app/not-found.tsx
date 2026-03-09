import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { notFound } from "@/content";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-12">
        <p className="text-brass font-[family-name:var(--font-display)] text-6xl font-bold mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3">
          {notFound.heading}
        </h1>
        <p className="text-muted text-lg max-w-md mx-auto mb-8">
          {notFound.description}
        </p>
        <CTAButton href="/">{notFound.buttonText}</CTAButton>
      </div>
    </Section>
  );
}
