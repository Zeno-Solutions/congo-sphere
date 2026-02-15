import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"
import { Sun, Bell, Search } from 'lucide-react';
import Contenaire from "./Contenaire";
export default function Navbar() {
    let navlinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
    return (
        <div className="sticky left-0 top-0 w-full">
            <Contenaire className="bg-gray-800 py-4">
                <nav className="flex items-center justify-between glass-strong">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="w-25 h-15 overflow-y-hidden flex justify-center items-center relative">
                            <Image src={logo} alt="Logo" className="w-25 h-25 my-6" />
                        </div>
                        <div className="relative">
                            <Search color="white" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input type="search" placeholder="Search..." className="px-3 py-2 rounded-2xl w-md text-sm bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white pl-10" />

                        </div>
                        <div className="hidden sm:flex">
                            {navlinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{link.name}</Link>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <Sun color="white" />
                            <Bell color="white" />
                        </div>
                    </div>
                </nav>
            </Contenaire>

        </div >
    )
}
