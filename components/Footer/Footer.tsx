import React from 'react'

export default function Footer() {
    return (
        <footer className="hidden md:block border-t border-white/5 pt-16 pb-12 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-12 mb-16">
                <div className="col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary text-2xl">bubble_chart</span>
                        <span className="text-xl font-black bg-gradient-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">Congo Sphere</span>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Designing the future of event discovery. One glow at a time.</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary transition-all" href="#">
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary transition-all" href="#">
                            <span className="material-symbols-outlined text-lg">podcasts</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary transition-all" href="#">
                            <span className="material-symbols-outlined text-lg">share</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="text-white font-bold mb-6 font-headline">Explore</h5>
                    <ul className="space-y-4 text-on-surface-variant text-sm font-body">
                        <li><a className="hover:text-primary transition-colors" href="#">Popular Events</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Festivals</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Workshops</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Nightlife</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-bold mb-6 font-headline">Support</h5>
                    <ul className="space-y-4 text-on-surface-variant text-sm font-body">
                        <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Ticketing Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-bold mb-6 font-headline">Partners</h5>
                    <ul className="space-y-4 text-on-surface-variant text-sm font-body">
                        <li><a className="hover:text-primary transition-colors" href="#">Host an Event</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Brand Solutions</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Sponsorships</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
                © 2024 Congo Sphere Digital. Designed for the Void.
            </div>
        </footer>
    )
}
