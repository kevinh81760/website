import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";

type SectionCTAProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  email?: string;
  variant?: "accent" | "dark";
  borderTop?: boolean;
  background?: boolean;
};

export function SectionCTA({
  title,
  description,
  ctaLabel,
  ctaHref,
  email,
  variant = "accent",
  borderTop = false,
  background = true,
}: SectionCTAProps) {
  const isExternal = ctaHref.startsWith("http") || ctaHref.startsWith("mailto:");

  const ctaClass = variant === "accent" ? "btn-primary" : "btn-secondary";

  return (
    <section
      className={`section-shell ${background ? "bg-surface-muted" : ""}`}
    >
      <FadeIn
        className={`mx-auto flex max-w-2xl flex-col items-center gap-6 text-center ${
          borderTop ? "border-t border-dashed border-text-primary/10 pt-16" : ""
        }`}
      >
        <h2 className="type-cta text-text-primary">{title}</h2>
        <p
          className={
            variant === "dark" ? "type-body" : "type-body-lg"
          }
        >
          {description}
        </p>
        <Link
          href={ctaHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={ctaClass}
        >
          {ctaLabel}
        </Link>
        {email && (
          <p className="type-body-sm">
            {variant === "accent" ? (
              <>
                Or email us at{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-text-primary underline-offset-2 hover:underline"
                >
                  {email}
                </a>
              </>
            ) : (
              email
            )}
          </p>
        )}
      </FadeIn>
    </section>
  );
}
