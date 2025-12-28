"use client";

import { useState, useRef, useEffect } from "react";

export default function SearchToggle() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div className={`search-wrapper ${open ? "open" : ""}`}>
      <button
        className="icon-button"
        aria-label="Search"
        onClick={() => setOpen((v) => !v)}
      >
        <img
          src="/icons/search.svg"
          alt="Search"
          className="nav-icon"
        />
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="search-input"
        onBlur={() => setOpen(false)}
      />
    </div>
  );
}

