"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Save,
  X,
  Camera,
  Mail,
  User,
  MapPin,
  FileText,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: "Toto OKEMBA",
    username: "@toto_okemba",
    email: "toto.okemba@sphere.io",
    location: "Brazzaville, Republic of Congo",
    bio: "Event enthusiast 🎉 | Night owl 🌙 | Always seeking the next unforgettable experience",
    phone: "+243 123 456 789",
  });

  const [avatar, setAvatar] = useState("/user.jpg");
  const [previewImage, setPreviewImage] = useState(avatar);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (formData.bio.length > 500) {
      newErrors.bio = "La bio ne doit pas dépasser 500 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setAvatar(previewImage);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrors({
        submit: "Une erreur s'est produite lors de la mise à jour",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setPreviewImage(avatar);
    setFormData({
      name: "Toto OKEMBE",
      username: "@toto_okemba",
      email: "toto.okemba@sphere.io",
      location: "Brazzaville, Republic of Congo",
      bio: "Event enthusiast 🎉 | Night owl 🌙 | Always seeking the next unforgettable experience",
      phone: "+243 123 456 789",
    });
    setErrors({});
  };

  const inputClasses =
    "w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClasses =
    "block text-sm font-semibold text-on-surface mb-2 flex items-center gap-2";
  const errorClasses = "text-xs text-error mt-1 flex items-center gap-1";

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-20">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Navigation */}

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 glass-panel rounded-xl p-4 border border-primary/50 bg-primary/10 flex items-center gap-3 animate-in fade-in">
            <CheckCircle size={20} className="text-primary shrink-0" />
            <p className="text-sm text-on-surface font-medium">
              Profil mis à jour avec succès! ✨
            </p>
          </div>
        )}

        {/* Error Message */}
        {errors.submit && (
          <div className="mb-6 glass-panel rounded-xl p-4 border border-error/50 bg-error/10 flex items-center gap-3">
            <AlertCircle size={20} className="text-error shrink-0" />
            <p className="text-sm text-on-surface font-medium">
              {errors.submit}
            </p>
          </div>
        )}

        {/* Form Container */}
        <section className="relative group ">
          <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-panel rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Avatar Section */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Current Avatar */}
                  <label
                    htmlFor="avatar-upload"
                    className="relative cursor-pointer group"
                  >
                    <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 overflow-hidden relative">
                      <Image
                        alt="Profile Preview"
                        className="w-full h-full rounded-full object-cover"
                        src={previewImage}
                        width={128}
                        height={128}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-full" />
                      <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur rounded-full p-2 shadow-lg border border-white/20">
                        <Camera size={16} className="text-on-surface " />
                      </div>
                    </div>
                    {previewImage !== avatar && (
                      <div className="absolute -top-1 -right-1 bg-secondary rounded-full p-1.5 shadow-lg">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                    )}
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                  <div className="flex-1 space-y-3">
                    <div className="text-sm font-semibold text-on-surface">
                      Cliquez sur la photo pour télécharger
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Format: JPG, PNG, WebP (Max 5MB)
                    </p>
                  </div>
                  <div className="bg-secondary/50 w-20 h-10 flex items-center  justify-center rounded-full">
                    <Link
                      href="/user-profile"
                      className="flex items-center gap-2 text-purple-500 hover:text-primary/80 transition-colors"
                    >
                      <ArrowLeft size={20} />
                      <span className="text-sm font-semibold">Back</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-px bg-linear-to-r from-primary/0 via-primary/20 to-primary/0"></div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-headline text-on-surface flex items-center gap-2">
                  <User size={20} className="text-purple-500" />
                  Informations personnelles
                </h2>

                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    <span>Nom complet</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    className={inputClasses}
                  />
                  {errors.name && (
                    <div className={errorClasses}>{errors.name}</div>
                  )}
                </div>

                {/* Username */}
                <div>
                  <label htmlFor="username" className={labelClasses}>
                    <span>Nom d&apos;utilisateur</span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className={inputClasses}
                  />
                  {errors.username && (
                    <div className={errorClasses}>{errors.username}</div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    <Mail size={16} />
                    <span>Email</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <div className={errorClasses}>{errors.email}</div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    <span>Téléphone</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+243 XXX XXX XXX"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="h-px bg-linear-to-r from-primary/0 via-primary/20 to-primary/0"></div>

              {/* Location & Bio */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-headline text-on-surface flex items-center gap-2">
                  <FileText size={20} className="text-purple-500" />À propos de
                  vous
                </h2>

                {/* Location */}
                <div>
                  <label htmlFor="location" className={labelClasses}>
                    <MapPin size={16} />
                    <span>Localisation</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Ville, Pays"
                    className={inputClasses}
                  />
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className={labelClasses}>
                    <span>Bio</span>
                    <span className="text-xs text-on-surface-variant ml-auto">
                      {formData.bio.length}/500
                    </span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Parlez-nous de vous..."
                    maxLength={500}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.bio && (
                    <div className={errorClasses}>{errors.bio}</div>
                  )}
                </div>
              </div>

              <div className="h-px bg-linear-to-r from-primary/0 via-primary/20 to-primary/0"></div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 signature-gradient rounded-full text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_20px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Enregistrer
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant/30 hover:bg-white/5 rounded-full text-on-surface font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X size={16} />
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-8 glass-panel  rounded-xl p-6 border border-tertiary/20 bg-tertiary/5">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            💡 <span className="font-semibold text-on-surface">Conseil:</span>{" "}
            Votre photo de profil et vos informations de base sont visibles sur
            votre page publique. Assurez-vous que tout est correct avant
            d&apos;enregistrer.
          </p>
        </section>
      </main>
    </div>
  );
}
