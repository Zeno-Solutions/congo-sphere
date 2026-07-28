import React from "react";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
export default function Hero() {
  return (
    <section className="relative px-6 min-h-screen bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
      {/* <!-- Background Effects --> */}
      <form action="/search" method="get">
        <SearchBar
          placeholder="Search events, festivals, or categories..."
          name="q"
        />
      </form>
      <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
      <div className="hero-glow top-1/4 left-1/4"></div>
      <div
        className="hero-glow top-1/3 right-1/4"
        style={{ animationDelay: "-2s" }}
      ></div>
      {/* <!-- Background Pattern --> */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(139,92,246,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* <!-- Hero Content --> */}
      <section className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Explore events, festivals, and categories around you.
        </p>
        <Link
          href={"/events"}
          className="px-8 py-4 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
        >
          Get Started
        </Link>
      </section>

      {/* <!-- Scroll Indicator --> */}
      <div
        className="hidden md:block md:absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-violet-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
