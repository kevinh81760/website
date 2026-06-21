import React, { type ReactNode } from "react";

type PixelFrameProps = {
  label?: string;
  labelPosition?: "below" | "overlay";
  className?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function PixelFrame({
  label,
  labelPosition = "below",
  className = "",
  children,
  footer,
}: PixelFrameProps) {
  const useOverlay = labelPosition === "overlay" && (label || footer);

  return (
    <div
      className={`flex min-h-0 flex-col ${labelPosition === "below" ? "gap-3" : ""} ${className}`}
    >
      <div className="pixel-frame-border relative min-h-0 flex-1 bg-text-primary p-1">
        <div className="pixel-frame-accent-corners relative h-full overflow-hidden bg-background">
          <div className="relative h-full w-full overflow-hidden">
            {children}
            {useOverlay && (
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 bg-linear-to-t from-[var(--bb-color-overlay-gradient-start)] via-[var(--bb-color-overlay-gradient-middle)] to-transparent px-4 pt-12 pb-4">
                {label && (
                  <p className="text-sm font-semibold tracking-wide text-text-on-dark md:text-base">
                    {label}
                  </p>
                )}
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
      {label && labelPosition === "below" && (
        <p className="text-sm font-medium text-text-secondary">{label}</p>
      )}
      {footer && labelPosition !== "overlay" && footer}
    </div>
  );
}
