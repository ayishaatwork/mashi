import type { Metadata } from "next";
import "./globals.css";
import "./css/detail.css";
import "./css/store.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Mashistore",
  description: "Mashistore - a simple store built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <SiteHeader />
        <main className="site-main">{children}</main>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}


