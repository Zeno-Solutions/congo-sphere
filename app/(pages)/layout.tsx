import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Testnav from "@/components/layout/testnav";
import Footer from "@/components/layout/Footer/Footer";
import "../globals.css";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {" "}
      <Testnav />
      {children}
      <Footer />
    </div>
  );
}
