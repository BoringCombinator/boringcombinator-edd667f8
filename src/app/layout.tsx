import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boring Combinator — Stress-Test Your Startup Idea in 30 Minutes",
  description:
    "An AI VC debates your startup idea for 3 rounds, then builds you a live landing page with waitlist signup. Free to pitch. $29 to launch. No code needed.",
  openGraph: {
    title: "Boring Combinator — Stress-Test Your Startup Idea in 30 Minutes",
    description:
      "An AI VC debates your startup idea for 3 rounds, then builds you a live landing page with waitlist signup. Free to pitch. $29 to launch. No code needed.",
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
      <body
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}