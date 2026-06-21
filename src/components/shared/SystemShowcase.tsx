"use client";

import { useState } from "react";
import Image from "next/image";
import { showcaseModules } from "@/lib/systemModules";

export function SystemShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1200px] mt-8 mb-8">
      <div className="flex flex-col">
        {showcaseModules.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            className="text-left border-t border-border-subtle py-5 group transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`text-xs font-medium mt-1 transition-colors duration-200 ${
                    active === i ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    active === i ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {item.name}
                </span>
              </div>
              {active === i && (
                <span className="text-text-primary text-lg">→</span>
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                active === i ? "max-h-24 mt-3" : "max-h-0"
              }`}
            >
              <p className="type-body-sm pl-8">{item.description}</p>
            </div>
          </button>
        ))}
        <div className="border-t border-border-subtle" />
      </div>

      <div className="relative aspect-square overflow-hidden shadow-lg">
        {showcaseModules.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
