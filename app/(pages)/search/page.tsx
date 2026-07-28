"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { events } from "@/lib/data";
import EventCard from "@/components/ui/EventCard";
import Contenaire from "@/components/Contenaire";

function matchesSearch(event: (typeof events)[number], query: string) {
  const normalized = query.trim().toLowerCase();
  return (
    event.title.toLowerCase().includes(normalized) ||
    event.description.toLowerCase().includes(normalized) ||
    event.location.toLowerCase().includes(normalized) ||
    event.category.toLowerCase().includes(normalized) ||
    event.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);

  const filteredEvents = useMemo(() => {
    if (!query.trim()) return [];
    return events.filter((event) => matchesSearch(event, query));
  }, [query]);

  return (
    <Contenaire className="h-auto ">
      <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
        <main className="p-6">
          <div className="max-w-7xl w-full lg:px-10 mx-auto">
            <div className="mx-5 mb-12 lg:ml-20">
              <h2 className="text-4xl md:text-6xl font-extrabold  text-center font-headline text-on-surface mt-2 tracking-tighter">
                Résultats de recherche
              </h2>
              <p className="text-on-surface-variant font-body mt-4 max-w-xl text-lg leading-relaxed">
                <span className="font-semibold text-white"></span>
              </p>
            </div>

            <div className=" flex justify-evenly px-20 mb-20">
              <div className="rounded-full relative w-200 bg-[#050b37be] cursor-none">
                <Search className="material-symbols-outlined z-10 absolute left-5 top-1/2 transform -translate-y-1/2 " />
                <input
                  className="w-full rounded-full pl-12 h-14 border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Chercher des événements..."
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const nextUrl = `/search?q=${encodeURIComponent(searchTerm)}`;
                      window.location.href = nextUrl;
                    }
                  }}
                />
              </div>
            </div>

            {query.trim() ? (
              filteredEvents.length ? (
                <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">
                    <SearchX size={50} className="text-purple-500" />
                  </span>
                  <h3 className="text-xl font-bold text-on-surface-variant mb-2">
                    Aucun événement trouvé lier{" "}
                    <span className="text-purple-500">{query || "--"}</span>
                  </h3>
                  <p className="text-on-surface-variant">
                    Essayez une autre recherche ou vérifiez l’orthographe.
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">
                  search
                </span>
                <h3 className="text-xl font-bold text-on-surface-variant mb-2">
                  Entrez un terme pour commencer
                </h3>
                <p className="text-on-surface-variant">
                  Recherchez des événements par titre, description, lieu,
                  catégorie ou tag.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </Contenaire>
  );
}
