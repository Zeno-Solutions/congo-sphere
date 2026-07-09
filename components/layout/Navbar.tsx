import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contenaire from "../Contenaire";

import Auths from "@/app/(pages)/(users)/libs/Auth";
export default function Navbar() {
  const Islogin = Auths();

  const menu = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0  left-0 z-100 ">
      <Contenaire className="bg-slate-950/50  max-h-18 flex backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
        <div className=" w-full flex justify-evenly items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={90}
                height={100}
                className="rounded-full "
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {menu.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-slate-400 font-bold text-sm transition-colors hover:text-white"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {(Islogin && (
            <div className="flex flex-wrap gap-3">
              <Link
                href="/user-profile"
                className="inline-flex items-center  rounded-full border border-white/10 text-sm font-semibold text-on-surface hover:bg-white/5 transition"
              >
                <Image
                  src="/user.jpg"
                  alt="Profil"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </Link>
            </div>
          )) || (
            <div className="flex items-center gap-4 px-10">
              <Link href="/login">
                <button className="text-slate-400 cursor-pointer font-bold font-label text-sm px-4 py-2 hover:text-white transition-all active:scale-95">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="text-white text-on-primary-fixed cursor-pointer font-bold font-label text-sm px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </Contenaire>
    </nav>
  );
}
