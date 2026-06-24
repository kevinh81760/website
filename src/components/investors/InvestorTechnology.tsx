import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import {
  abbPartnershipCopy,
  abbPartnershipHighlights,
  abbPartnershipProof,
  abbPressLinks,
} from "@/lib/investorPartnership";

export function InvestorTechnology() {
  const { eyebrow, title, body, image } = abbPartnershipCopy;

  return (
    <section className="section-shell bg-surface-muted py-section-lg!">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:gap-14">
          <FadeIn className="flex flex-col gap-6">
            <div>
              <p className="type-eyebrow">{eyebrow}</p>
              <h2 className="type-heading-md mt-2 text-text-primary">{title}</h2>
            </div>
            <p className="type-body-lg max-w-lg">{body}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {abbPartnershipProof.map((item) => (
                <div
                  key={item.label}
                  className="border border-text-primary/10 bg-background px-4 py-2.5"
                >
                  <p className="font-display text-lg font-bold tracking-tight text-text-primary">
                    {item.value}
                  </p>
                  <p className="type-body-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-px border border-text-primary/10 bg-text-primary/10 sm:grid-cols-3">
              {abbPartnershipHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex flex-col gap-1.5 bg-surface-muted px-4 py-4"
                >
                  <p className="text-sm font-semibold tracking-tight text-text-primary">
                    {highlight.title}
                  </p>
                  <p className="type-body-sm leading-snug">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="md:h-full">
            <PixelFrame className="md:h-full">
              <div className="relative aspect-4/3 w-full md:aspect-auto md:h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </PixelFrame>
          </FadeIn>
        </div>

        <FadeIn className="mt-14 border-t border-dashed border-text-primary/10 pt-10">
          <p className="type-eyebrow mb-5">ABB & industry coverage</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
            {abbPressLinks.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-8"
              >
                <PixelFrame label={article.source} labelPosition="overlay">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 260px"
                      quality={92}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </PixelFrame>
                <p className="px-0.5 text-sm font-medium leading-snug text-text-primary transition-colors group-hover:text-text-primary/80">
                  <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-text-primary/35">
                    {article.title}
                  </span>
                  <span
                    aria-hidden
                    className="ml-1 inline-block text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-text-primary"
                  >
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
