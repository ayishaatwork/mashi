"use client"

import RotatingText from "@/components/RotatingText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home-page">
        {/* HERO */}
        <section className="hero">
          <img
            src="/images/hero-logo.png"
            alt="Mashistore"
            className="hero-logo"
          />
        </section>

        {/* INTRO */}
        <section className="intro">
          <div className="intro-left">
            <p className="intro-body">
              MASHI BEGAN AS A SIMPLE IDEA — TO CREATE SKETCHBOOKS THAT ARTISTS
              WOULD TRULY LOVE TO USE. AS ARTISTS OURSELVES, WE OFTEN SEARCHED
              FOR BOOKS THAT FELT RIGHT IN OUR HANDS — STURDY ENOUGH TO TRAVEL
              WITH, YET SENSITIVE TO THE RHYTHM OF DRAWING. WHAT STARTED AS A
              PERSONAL PURSUIT SLOWLY GREW INTO MASHI, A SMALL, DESIGN-LED BRAND
              BUILT AROUND OUR LOVE FOR PAPER, CRAFT, AND THE CREATIVE PROCESS.
            </p>
          </div>

          <div className="intro-right">
            <p className="intro-body">
              EVERY MASHI BOOK IS HANDCRAFTED IN SMALL BATCHES, MADE
              THOUGHTFULLY AND WITH CARE. WE PAY ATTENTION TO THE LITTLE DETAILS
              — THE TEXTURE OF THE PAPER, THE WAY IT OPENS FLAT, HOW IT FEELS TO
              DRAW ON, AND HOW IT AGES BEAUTIFULLY OVER TIME.
            </p>
            <p className="intro-body">
              OUR BOOKS ARE MADE FOR ARTISTS, BY ARTISTS — FOR THOSE WHO LOVE TO
              DRAW ON THE GO, WHO FILL PAGES WITH IDEAS, AND WHO FIND JOY IN THE
              IMPERFECT, TACTILE CHARM OF HANDMADE THINGS.
            </p>
          </div>
        </section>

        {/* MOSAIC */}
        <section className="mosaic">
          <RotatingText
            lines={[
              "create\nwith mashi",
              "for your\neveryday sketching",
              "a book that\ntravels with you",
              "hand crafted\nby artisans",
              "For artist\non the go",
            ]}
            targetSelector=".mosaic-item"
            className="mosaic-overlay-text"
          />

          <div className="mosaic-item m1 align-right">
            <img src="/images/mosaic1.jpg" alt="Coptic Bound detail" />
          </div>
          <div className="mosaic-item m2 align-left">
            <img src="/images/mosaic2.png" alt="Coptic Bound detail" />
          </div>
          <div className="mosaic-item m3 align-right">
            <img src="/images/mosaic3.JPG" alt="Coptic Bound detail" />
          </div>
          <div className="mosaic-item m4 align-left">
            <img src="/images/mosaic4.jpg" alt="Case Bound detail" />
          </div>
          <div className="mosaic-item m5 align-right">
            <img src="/images/mosaic5.JPG" alt="Field Book detail" />
          </div>
          <div className="mosaic-item m6 align-left">
            <img src="/images/mosaic6.JPG" alt="Rough Pad detail" />
          </div>
          <div className="mosaic-item m7 align-right">
            <img src="/images/mosaic7.JPG" alt="Coptic Bound detail" />
          </div>
          <div className="mosaic-item m8 align-left">
            <img src="/images/mosaic8.jpg" alt="Coptic Bound detail" />
          </div>
        </section>
      </main>

      {/* FOOTER — HOME ONLY */}
      <footer className="site-footer">
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

        <div className="footer-copyright">© 2025 Mashi, Inc.</div>
      </footer>
    </>
  );
}


