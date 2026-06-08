import Link from "next/link";
import { HelpCircle, ArrowLeft, MessageSquare, LifeBuoy } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-10">
        <section className="glass-panel rounded-3xl border border-white/10 bg-surface-container-high p-8 shadow-2xl shadow-black/10 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="flex flex-col gap-4">
            <Link
              href="/user-profile"
              className="inline-flex items-center gap-2 text-sm text-purple-500 font-semibold hover:text-primary transition"
            >
              <ArrowLeft size={18} /> Retour au profil
            </Link>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-300/20">
                <HelpCircle size={28} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                  Assistance
                </p>
                <h1 className="text-4xl font-extrabold font-headline text-on-surface">
                  Besoin d'aide ? Nous sommes là.
                </h1>
              </div>
            </div>
            <p className="max-w-3xl text-on-surface-variant leading-relaxed">
              Consultez notre centre d'aide, envoyez une demande ou parlez à un
              conseiller pour résoudre vos questions rapidement.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 bg-surface-container-low">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">
                  Centre d'aide
                </h2>
                <p className="text-on-surface-variant mt-2">
                  Trouvez une réponse rapide parmi nos ressources les plus
                  utiles.
                </p>
              </div>
              <MessageSquare size={28} className="text-purple-500" />
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <p className="text-sm font-semibold text-on-surface">
                  Comment modifier mon profil ?
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Retrouvez toutes les étapes pour mettre à jour votre photo,
                  bio et préférences.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <p className="text-sm font-semibold text-on-surface">
                  Problème de connexion ?
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Si vous rencontrez des difficultés, consultez nos
                  recommandations de sécurité.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <p className="text-sm font-semibold text-on-surface">
                  Facturation & abonnements
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Accédez aux réponses sur les paiements, factures et méthodes
                  de paiement.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                Contact direct
              </p>
              <h2 className="text-xl font-bold text-on-surface mt-4">
                Envoyez une demande
              </h2>
              <p className="text-on-surface-variant mt-3 leading-relaxed">
                Notre équipe est prête à vous aider sur les questions techniques
                et l'expérience utilisateur.
              </p>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-secondary px-6 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(204,151,255,0.25)] hover:opacity-95 transition">
                Ouvrir une demande
              </button>
            </div>
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <p className="text-sm font-semibold text-on-surface">
                FAQ rapide
              </p>
              <ul className="mt-4 space-y-3 text-xs text-on-surface-variant">
                <li>• Comment changer mon mot de passe ?</li>
                <li>• Comment contacter le support ?</li>
                <li>• Où voir mes factures ?</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
