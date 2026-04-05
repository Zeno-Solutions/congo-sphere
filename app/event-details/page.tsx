'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Ticket, Star, Share, Heart, ArrowLeft } from 'lucide-react'

export default function EventDetailsPage() {
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
            <h1 className="text-2xl font-black bg-gradient-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline tracking-tight">
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
        <section className="relative h-[618px] w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Cinematic wide shot of a futuristic music festival with vibrant purple and pink stage lights reflecting off a mirrored surface at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_xH5NEnQ17YF8bmzenFsVr3TqE5FGf6uTrP246HbZEq4eNUAMUVEe46jZf9YJyxNW5qhVDSm2Qcngukjag2D-Cd-4hGyVXgTtiZi91GpJd66c_WSVD3EAbzu8gWNq9BZio23kE5FRJyoNzXFUa3ng8RW2pJ0kHWohY8fkO0nuRRueKIWYJUyo9KtqUHp0QI4jlPevMVYZ_3eNJtZHcyFaPU77-2fT4YR1rz1q1lIZIfyWsxx_Z2FlKHF7D8FC8k_NUsK6e1XMOpm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>

          {/* Back Button */}
          <Link
            href="/"
            className="absolute top-6 left-6 z-10 p-3 rounded-full bg-surface/20 backdrop-blur-md border border-white/10 hover:bg-surface/30 transition-colors"
          >
            <ArrowLeft size={20} className="text-on-surface" />
          </Link>

          {/* Floating Hero Labels */}
          <div className="absolute bottom-12 left-6 right-6 md:left-12 lg:left-24 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary font-bold text-[10px] uppercase tracking-widest border border-primary/20">
                Featured Experience
              </span>
              <span className="px-4 py-1.5 rounded-full bg-secondary/20 backdrop-blur-md text-secondary font-bold text-[10px] uppercase tracking-widest border border-secondary/20">
                Digital Arts
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-4">
              Neon Genesis <br />
              <span className="text-gradient">Audio-Visual Summit</span>
            </h2>
            <div className="flex items-center gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span className="font-medium text-sm">Oct 24 - Oct 26, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-secondary" />
                <span className="font-medium text-sm">Silicon Valley, CA</span>
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
                <p>
                  Dive into a three-day immersive odyssey where the boundaries between code, sound, and visual architecture dissolve.
                  The Neon Genesis Summit is not just an event; it's a living, breathing digital organism designed to challenge your sensory perceptions.
                </p>
                <p>
                  Join world-renowned generative artists, neural network architects, and pioneer sound designers as they unveil the future of spatial computing and interactive performance.
                  Across four distinct "Spheres" of activation, attendees will witness exclusive debuts of modular synthesizer arrays and 360-degree holographic projections.
                </p>
              </div>
            </div>

            {/* Bento Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">auto_awesome</span>
                  <h4 className="text-xl font-bold font-headline mb-2">Immersive Stages</h4>
                  <p className="text-on-surface-variant text-sm">Experience spatial audio mapping in our high-fidelity void chambers.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4">bolt</span>
                  <h4 className="text-xl font-bold font-headline mb-2">Exclusive Drops</h4>
                  <p className="text-on-surface-variant text-sm">Limited edition NFT wearables for all verified attendees.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Action Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-surface-container-high p-8 rounded-xl shadow-2xl shadow-purple-900/10 border border-outline-variant/10">
              <div className="mb-8">
                <span className="text-on-surface-variant text-sm block mb-1">Standard Access</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-headline">$249</span>
                  <span className="text-on-surface-variant text-sm">/ early bird</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                  <Ticket size={20} className="text-tertiary" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">Availability</p>
                    <p className="text-sm font-medium">84 Tickets Remaining</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/40">
                  <Clock size={20} className="text-error" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">Registration Closes</p>
                    <p className="text-sm font-medium">Oct 15, 2024</p>
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

            {/* Location Map Snippet */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden aspect-video relative group cursor-pointer">
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="A stylized digital map showing urban city grid with glowing purple neon routes and location markers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBog-tXXSSKMPs3pWGKQUcxKmb19bNQHZvZRUWfyi4ijd3nsjq9o0u3btoauyRqXbBgiL7LvQk0BTtrQ-o2U4IQRGyyW-Ufl6isORNGRjE2PKxVr_rsSh_OAcS1_5p3pJMrO6h0fjRhduRg2JcfvfDLXWEMpq_gpBUdcv0lqzG8SiSO42RKErWqMJWuOx6huI5Fk9oa42CJhftUaKERnTbsqUeU9XdQ93XCi_Tv42MtiDwEfg7qF6QI6zwRk5QM5vPyD4hgedPMmcDT"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-3xl text-white mb-2">map</span>
                <h5 className="text-white font-bold">View Venue Map</h5>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Explore</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 active:scale-95 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">My Events</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Inbox</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 transition-all">
          <span className="material-symbols-outlined">person_pin</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">Profile</span>
        </div>
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