import React from 'react'
import Image from 'next/image'
export default function Navbar() {
    let menu = [
        { name: 'Accueil', href: '#' },
        { name: 'Événements', href: '#' },
        { name: 'Explorer', href: '#' },
        { name: 'A propos', href: '#' },
        { name: 'Contact', href: '#' }
    ]
    return (
        <div>
            <nav
                className="fixed top-0 w-full flex justify-evenly items-center px-6 py-4 bg-slate-950/50 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
                <div className="flex items-center gap-3">
                    <span
                        className="text-2xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">
                        <Image src="/icon.jpg" alt="Logo" width={40} height={40} />
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a className="text-slate-400 font-label text-sm transition-colors hover:text-white" href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="text-slate-400 font-bold font-label text-sm px-4 py-2 hover:text-white transition-all active:scale-95">Login</button>
                    <button
                        className="bg-linear-to-r from-primary to-secondary text-on-primary-fixed font-bold font-label text-sm px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95">Register</button>
                </div>
            </nav>
        </div>
    )
}
