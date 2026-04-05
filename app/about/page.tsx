import Footer from "@/components/Footer/Footer";
import BottomNav from "@/components/BottomNav/BottomNav";

export const metadata = {
    title: 'À propos - Congo Sphere',
    description: 'Découvrez l\'histoire et la mission de Congo Sphere. Une plateforme dédiée à la découverte d\'événements uniques près de chez vous.',
}

export default function About() {
    return (
        <>
            <section className="relative min-h-screen bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
                <div className="hero-glow top-1/4 left-1/4"></div>
                <div className="hero-glow top-1/3 right-1/4" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-about" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-about)" />
                    </svg>
                </div>
                <section className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">À propos de Congo Sphere</h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-8">Notre mission est de connecter les passionnés d'événements dans toute la région.</p>
                </section>
            </section>
            <main className="bg-slate-950 text-white px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
                    <p className="text-gray-300 mb-6">
                        Congo Sphere est née de la passion pour les événements culturels et communautaires. Nous croyons que chaque événement est une opportunité de découvrir, de se connecter et de grandir ensemble.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Notre plateforme rassemble des milliers d'utilisateurs à la recherche d'expériences uniques : concerts, expositions, meetups, festivals et bien plus encore.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Communauté</h3>
                            <p className="text-gray-400">Rejoignez une communauté vibrante d'amateurs d'événements.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Découverte</h3>
                            <p className="text-gray-400">Découvrez des événements uniques près de chez vous.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Connexion</h3>
                            <p className="text-gray-400">Connectez-vous avec des passionnés partageant vos intérêts.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
            <BottomNav />
        </>
    );
}