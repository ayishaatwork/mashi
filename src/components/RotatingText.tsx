"use client";

import { useEffect, useState } from "react";

type RotatingTextProps = {
  lines: string[];
  targetSelector: string;
  className?: string;
};

export default function RotatingText({
  lines,
  targetSelector,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(targetSelector)
    );

    if (!items.length || !lines.length) return;

    const totalItems = items.length;
    const totalLines = lines.length;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const mosaicIndex = items.indexOf(entry.target as HTMLElement);
          if (mosaicIndex === -1) return;

          const mappedIndex = Math.round(
            (mosaicIndex / (totalItems - 1)) * (totalLines - 1)
          );

          setIndex(mappedIndex);
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [lines, targetSelector]);

  return (
    <div className={`rotating-text ${className}`} aria-live="polite">
      <span className="rotating-text__line">{lines[index]}</span>
    </div>
  );
}
