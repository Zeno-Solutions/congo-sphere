"use client";
import React, { useState } from "react";
import { events } from "@/lib/data";
import EventCard from "../ui/EventCard";
import Contenaire from "../Contenaire";
export default function Recommended() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterOptions = [
    { label: "All Events", value: "All" },
    ...events
      .reduce(
        (acc, event) => {
          if (!acc.some((opt) => opt.value === event.category)) {
            acc.push({ label: event.category, value: event.category });
          }
          return acc;
        },
        [] as { label: string; value: string }[],
      )
      .slice(0, 3),
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <Contenaire className="bg-yellow-400 w-full ">
      <section className="px-2 mx-auto max-w-400 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-amber-800">
          <h2 className="text-3xl font-bold font-headline text-white">
            Recommended For You
          </h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
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
        {/* <!-- Bento Grid inspired layout --> */}
        <div className="bg-red-600 min-w-70 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </Contenaire>
  );
}
