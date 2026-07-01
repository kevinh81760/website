import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const { restaurant } = siteConfig;

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-background">
      <div className="page-x relative z-10 flex w-full -translate-y-[0.35in] items-center justify-between gap-12 py-16 max-md:flex-col max-md:items-start max-md:gap-6">
        <div className="relative z-10 flex max-w-2xl flex-col items-start gap-5">
          <p className="type-eyebrow">Los Gatos, CA · Open Tues–Sun</p>

          <h1 className="type-display-xl">
            <span className="block text-text-primary">Made by robots.</span>
            <span className="block text-brand">Loved by humans.</span>
          </h1>

          <p className="type-body-lg">
            B.O.B. grinds, grills, and garnishes every burger from scratch. Our
            humans bring it to your table.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#visit" className="btn-primary">
              Try a Burger →
            </a>
            <Link href="/buy" className="btn-outline">
              Own a BurgerBot
            </Link>
            <Link href="/investors" className="btn-outline">
              Investor Material
            </Link>
          </div>
        </div>

        <div
          aria-hidden
          className="relative flex h-[min(38vh,280px)] shrink-0 -translate-x-8 -translate-y-4 items-center justify-center max-md:h-[min(28vh,200px)] max-md:-translate-x-4 max-md:-translate-y-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            className="pointer-events-none h-full w-auto select-none invert scale-[1.65] max-md:scale-[1.42]"
          />
        </div>
      </div>

      <p className="type-eyebrow absolute right-[var(--spacing-page-x)] bottom-[calc(2.5rem+0.25in)] text-right text-[0.875rem]">
        <span className="flex items-center justify-end gap-2 cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          Breaking Dawn
          <Image
            src={restaurant.logo}
            alt=""
            width={20}
            height={24}
            className="h-5 w-auto shrink-0"
          />
        </span>
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          160 W Main St, 95030
        </span>
      </p>
    </section>
  );
}
