import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boring Combinator - Stress-Test Your Startup Idea in 30 Minutes",
  description:
    "An AI VC debates your idea for 3 rounds. Survive the challenge, get a live landing page with waitlist signup, and find out if real people actually want what you're building.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
