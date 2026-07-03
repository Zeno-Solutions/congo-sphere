"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Apple, Mail } from "lucide-react";
import Input from "@/components/ui/input";

export default function Page() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden relative">
      {/* Global Bfackground Decorative Elements */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12 lg:py-20">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Branding & Visual Section */}
          <div className="hidden lg:flex flex-col space-y-8">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-4xl text-primary">
                bubble_chart
              </span>
              <h1 className="text-3xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">
                Congo Sphere
              </h1>
            </div>

            {/* Featured Image Card (Visual Anchor) */}
            <div className="relative group">
              <div className="absolute inset-0 signature-gradient opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-120 w-full mb-30 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  alt="Premium event atmosphere"
                  className="w-full h-full object-cover"
                  src="/loginTest2.jpg"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-6 animate-bounce left-6 right-6">
                  <p className="text-xs uppercase tracking-widest font-black mb-1 font-label">
                    Coming Tonight
                  </p>
                  <p className="text-xl font-bold font-headline">
                    The Neon Convergence Gala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Form Section */}
          <div className="w-full max-w-md mx-auto">
            <div className="glass-panel p-8 lg:p-10 rounded-xl shadow-2xl border border-white/5 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-10 text-center lg:text-left">
                <div className="lg:hidden flex justify-center mb-6">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    bubble_chart
                  </span>
                </div>
                <h3 className="text-3xl font-bold font-headline mb-2">
                  Reset your password
                </h3>
                <span className="text-sm text-gray-500 font bold">
                  Enter your registerd email address
                </span>
              </div>

              <form className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      name="email"
                      placeholder="john@example.com"
                      type="email"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-tertiary text-xl">
                      <Mail />
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full signature-gradient text-on-primary-fixed font-bold py-4 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)]  hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 mt-4"
                  type="submit"
                >
                  <span className="font-headline tracking-wide">
                    Send a reset mail
                  </span>
                  <ArrowRight size={20} />
                </button>

                {/* Social Auth Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant/30"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] font-bold">
                    <span className="bg-[#1e1e2d] px-4 text-outline">or</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="flex items-center justify-center space-x-2 bg-surface-container-highest hover:bg-white/10 text-on-surface py-3 rounded-lg border border-outline-variant/20 transition-all"
                    type="button"
                  >
                    <span className="text-sm font-semibold">Register</span>
                  </button>
                  <button
                    className="flex items-center justify-center space-x-2 bg-surface-container-highest hover:bg-white/10 text-on-surface py-3 rounded-lg border border-outline-variant/20 transition-all"
                    type="button"
                  >
                    <Apple className="w-5 h-5" />
                    <span className="text-sm font-semibold">Login</span>
                  </button>
                </div>
              </form>

              {/* Background Accents within panel */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
            </div>

            {/* Accessibility/Terms */}
            <p className="mt-8 text-center text-xs text-on-surface-variant/60 max-w-xs mx-auto leading-relaxed">
              By proceeding, you agree to Congo Sphere&apos;s{" "}
              <Link href="#" className="underline hover:text-on-surface">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline hover:text-on-surface">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
