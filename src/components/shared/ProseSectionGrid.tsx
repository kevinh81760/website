import { FadeIn } from "@/components/shared/FadeIn";
import type { ProseSection } from "@/lib/proseSections";

type ProseSectionGridProps = {
  sections: ProseSection[];
  title?: string;
  eyebrow?: string;
  headingColumn?: "wide" | "narrow";
};

export function ProseSectionGrid({
  sections,
  title,
  eyebrow,
  headingColumn = "wide",
}: ProseSectionGridProps) {
  const headingColClass =
    headingColumn === "narrow"
      ? "md:grid-cols-[160px_1fr]"
      : "md:grid-cols-[1fr_2fr]";

  const headingSizeClass =
    headingColumn === "narrow"
      ? "text-lg font-semibold tracking-tight text-text-primary"
      : "text-2xl font-semibold tracking-tight leading-tight text-text-primary";

  return (
    <section className="section-shell">
      {eyebrow && (
        <FadeIn>
          <p className="type-eyebrow mb-10">{eyebrow}</p>
        </FadeIn>
      )}
      {title && (
        <FadeIn>
          <h2 className="type-heading-xl mb-12 text-text-primary">{title}</h2>
        </FadeIn>
      )}
      <div className="mx-auto max-w-5xl">
        {sections.map((section, i) => (
          <FadeIn key={section.heading}>
            <div
              className={`grid grid-cols-1 gap-x-16 gap-y-4 border-t border-dashed border-text-primary/10 pt-10 ${headingColClass} ${
                i < sections.length - 1 ? "mb-12" : ""
              }`}
            >
              <h3 className={headingSizeClass}>{section.heading}</h3>
              <div
                className={`flex flex-col text-base leading-relaxed text-text-primary/75 ${
                  headingColumn === "narrow" ? "gap-4" : "gap-5"
                }`}
              >
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
