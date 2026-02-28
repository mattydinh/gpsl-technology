import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "GPSL – Technology",
  description: "Technology overview, team, projects, and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-surface">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
