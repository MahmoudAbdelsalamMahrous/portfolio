"use client";

import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-black">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-white/60 mb-10">
          I'm always open to talking about software engineering, opportunities, or collaborating on a project.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors text-white font-medium"
          >
            Email Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors text-white font-medium"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors text-white font-medium"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-16 text-white/30 text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Three.js.
        </p>
      </div>
    </section>
  );
}
