"use client";

import React from "react";
import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050712]/95 px-6 py-8 backdrop-blur-sm">
      <div className="relative flex max-w-xl flex-col items-center gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 px-8 py-10 shadow-[0_40px_120px_rgba(99,102,241,0.22)]">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-linear-to-r from-violet-500/30 via-fuchsia-500/20 to-rose-500/30 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_24px_90px_rgba(139,92,246,0.2)]">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-950/95 shadow-inner shadow-black/20">
              <Loader size="lg" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/90 font-semibold">
              Congo Sphere
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-purple-500 bg-clip-text animate-pulse duration-75">
              Chargement en cours
            </h1>
            <p className="mt-2 max-w-[24rem] text-sm text-on-surface-variant">
              Préparation de votre expérience dans la sphère. Merci de patienter
              un instant.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-on-surface-variant shadow-[0_0_30px_rgba(99,102,241,0.12)]">
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Connexion aux données</span>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/80">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="bg-purple-400 bg-clip-text animate-pulse">
              Synchronisation du contenu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
