import BottomNav from "@/components/BottomNav/BottomNav";
import { Link } from "lucide-react";

export const metadata = {
  title: "À propos - Congo Sphere",
  description:
    "Découvrez l'histoire, la mission et les valeurs de Congo Sphere, la plateforme événementielle du Congo.",
};

export default function About() {
  return (
    <>
      <section className="relative min-h-[75vh] bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
        <div className="hero-glow top-1/4 left-1/4"></div>
        <div
          className="hero-glow top-1/3 right-1/4"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-about"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-purple-300 mb-4">
            Congo Sphere
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Nous connectons les expériences, la culture et les communautés.
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-xl text-slate-300 leading-8">
            Congo Sphere est votre passerelle vers les meilleurs événements
            culturels, musicaux et technologiques du pays. Chaque expérience est
            conçue pour inspirer, rassembler et faire vibrer les talents locaux.
          </p>
        </div>
      </section>

      <main className="bg-slate-950 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.4em] text-purple-300">
                Notre histoire
              </span>
              <h2 className="text-4xl font-bold">
                Née de la passion, portée par la communauté.
              </h2>
              <p className="text-slate-300 leading-8">
                Congo Sphere a été fondée pour valoriser les talents locaux et
                offrir une plateforme où chaque événement devient une
                opportunité de découverte. Nous croyons que les rencontres
                culturelles et artistiques construisent des liens durables.
              </p>
              <p className="text-slate-300 leading-8">
                Notre mission est simple : rassembler les passionnés autour
                d&apo bs;événements uniques, accessibles et inspirants, tout en
                soutenant les créateurs, les organisateurs et les communautés.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-4">
                  Vision
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  Une scène vibrante pour tous
                </h3>
                <p className="text-slate-300 leading-7">
                  Faire de Congo Sphere la référence pour découvrir, partager et
                  vivre des expériences inoubliables, partout en RDC.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-4">
                  Mission
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  Offrir une expérience immersive
                </h3>
                <p className="text-slate-300 leading-7">
                  Créer un espace où trouver des événements, se connecter avec
                  des communautés et explorer de nouvelles passions devient
                  naturel.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Communauté",
                description:
                  "Un réseau d’amateurs, d’artistes et d’organisateurs connecté par des expériences fortes.",
              },
              {
                title: "Découverte",
                description:
                  "Des événements triés sur le volet pour explorer la culture, la musique et l’innovation.",
              },
              {
                title: "Impact",
                description:
                  "Soutenir les créateurs locaux et favoriser les rencontres qui font grandir.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="bg-[#111228] rounded-[32px] border border-white/10 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-purple-300">
                  Nos chiffres
                </p>
                <h3 className="text-4xl font-bold">
                  Réussir chaque expérience
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
                  <p className="text-3xl font-extrabold text-white">250+</p>
                  <p className="text-slate-400 mt-2">Événements sélectionnés</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
                  <p className="text-3xl font-extrabold text-white">10k+</p>
                  <p className="text-slate-400 mt-2">Utilisateurs engagés</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
                  <p className="text-3xl font-extrabold text-white">35</p>
                  <p className="text-slate-400 mt-2">Villes couvertes</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
                  <p className="text-3xl font-extrabold text-white">99%</p>
                  <p className="text-slate-400 mt-2">Satisfaction communauté</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez-nous dans l&apos;aventure Congo Sphere
            </h2>
            <p className="text-slate-300 mb-8">
              Que vous soyez organisateur, artiste ou passionné, nous
              construisons ensemble une scène événementielle plus vivante.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-8 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(204,151,255,0.35)] hover:bg-purple-400 transition-all"
              >
                Voir les événements
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white hover:border-purple-300 hover:text-purple-200 transition-all"
              >
                Contactez-nous
              </Link>
            </div>
          </section>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
