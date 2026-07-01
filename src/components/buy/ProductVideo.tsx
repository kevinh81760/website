import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { siteConfig } from "@/lib/siteConfig";

export function ProductVideo() {
  return (
    <section className="section-shell">
      <div className="mx-auto flex w-full max-w-[770px] flex-col gap-8">
        <FadeIn className="w-full">
          <div className="flex w-full flex-col gap-4">
            <h2 className="type-heading-xl text-text-primary">
              See BurgerBots in action.
            </h2>
            <div className="type-body-lg flex w-full flex-col gap-4">
              <p>
                Consistent portions, consistent speed, consistent quality on every
                order. The chef cooks. The robot assembles. You eat.
              </p>
              <p>
                Come see it for yourself at our flagship, 160 W Main Street in Los
                Gatos, home to Breaking Dawn Brunch and First Born Los Gatos.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="w-full">
          <PixelFrame className="w-full">
            <div className="relative aspect-video w-full">
              <VideoEmbed
                src={siteConfig.demoVideoUrl}
                title="BurgerBots in action"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </PixelFrame>
        </FadeIn>
      </div>
    </section>
  );
}
