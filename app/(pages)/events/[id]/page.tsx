"use client";
import not_found from "./not-found";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  CircleCheckBig,
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Share,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { getEventById } from "@/lib/data";
import Contenaire from "@/components/Contenaire";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id as string;
  const event = getEventById(eventId);

  if (!event) {
    return not_found();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Contenaire>
      <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
        {/* Global Background Decorative Elements */}
        <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
        <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <main className="pb-32">
          {/* Hero Section */}
          <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
            <Image
              className="w-full h-full object-cover blur-sm brightness-60"
              alt={event.title}
              src={event.image}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>

            {/* Back Button */}
            <Link
              href="/events"
              className="absolute top-6 left-6 z-10 p-3 rounded-full bg-surface/20 backdrop-blur-md border border-white/10 hover:bg-surface/30 transition-colors"
            >
              <ArrowLeft size={20} className="text-on-surface" />
            </Link>

            {/* Floating Hero Labels */}
            <div className="absolute bottom-12 left-6 right-6 md:left-12 lg:left-24 max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                {event.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest border ${
                      tag === "Featured Experience"
                        ? "bg-primary/20 text-primary border-primary/20"
                        : tag === "Premium Experience"
                          ? "bg-secondary/20 text-secondary border-secondary/20"
                          : "bg-tertiary/20 text-tertiary border-tertiary/20"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-4">
                {event.title}
              </h2>
            </div>
          </section>

          {/* Content Grid */}
          <section className="px-6 md:px-12 lg:px-24 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Description Card */}

              <div className="glass-panel p-8 rounded-xl border border-white/5">
                <h3 className="text-2xl font-bold font-headline mb-6">
                  Experience Narrative
                </h3>
                <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                  <p>{event.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-10 text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-purple-500" />
                    <span className="font-medium text-sm">
                      {formatDate(event.date)}
                      {event.endDate &&
                        event.endDate !== event.date &&
                        ` - ${formatDate(event.endDate)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-purple-500" />
                    <span className="font-medium text-sm">
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 group hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl text-primary">
                      <CircleCheckBig size={20} className="text-green-500" />
                    </span>
                    <span className="font-medium text-on-surface">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Action Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-surface-container-high p-8 rounded-xl shadow-2xl shadow-purple-900/10 border border-outline-variant/10">
                <div className="mb-8">
                  <span className="text-on-surface-variant text-sm block mb-1">
                    Standard Access
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black font-headline">
                      ${event.price}
                    </span>
                    <span className="text-on-surface-variant text-sm">
                      / ticket
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                    <Ticket size={20} className="text-tertiary" />
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">
                        Availability
                      </p>
                      <p className="text-sm font-medium">
                        {event.availableTickets} Tickets Remaining
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                    <Clock size={20} className="text-error" />
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">
                        Registration Closes
                      </p>
                      <p className="text-sm font-medium">
                        {formatDate(event.registrationDeadline)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-4 rounded-full signature-gradient text-on-primary-fixed font-bold text-lg text-white text-on-primary-fixed cursor-pointer font-label shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95">
                    Register Now
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-semibold transition-colors flex items-center justify-center gap-2">
                      <Heart size={18} />
                      Save
                    </button>
                    <button className="flex-1 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-semibold transition-colors flex items-center justify-center gap-2">
                      <Share size={18} />
                      Share
                    </button>
                  </div>
                </div>

                <p className="text-center text-[10px] text-on-surface-variant mt-4 font-label uppercase tracking-widest">
                  Secure transaction powered by SpherePay
                </p>
              </div>

              {/* Category Info */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-white/5">
                <h4 className="font-bold text-on-surface mb-2">Category</h4>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                  {event.category}
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Bottom Navigation (Mobile Only) */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <Link
            href="/"
            className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all"
          >
            <span className="material-symbols-outlined">explore</span>
            <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
              Explore
            </span>
          </Link>
          <Link
            href="/events"
            className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              event_available
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
              Events
            </span>
          </Link>
          <Link
            href="/user-profile"
            className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all"
          >
            <span className="material-symbols-outlined">person_pin</span>
            <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
              Profile
            </span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all"
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
              Inbox
            </span>
          </Link>
        </nav>

        {/* Floating Action Button */}
        <div className="fixed bottom-28 right-6 md:bottom-12 md:right-12 z-40 lg:hidden">
          <button className="w-16 h-16 rounded-full bg-secondary shadow-2xl shadow-secondary/40 flex items-center justify-center text-on-secondary active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl">
              local_activity
            </span>
          </button>
        </div>
      </div>
    </Contenaire>
  );
}
