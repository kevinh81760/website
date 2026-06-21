import Image from "next/image";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  imageClassName?: string;
};

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  imageClassName = "object-cover",
}: PageHeroProps) {
  return (
    <div className="relative w-full h-[33vh] min-h-[500px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className={imageClassName}
        priority
      />
      <div className="absolute inset-0 bg-surface-dark/30" />
      <div className="page-x absolute inset-0 flex flex-col justify-end pb-10 md:pb-12">
        <p className="type-eyebrow-on-dark mb-3 md:mb-4 md:text-sm">
          {eyebrow}
        </p>
        <h1 className="type-display-sm font-semibold md:font-bold text-text-on-dark">
          {title}
        </h1>
      </div>
    </div>
  );
}
