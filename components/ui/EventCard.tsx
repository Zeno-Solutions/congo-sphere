"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Badge } from "lucide-react";



export interface Event {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  isFeatured: boolean;
  category: string;
  eventType: EventType;
  createdAt: string;
  updatedAt: string;
  participants: EventParticipant[];
}

export type EventType = "FREE" | "PAID";

export interface EventParticipant {
  role: ParticipantRole;
  user: EventUser;
}

export type ParticipantRole = "HOST" | "ORGANIZER" | "SPEAKER" | "PARTICIPANT";

export interface EventUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}






















/*interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    tags: string[];
    price: number;
    availableTickets: number;
  };
  className?: string;
}*/

export default function EventCard({ event }: { event: Event }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link
      href={`/events/${event.id}`}
      key={event.id}
      className="rounded-3xl min-w-70 lg:min-w-60 shadow-[-2px_12px_18px_-5px_#111d39] bg-surface-container-low  overflow-hidden flex flex-col group border border-white/5 hover:border-primary/30 transition-all"
    >
      <div className="relative h-45 overflow-hidden">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={event.title}
          src={event.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuCG_xH5NEnQ17YF8bmzenFsVr3TqE5FGf6uTrP246HbZEq4eNUAMUVEe46jZf9YJyxNW5qhVDSm2Qcngukjag2D-Cd-4hGyVXgTtiZi91GpJd66c_WSVD3EAbzu8gWNq9BZio23kE5FRJyoNzXFUa3ng8RW2pJ0kHWohY8fkO0nuRRueKIWYJUyo9KtqUHp0QI4jlPevMVYZ_3eNJtZHcyFaPU77-2fT4YR1rz1q1lIZIfyWsxx_Z2FlKHF7D8FC8k_NUsK6e1XMOpm"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-white p-4 flex flex-col">
        <div className="flex items-center justify-between text-[#cc97ff] gap-2 text-xs font-bold uppercase tracking-wider mb-3">
          <div className="flex flex-col">
            <span className="material-symbols-outlined text-[14px] ">
              <Calendar />
            </span>
            {formatDate(event.startDate)}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="max-w-30 text-left text-[9px]">
              {event.location}
            </span>
          </div>
        </div>
        <h4 className="text-lg md:text-xl text-left line-clamp-2 overflow-hidden font-bold font-headline text-white mb-4 leading-tight">
          {event.title}
        </h4>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-1">
          
        </div>
        <p className="text-on-surface-variant min-h-10 text-sm text-left font-body line-clamp-2 mb-2">
          {event.description}
        </p>
        <div className="mt-auto flex-1 flex justify-between px-3 items-center pt-2 border-t border-white/5 ">
          <span className="text-md md:text-xl font-bold text-white">
            {event.eventType === "PAID" ? (
              /*`$${event.price}`*/
              200
            ) : (
              <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 w-20 h-8 flex items-center justify-center text-sm font-bold">
                Free
              </Badge>
            )}
          </span>

          <span className="text-[#cc97ff] font-bold text-sm">
            {/*event.availableTickets*/} 200 left
          </span>
        </div>
      </div>
    </Link>
  );
}
