import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CHEMSENSE",
    template: "%s | CHEMSENSE",
  },
  description:
    "Platform pembelajaran kimia multisensori berbasis IoT untuk peserta didik disleksia.",

  keywords: [
    "CHEMSENSE",
    "Kimia",
    "Disleksia",
    "IoT",
    "Education",
    "STEM",
    "Learning",
  ],

  authors: [
    {
      name: "CHEMSENSE Team",
    },
  ],

  creator: "CHEMSENSE Team",

  openGraph: {
    title: "CHEMSENSE",
    description:
      "Platform pembelajaran kimia multisensori berbasis IoT untuk peserta didik disleksia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={lexend.className}>
        {children}
      </body>
    </html>
  );
}