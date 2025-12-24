"use client";

import { useEffect, useState } from "react";

type RotatingTextProps = {
  lines: string[];      // array of strings to cycle
  interval?: number;    // ms between changes (default 3000)
  className?: string;
};

export default function RotatingText({
  lines,
  interval = 3000,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!lines || lines.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, interval);
    return () => clearInterval(id);
  }, [lines, interval]);

  // Basic fade transition using CSS class (we'll add CSS next)
  return (
    <div className={`rotating-text ${className}`} aria-live="polite">
      <span className="rotating-text__line">{lines[index]}</span>
    </div>
  );
}
