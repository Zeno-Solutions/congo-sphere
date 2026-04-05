'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, UserPlus, Edit, Trash2, ChevronLeft, ChevronRight, Menu, Bell, LayoutDashboard, Users, Calendar, BarChart3, Settings } from 'lucide-react'

export default function AdminUserManagementPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedRole, setSelectedRole] = useState('All')
    const [selectedStatus, setSelectedStatus] = useState('All')

    const users = [
        {
            id: 1,
            name: 'Sarah Jenkins',
            email: 'sarah.j@congosphere.com',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdbMSPiXCmncchvQBNsVsyp9Y3GndT8Ye4m03Ci-1BupTKLx0CmOolgY7f5fuKUvE6Y2wmRx4zP6D9pkVn9pRreYB7LbqYDnLjpT3_piTE9uSn46TmoMtxRSrBStCkl8_xw_-GIOLXBge871D2GabmSQ3_-H0M-E07BplFoIOtiB8jEQoC78wZt_wKoPhhWjKeQM1fE8i7dl6jwgvFB_WdyR2064lKV-3zw-i-Unri3NA9M9qKj8qPeJlQJrGjsLAStimNOjNkSDU8',
            permissions: ['Editor', 'Billing'],
            status: 'Active',
            statusColor: 'green-400'
        },
        {
            id: 2,
            name: 'Marcus Vane',
            email: 'm.vane@digital-events.io',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5WxfNODbuUyQ4cK_wFnj2r-Bq_3Wt4g_osbiejUKkVLhUKbDeCo-HI3K2Sc7U8WmSCh28_kfp2apg2rfIkUjLJwPd_scr-8bd62uHvnNK6y0JA5NUbGU6lQRUQzLI8zWr8dlPjyGg-354mItNsaLVjQMl0Lt5zJ4pwMyxMLoV6HYteCtoA0uR-lCmsRHfxkmKBCRu2uR0_UpG_hs89Qfqn8UaxiS4-ubtVwlPStZWZhMnymqG2_qjIKDYMA2hjblHabSGhV1z-4Kp',
            permissions: ['Analyst'],
            status: 'Idle',
            statusColor: 'slate-500'
        },
        {
            id: 3,
            name: 'Lydia Chen',
            email: 'l.chen@sphere-global.com',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_cQKsE4ilyz6gDJZ31AKfXX4jbRihslR4q1LblUlOEDjrmC7o2rLgX75ljp7HvMaDJ64yPXFFvaFAxohQ9l-N4y-pQA7DXhekfEnz_ojzwv28MU9rPclkMqbHnSfgQ2kCzjxEgp9MGUUICY_uW4ROrmdbfyqq7VZ9vMw4KjXgp3SVWwTeiVjGTo4fx_MXx3T-hf2VWyalTS_7xBkFsGpOfklgCLP_AevedPIJwwdeplrcwcS06bmilGC8XmmR5sK6eWm73ZelVmO',
            permissions: ['Viewer'],
            status: 'Active',
            statusColor: 'green-400'
        }
    ]

    const sidebarItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: false },
        { icon: Users, label: 'User Management', active: true },
        { icon: Calendar, label: 'Event Audit', active: false },
        { icon: BarChart3, label: 'Reports', active: false },
        { icon: Settings, label: 'Settings', active: false }
    ]

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
            {/* Global Background Decorative Elements */}
            <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
            <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Navigation Drawer (SideNav) */}
            <aside className="fixed left-0 top-0 hidden md:flex flex-col h-screen w-72 bg-slate-950 shadow-2xl shadow-purple-900/20 rounded-r-[2rem] z-50 py-8">
                <div className="px-8 mb-10 flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-primary">bubble_chart</span>
                    <span className="text-lg font-bold text-white font-headline">Admin Portal</span>
                </div>
                <nav className="flex-1 space-y-1">
                    {sidebarItems.map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className={`px-8 py-4 flex items-center gap-4 transition-all duration-300 ease-in-out hover:bg-white/5 ${item.active
                                ? 'bg-linear-to-r from-[#cc97ff]/20 to-transparent text-white border-l-4 border-[#cc97ff]'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="px-8 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <img
                            alt="Admin Avatar"
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARo3tqp9jbaI36q1kOtyWG7t20taAfFsBCwXU4mW7p-54-WZWGxZjFD3PtZTzb6umOIMRScRId_RQsXYI_wencyZrXEoDx6SOLs-27XKyVUVIIsgO8mlb0anyc-RID0g-77NMF3vtW0tRY-VUry-gc2Ivw_8lfsbux8rp6SI3WAPVuVfwfmJnptDUqqqK3NJUtAL-EfkVb3fSR9id44YQ7zTHc-ai53LRifI392nn4dQw3TE1TnPoPmUjUpnfUfOpVA_1hq0-1wJBD"
                        />
                        <div>
                            <p className="text-sm font-bold text-white">Alex Thorne</p>
                            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Super Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Top App Bar */}
            <header className="fixed top-0 w-full md:left-72 md:w-[calc(100%-18rem)] flex justify-between items-center px-6 py-4 bg-slate-950/50 backdrop-blur-xl z-40">
                <div className="flex items-center gap-4 md:hidden">
                    <Menu size={24} className="text-primary" />
                    <span className="text-xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">
                        Congo Sphere
                    </span>
                </div>
                <div className="hidden md:block">
                    <h1 className="text-2xl font-bold tracking-tight text-white font-headline">User Management</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-slate-400">
                        <Bell size={20} />
                    </button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/50">
                        <img
                            alt="User Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlk65CqvvZA6I1rn9wxomTlwXBrlDwzeIgEcn2Ctmy08b-orVKnEQZXqznC86JOryI4CbLbg7F2L0FEAsObpSuYxW7Pv7ElpWguMZUBBBuC6d2niD4qTdQFjF0OoKXnsNIa97lWE2dfrR5raICAbQU83qXpc3swV9W8up1uIovZbQHoA1WjAQdD-UioVui8ZOK_wy5TXWg3nZh4rY1-MWKPEBygYJHHhFBgnL4wKMtk_larcMwxlqsVPrYXKvUvSVT9Vv26JZctJDk"
                        />
                    </div>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="pt-24 pb-32 px-6 md:ml-72 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Stats / Header Action Area */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-2">Internal Directory</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-headline leading-tight">
                                Manage the <br />
                                <span className="text-secondary">Sphere Community.</span>
                            </h2>
                        </div>
                        <button className="signature-gradient text-on-primary-fixed font-bold px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(204,151,255,0.25)] hover:scale-105 active:scale-95 transition-transform w-fit">
                            <UserPlus size={20} />
                            Create New User
                        </button>
                    </div>

                    {/* Table Filters and Search */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
                        <div className="md:col-span-8 relative">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="Search by name, email, or role..."
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <button className="w-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-4 px-6 rounded-xl flex items-center justify-between transition-colors">
                                <span>Role</span>
                                <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </div>
                        <div className="md:col-span-2">
                            <button className="w-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-4 px-6 rounded-xl flex items-center justify-between transition-colors">
                                <span>Status</span>
                                <span className="material-symbols-outlined">tune</span>
                            </button>
                        </div>
                    </div>

                    {/* Glassmorphic User List */}
                    <div className="space-y-4">
                        {users.map((user) => (
                            <div key={user.id} className="glass-card rounded-[2rem] p-6 group hover:bg-surface-container-high/60 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <img
                                        alt="User Avatar"
                                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/5"
                                        src={user.avatar}
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-headline">{user.name}</h3>
                                        <p className="text-on-surface-variant text-sm">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                                    <div className="hidden lg:block">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Permissions</p>
                                        <div className="flex gap-2">
                                            {user.permissions.map((permission, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-1 ${permission === 'Editor' ? 'bg-primary/10 text-primary' :
                                                        permission === 'Billing' ? 'bg-secondary/10 text-secondary' :
                                                            permission === 'Analyst' ? 'bg-tertiary/10 text-tertiary' :
                                                                'bg-white/10 text-white'
                                                        } text-[10px] font-bold rounded-full`}
                                                >
                                                    {permission}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Status</p>
                                        <span className={`font-bold flex items-center gap-1 text-sm text-${user.statusColor}`}>
                                            <span className={`w-2 h-2 rounded-full bg-${user.statusColor} ${user.status === 'Active' ? 'animate-pulse' : ''}`}></span>
                                            {user.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                            <Edit size={16} />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-error-dim hover:text-error hover:bg-error-container/20 transition-all">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <div className="glass-card flex items-center p-2 rounded-full gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-white/10 hover:text-white transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary-fixed font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10">3</button>
                            <span className="text-slate-600 px-2">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10">12</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-white/10 hover:text-white transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Nav Bar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 flex justify-around items-center pb-6 pt-3 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col items-center justify-center text-slate-500 tap-highlight-transparent active:scale-95 transition-all">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-body mt-1">Explore</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-500 tap-highlight-transparent active:scale-95 transition-all">
                    <span className="material-symbols-outlined">event_available</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-body mt-1">Events</span>
                </div>
                <div className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 tap-highlight-transparent active:scale-95 transition-all">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-body mt-1">Profile</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-500 tap-highlight-transparent active:scale-95 transition-all">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-body mt-1">Inbox</span>
                </div>
            </nav>
        </div>
    )
}