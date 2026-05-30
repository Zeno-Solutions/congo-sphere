import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function not_found() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body flex items-center justify-center">
      <div className="text-center space-y-4">
        <span className="material-symbols-outlined text-6xl text-error">
          error_outline
        </span>
        <h2 className="text-2xl font-bold">Event not found</h2>
        <p className="text-on-surface-variant">
          The event you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 signature-gradient text-on-primary-fixed font-bold px-6 py-3 rounded-full hover:scale-105 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>
      </div>
    </div>
  );
}
