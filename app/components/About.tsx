"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { profile } from "../lib/data";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about" title="About Me" subtitle="PROFIL">
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-14">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          whileHover={shouldReduceMotion ? undefined : { y: -4, rotate: 1 }}
          className="relative mx-auto h-72 w-52 rounded-2xl bg-gradient-to-br from-[var(--red)] via-white/80 to-[var(--blue)] p-[2px] sm:h-80 sm:w-56"
        >
          <div className="group relative h-full w-full overflow-hidden rounded-[14px] bg-[#05070d]">
            <Image
              src="/dels.jpeg"
              alt={profile.name}
              fill
              sizes="(max-width: 640px) 208px, 224px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--timer)] to-transparent opacity-70" />
          </div>
        </motion.div>

        <div className="min-w-0">
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-[var(--timer)]">
            AREAS OF INTEREST
          </p>
          <h3 className="font-display mt-2 text-3xl font-black leading-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--red)] via-white to-[var(--blue)] bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h3>
          <div className="mt-5 max-w-2xl space-y-3 leading-relaxed text-[var(--silver)]">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <p className="font-display text-3xl font-black text-[var(--red)]">{s.value}</p>
                <p className="mt-1 text-xs text-[var(--silver)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}