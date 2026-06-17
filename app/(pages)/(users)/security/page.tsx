import Link from "next/link";
import { Shield, ArrowLeft, Lock, ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className=" min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-10">
        <section className="glass-panel rounded-3xl border border-white/10 bg-surface-container-high p-8 shadow-2xl shadow-black/10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="flex flex-col gap-4">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-sm text-purple-500 font-semibold hover:text-primary transition"
            >
              <ArrowLeft size={18} /> Retour au profil
            </Link>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary  border border-primary/10">
                <Shield size={28} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                  Sécurité du compte
                </p>
                <h1 className="text-4xl font-extrabold font-headline text-on-surface">
                  Renforcez votre espace personnel
                </h1>
              </div>
            </div>
            <p className="max-w-3xl text-on-surface-variant leading-relaxed">
              Gérez vos protections, activez la vérification en deux étapes et
              visualisez les connexions récentes pour garder votre compte
              sécurisé.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 bg-surface-container-low">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">
                  Verrouillage avancé
                </h2>
                <p className="text-on-surface-variant mt-2">
                  Ajoutez une couche de confiance à chaque connexion.
                </p>
              </div>
              <Lock size={28} className="text-purple-500" />
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      Authentification en deux étapes
                    </p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Protégez votre compte avec un code supplémentaire lors de
                      la connexion.
                    </p>
                  </div>
                  <Link href={"security/double-auth"}>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase text-purple-300">
                      Activé
                    </span>
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      Mots de passe et sessions
                    </p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Changez votre mot de passe et consultez les appareils
                      connectés.
                    </p>
                  </div>
                  <Link href={"security/change-passwd"}>
                    <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-on-surface hover:bg-white/5 transition">
                      Modifier
                    </button>
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      Alertes de connexion
                    </p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Soyez informé de toute connexion depuis un nouvel
                      appareil.
                    </p>
                  </div>
                  <span className="rounded-full bg-green-500/30 px-3 py-1 text-white text-xs font-semibold uppercase">
                    Activé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold">
                Étape suivante
              </p>
              <h2 className="text-xl font-bold text-on-surface mt-4">
                Vérification recommandée
              </h2>
              <p className="text-on-surface-variant mt-3 leading-relaxed">
                Activez la confirmation par email et suivez les notifications de
                sécurité pour rester informé.
              </p>
              <Link
                href={"security/double-auth"}
                className="flex mt-4 max-w-45 items-center justify-center gap-2 px-4 py-3 signature-gradient rounded-full cursor-pointer text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_10px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:outline-none"
              >
                Activer maintenant
              </Link>
            </div>
            <div className="glass-panel rounded-3xl border border-white/10 p-6 bg-surface-container-low">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-purple-500" />
                <p className="text-sm font-semibold text-on-surface">
                  Aucun risque en cours
                </p>
              </div>
              <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">
                Votre profil est protégé et vos notifications de sécurité sont à
                jour.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
