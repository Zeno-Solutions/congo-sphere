"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { events } from '@/lib/data'
import EventCard from '../ui/EventCard'
import Contenaire from '../Contenaire'
export default function Recommended() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const filterOptions = [
        { label: 'All Events', value: 'All' },
        ...events.reduce((acc, event) => {
            if (!acc.some(opt => opt.value === event.category)) {
                acc.push({ label: event.category, value: event.category })
            }
            return acc
        }, [] as { label: string, value: string }[]).slice(0, 3)
    ]

    const filteredEvents = selectedCategory === 'All' ? events : events.filter(event => event.category === selectedCategory)

    return (
        <Contenaire>
            <section className='px-6 mx-auto max-w-400'>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h2 className="text-3xl font-bold font-headline text-white">Recommended For You</h2>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar">
                        {filterOptions.map(option => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedCategory(option.value)}
                                className={`px-3 py-2 cursor-pointer hover:bg-[#00000049] rounded-full text-[12px] font-bold whitespace-nowrap transition-colors ${option.value === selectedCategory
                                    ? 'text-on-primary-fixed bg-blue-500 hover:bg-blue-500'
                                    : 'bg-[#000000af] text-on-surface-variant hover:bg-surface-container-highest'
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
                {/* <!-- Bento Grid inspired layout --> */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>

        </Contenaire>)
}
