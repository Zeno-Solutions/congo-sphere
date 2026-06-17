import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
