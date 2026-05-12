import React from "react";
import Contenaire from "../Contenaire";

export default function Footer() {
  return (
    <Contenaire className="bg-slate-950/50 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(138,43,226,0.15)]">
      <div className="py-6 text-center text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Mon Application. Tous droits
          réservés.
        </p>
      </div>
      <div className="py-4 text-center text-slate-400">
        <p>Conçu avec ❤️ par Votre Nom</p>
      </div>
    </Contenaire>
  );
}
