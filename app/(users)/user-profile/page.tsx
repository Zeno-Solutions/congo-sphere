"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Edit,
  Camera,
  Calendar,
  ChevronRight,
  Shield,
  Bell,
  CreditCard,
  HelpCircle,
  Sparkles,
  MapPin,
  Heart,
  Share2,
  LogOut,
  Ticket,
  Trophy,
  Clock,
} from "lucide-react";

export default function UserProfilePage() {
  const [imageHover, setImageHover] = useState(false);

  const userStats = [
    { label: "Events Attended", value: "12", icon: Ticket, color: "primary" },
    { label: "Achievements", value: "8", icon: Trophy, color: "secondary" },
    { label: "Friends", value: "234", icon: Heart, color: "tertiary" },
  ];

  const userEvents = [
    {
      id: 1,
      title: "Neon Nights: Underground",
      date: "Oct 24 • 11:00 PM",
      status: "Confirmed",
      statusColor: "primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOOuECIfG5TCRD_CG3nodrpE8X9OZFcjmnjV2d_YKxqwaQpPPKO5NyBxACEvjLAF-aIiTGuS30Yfu_ki97idRukIweqmMa-6BjOO--tk3bGO3m23lowjwazKG1GxG20K05xtC1StEWxD6esfeMoBZIkYWN3R5ED9hWQg4mReRf3o1ZEhoqx_IUED2cOmghXkxrKMYfBfKJrNpoWNwoHlBc5YzRv_53L39LTqPoXpZlhmhrrMJZd_L9ZNT_CWE9n4MWyz5AV33M0MYc",
    },
    {
      id: 2,
      title: "Solaris Summer Fest",
      date: "Aug 12 • 02:00 PM",
      status: "Waitlist",
      statusColor: "secondary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFgU7KEbUqAjvo4PxrYft26nGAZ0Fe13REzULJjz8apN5wRYByb_vXuJh3pO4yQhUdveZPahjawxFGefTFX-Ei38qHGGEvBIP0A3DqyYIj8BOrW5M5vCJFuMVoEDhqVwn47CJemok7OfuSHGWBpPw_4xnY_M0F9yL6NfAMSxGfqkd1Gg7ycQNo65wWkYqYg1dkpmq7zi-rtwVmFt_w5BZIG9ILHmJQVEXGTBlfFjTsn73E2nqbGrdpiesh2TW0BrFTkLZtPror8K9t",
    },
    {
      id: 3,
      title: "Chromatic Dreams Fest",
      date: "Sep 10 • 06:00 PM",
      status: "Attended",
      statusColor: "tertiary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFgU7KEbUqAjvo4PxrYft26nGAZ0Fe13REzULJjz8apN5wRYByb_vXuJh3pO4yQhUdveZPahjawxFGefTFX-Ei38qHGGEvBIP0A3DqyYIj8BOrW5M5vCJFuMVoEDhqVwn47CJemok7OfuSHGWBpPw_4xnY_M0F9yL6NfAMSxGfqkd1Gg7ycQNo65wWkYqYg1dkpmq7zi-rtwVmFt_w5BZIG9ILHmJQVEXGTBlfFjTsn73E2nqbGrdpiesh2TW0BrFTkLZtPror8K9t",
    },
  ];

  const accountSettings = [
    { icon: Shield, label: "Security", color: "primary" },
    { icon: Bell, label: "Notifications", color: "secondary" },
    { icon: CreditCard, label: "Billing", color: "tertiary" },
    { icon: HelpCircle, label: "Support", color: "on-surface-variant" },
  ];

  const achievements = [
    { name: "Night Owl", icon: "🌙", date: "May 2026" },
    { name: "Event Champion", icon: "🏆", date: "Apr 2026" },
    { name: "Social Butterfly", icon: "🦋", date: "Mar 2026" },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 overflow-x-hidden pb-32">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none"></div>
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-900/40 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-purple-400 dark:text-purple-300">
              bubble_chart
            </span>
            <h1 className="text-2xl font-black bg-linear-to-r from-[#cc97ff] to-[#ff67ad] bg-clip-text text-transparent font-headline">
              Congo Sphere
            </h1>
          </Link>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
          <Image
            alt={"User Profile"}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBDJX4yoYLKUMWjb4X6-6eBmaCX6l4GRtf-1DTVJ-SB9MVwWTFNVN90AdG4NcxoXORGUvBW2BU2YQ88rHVTxhqLkWtCfclNeAmDAdHr7CkDAh6vf67w4aQrFwyR2g4AHkta4PRcfY5cTOUfSxn8RzweqFiFRqqID9UMjhebDhmAWCoqJWHBEgOdh0qzFSoIzu15nLUJ_-myNtT1MwNG8n9w51wQ9O7x49GuAVKhYfER6GaHqR3hOYnPOMc14uwZdS4uC-aVv7WBCLX"
            width={40}
            height={40}
          />
        </div>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-8">
        {/* Profile Hero Section */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar Section */}
            <div className="relative">
              <div
                className="w-40 h-40 rounded-full border-4 border-primary/20 p-1 cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
              >
                <Image
                  alt={"User Profile"}
                  className="w-full h-full rounded-full object-cover"
                  src={"/user.jpg"}
                  width={160}
                  height={160}
                />
              </div>
              {imageHover && (
                <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center transition-opacity">
                  <button className="bg-primary text-on-primary-fixed p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Camera size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <h2 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight">
                  Toto OKEMBA
                </h2>
                <span className="material-symbols-outlined text-2xl text-green-500 animate-pulse">
                  verified
                </span>
              </div>
              <p className="text-on-surface-variant font-body">@toto_okemba</p>

              {/* Location & Bio */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-on-surface-variant">
                  <MapPin size={16} />
                  <span>Brazzaville, Republic of Congo</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
                  Event enthusiast 🎉 | Night owl 🌙 | Always seeking the next
                  unforgettable experience
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
                  <Sparkles size={14} />
                  ELITE MEMBER
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-bold text-secondary">
                  <Clock size={14} />
                  VERIFIED
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Link
                href="/edit-profile"
                className="flex items-center justify-center px-8 py-3 signature-gradient rounded-full text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_20px_rgba(204,151,255,0.3)]"
              >
                <Edit size={16} className="mr-2" />
                Edit Profile
              </Link>
              <button className="flex items-center justify-center px-8 py-3 border border-primary/20 hover:bg-primary/5 rounded-full text-on-surface font-bold text-sm transition-colors">
                <Share2 size={16} className="mr-2" />
                Share Profile
              </button>
              <button className="flex items-center justify-center px-8 py-3 border border-outline-variant/30 hover:bg-white/5 rounded-full text-error font-bold text-sm transition-colors">
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4">
          {userStats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <stat.icon
                size={24}
                className={`mx-auto mb-2 text-${stat.color}`}
              />
              <p className="text-3xl font-bold font-headline text-on-surface">
                {stat.value}
              </p>
              <p className="text-xs text-on-surface-variant mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Events Section */}
          <section className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-end px-2">
              <h3 className="text-2xl font-bold font-headline text-on-surface">
                My Events
              </h3>
              <Link
                href="/manage-event"
                className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {userEvents.map((event) => (
                <div
                  key={event.id}
                  className="glass-panel rounded-lg p-4 flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1 hover:border-primary/50"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 ring-1 ring-primary/20">
                    <Image
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={event.image}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                      <Calendar size={12} />
                      {event.date}
                    </p>
                  </div>
                  <div
                    className={`px-4 py-1 bg-${event.statusColor}/10 text-${event.statusColor} text-[11px] font-black rounded-full uppercase tracking-tighter border border-${event.statusColor}/20`}
                  >
                    {event.status}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar: Account & Achievements */}
          <div className="space-y-6">
            {/* Quick Settings */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold font-headline text-on-surface px-2">
                Account
              </h3>
              <div className="glass-panel rounded-lg divide-y divide-white/5 overflow-hidden">
                {accountSettings.map((setting, index) => (
                  <button
                    key={index}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <setting.icon
                        size={20}
                        className={`text-${setting.color}`}
                      />
                      <span className="text-sm font-medium">
                        {setting.label}
                      </span>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-on-surface-variant group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Recent Achievements */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold font-headline text-on-surface px-2">
                Recent Achievements
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="glass-panel rounded-lg p-4 flex items-center gap-3 group hover:border-primary/50 transition-colors"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-on-surface">
                        {achievement.name}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
