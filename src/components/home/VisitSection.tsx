import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { VisitFAQ } from "@/components/home/VisitFAQ";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

const { restaurant } = siteConfig;

export function VisitSection() {
  return (
    <section
      id="visit"
      className="page-x border-t border-dashed border-text-primary/10 bg-surface-muted py-[calc(var(--spacing-section-md)+0.45in)]"
      style={{ scrollMarginTop: NAV_BAR_HEIGHT_PX }}
    >
      <div className="mx-auto flex max-w-5xl items-stretch gap-5 md:gap-16">
        <FadeIn className="flex w-44 shrink-0 md:w-[26rem]">
          <PixelFrame
            label="Breaking Dawn · Los Gatos"
            labelPosition="overlay"
            className="h-full flex-1"
          >
            <div className="relative h-full min-h-0 w-full">
              <Image
                src={restaurant.visitImage}
                alt="Fried chicken sandwich and fries at Breaking Dawn in Los Gatos"
                fill
                sizes="(max-width: 768px) 44vw, 26rem"
                className="object-cover"
              />
            </div>
          </PixelFrame>
        </FadeIn>

        <FadeIn delay={0.1} className="flex min-w-0 flex-1 flex-col gap-7 md:gap-8">
          <div>
            <p className="type-eyebrow">Swing By</p>
            <h2 className="type-heading-xl mt-3 text-text-primary">
              Servin&apos; Burgs
            </h2>
            <div className="mt-5 flex flex-col gap-1 text-text-primary">
              {restaurant.hours.map((block) => (
                <div key={block.days}>
                  <p className="font-semibold">{block.days}</p>
                  <p className="text-text-secondary">{block.time}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-text-secondary">
              {restaurant.address}, {restaurant.city}
            </p>
            <p className="type-body-lg mt-5">
              One kitchen, two concepts. B.O.B. runs the line for both: Breaking
              Dawn Brunch in the morning and First Born Los Gatos for happy hour
              and dinner.
            </p>
            <p className="type-body-lg mt-4">
              Walk in, grab a seat, and watch the line. Our chefs cook every
              patty. B.O.B. handles the garnish. Our servers bring it to your
              table.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={restaurant.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reserve at Breaking Dawn Brunch on Yelp →
            </a>
            <a
              href={restaurant.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Reserve at First Born Los Gatos on OpenTable →
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-5xl">
        <VisitFAQ />
      </div>
    </section>
  );
}
