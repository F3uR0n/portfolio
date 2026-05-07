import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhan Sadik — CS Student & Builder",
  description:
    "Portfolio of Farhan Sadik (F3uR0n) — Computer Science student at BRAC University. Building AI/ML systems, 3D games, and modern web applications.",
  keywords: ["Farhan Sadik", "F3uR0n", "Portfolio", "Computer Science", "BRAC University", "Machine Learning", "OpenGL"],
  authors: [{ name: "Farhan Sadik", url: "https://github.com/F3uR0n" }],
  openGraph: {
    title: "Farhan Sadik — CS Student & Builder",
    description: "Portfolio of Farhan Sadik — CS @ BRAC University. AI/ML, 3D games, and modern web.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Sadik — CS Student & Builder",
    description: "Portfolio of Farhan Sadik — CS @ BRAC University.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceMono.variable} ${syne.variable} antialiased bg-[#0a0a0a] text-[#e0e0e0]`}>
        {children}
      </body>
    </html>
  );
}
