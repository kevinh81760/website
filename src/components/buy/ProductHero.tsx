import Image from "next/image";
import Link from "next/link";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function ProductHero() {
  return (
    <section className="relative w-full min-h-[min(85vh,720px)]">
      <Image
        src="/technology.png"
        alt="BurgerBot assembling orders in a kitchen"
        fill
        className="object-cover object-[center_40%]"
        priority
      />
      <div className="absolute inset-0 bg-surface-dark/40" />
      <div
        className="absolute inset-0 flex flex-col justify-end page-x pb-12"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX }}
      >
        <p className="type-eyebrow-on-dark mb-4">Own a BurgerBot</p>
        <h1 className="type-display-lg mb-4 max-w-3xl text-text-on-dark">
          Put B.O.B. in your kitchen.
        </h1>
        <p className="type-body-lg mb-8 max-w-xl text-text-on-dark-subtle">
          BurgerBots slots into the kitchen you already have. Same-day setup,
          menu training from live demonstrations, and consistent assembly from
          the first order.
        </p>
        <Link
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-fit"
        >
          Book a call →
        </Link>
      </div>
    </section>
  );
}
