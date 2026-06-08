import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { events } from "@/lib/data";
import Contenaire from "@/components/Contenaire";
import Image from "next/image";

export default function DashboardPage() {
  const upcoming = events.slice(0, 3);
  const userStat = [
    { label: "Événements", value: 12, text: "En préparation ou publiés" },
    { label: "Tickets", value: 8, text: "Réservés ou confirmés" },
    { label: "Interactions", value: 24, text: "Nouveaux abonés et reactions" },
  ];

  return (
    <Contenaire className="py-10">
      <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
        <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
        <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <header className="mb-12 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-purple-500 font-semibold">
                  Espace utilisateur
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface">
                  Tableau de bord
                </h1>
                <p className="max-w-2xl text-on-surface-variant leading-relaxed">
                  Retrouvez un aperçu rapide de vos événements, vos tickets, et
                  vos actions importantes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/manage-event"
                  className="inline-flex text-white items-center gap-2 text-on-primary-fixed cursor-pointer font-bold font-label text-sm px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95"
                >
                  Gérer mes événements
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/user-profile"
                  className="inline-flex items-center  rounded-full border border-white/10 text-sm font-semibold text-on-surface hover:bg-white/5 transition"
                >
                  <Image
                    src="/user.jpg"
                    alt="Profil"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
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
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-purple-500">
                  Actif
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {userStat.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl bg-surface-container-low p-6"
                  >
                    <p className="text-sm text-on-surface-variant uppercase tracking-[0.25em] mb-4">
                      {stat.label}
                    </p>
                    <p className="text-4xl font-black text-purple-500">
                      {stat.value}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-2">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-surface-container-low border border-white/10 p-8 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles size={24} />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-purple-500">
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
                      <Calendar className="text-purple-500" size={14} />{" "}
                      {new Date(upcoming[0].date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-purple-500" />{" "}
                      {upcoming[0].location}
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
                className="inline-flex items-center gap-2 text-purple-500 font-bold hover:underline"
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
                      {event.title}
                    </span>
                    <span className="rounded-full bg-secondary/38 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-purple-500">
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
                      className="inline-flex items-center gap-2 text-purple-500 font-semibold hover:underline"
                    >
                      Voir l’événement <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Contenaire>
  );
}
