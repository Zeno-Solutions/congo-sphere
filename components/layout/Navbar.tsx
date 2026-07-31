"use client";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Contenaire from "../Contenaire";
import Auths from "@/app/(pages)/(users)/libs/Auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const isPathActive = (href: string) => {
    if (href === "/") {
      return path === "/";
    }

    return path.startsWith(href);
  };

  const Islogin = Auths();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/", path: "/" },
    { name: "Events", href: "/events", path: "/events" },
    { name: "About", href: "/about", path: "/about" },
    { name: "FAQ", href: "/faq", path: "/faq" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 left-0 z-100 flex items-center">
      <Contenaire className="flex items-center max-h-18  bg-slate-950/50 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
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
                    className={
                      isPathActive(item.path)
                        ? ` text-sm font-bold text-purple-600 transition-colors`
                        : "text-sm font-bold text-slate-400 transition-colors hover:text-white"
                    }
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200  hover:bg-white/10 hover:text-white lg:hidden transition"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border  border-purple-300/20 rounded-xl bg-slate-950 w-80 absolute right-5 top-20 px-4 py-4 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-2">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className={` block rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 ${isPathActive(item.path) ? "shadow-[0_0_5px_rgba(204,151,255,0.4)" : ""}]`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex border-t border-white/10 pt-4">
              {Islogin ? (
                <div className="flex justify-evenly rounded-full w-full">
                  <Link
                    href="/user-profile"
                    className="flex justify-evenly gap-4 items-center px-2 rounded-full border border-white/10 text-sm font-semibold text-on-surface transition hover:bg-white/5 sm:inline-flex"
                    onClick={closeMenu}
                  >
                    <Image
                      src="/user.jpg"
                      alt="Profil"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <span>OYAGA</span>
                  </Link>
                  <button className="flex items-center justify-center px-8 py-3 border border-outline-variant/30 hover:bg-white/5 rounded-full text-error font-bold text-sm transition-colors">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="w-full flex justify-evenly items-center px-2 sm:flex lg:px-10">
                  <Link
                    href="/login"
                    className="cursor-pointer rounded-full px-8 py-2.5 text-sm font-bold text-white shadow-[0_0_2px_rgba(204,151,255,0.4)] active:scale-95"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_7px_rgba(204,151,255,0.4)] transition-all hover:shadow-[0_0_9px_rgba(204,151,255,0.6)] active:scale-95"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </Contenaire>
    </nav>
  );
}
