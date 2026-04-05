'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Filter, Search } from 'lucide-react'
import { events, getEventsByCategory } from '@/lib/data'
import EventCard from '@/components/ui/EventCard'
import Loader from '@/components/ui/Loader'
import { Select } from "@/components/ui/select"
import Recommended from '@/components/Recommended/Recommended'

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isLoading, setIsLoading] = useState(false)

    const categories = ['All', ...new Set(events.map(event => event.category))]

    const filteredEvents = useMemo(() => {
        let filtered = events

        if (selectedCategory !== 'All') {
            filtered = getEventsByCategory(selectedCategory)
        }

        if (searchTerm) {
            filtered = filtered.filter(event =>
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        return filtered
    }, [searchTerm, selectedCategory])

    const handleCategoryChange = (category: string) => {
        setIsLoading(true)
        setSelectedCategory(category)
        setTimeout(() => setIsLoading(false), 300) // Simulate loading
    }

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
            {/* Global Background Decorative Elements */}

            <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
            <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Top Navigation */}

            <main className="pt-24 pb-32 px-6">
                <div className="max-w-7xl w-full px-10">
                    {/* Header */}
                    <div className="mb-12 ml-20 ">
                        <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-on-surface mt-2 tracking-tighter">
                            Discover the Sphere
                        </h2>
                        <p className="text-on-surface-variant font-body mt-4 max-w-xl text-lg leading-relaxed">
                            Explore immersive experiences that push the boundaries of reality and creativity.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 px-10">
                        <div className="md:col-span-8 relative">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                className="w-full bg-surface-container-low border focus:outline-none border-purple-600 rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="Search events..."
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="md:col-span-4">
                            <select
                                className="w-full bg-surface-container-low focus:outline-none border border-purple-600 rounded-xl py-4 px-6 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                                value={selectedCategory}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option className='w-full bg-[#0f113b] focus:outline-none border border-purple-600 rounded-xl py-4 px-6 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all appearance-none' key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Events Grid */}
                    {isLoading ? (
                        <div className="flex justify-center py-12 ">
                            <Loader size="lg" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1  px-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}

                    {filteredEvents.length === 0 && !isLoading && (
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">search_off</span>
                            <h3 className="text-xl font-bold text-on-surface-variant mb-2">No events found</h3>
                            <p className="text-on-surface-variant">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Bottom Navigation (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <Link href="/" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Explore</span>
                </Link>
                <div className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Events</span>
                </div>
                <Link href="/user-profile" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">person_pin</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Profile</span>
                </Link>
                <Link href="#" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Inbox</span>
                </Link>
            </nav>
        </div>
    )
}