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
    default: "GPSL — The discipline of human logistics.",
    template: "%s | GPSL",
  },
  description:
    "GPSL is the pathway between intent and execution. An operating discipline for the people, coordination, timing, and software that make transformation actually happen.",
  metadataBase: new URL("https://www.gpsl-ubo.com"),
  openGraph: {
    title: "GPSL — The discipline of human logistics.",
    description:
      "An operating discipline for the people, coordination, timing, and software that turn intent into work that actually runs.",
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
