'use client'
import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Badge } from 'lucide-react'

interface EventCardProps {
    event: {
        id: string
        title: string
        description: string
        date: string
        location: string
        image: string
        tags: string[]
        price: number
        availableTickets: number
    }
    className?: string
}

export default function EventCard({ event, className = '' }: EventCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <Link href={`/events/${event.id}`}
            key={event.id}
            className="rounded-3xl shadow-[-2px_12px_18px_-5px_#111d39] bg-surface-container-low  overflow-hidden flex flex-col group border border-white/5 hover:border-primary/30 transition-all"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={event.title}
                    src={event.image}
                />
            </div>
            <div className="text-white p-6 flex flex-col">
                <div className="flex items-center justify-between text-[#cc97ff] gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                    <div className='flex flex-col'>
                        <span className="material-symbols-outlined text-[14px] ">calendar_today</span>
                        {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="max-w-50 truncate">{event.location}</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold font-headline text-white mb-2 leading-tight">{event.title}</h4>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">

                    {event.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-tighter"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-on-surface-variant min-h-10 text-sm font-body line-clamp-2 mb-6">
                    {event.description}
                </p>
                <div className="mt-auto flex-1 flex justify-between px-3 items-center pt-4 border-t border-white/5 ">
                    <span className="text-xl font-bold text-white">{event.price ? `$${event.price}` : <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 w-20 h-8 flex items-center justify-center text-sm font-bold">
                        Free
                    </Badge>}</span>

                    <button className="cursor-pointer text-[#cc97ff] font-bold text-sm hover:underline">
                        {event.availableTickets} left
                    </button>
                </div>
            </div>
        </Link>

    )
}