import React from "react";
import Contenaire from "../Contenaire";
export default function Newsletter() {
  return (
    <Contenaire className="mt-10">
      <section className=" relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl ">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="relative grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
          <div className="md:w-full bg-amber-300">
            <h2 className="text-4xl font-extrabold font-headline text-white mb-6 leading-tight">
              Stay in the Orbit.
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-md">
              Get exclusive access to pre-sale tickets, secret events, and
              monthly curated highlights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="bg-surface-container-highest border-none rounded-full px-6 py-4 grow text-white placeholder:text-outline ring-2 ring-primary/50 font-body "
                placeholder="your@email.com"
                type="email"
              />
              <button className="text-on-primary-fixed font-bold font-label px-8 py-4 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95 cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-outline mt-4 uppercase tracking-widest font-bold">
              No spam. Only magic. Unsubscribe anytime.
            </p>
          </div>
          <div className="hidden md:block relative">
            <img
              className="rounded-4xl w-full h-75 object-cover shadow-2xl rotate-3 scale-105 opacity-80 border border-white/10"
              alt="Abstract composition of swirling cosmic lights and neon trails against a deep black void"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc79PFMhPlZTMZy-MYYzUNerf-kSmIDNXRaIalo_YN7DseMgCzhmxCp-8kDLIeZl-BMqkwlTsY71OW3BhtufsBVD8RQHlSXdr16fUXZ2R2X0Mim702UY_l4g-nEqMnuyaT2y7EPJDuoe0oLsrr7aOULOLjaWI6-x8WwXPyGUx4ieVcK6GpEa6Yxsv-pSi_gQiZzZg73i9a97yitS4WvpA8iowUfP9ANTaz5sMbAhJRCCf9dXVW3DRAfaawpyva6ufngjZhNEWzp0Tz"
            />
          </div>
        </div>
      </section>
    </Contenaire>
  );
}
