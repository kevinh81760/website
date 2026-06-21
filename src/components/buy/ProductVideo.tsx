import { FadeIn } from "@/components/shared/FadeIn";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { siteConfig } from "@/lib/siteConfig";

export function ProductVideo() {
  return (
    <section className="section-shell">
      <div className="mx-auto flex max-w-[780px] flex-col gap-8">
        <FadeIn>
          <h2 className="type-heading-xl text-center text-text-primary">
            See B.O.B. on the line
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="type-body-lg text-center">
            Consistent portions, consistent speed, consistent quality on every
            order. The repetitive work gets handled so your team can focus on
            guests.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <VideoEmbed
            src={siteConfig.demoVideoUrl}
            title="BurgerBots in action"
            className="aspect-video w-full overflow-hidden shadow-xl"
          />
        </FadeIn>
      </div>
    </section>
  );
}
