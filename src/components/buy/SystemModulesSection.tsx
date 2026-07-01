import { FadeIn } from "@/components/shared/FadeIn";
import { SystemShowcase } from "@/components/shared/SystemShowcase";

export function SystemModulesSection() {
  return (
    <section className="section-shell">
      <FadeIn className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="type-heading-xl border-l-4 border-brand pl-4 text-text-primary">
            How it works
          </h2>
          <p className="type-body-lg max-w-xl">
            Three modules designed to work together in the kitchen you already
            have.
          </p>
        </div>
        <SystemShowcase />
      </FadeIn>
    </section>
  );
}
