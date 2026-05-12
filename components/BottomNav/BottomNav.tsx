import React from "react";

export default function BottomNav() {
  const menu = [
    { name: "Explore", icon: "explore" },
    { name: "My Events", icon: "event_available" },
    { name: "Inbox", icon: "mail" },
    { name: "Profile", icon: "person_pin" },
  ];
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5 flex justify-around items-center pb-6 pt-3 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] lg:hidden">
      {menu.map((item, index) => (
        <a
          key={index}
          className="flex flex-col items-center justify-center text-[#cc97ff] bg-purple-500/10 rounded-full px-4 py-1 active:scale-95 transition-all"
          href="#"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {item.icon}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest Manrope mt-1">
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
}
