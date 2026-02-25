import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-12">
        <p className="text-accent font-[family-name:var(--font-display)] text-6xl font-bold mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3">
          Page Not Found
        </h1>
        <p className="text-warm-gray text-lg max-w-md mx-auto mb-8">
          Looks like this page took an unexpected solo. Let&apos;s get you
          back to the main stage.
        </p>
        <CTAButton href="/">Back to Home</CTAButton>
      </div>
    </Section>
  );
}
