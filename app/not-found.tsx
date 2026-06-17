"use client";
import "./style.css";

import Link from "next/link";
import { Home, ArrowLeft, OctagonAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white text-on-surface font-body selection:bg-primary/30 overflow-x-hidden relative">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center space-y-8">
          {/* 404 Visual */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-black font-headline text-gradient opacity-20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl md:text-7xl text-primary animate-pulse">
                <OctagonAlert />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface">
              Lost in the Sphere
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have drifted into the
              void. Don&apos;t worry, the sphere is vast and mysterious.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/"
              className="flex max-w-45 items-center justify-center gap-2 px-4 py-3 signature-gradient rounded-full cursor-pointer text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_10px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:outline-none"
            >
              <Home size={20} />
              Return to Sphere
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-outline-variant/30 cursor-pointer text-on-surface hover:bg-white/5 px-8 h-12 rounded-full flex items-center gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="pt-12">
            <div className="flex justify-center space-x-4">
              <div
                className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-600 rounded-fulsl animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
