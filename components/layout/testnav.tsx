"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Contenaire from "../Contenaire";

import Auths from "@/app/(pages)/(users)/libs/Auth";

export default function Testnav() {
  const Islogin = Auths();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 left-0 z-[100]">
      <Contenaire className="flex max-h-18 flex-col bg-slate-950/50 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:justify-evenly">
          <div className="flex items-center gap-3">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={90}
                height={100}
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-sm font-bold text-slate-400 transition-colors hover:text-white"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 bg-red-300">
            {Islogin ? (
              <Link
                href="/user-profile"
                className="hidden items-center rounded-full border border-white/10 text-sm font-semibold text-on-surface transition hover:bg-white/5 sm:inline-flex"
                onClick={closeMenu}
              >
                <Image
                  src="/user.jpg"
                  alt="Profil"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </Link>
            ) : (
              <div className="hidden items-center gap-4 px-2 sm:flex lg:px-10">
                <Link
                  href="/login"
                  className="cursor-pointer rounded-full px-4 py-2 text-sm font-bold text-slate-400 transition-all hover:text-white active:scale-95"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(204,151,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] active:scale-95"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white lg:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-green-500 px-4 py-4 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-2">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              {Islogin ? (
                <Link
                  href="/user-profile"
                  className="rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="rounded-xl bg-violet-500/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-violet-500/30"
                    onClick={closeMenu}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Contenaire>
    </nav>
  );
}
