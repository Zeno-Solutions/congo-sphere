import Link from "next/link";
import { CreditCard, ArrowLeft, Wallet, Receipt } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-10">
        <section className="glass-panel rounded-3xl border border-white/10 bg-surface-container-high p-8 shadow-2xl shadow-black/10 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
          <div className="flex flex-col gap-4">
            <Link
              href="/user-profile"
              className="inline-flex z-50 items-center gap-2 text-sm text-purple-500 font-semibold hover:text-primary transition"
            >
              <ArrowLeft size={18} /> Retour au profil
            </Link>

            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-secondary shadow-lg shadow-secondary/10">
                <CreditCard size={28} className="text-white" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                  Facturation
                </p>
                <h1 className="text-4xl font-extrabold font-headline text-on-surface">
                  Gérer vos paiements en toute clarté
                </h1>
              </div>
            </div>
            <p className="max-w-3xl text-on-surface-variant leading-relaxed">
              Accédez à votre historique de facturation, mettez à jour votre
              méthode de paiement et consultez les prochaines échéances.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 bg-surface-container-low">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">
                  Vue d&apos;ensemble de la facturation
                </h2>
                <p className="text-on-surface-variant mt-2">
                  Suivez vos dépenses et gérez vos abonnements depuis un même
                  endroit.
                </p>
              </div>
              <Wallet size={28} className="text-purple-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-on-surface-variant font-semibold">
                  Plan actuel
                </p>
                <p className="text-3xl font-black text-purple-500 mt-4">
                  Premium
                </p>
                <p className="text-sm text-on-surface-variant mt-2">
                  Renouvellement le 24 juillet 2026
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-on-surface-variant font-semibold">
                  Méthode de paiement
                </p>
                <p className="mt-4 text-sm text-on-surface">Visa •••• 4321</p>
                <button className="mt-5 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-on-surface hover:bg-white/5 transition">
                  Modifier
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      Dernière facture
                    </p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      24 mai 2026 • 29,99 €
                    </p>
                  </div>
                  <Receipt size={20} className="text-purple-500" />
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      Prochaine échéance
                    </p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      24 juillet 2026 • 29,99 €
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary font-black">
                    À venir
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                Astuce de gestion
              </p>
              <h2 className="text-xl font-bold text-on-surface mt-4">
                Simplifiez vos paiements
              </h2>
              <p className="text-on-surface-variant mt-3 leading-relaxed">
                Activez le prélèvement automatique pour éviter les interruptions
                de service et garder votre compte à jour.
              </p>
              <button className="flex my-5 items-center justify-center px-8 py-3 signature-gradient rounded-full text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_20px_rgba(204,151,255,0.3)]">
                Activer le renouvellement
              </button>
            </div>
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <p className="text-sm font-semibold text-on-surface">
                Aucun paiement en retard
              </p>
              <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">
                Votre compte reste en règle et vos factures sont gérées
                automatiquement.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
