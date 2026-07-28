"use client";

import React, { useState, useMemo } from "react";

import { Search } from "lucide-react";
import { events, getEventsByCategory } from "@/lib/data";
import EventCard from "@/components/ui/EventCard";
import Loader from "@/components/ui/Loader";
import { Select } from "@/components/ui/select";
import Contenaire from "@/components/Contenaire";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", ...new Set(events.map((event) => event.category))];
  const categoryOptions = categories.map((cat) => ({ label: cat, value: cat }));

  const filteredEvents = useMemo(() => {
    let filtered = events;

    if (selectedCategory !== "All") {
      filtered = getEventsByCategory(selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300); // Simulate loading
  };

  return (
    <Contenaire className="h-auto">
      <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
        {/* Top Navigation */}

        <main className=" p-6">
          <div className="max-w-7xl w-full lg:px-10 mx-auto text-center">
            {/* Header */}
            <div className="mx-5 mb-12 lg:ml-20 text-center">
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-on-surface mt-2 tracking-tighter">
                Discover the Sphere
              </h2>
              <p className="mt-5">
                Explore immersive experiences that push the boundaries of
                reality and creativity.
              </p>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 px-10">
              <div className="md:col-span-8 relative">
                <Search className="material-symbols-outlined z-10 absolute left-5 top-1/2 transform -translate-y-1/2 " />
                <input
                  className="w-full rounded-full pl-12 h-14 border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Search events..."
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:col-span-4">
                <Select
                  options={categoryOptions}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="All Categories"
                />
              </div>
            </div>

            {/* Events Grid */}
            {isLoading ? (
              <div className="flex justify-center py-12 ">
                <Loader size="lg" />
              </div>
            ) : (
              <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}

            {filteredEvents.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">
                  search_off
                </span>
                <h3 className="text-xl font-bold text-on-surface-variant mb-2">
                  No events found
                </h3>
                <p className="text-on-surface-variant">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </main>
        {/* Bottom Navigation (Mobile Only) */}
      </div>
    </Contenaire>
  );
}
