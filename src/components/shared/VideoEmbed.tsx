"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export function VideoEmbed({ src, title, className = "" }: Props) {
  const [active, setActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
      {!active && (
        <div
          ref={overlayRef}
          className="absolute inset-0 cursor-pointer"
          onClick={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
      )}
    </div>
  );
}
