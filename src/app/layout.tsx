import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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

// Sets data-theme on <html> before hydration — prevents FOUC and
// respects either saved choice or the OS preference.
const themeInit = `
(function(){try{
  var stored = localStorage.getItem("gpsl-theme");
  var prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored === "light" || stored === "dark" ? stored : (prefers ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${fraunces.variable} ${figtree.variable} font-sans min-h-screen antialiased flex flex-col`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
