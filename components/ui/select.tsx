import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function Select({
  options,
  placeholder = "Sélectionner...",
  value,
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

  // Sync selected with value prop
  useEffect(() => {
    if (value) {
      const option = options.find(opt => opt.value === value);
      setSelected(option || null);
    } else {
      setSelected(null);
    }
  }, [value, options]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option.value);
  };

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-surface-container-low border border-purple-600 rounded-xl shadow-sm hover:border-primary focus:ring-2 focus:ring-primary/50 transition-all text-on-surface"
      >
        <span className={selected ? "text-on-surface" : "text-on-surface-variant"}>
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
        <ul className="absolute z-50 mt-2 w-full bg-surface-container-low border border-purple-600 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-3 cursor-pointer transition ${selected?.value === option.value
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/5 hover:text-primary text-on-surface"
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