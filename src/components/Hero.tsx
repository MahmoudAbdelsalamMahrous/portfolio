"use client";

import dynamic from "next/dynamic";
import { profile } from "@/data/portfolio";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex items-center">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black -z-10" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <p className="text-violet-400 font-mono text-sm mb-4">Hi, I'm</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4">
          {profile.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-white/70 mb-6">{profile.role}</h2>
        <p className="max-w-xl text-white/60 mb-8">{profile.tagline}</p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors text-white font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors text-white font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest animate-bounce">
        SCROLL
      </div>
    </section>
  );
}
