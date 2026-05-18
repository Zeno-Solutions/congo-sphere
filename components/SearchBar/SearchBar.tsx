"use client";
import React from "react";
import { Search } from "lucide-react";
type SearchBarProps = {
  onChange?: (value: string) => void;
  placeholder: string;
  className?: string;
};
export default function SearchBar({
  onChange,
  placeholder,
  className,
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
          className=" w-full h-10 md:h-15 rounded-[45px] bg-slate-900/50 backdrop-blur-xl border-none py-3 pl-15 pr-4 text-sm text-white outline-none focus:ring-#fcf8ff focus:ring-offset-1 focus:ring-offset-slate-900/5 bg-surface-container-low border focus:outline-none text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
          placeholder={placeholder}
          type="text"
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
}
