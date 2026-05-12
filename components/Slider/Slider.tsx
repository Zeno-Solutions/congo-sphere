"use client";
import React, { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Contenaire from "../Contenaire";
import Link from "next/link";
import { events } from "@/lib/data";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const featuredEvents = events.slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Digital Arts":
        return "bg-primary/20 border-primary/30 text-primary";
      case "Electronic Music":
        return "bg-secondary/20 border-secondary/30 text-secondary";
      case "Art & Technology":
        return "bg-tertiary/20 border-tertiary/30 text-tertiary";
      default:
        return "bg-primary/20 border-primary/30 text-primary";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const scrollToCard = (index: number) => {
    const container = carouselContainerRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handlePrev = () => {
    const nextIndex =
      currentIndex === 0 ? featuredEvents.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === featuredEvents.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  return (
    <Contenaire className="mt-20">
      <section className="mb-16 mx-auto max-w-500">
        <div className="flex  items-center justify-between  mb-8">
          <div className="my-2 ">
            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-white mb-2">
              Featured Experiences
            </h2>
            <p className="text-on-surface-variant text-white">
              Hand-picked events you shouldn&apos;t miss this month.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full cursor-pointer bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
              aria-label="Previous carousel item"
            >
              <span className="material-symbols-outlined">
                <ChevronLeft
                  size={30}
                  color="white"
                  className=" rounded-full border-2 hover:bg-purple-500 transition ease-in shadow-2xl "
                />
              </span>
            </button>
            <button
              onClick={handleNext}
              className=" rounded-full text-on-surface hover:bg-surface-container-highest transition-colors"
              aria-label="Next carousel item"
            >
              <span className="material-symbols-outlined">
                <ChevronRight
                  size={30}
                  color="white"
                  className=" cursor-pointer rounded-full border-2 hover:bg-purple-500 transition ease-in shadow-2xl"
                />
              </span>
            </button>
          </div>
        </div>

        <div
          ref={carouselContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          {featuredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`min-w-[320px]  md:w-150 h-87.5 rounded-2xl relative overflow-hidden group snap-center shrink-0 transition-transform duration-500 ease-out ${
                index === currentIndex ? "scale-100" : "scale-95"
              }`}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={event.title}
                src={event.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 ${getCategoryColor(event.category)} backdrop-blur-md border rounded-full text-[10px] font-bold uppercase tracking-widest`}
                  >
                    {event.category}
                  </span>
                  <span className="text-white/60 text-xs font-body">
                    • {formatDate(event.date)}
                  </span>
                </div>
                <h3 className="text-3xl font-bold font-headline text-white mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-300 text-sm max-w-md line-clamp-2 mb-6">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="flex items-center gap-2 text-white font-bold font-label text-sm group/btn hover:text-primary transition-colors"
                >
                  Book Tickets
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Contenaire>
  );
}
