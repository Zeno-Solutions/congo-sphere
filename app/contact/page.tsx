import BottomNav from "@/components/BottomNav/BottomNav";

export const metadata = {
    title: 'Contact - Congo Sphere',
    description: 'Contactez Congo Sphere pour toute question, suggestion ou partenariat.',
}

export default function Contact() {
    return (
        <>
            <section className="relative min-h-[70vh] bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
                <div className="hero-glow top-1/4 left-1/4"></div>
                <div className="hero-glow top-1/3 right-1/4" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-contact" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-contact)" />
                    </svg>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <p className="uppercase tracking-[0.4em] text-sm text-purple-300 mb-4">Contact</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">Besoin d'aide ? Nous sommes là pour vous.</h1>
                    <p className="mx-auto max-w-3xl text-base md:text-xl text-slate-300 leading-8">Posez-nous vos questions, partagez vos idées ou planifiez une collaboration avec notre équipe Congo Sphere.</p>
                </div>
            </section>

            <main className="bg-slate-950 text-white px-4 py-16">
                <div className="max-w-6xl mx-auto space-y-16">
                    <section className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
                            <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
                            <p className="text-slate-300 leading-8 mb-8">Pour toute question sur les événements, les partenariats ou votre expérience sur Congo Sphere, notre équipe est prête à vous répondre rapidement.</p>
                            <div className="space-y-6">
                                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                                    <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">Email</p>
                                    <p className="text-white font-semibold">contact@congosphere.com</p>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                                    <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">Téléphone</p>
                                    <p className="text-white font-semibold">+243 815 000 000</p>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                                    <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">Adresse</p>
                                    <p className="text-white font-semibold">Kinshasa, République Démocratique du Congo</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
                            <h2 className="text-3xl font-bold mb-4">Envoyez-nous un message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Nom complet</label>
                                    <input type="text" placeholder="Votre nom" className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Adresse email</label>
                                    <input type="email" placeholder="vous@example.com" className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Sujet</label>
                                    <input type="text" placeholder="Sujet de votre message" className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                                    <textarea rows={5} placeholder="Écrivez votre message ici..." className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"></textarea>
                                </div>
                                <button type="submit" className="w-full rounded-full bg-purple-500 px-6 py-3 text-white font-bold shadow-[0_20px_40px_rgba(204,151,255,0.25)] hover:bg-purple-400 transition-all">Envoyer le message</button>
                            </form>
                        </div>
                    </section>

                    <section className="grid gap-6 md:grid-cols-3">
                        {[
                            { title: 'Support 24/7', text: 'Un accompagnement réactif pour les organisateurs et participants.' },
                            { title: 'Partenariats', text: 'Collaborez avec nous pour créer des expériences plus grandes.' },
                            { title: 'Retour utilisateur', text: 'Votre voix aide à améliorer la plateforme chaque jour.' }
                        ].map((item) => (
                            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition-all hover:border-primary/30">
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-300 leading-7">{item.text}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            <BottomNav />
        </>
    );
}