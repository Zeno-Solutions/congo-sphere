import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Geist } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
  description: "Discover events, festivals, and categories around you. Concerts, meetups, expositions — join a passionate community.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={` ${plusJakartaSans.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}