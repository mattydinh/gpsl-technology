import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GPSL – Technology",
    template: "%s | GPSL Technology",
  },
  description:
    "GPSL Technology builds modern, scalable business applications powered by AI. Explore our team, projects, and technology stack.",
  openGraph: {
    title: "GPSL – Technology",
    description:
      "Modern technology and AI solutions for real business problems.",
    siteName: "GPSL Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPSL – Technology",
    description:
      "Modern technology and AI solutions for real business problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-surface flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
