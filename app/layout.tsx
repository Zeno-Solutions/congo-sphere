import type { Metadata } from "next";

import "./globals.css";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { geist } from "@/fonts/font";

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
