'use client'
import SearchBar from '@/components/SearchBar/SearchBar'
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Filter, Search } from 'lucide-react'
import { events, getEventsByCategory } from '@/lib/data'
import EventCard from '@/components/ui/EventCard'
import Loader from '@/components/ui/Loader'
import { Select } from "@/components/ui/select"
import Recommended from '@/components/Recommended/Recommended'
import Contenaire from '@/components/Contenaire'

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isLoading, setIsLoading] = useState(false)

    const categories = ['All', ...new Set(events.map(event => event.category))]
    const categoryOptions = categories.map(cat => ({ label: cat, value: cat }))

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
        <Contenaire className=' p-10 h-auto'>
            <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">

                {/* Top Navigation */}

                <main className=" p-6 bg-slate-950">
                    <div className="max-w-7xl w-full px-10 mx-auto">
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
                                <Search className="material-symbols-outlined z-10 absolute left-5 top-1/2 transform -translate-y-1/2 " />
                                <input
                                    className="w-full bg-surface-container-low border focus:outline-none border-purple-600 rounded-[40px] py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
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
                                <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4">search_off</span>
                                <h3 className="text-xl font-bold text-on-surface-variant mb-2">No events found</h3>
                                <p className="text-on-surface-variant">Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </main>
                {/* Bottom Navigation (Mobile Only) */}

            </div>
        </Contenaire>

    )
}