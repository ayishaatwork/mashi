"use client";

import { useState } from "react";
import Link from "next/link";
import SearchToggle from "@/components/SearchToggle";
import CartIcon from "@/components/CartIcon";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        {/* LEFT */}
        <div className="site-nav-left">
          <div className="site-logo-button">
            {/* Desktop: normal link */}
            <Link href="/" className="logo-desktop">
              <img src="/icons/logo.svg" alt="Mashi logo" />
            </Link>

            {/* Mobile: menu toggle */}
            <button
              className="logo-mobile"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <img src="/icons/headerlogo.png" alt="Mashi logo" />
            </button>
          </div>

          {/* Desktop links */}
          <ul className="site-nav-links">
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/collective">Collective</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="site-nav-right">
          <SearchToggle />
          <CartIcon />
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* TOP BAR */}
        <div className="mobile-menu-top">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <img src="/icons/close.png" alt="Mashi logo" />
          </button>
        </div>

        {/* PRIMARY LINKS */}
        <div className="mobile-menu-main">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link href="/store" onClick={() => setMenuOpen(false)}>
            STORE
          </Link>
          <Link href="/collective" onClick={() => setMenuOpen(false)}>
            COLLECTIVE
          </Link>
        </div>

        {/* SPACER */}
        <div className="mobile-menu-spacer" />

        {/* FOOTER LINKS */}
        <div className="mobile-menu-footer">
          <div className="footer-grid">
            <Link href="/">Home</Link>
            <Link href="/shipping-and-returns">Shipping and returns</Link>

            <Link href="/store">Store</Link>
            <Link href="/payment-information">Payment Information</Link>

            <Link href="/collective">Collective</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>

            <Link href="/contact">Contact us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footer-brand">
            <img src="/icons/mashiwhite.png" alt="Mashi logo" />
            <p>© 2025 MASHI, Inc.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

