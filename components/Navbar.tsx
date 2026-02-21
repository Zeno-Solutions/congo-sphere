import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"
import { Sun, Bell, Search, Menu } from 'lucide-react';
import Contenaire from "./Contenaire";
export default function Navbar() {
    let navlinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
    return (
        <div className="sticky left-0 top-0 w-full border-b border-gray-700 z-50 bg-[rgba(101, 103, 242, 0.210)] backdrop-blur-[10px] backdrop-saturate-[1.00]">
            <Contenaire className=" bg-transparent py-4 ">
                <nav className="flex items-center  justify-between">
                    <div className="container mx-auto flex items-center gap-1 justify-evenly">
                        <div className="w-25 h-15 overflow-y-hidden flex justify-center items-center relative">
                            <Image src={logo} alt="Logo" className="w-25 h-25 my-6" />
                        </div>
                        <div className="relative hidden md:flex items-center space-x-4">
                            <Search color="white" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input type="search" placeholder="Search..." className="px-3 py-2 rounded-2xl md:w-80 lg:w-96 text-sm bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white pl-10" />

                        </div>
                        <div className="hidden md:flex">
                            {navlinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-bold">{link.name}</Link>
                            ))}
                        </div>
                        <div className="flex relative items-center space-x-4">
                            <div className="relative md:hidden">
                                <Search color="white" size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                <input type="search" placeholder="Search..." className=" px-3 py-2 rounded-2xl w-70 text-sm bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white pl-10" />

                            </div>
                            <Bell color="white" />
                            <Menu color="white" className="md:hidden" />
                        </div>
                    </div>
                </nav>
            </Contenaire>
        </div >

    )
} 