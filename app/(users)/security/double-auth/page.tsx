"use client";
import React, { useState } from "react";
import Link from "next/link";

import { ArrowLeft, Shield, Zap } from "lucide-react";

function generateBackupCodes() {
  const codes: string[] = [];
  for (let i = 0; i < 6; i++) {
    codes.push(Math.random().toString(36).slice(2, 10).toUpperCase());
  }
  return codes;
}

export default function DoubleAuthPage() {
  const [enabled, setEnabled] = useState(false);

  const [codes, setCodes] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggle = () => setEnabled((V) => !V);
  const regen = () => setCodes(generateBackupCodes());
  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(codes.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-20">
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-24 px-6 max-w-3xl mx-auto">
        <section className="glass-panel rounded-2xl p-8">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm text-purple-500 font-semibold hover:text-primary transition mb-4"
          >
            <ArrowLeft size={18} /> Retour
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-lg">
              <Shield size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-headline">
                Vérification en deux étapes
              </h1>
              <p className="text-on-surface-variant">
                Ajoutez une seconde couche de sécurité avec une application
                d&apos;authentification ou SMS.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-surface p-5">
              <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Méthode</p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Votre second facteur sera envoyer par mail.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold border border-white/10 text-on-surface`}
                  >
                    Email
                  </span>
                  <button
                    onClick={toggle}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${enabled ? "bg-green-500  text-white" : "border border-white/10 bg-red-500 text-on-surface"}`}
                  >
                    {enabled ? "Activé" : "Désactivé"}
                  </button>
                </div>
              </div>
            </div>
            {enabled ? (
              <div className="rounded-2xl border border-white/10 bg-surface p-5">
                <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Codes de secours</p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Utilisez ces codes si vous perdez l&apos;accès à votre
                      méthode principale.
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={regen}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 signature-gradient rounded-full cursor-pointer text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_10px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Générer
                    </button>
                    <button
                      onClick={copyAll}
                      disabled={codes.length === 0}
                      className="rounded-full px-4 py-2 bg-secondary/10 text-sm"
                    >
                      {copied ? "Copié" : "Copier"}
                    </button>
                  </div>
                </div>

                {codes.length === 0 ? (
                  <div className="mt-4 text-sm text-on-surface-variant">
                    Aucun code généré.
                  </div>
                ) : (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {codes.map((c) => (
                      <div
                        key={c}
                        className="rounded-lg bg-surface-container-low border border-outline-variant/20 px-3 py-2 text-sm font-mono"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="rounded-2xl flex flex-col gap-5 md:flex-row border border-white/10 bg-surface p-5  items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <Zap size={16} /> Conseils
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Activez l&apos;authentification par application pour la
                  meilleure sécurité.
                </p>
              </div>
              <div className="flex items-center gap-8 ">
                <Link
                  href="/user-profile"
                  className="text-sm font-semibold text-purple-500 hover:text-primary"
                >
                  Annuler
                </Link>
                <button
                  onClick={() => {
                    setCodes(generateBackupCodes());
                  }}
                  className=" flex items-center justify-center gap-2 px-4 py-3 signature-gradient rounded-full cursor-pointer text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_10px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
