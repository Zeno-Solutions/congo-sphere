import Footer from "@/components/Footer/Footer";
import BottomNav from "@/components/BottomNav/BottomNav";

export const metadata = {
    title: 'FAQ - Congo Sphere',
    description: 'Questions fréquemment posées sur Congo Sphere. Trouvez des réponses à vos questions.',
}

export default function FAQ() {
    return (
        <>
            <section className="relative min-h-screen bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
                <div className="hero-glow top-1/4 left-1/4"></div>
                <div className="hero-glow top-1/3 right-1/4" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-faq" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-faq)" />
                    </svg>
                </div>
                <section className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">FAQ</h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-8">Réponses à vos questions les plus fréquentes.</p>
                </section>
            </section>
            <main className="bg-slate-950 text-white px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquemment Posées</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Comment créer un compte ?</h3>
                            <p className="text-gray-400">Cliquez sur "Register" dans la barre de navigation et remplissez le formulaire.</p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Comment organiser un événement ?</h3>
                            <p className="text-gray-400">Connectez-vous à votre compte et utilisez notre outil d'organisation d'événements.</p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Les événements sont-ils gratuits ?</h3>
                            <p className="text-gray-400">Certains événements sont gratuits, d'autres payants. Vérifiez les détails de chaque événement.</p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Comment contacter le support ?</h3>
                            <p className="text-gray-400">Utilisez le formulaire de contact ou envoyez un email à support@congosphere.com.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
            <BottomNav />
        </>
    );
}