import React from 'react'

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 flex justify-around items-center pb-6 pt-3 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
            <a className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 active:scale-95 transition-all" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                <span className="text-[10px] uppercase font-bold tracking-widest Manrope mt-1">Explore</span>
            </a>
            <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 active:scale-95 transition-all" href="#">
                <span className="material-symbols-outlined">event_available</span>
                <span className="text-[10px] uppercase font-bold tracking-widest Manrope mt-1">My Events</span>
            </a>
            <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 active:scale-95 transition-all" href="#">
                <span className="material-symbols-outlined">mail</span>
                <span className="text-[10px] uppercase font-bold tracking-widest Manrope mt-1">Inbox</span>
            </a>
            <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 active:scale-95 transition-all" href="#">
                <span className="material-symbols-outlined">person_pin</span>
                <span className="text-[10px] uppercase font-bold tracking-widest Manrope mt-1">Profile</span>
            </a>
        </nav>
    )
}
