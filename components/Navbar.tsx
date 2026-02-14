import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"
export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800 py-2 px-4 flex items-center justify-between">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-25 h-15 flex items-center bg-amber-400 font-bold">
                        <Image src={logo} alt="CongoSphere" width={100} height={100} />
                    </div>
                    <div>
                        <input type="text" placeholder="Search..." className="px-3 py-2 rounded-2xl text-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" />
                    </div>
                    <div>
                        <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link href="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
