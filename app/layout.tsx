import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { geist } from "@/fonts/font";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Congo Sphere - Discover Events",
  description:
    "Discover events, festivals, and categories around you. Concerts, meetups, expositions — join a passionate community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`bg-slate-950 antialiased`}>{children}</body>
    </html>
  );
}
