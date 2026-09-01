"use client";

import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="h-1 w-16 bg-violet-500 rounded-full mb-10" />

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-white/70 leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/50">
          <span className="px-3 py-1 rounded-full border border-white/10">📍 {profile.location}</span>
        </div>
      </div>
    </section>
  );
}
