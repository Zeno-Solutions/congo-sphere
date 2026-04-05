'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, MapPin, Clock, Ticket, Star, Share, Heart, ArrowLeft, ExternalLink } from 'lucide-react'
import { getEventById } from '@/lib/data'
import Loader from '@/components/ui/Loader'

export default function EventDetailPage() {
    const params = useParams()
    const eventId = params.id as string
    const event = getEventById(eventId)

    if (!event) {
        return (
            <div className="min-h-screen bg-surface text-on-surface font-body flex items-center justify-center">
                <div className="text-center space-y-4">
                    <span className="material-symbols-outlined text-6xl text-error">error_outline</span>
                    <h2 className="text-2xl font-bold">Event not found</h2>
                    <p className="text-on-surface-variant">The event you're looking for doesn't exist.</p>
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 signature-gradient text-on-primary-fixed font-bold px-6 py-3 rounded-full hover:scale-105 transition-all"
                    >
                        <ArrowLeft size={16} />
                        Back to Events
                    </Link>
                </div>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const formatTime = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
            {/* Global Background Decorative Elements */}
            <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
            <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Top Navigation */}
            <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-950/50 backdrop-blur-xl z-50">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-purple-400">bubble_chart</span>
                        <h1 className="text-2xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline tracking-tight">
                            Congo Sphere
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">search</span>
                    </button>
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 overflow-hidden scale-95 active:scale-90 transition-transform cursor-pointer">
                        <img
                            alt="User Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyNmT_t4XzHGGoKytjGMSdAuSNLf90LkrCt1jdHHXINUIuREQSJPNmeCP5Z_gCVo_8WLuttOjhBEk94pvUivgaBHCu7bNcThW0e3MtI55VHS6swryf0bKT3qENUXwNTLU5sHvdbatLzuhsGCPaL_A8W8hfu9fmzUBbLOmfoEVPZzzRMem9gcvU1A2mOqNlCGSl3bftAyp85uk4UwiisgOSZj5QQqMQ_vEQASpRt9Yp5jWvI8kLVYUfgd4tHtIWHZz8txUwB0RCvuvE"
                        />
                    </div>
                </div>
            </header>

            <main className="pb-32">
                {/* Hero Section */}
                <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        alt={event.title}
                        src={event.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>

                    {/* Back Button */}
                    <Link
                        href="/events"
                        className="absolute top-6 left-6 z-10 p-3 rounded-full bg-surface/20 backdrop-blur-md border border-white/10 hover:bg-surface/30 transition-colors"
                    >
                        <ArrowLeft size={20} className="text-on-surface" />
                    </Link>

                    {/* Floating Hero Labels */}
                    <div className="absolute bottom-12 left-6 right-6 md:left-12 lg:left-24 max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-6">
                            {event.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest border ${tag === 'Featured Experience' ? 'bg-primary/20 text-primary border-primary/20' :
                                        tag === 'Premium Experience' ? 'bg-secondary/20 text-secondary border-secondary/20' :
                                            'bg-tertiary/20 text-tertiary border-tertiary/20'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-4">
                            {event.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-6 text-on-surface-variant">
                            <div className="flex items-center gap-2">
                                <Calendar size={20} className="text-primary" />
                                <span className="font-medium text-sm">
                                    {formatDate(event.date)}
                                    {event.endDate && event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-secondary" />
                                <span className="font-medium text-sm">{event.location}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Grid */}
                <section className="px-6 md:px-12 lg:px-24 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Description Card */}
                        <div className="glass-panel p-8 rounded-xl border border-white/5">
                            <h3 className="text-2xl font-bold font-headline mb-6">Experience Narrative</h3>
                            <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                                <p>{event.description}</p>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {event.features.map((feature: string, index: number) => (
                                <div key={index} className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 group hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-primary">check_circle</span>
                                    <span className="font-medium text-on-surface">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Action Panel */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-28 bg-surface-container-high p-8 rounded-xl shadow-2xl shadow-purple-900/10 border border-outline-variant/10">
                            <div className="mb-8">
                                <span className="text-on-surface-variant text-sm block mb-1">Standard Access</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black font-headline">${event.price}</span>
                                    <span className="text-on-surface-variant text-sm">/ ticket</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                                    <Ticket size={20} className="text-tertiary" />
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">Availability</p>
                                        <p className="text-sm font-medium">{event.availableTickets} Tickets Remaining</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                                    <Clock size={20} className="text-error" />
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">Registration Closes</p>
                                        <p className="text-sm font-medium">{formatDate(event.registrationDeadline)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className="w-full py-4 rounded-full signature-gradient text-on-primary-fixed font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                    Register Now
                                </button>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-semibold transition-colors flex items-center justify-center gap-2">
                                        <Heart size={18} />
                                        Save
                                    </button>
                                    <button className="flex-1 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-semibold transition-colors flex items-center justify-center gap-2">
                                        <Share size={18} />
                                        Share
                                    </button>
                                </div>
                            </div>

                            <p className="text-center text-[10px] text-on-surface-variant mt-4 font-label uppercase tracking-widest">
                                Secure transaction powered by SpherePay
                            </p>
                        </div>

                        {/* Category Info */}
                        <div className="bg-surface-container-low rounded-xl p-6 border border-white/5">
                            <h4 className="font-bold text-on-surface mb-2">Category</h4>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                                {event.category}
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <Link href="/" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Explore</span>
                </Link>
                <Link href="/events" className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Events</span>
                </Link>
                <Link href="/user-profile" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">person_pin</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Profile</span>
                </Link>
                <Link href="#" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Inbox</span>
                </Link>
            </nav>

            {/* Floating Action Button */}
            <div className="fixed bottom-28 right-6 md:bottom-12 md:right-12 z-40 lg:hidden">
                <button className="w-16 h-16 rounded-full bg-secondary shadow-2xl shadow-secondary/40 flex items-center justify-center text-on-secondary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined text-3xl">local_activity</span>
                </button>
            </div>
        </div>
    )
}