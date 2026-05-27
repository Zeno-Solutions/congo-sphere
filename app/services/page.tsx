import Footer from "@/components/Footer/Footer";
import BottomNav from "@/components/BottomNav/BottomNav";

export const metadata = {
  title: "Services - Congo Sphere",
  description:
    "Découvrez nos services pour organiser et découvrir des événements. Plateforme complète pour les organisateurs et participants.",
};

export default function Services() {
  return (
    <>
      <section className="relative min-h-screen bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
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
                id="grid-services"
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
            <rect width="100%" height="100%" fill="url(#grid-services)" />
          </svg>
        </div>
        <section className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Tout ce dont vous avez besoin pour vos événements.
          </p>
        </section>
      </section>
      <main className="bg-slate-950 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ce que nous offrons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Organisation d'Événements
              </h3>
              <p className="text-gray-400">
                Outils complets pour organiser vos événements en ligne et hors
                ligne.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Plateforme de Découverte
              </h3>
              <p className="text-gray-400">
                Découvrez et réservez des événements près de chez vous.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Communauté</h3>
              <p className="text-gray-400">
                Rejoignez une communauté active d'amateurs d'événements.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Billetterie</h3>
              <p className="text-gray-400">
                Système de billetterie intégré et sécurisé.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Marketing</h3>
              <p className="text-gray-400">
                Promouvez vos événements auprès d'une large audience.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-400">
                Assistance 24/7 pour tous vos besoins.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}
