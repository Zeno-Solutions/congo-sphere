import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

export function Select({
  options,
  placeholder = "Sélectionner...",
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Fermer si clic extérieur
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option.value);
  };

  return (
    <div ref={ref} className="relative w-72">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:border-gray-400 focus:ring-2 focus:ring-blue-400 transition"
      >
        <span className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>

        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto animate-fadeIn">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-3 cursor-pointer transition ${selected?.value === option.value
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-50 hover:text-blue-600"
                }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}