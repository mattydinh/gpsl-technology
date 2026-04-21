import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GPSL — A diversified operating group.",
    template: "%s | GPSL",
  },
  description:
    "GPSL is a diversified operating group. We build, operate, and hold ventures across finance, trade, and food — and we ship the agentic software those ventures run on.",
  metadataBase: new URL("https://www.gpsl-ubo.com"),
  openGraph: {
    title: "GPSL — A diversified operating group.",
    description:
      "Operators and engineers, working on ventures we plan to hold for a long time.",
    url: "https://www.gpsl-ubo.com",
    siteName: "GPSL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} min-h-screen antialiased bg-surface flex flex-col`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
