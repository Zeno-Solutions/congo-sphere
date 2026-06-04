import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, ChevronRight } from "lucide-react";
import Contenaire from "../Contenaire";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low/90 backdrop-blur-xl border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.25)] text-on-surface">
      <Contenaire className="px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-5">
            <div>
              <p className="text-2xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-headline">
                Congo Sphere
              </p>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                Une plateforme immersive pour découvrir, gérer et vivre les
                événements les plus captivants du Congo.
              </p>
            </div>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-500" />
                <span>Brazzaville, République du Congo</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-500" />
                <a
                  href="mailto:contact@congosphere.io"
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  contact@congosphere.io
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-on-surface text-purple-500 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {[
                { label: "Accueil", href: "/" },
                { label: "Événements", href: "/events" },
                { label: "Services", href: "/pages/services" },
                { label: "À propos", href: "/pages/about" },
                { label: "FAQ", href: "/pages/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-on-surface text-purple-500 mb-5">
              Ressources
            </h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {[
                { label: "Centre d'aide", href: "/pages/contact" },
                { label: "Sécurité", href: "/pages/about" },
                { label: "Politique de confidentialité", href: "/privacy" },
                { label: "Conditions générales", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-on-surface text-purple-500 mb-5">
                Newsletter
              </h3>
              <p className="text-sm leading-7 text-on-surface-variant">
                Recevez les dernières annonces d&apos;événements, exclusivités
                VIP et invitations premium.
              </p>
            </div>
            <form className="space-y-4">
              <label className="sr-only" htmlFor="footer-newsletter-email">
                Email
              </label>
              <div className="relative">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full rounded-2xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full  px-4 py-2 text-xs font-semibold text-on-primary-fixed shadow-[0_0_20px_rgba(204,151,255,0.4)]  cursor-pointer "
                >
                  S&apos;inscrire
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaFacebook, href: "https://facebook.com" },
                { icon: FaTwitter, href: "https://twitter.com" },
                { icon: FaYoutube, href: "https://youtube.com" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="flex h-10 w-10 text-purple-500 hover:text-purple-300  transition-colors items-center justify-center  text-on-surface"
                    aria-label="Lien réseau social"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" border-t border-white/10 pt-6 text-sm text-on-surface-variant flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Congo Sphere. Tous droits
            réservés.
          </p>
          <p>
            Conçu pour une expérience événementielle premium, fluide et
            sécurisée.
          </p>
        </div>
      </Contenaire>
    </footer>
  );
}
