import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Review",
  description: "Situs untuk membaca ulasan berbagai buku terbaik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation */}
        <nav style={{ backgroundColor: "#f3f4f6", padding: "1rem" }}>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <Link href="/profil">informasi</Link>
            </li>
            <li>
              <Link href="/about">Tentang</Link>
            </li>
          </ul>
        </nav>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
