import { FadeIn } from "@/components/shared/FadeIn";

export function InspiredByHumans() {
  return (
    <section className="page-x section-y-md border-y border-dashed border-text-primary/10 bg-background">
      <FadeIn>
        <figure className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-10 h-px w-16 bg-text-primary/15" />

          <blockquote
            className="text-[1.375rem] leading-[1.7] text-text-primary md:text-[1.625rem] md:leading-[1.65]"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
          >
            <p className="italic">
              &ldquo;Side by side, not head to head.&rdquo;
            </p>
            <p className="mt-5 text-[1.0625rem] leading-[1.75] not-italic text-text-primary/85 md:text-lg">
              Our robots aren&apos;t here to replace humans. They work
              alongside our friendly staff to deliver a fun, interactive,{" "}
              <em>unforBOTable</em> dining experience that people of all ages
              will love.
            </p>
          </blockquote>

          <figcaption className="mt-10 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-text-secondary">
            Inspired by humans
          </figcaption>

          <div className="mx-auto mt-10 h-px w-16 bg-text-primary/15" />
        </figure>
      </FadeIn>
    </section>
  );
}
