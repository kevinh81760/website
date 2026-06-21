import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { menuHighlights } from "@/lib/menuHighlights";

export function MenuHighlights() {
  return (
    <section className="page-x border-t border-dashed border-text-primary/10 bg-background py-[calc(var(--spacing-section-md)+0.375in)]">
      <FadeIn className="mb-12 grid grid-cols-1 gap-5 md:mb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-end md:gap-x-12 md:gap-y-6 lg:gap-x-16">
        <div>
          <p className="type-eyebrow">The menu</p>
          <h2 className="type-heading-xl mt-2 text-text-primary">
            What to order when you visit.
          </h2>
        </div>
        <p className="type-body-lg max-w-md md:pb-0.5 lg:justify-self-end">
          Every item built to spec by B.O.B. — same love, every time.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
        {menuHighlights.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08} className="flex flex-col gap-5">
            <PixelFrame label={item.name} labelPosition="overlay">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </PixelFrame>

            <div className="flex flex-col gap-3 px-0.5">
              <p className="type-eyebrow">{item.kicker}</p>
              <p className="type-body leading-snug text-text-primary">
                {item.description}
              </p>
              <p className="type-body-sm">{item.note}</p>
            </div>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#visit"
                className="btn-primary-sm flex-1 justify-center sm:text-sm"
              >
                {item.ctaLabel}
              </Link>
              <Link
                href="/buy"
                className="btn-outline-sm flex-1 justify-center sm:text-sm"
              >
                How it&apos;s built →
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
