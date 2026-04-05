import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boring Combinator — Stress-Test Your Startup Idea in 30 Minutes",
  description:
    "An AI VC debates your startup idea across 3 rounds, then builds you a live landing page with waitlist signup. Find out if people want what you're building before you write a single line of code.",
  openGraph: {
    title: "Boring Combinator — Stress-Test Your Startup Idea in 30 Minutes",
    description:
      "An AI VC debates your startup idea across 3 rounds, then builds you a live landing page with waitlist signup. Find out if people want what you're building before you write a single line of code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}