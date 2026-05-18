"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Upload, MapPin, Calendar, Send, Save, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Input from "@/components/ui/input";
export default function ManageEventPage() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Event data:", eventData);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-950/50 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-purple-400 dark:text-purple-300 scale-95 active:scale-90 transition-transform">
              bubble_chart
            </span>
            <h1 className="text-2xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline tracking-tight">
              Congo Sphere
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5 overflow-hidden">
            <Image
              alt="User Profile"
              className="w-full h-full object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXVnVXUO1zlZs2ftQ2JavonHANC9Xj7O8YwNiB-cwyRbL5OoASL_WIDHomAV2igwgA7am7t5WGk2uBXQllcEJgw5m6tMSni4ExSxc9PknDl13kEwrE4b_THBaUQV6ty5dR8J9xRVqMISGX5r7WQll1ncP9GFIQCnlnSH9HbRRj45vBtItPSBPmnySl4_Ett7rxwPx3D4IRUG1g7CL5sr8r7FNcgBd6WszvZcSFbHEDtFGB3a24i6OdKpmOWLPN1eq_z5HrtO6hJ2a"
              width={500}
              height={500}
            />
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-0 right-32 h-20 items-center gap-8 z-60">
        <Link
          href="/"
          className="text-slate-400 hover:text-white font-label font-bold text-sm tracking-widest transition-colors"
        >
          EXPLORE
        </Link>
        <Link
          href="/manage-event"
          className="text-white font-label font-bold text-sm tracking-widest transition-colors border-b-2 border-primary pt-1"
        >
          MY EVENTS
        </Link>
        <Link
          href="#"
          className="text-slate-400 hover:text-white font-label font-bold text-sm tracking-widest transition-colors"
        >
          INBOX
        </Link>
      </div>

      <main className="pt-28 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Editorial Header Section */}
        <section className="mb-12">
          <span className="text-secondary font-bold font-label tracking-[0.2em] uppercase text-xs">
            Event Management
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface mt-2 tracking-tighter">
            Create/Edit Event.
          </h2>
          <p className="text-on-surface-variant font-body mt-4 max-w-xl text-lg leading-relaxed">
            Shape the future of the sphere. Fill in the details below to
            broadcast your event to the community.
          </p>
        </section>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Left Column: Visuals */}
          <div className="md:col-span-5 space-y-8">
            <div className="group relative aspect-4/5 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/15 flex flex-col items-center justify-center text-center p-8 transition-all hover:bg-surface-container-high cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
              <Upload size={48} className="text-primary mb-4" />
              <h3 className="text-lg font-bold font-headline text-on-surface">
                Event Image
              </h3>
              <p className="text-sm text-on-surface-variant mt-2 font-body">
                Drag and drop or click to upload the cover art for your event.
              </p>
              <Input
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                type="file"
              />
              {/* Decorative element */}
              <div className="mt-8 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-linear-to-r from-primary to-secondary"></div>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/15">
              <h4 className="font-bold text-on-surface mb-2">Pro Tip</h4>
              <p className="text-sm text-on-surface-variant font-body">
                High-resolution images with 16:9 aspect ratio work best for the
                main discovery feed.
              </p>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-7 space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                Event Title
              </label>
              <Input
                name="title"
                placeholder="e.g., Neon Nights: Digital Art Showcase"
                type="text"
                value={eventData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                Description
              </label>
              <textarea
                className="w-full resize-none rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                name="description"
                placeholder="Describe the atmosphere, artists, and what to expect..."
                rows={4}
                value={eventData.description}
                onChange={handleInputChange}
              />
            </div>

            {/* Location Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                Location / Venue
              </label>
              <div className="relative">
                <MapPin
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-primary"
                />
                <Input
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/50 transition-all font-body"
                  name="location"
                  placeholder="Enter address or virtual link"
                  type="text"
                  value={eventData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Date/Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Starts
                </label>
                <Input
                  name="startDate"
                  type="datetime-local"
                  value={eventData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Ends
                </label>
                <Input
                  className="text-white"
                  name="endDate"
                  type="datetime-local"
                  value={eventData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center">
              <button
                className="w-full sm:w-auto px-12 py-4 rounded-full signature-gradient text-on-primary-fixed font-black font-headline text-lg shadow-[0_10px_30px_rgba(204,151,255,0.3)] hover:shadow-[0_15px_40px_rgba(255,103,173,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
                type="submit"
              >
                Broadcast Event
                <Send size={20} />
              </button>
              <button
                className="w-full sm:w-auto px-10 py-4 rounded-full border border-outline-variant/30 text-on-surface font-bold font-label hover:bg-white/5 transition-all"
                type="button"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-3 px-4 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-[3rem]">
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 tap-highlight-transparent active:scale-95 transition-all">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
            Explore
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 tap-highlight-transparent active:scale-95 transition-all">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            event_available
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
            My Events
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 tap-highlight-transparent active:scale-95 transition-all">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
            Inbox
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-300 tap-highlight-transparent active:scale-95 transition-all">
          <span className="material-symbols-outlined">person_pin</span>
          <span className="text-[10px] uppercase font-bold tracking-widest font-label mt-1">
            Profile
          </span>
        </div>
      </nav>
    </div>
  );
}
