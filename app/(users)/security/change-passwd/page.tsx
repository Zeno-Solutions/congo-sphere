"use client";
import React, { useState } from "react";
import Input from "@/components/ui/input";
import Link from "next/link";
import {
  ArrowLeft,
  Lock,
  CheckCircle,
  AlertCircle,
  RotateCw,
} from "lucide-react";

export default function ChangePasswordPage() {
  const [values, setValues] = useState({
    current: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputClasses =
    "w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-semibold text-on-surface mb-2";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
    if (errors[name])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.current) e.current = "Mot de passe actuel requis";
    if (!values.password || values.password.length < 8)
      e.password = "Le mot de passe doit contenir au moins 8 caractères";
    if (values.password !== values.confirm)
      e.confirm = "Les mots de passe ne correspondent pas";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSuccess(true);
      setValues({ current: "", password: "", confirm: "" });
      setTimeout(() => setSuccess(false), 3500);
    } catch (err) {
      setErrors({ submit: "Erreur lors de la mise à jour" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-20">
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {success && (
          <div className="mb-6 glass-panel rounded-xl p-4 border border-primary/50 bg-primary/10 flex items-center gap-3 animate-in fade-in">
            <CheckCircle size={20} className="text-green-300 shrink-0" />
            <p className="text-sm text-on-surface text-green-400 font-medium">
              Mot de passe mis à jour avec succès.
            </p>
          </div>
        )}

        {errors.submit && (
          <div className="mb-6 glass-panel rounded-xl p-4 border border-error/50 bg-error/10 flex items-center gap-3">
            <AlertCircle size={20} className="text-error shrink-0" />
            <p className="text-sm text-on-surface font-medium">
              {errors.submit}
            </p>
          </div>
        )}

        <section className="glass-panel rounded-2xl p-8">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm text-purple-500 font-semibold hover:text-primary transition mb-4"
          >
            <ArrowLeft size={18} /> Retour
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="hidden md:inline-flex h-12 w-12 items-center justify-center md:rounded-3xl md:bg-primary/10 text-primary shadow-lg">
              <Lock size={22} className="hidden md:flex" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-headline">
                Changer le mot de passe
              </h1>
              <p className="text-on-surface-variant">
                Modifiez régulièrement votre mot de passe pour sécuriser votre
                compte.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label htmlFor="current" className={labelClasses}>
                Mot de passe actuel
              </label>
              <Input
                id="current"
                name="current"
                type="password"
                value={values.current}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Entrez votre mot de passe actuel"
              />
              {errors.current && (
                <div className="text-xs text-error text-red-400 mt-1">
                  {errors.current}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className={labelClasses}>
                Nouveau mot de passe
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Nouveau mot de passe"
              />
              {errors.password && (
                <div className="text-xs text-error text-red-400 mt-1">
                  {errors.password}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirm" className={labelClasses}>
                Confirmer le mot de passe
              </label>
              <Input
                id="confirm"
                name="confirm"
                type="password"
                value={values.confirm}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Confirmez le nouveau mot de passe"
              />
              {errors.confirm && (
                <div className="text-xs text-error text-red-400 mt-1">
                  {errors.confirm}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 signature-gradient rounded-full text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_20px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <Lock size={16} />
                )}
                <span className="hidden md:flex">Mettre à jour</span>
                <span className="md:hidden">confirm</span>
              </button>
              <Link
                href="/user-profile"
                className="flex-1 flex items-center justify-center gap-2 md:px-6 md:py-3 border border-outline-variant/30 hover:bg-white/5 rounded-full text-on-surface font-bold text-sm transition-colors"
              >
                <span className="hidden md:flex">Annuler</span>
                <span className="md:hidden">
                  <RotateCw />
                </span>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
