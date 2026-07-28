"use client";
import React from "react";
import { Search } from "lucide-react";
type SearchBarProps = {
  onChange?: (value: string) => void;
  placeholder: string;
  className?: string;
  value?: string;
  name?: string;
};
export default function SearchBar({
  onChange,
  placeholder,
  className,
  value,
  name,
}: SearchBarProps) {
  return (
    <div
      className={`mb-50 z-10 w-full absolute  top-15 md:top-30 mx-auto px-20 left-1 ${className || ""}`}
    >
      <div className="relative border-none md:max-w-2xl  mx-auto">
        <span className="material-symbols-outlined z-10 absolute left-5 top-1/2 transform -translate-y-1/2 ">
          <Search color="#f1f1f1" />
        </span>

        <input
          className="w-full rounded-full pl-12 h-14 border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
          placeholder={placeholder}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
}
