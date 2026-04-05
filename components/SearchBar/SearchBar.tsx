import React from 'react'
import { Search } from 'lucide-react';
export default function SearchBar() {
    return (

        <div className="mb-50 z-10 w-full absolute top-30 mx-auto px-20">
            <div className="relative border-none max-w-2xl mx-auto">
                <span
                    className="material-symbols-outlined z-10 absolute left-5 top-1/2 transform -translate-y-1/2 "><Search color='#f1f1f1' /></span>
                <input
                    className=" w-full h-15 rounded-xl bg-slate-900/50 backdrop-blur-xl border-none py-3 pl-15 pr-4 text-sm text-white outline-none focus:ring-#fcf8ff focus:ring-offset-1 focus:ring-offset-slate-900/5 bg-surface-container-low border focus:outline-none text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    placeholder="Search events, festivals, or categories..." type="text" />
            </div>
        </div>

    )
}
