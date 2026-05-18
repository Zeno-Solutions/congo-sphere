import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Ticket, Sparkles } from "lucide-react";
import { events } from "@/lib/data";
import Contenaire from "@/components/Contenaire";
import Auth from "../libs/Auth";
export default function DashboardPage() {
  const upcoming = events.slice(0, 3);

  return (
    <Auth>
      <Contenaire className="py-10">
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
          <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
          <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

          <header className="mb-12 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary font-semibold">
                    Espace utilisateur
                  </p>
                  <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface">
                    Tableau de bord
                  </h1>
                  <p className="max-w-2xl text-on-surface-variant leading-relaxed">
                    Retrouvez un aperçu rapide de vos événements, vos tickets,
                    et vos actions importantes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/manage-event"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary-fixed shadow-[0_10px_30px_rgba(204,151,255,0.25)] hover:shadow-[0_15px_40px_rgba(204,151,255,0.35)] transition"
                  >
                    Gérer mes événements
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/user-profile"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-on-surface hover:bg-white/5 transition"
                  >
                    Profil
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-10">
            <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
              <div className="glass-panel rounded-[2rem] border border-white/10 p-8">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold font-headline">
                      Mes statistiques
                    </h2>
                    <p className="text-on-surface-variant">
                      Indicateurs récents sur votre activité.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                    Actif
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-3xl bg-surface-container-low p-6">
                    <p className="text-sm text-on-surface-variant uppercase tracking-[0.25em] mb-4">
                      Événements
                    </p>
                    <p className="text-4xl font-black">12</p>
                    <p className="text-sm text-on-surface-variant mt-2">
                      En préparation ou publiés
                    </p>
                  </div>
                  <div className="rounded-3xl bg-surface-container-low p-6">
                    <p className="text-sm text-on-surface-variant uppercase tracking-[0.25em] mb-4">
                      Tickets
                    </p>
                    <p className="text-4xl font-black">8</p>
                    <p className="text-sm text-on-surface-variant mt-2">
                      Réservés ou confirmés
                    </p>
                  </div>
                  <div className="rounded-3xl bg-surface-container-low p-6">
                    <p className="text-sm text-on-surface-variant uppercase tracking-[0.25em] mb-4">
                      Interactions
                    </p>
                    <p className="text-4xl font-black">24</p>
                    <p className="text-sm text-on-surface-variant mt-2">
                      Nouveaux abonnés et réactions
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-surface-container-low border border-white/10 p-8 shadow-2xl shadow-black/5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles size={24} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">
                      Rappel rapide
                    </p>
                    <h3 className="text-xl font-bold">Prochaine expérience</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-on-surface-variant">
                    N’oubliez pas de confirmer votre présence et de partager le
                    lien d’invitation aux participants.
                  </p>
                  <div className="rounded-3xl bg-slate-950/50 p-5">
                    <p className="text-base font-bold">{upcoming[0].title}</p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {upcoming[0].location}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-sm text-on-surface-variant">
                      <span className="inline-flex items-center gap-2">
                        <Calendar size={14} />{" "}
                        {new Date(upcoming[0].date).toLocaleDateString(
                          "fr-FR",
                          {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          },
                        )}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={14} /> {upcoming[0].location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-headline">
                    Événements à venir
                  </h2>
                  <p className="text-on-surface-variant">
                    Suivez votre prochain calendrier et accédez facilement aux
                    détails.
                  </p>
                </div>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Voir tous les événements <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcoming.map((event) => (
                  <article
                    key={event.id}
                    className="rounded-3xl bg-surface-container-low border border-white/10 p-6 hover:border-primary/30 transition"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.3em] text-on-surface-variant">
                        #{event.id}
                      </span>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                        Nouveau
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                      {event.description.slice(0, 90)}...
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-on-surface-variant">
                      <span className="inline-flex items-center gap-2">
                        <Calendar size={14} />{" "}
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={14} /> {event.location}
                      </span>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        Voir l’événement <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/manage-event"
                className="group rounded-[2rem] bg-primary/10 p-6 transition hover:bg-primary/20"
              >
                <div className="flex items-center gap-4">
                  <Ticket size={24} className="text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">
                      Ajouter
                    </p>
                    <h3 className="text-lg font-bold text-on-surface">
                      Créer un nouvel événement
                    </h3>
                  </div>
                </div>
              </Link>
              <Link
                href="/user-profile"
                className="group rounded-[2rem] bg-surface-container-low border border-white/10 p-6 transition hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <Sparkles size={24} className="text-secondary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">
                      Profil
                    </p>
                    <h3 className="text-lg font-bold text-on-surface">
                      Gérer mes préférences
                    </h3>
                  </div>
                </div>
              </Link>
            </section>
          </main>
        </div>
      </Contenaire>
    </Auth>
  );
}
