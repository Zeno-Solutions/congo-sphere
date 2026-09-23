"use client";

import { useEffect, useMemo, useState } from "react";
import { events as fallbackEvents } from "@/lib/data";
import EventCard from "../ui/EventCard";
import Contenaire from "../Contenaire";
import { getAllEvents } from "@/app/api/utils/fuctionApi";

type Event = (typeof fallbackEvents)[number];

type EventApiResponse = Event[] | { events?: Event[] } | { data?: Event[] } | { items?: Event[] };

export default function Recommended() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState<Event[]>(fallbackEvents);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const filterOptions = useMemo(
    () => {
      const categories = Array.from(new Set(events.map((event) => event.category))).slice(0, 3);

      return [
        { label: "All Events", value: "All" },
        ...categories.map((category) => ({
          label: category,
          value: category,
        })),
      ];
    },
    [events],
  );

  const filteredEvents = useMemo(
    () =>
      selectedCategory === "All"
        ? events
        : events.filter((event) => event.category === selectedCategory),
    [events, selectedCategory],
  );

  return (
    <Contenaire className="w-full">
      <section className="px-2 mx-auto max-w-400 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold font-headline text-white">
            Recommended For You
          </h2>

          <div className="flex gap-3 overflow-x-auto no-scrollbar rounded-3xl">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedCategory(option.value)}
                className={`px-3 py-2 cursor-pointer hover:bg-[#00000049] rounded-full text-[12px] font-bold whitespace-nowrap transition-colors ${
                  option.value === selectedCategory
                    ? "text-on-primary-fixed bg-purple-500 hover:bg-purple-500"
                    : "bg-[#000000af] text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="text-on-surface-variant text-sm mb-4">
            Chargement des événements...
          </div>
        )}

        {error && (
          <div className="text-red-300 text-sm mb-4">{error}</div>
        )}

        <div className="min-w-70 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </Contenaire>
  );
}

function normalizeEvents(data: EventApiResponse): Event[] {
  if (Array.isArray(data)) {
    return data;
  }

  const payload = data as {
    events?: Event[];
    data?: Event[];
    items?: Event[];
  };

  if (Array.isArray(payload.events)) {
    return payload.events;
  }

  if (Array.isArray(payload.data)) {
    return payload.data;
  }

  if (Array.isArray(payload.items)) {
    return payload.items;
  }

  return fallbackEvents;
}
