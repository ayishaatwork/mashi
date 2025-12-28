"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

function scrollAllParentsToTop(element: HTMLElement | null) {
  let el: HTMLElement | null = element;

  while (el) {
    if (el.scrollTop > 0) {
      el.scrollTop = 0;
    }
    el = el.parentElement;
  }

  // Also ensure document-level scroll is reset
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    scrollAllParentsToTop(document.querySelector("main"));
  }, []);

  return (
    <main className={styles.legalPage}>
      <div className={styles.legalGrid}>{children}</div>
    </main>
  );
}
