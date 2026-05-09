'use client'

import React from 'react'
import Link from 'next/link'
import { Edit, LogOut, Calendar, ChevronRight, Shield, Bell, CreditCard, HelpCircle, Download, UserX } from 'lucide-react'

export default function UserProfilePage() {
    const userEvents = [
        {
            id: 1,
            title: 'Neon Nights: Underground',
            date: 'Oct 24 • 11:00 PM',
            status: 'Confirmed',
            statusColor: 'primary',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOOuECIfG5TCRD_CG3nodrpE8X9OZFcjmnjV2d_YKxqwaQpPPKO5NyBxACEvjLAF-aIiTGuS30Yfu_ki97idRukIweqmMa-6BjOO--tk3bGO3m23lowjwazKG1GxG20K05xtC1StEWxD6esfeMoBZIkYWN3R5ED9hWQg4mReRf3o1ZEhoqx_IUED2cOmghXkxrKMYfBfKJrNpoWNwoHlBc5YzRv_53L39LTqPoXpZlhmhrrMJZd_L9ZNT_CWE9n4MWyz5AV33M0MYc'
        },
        {
            id: 2,
            title: 'Solaris Summer Fest',
            date: 'Aug 12 • 02:00 PM',
            status: 'Waitlist',
            statusColor: 'secondary',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFgU7KEbUqAjvo4PxrYft26nGAZ0Fe13REzULJjz8apN5wRYByb_vXuJh3pO4yQhUdveZPahjawxFGefTFX-Ei38qHGGEvBIP0A3DqyYIj8BOrW5M5vCJFuMVoEDhqVwn47CJemok7OfuSHGWBpPw_4xnY_M0F9yL6NfAMSxGfqkd1Gg7ycQNo65wWkYqYg1dkpmq7zi-rtwVmFt_w5BZIG9ILHmJQVEXGTBlfFjTsn73E2nqbGrdpiesh2TW0BrFTkLZtPror8K9t'
        }
    ]

    const accountSettings = [
        { icon: Shield, label: 'Security', color: 'primary' },
        { icon: Bell, label: 'Notifications', color: 'secondary' },
        { icon: CreditCard, label: 'Billing', color: 'tertiary' },
        { icon: HelpCircle, label: 'Support', color: 'on-surface-variant' }
    ]

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
            {/* Global Background Decorative Elements */}
            <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
            <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Top Navigation */}
            <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-950/50 backdrop-blur-xl z-50 bg-slate-900/40 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-purple-400 dark:text-purple-300">bubble_chart</span>
                        <h1 className="text-2xl font-black bg-gradient-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">
                            Congo Sphere
                        </h1>
                    </Link>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                        alt="User Profile"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBDJX4yoYLKUMWjb4X6-6eBmaCX6l4GRtf-1DTVJ-SB9MVwWTFNVN90AdG4NcxoXORGUvBW2BU2YQ88rHVTxhqLkWtCfclNeAmDAdHr7CkDAh6vf67w4aQrFwyR2g4AHkta4PRcfY5cTOUfSxn8RzweqFiFRqqID9UMjhebDhmAWCoqJWHBEgOdh0qzFSoIzu15nLUJ_-myNtT1MwNG8n9w51wQ9O7x49GuAVKhYfER6GaHqR3hOYnPOMc14uwZdS4uC-aVv7WBCLX"
                    />
                </div>
            </header>

            <main className="pt-24 px-6 max-w-4xl mx-auto space-y-8">
                {/* Profile Hero Section */}
                <section className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative glass-panel rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1">
                                <img
                                    alt="User Profile"
                                    className="w-full h-full rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa3ruVMLTf1XEGaCW6vY9GboJWQ2sY_PC10Lch6qZ4j5RNU6gr6iWOHNWVWb2rF44_f_AZXBszxRlAeuzW6V5tF06RLtaArlc21AjvphNa9KQZv6xPGCq2PtdzNhvI9dktCJDy1-SReb-Q2ZvleqdPjvxlLIUd5Ad5K-6XsRZ2IYN_fA1d9Dhfc6-iwU76icNfS-kVrH41gVl_b9pnfINWDQxtDpkR3rVg83_LBKTwWy9ZQbF_AH4KaaAgl2kK43JoiSPYxLu7IJlj"
                                />
                            </div>
                            <button className="absolute bottom-0 right-0 bg-primary text-on-primary-fixed p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                                <Edit size={16} />
                            </button>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight">Marcus Holloway</h2>
                            <p className="text-on-surface-variant font-body mt-1">@mholloway_void</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold text-primary">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    ELITE MEMBER
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold text-secondary">
                                    <span className="material-symbols-outlined text-sm">mail</span>
                                    m.holloway@sphere.io
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <button className="w-full md:w-auto px-8 py-3 signature-gradient rounded-full text-on-primary-fixed font-bold text-sm transition-transform active:scale-95 shadow-[0_0_20px_rgba(204,151,255,0.3)]">
                                Edit Profile
                            </button>
                            <button className="w-full md:w-auto px-8 py-3 border border-outline-variant/30 hover:bg-white/5 rounded-full text-error font-bold text-sm transition-colors">
                                Logout
                            </button>
                        </div>
                    </div>
                </section>

                {/* Bento Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* My Events Section */}
                    <section className="md:col-span-2 space-y-4">
                        <div className="flex justify-between items-end px-2">
                            <h3 className="text-xl font-bold font-headline text-on-surface">My Events</h3>
                            <Link href="/manage-event" className="text-primary text-sm font-semibold hover:underline">
                                View All
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {userEvents.map((event) => (
                                <div key={event.id} className="glass-panel rounded-lg p-4 flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-2">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt={event.title} className="w-full h-full object-cover" src={event.image} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-on-surface">{event.title}</h4>
                                        <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                                            <Calendar size={12} />
                                            {event.date}
                                        </p>
                                    </div>
                                    <div className={`px-3 py-1 bg-${event.statusColor}/10 text-${event.statusColor} text-[10px] font-black rounded-full uppercase tracking-tighter`}>
                                        {event.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Settings / Preferences */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-on-surface px-2">Account</h3>
                        <div className="glass-panel rounded-lg divide-y divide-white/5 overflow-hidden">
                            {accountSettings.map((setting, index) => (
                                <button key={index} className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <setting.icon size={20} className={`text-${setting.color}`} />
                                        <span className="text-sm font-medium">{setting.label}</span>
                                    </div>
                                    <ChevronRight size={20} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Privacy Section */}
                <div className="mt-8 p-6 bg-surface-container-low rounded-xl border border-white/5">
                    <h4 className="text-lg font-bold font-headline mb-4">Privacy & Data</h4>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                        Control how your data is used across the Congo Sphere ecosystem. We value your privacy and only share information necessary for event coordination.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-medium cursor-pointer hover:bg-primary/20 transition-colors">
                            Manage Permissions
                        </span>
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-medium cursor-pointer hover:bg-primary/20 transition-colors flex items-center gap-2">
                            <Download size={14} />
                            Download My Data
                        </span>
                        <span className="px-4 py-2 bg-error/10 text-error rounded-full text-xs font-medium cursor-pointer hover:bg-error/20 transition-colors flex items-center gap-2">
                            <UserX size={14} />
                            Deactivate Account
                        </span>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation (Mobile Only) */}
            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
                <Link href="/" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all active:scale-95 tap-highlight-transparent">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Explore</span>
                </Link>
                <Link href="/manage-event" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all active:scale-95 tap-highlight-transparent">
                    <span className="material-symbols-outlined">event_available</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">My Events</span>
                </Link>
                <Link href="#" className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all active:scale-95 tap-highlight-transparent">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Inbox</span>
                </Link>
                <Link href="/user-profile" className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 transition-all active:scale-95 tap-highlight-transparent">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Profile</span>
                </Link>
            </nav>
        </div>
    )
}