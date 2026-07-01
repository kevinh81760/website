import { FadeIn } from "@/components/shared/FadeIn";
import { investorFounderSection } from "@/lib/proseSections";

export function InvestorFounder() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-16 gap-y-4 border-t border-dashed border-text-primary/10 pt-10 md:grid-cols-[160px_1fr]">
            <h3 className="text-lg font-semibold tracking-tight text-text-primary">
              {investorFounderSection.heading}
            </h3>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-text-primary/75">
              {investorFounderSection.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
