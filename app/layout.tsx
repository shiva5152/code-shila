import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeShila Technologies | Solutions That Scale",
  description:
    "Custom software development, web apps, mobile apps, and AI solutions. Built by Shiva Shah — software engineer with 3+ years of experience at Shiprocket.",
  keywords: [
    "custom software development",
    "web app development",
    "mobile app development",
    "AI applications",
    "Next.js developer",
    "React developer",
    "freelance software engineer",
    "CodeShila",
  ],
  authors: [{ name: "Shiva Shah" }],
  openGraph: {
    title: "CodeShila Technologies | Solutions That Scale",
    description:
      "Custom software, web apps, mobile apps & AI solutions — built with precision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeShila Technologies | Solutions That Scale",
    description:
      "Custom software, web apps, mobile apps & AI solutions — built with precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
