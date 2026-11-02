"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowDown, Download, Moon, Star } from "lucide-react";
import { profile } from "../lib/data";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 180, damping: 22 });
  const rotateX = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const parts = profile.name.trim().split(" ");
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
  const firstNames = parts.length > 1 ? parts.slice(0, -1).join(" ") : profile.name;

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-24"
    >
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--red)]/20 blur-[120px]"
        animate={{ opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--blue)]/20 blur-[120px]"
        animate={{ opacity: [0.8, 0.55, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          <p className="font-display text-sm tracking-[0.4em] text-[var(--timer)]">Hi there, I&apos;m</p>

          <h1 className="font-display mt-3 break-words text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {firstNames}
            {lastName && (
              <>
                <br />
                {lastName}
              </>
            )}
            <br />
            <span className="bg-gradient-to-r from-[var(--red)] via-white to-[var(--blue)] bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[var(--silver)]">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="ray font-display relative overflow-hidden rounded-md bg-[var(--red)] px-6 py-3 text-xs font-bold tracking-widest transition hover:scale-105"
            >
              See my projects
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="font-display rounded-md border border-white/15 bg-[#11141b] px-4 py-3 text-xs font-bold tracking-widest text-white transition hover:border-white/35 hover:bg-[#1a1e27] sm:px-6"
              >
                Get in touch
              </a>
              <a
                href="/CV_Roy%20S%20Sigalingging.pdf"
                download
                className="font-display inline-flex items-center gap-2 rounded-md border border-[var(--silver)]/35 px-4 py-3 text-xs font-bold tracking-widest text-[var(--silver)] transition hover:border-[var(--timer)] hover:text-[var(--timer)] sm:px-6"
              >
                <Download size={15} aria-hidden="true" />
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Foto portrait dengan cahaya yang mengitari bingkai */}
        <div
          className="relative mx-auto h-80 w-56 md:h-[27rem] md:w-[19rem] md:translate-x-4"
          onPointerMove={(event) => {
            if (shouldReduceMotion || event.pointerType === "touch") return;
            const bounds = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;
            pointerX.set((x - 0.5) * 10);
            pointerY.set((0.5 - y) * 8);
          }}
          onPointerLeave={() => {
            pointerX.set(0);
            pointerY.set(0);
          }}
        >
          {/* Aura cahaya */}
          <div className="aura absolute inset-6 rounded-full bg-[var(--red)]/40 blur-[70px]" />
          <div
            className="aura absolute inset-10 rounded-full bg-[var(--blue)]/40 blur-[80px]"
            style={{ animationDelay: "1.2s" }}
          />

          {[
            { Icon: Moon, inset: "-12%", start: 0, duration: 18, size: 19 },
            { Icon: Star, inset: "-19%", start: 125, duration: 14, size: 15 },
            { Icon: Star, inset: "-25%", start: 245, duration: 11, size: 12 },
          ].map(({ Icon, inset, start, duration, size }, index) => (
            <div
              key={index}
              aria-hidden="true"
              className="star-orbit pointer-events-none absolute z-20"
              style={{
                inset,
                transformOrigin: "50% 50%",
                animation: `star-orbit ${duration}s linear infinite`,
                animationDelay: `${-(start / 360) * duration}s`,
              } as CSSProperties}
            >
              <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[var(--timer)] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                <Icon size={size} fill={index === 0 ? "rgba(0,229,255,0.16)" : "currentColor"} />
              </span>
            </div>
          ))}

          <div className="absolute inset-0" style={{ perspective: "1000px" }}>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                opacity: { duration: shouldReduceMotion ? 0 : 0.9, delay: 0.2 },
                y: {
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                },
              }}
              className="frame-border absolute inset-0 z-10 rounded-2xl p-[3px]"
              style={{
                transformStyle: "preserve-3d",
                rotateX: shouldReduceMotion ? 0 : rotateX,
                rotateY: shouldReduceMotion ? 0 : rotateY,
              }}
            >
              <div
                className="absolute inset-[3px] overflow-hidden rounded-[13px] bg-[#05070d]"
              >
                <Image
                  src="/roys.jpg"
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/20 via-transparent to-[#05070d]/35" />
                {!shouldReduceMotion && (
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    initial={{ x: "-150%", opacity: 0 }}
                    animate={{ x: ["-150%", "600%"], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      delay: 1.2,
                      repeat: Infinity,
                      repeatDelay: 5.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              {!shouldReduceMotion && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 140"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="portraitOrbitGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#e10600" />
                      <stop offset=".5" stopColor="#00e5ff" />
                      <stop offset="1" stopColor="#1e6bff" />
                    </linearGradient>
                    <filter id="portraitOrbitGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path
                    d="M8 1.5H92Q98.5 1.5 98.5 8V132Q98.5 138.5 92 138.5H8Q1.5 138.5 1.5 132V8Q1.5 1.5 8 1.5Z"
                    pathLength="100"
                    fill="none"
                    stroke="url(#portraitOrbitGradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="18 82"
                    filter="url(#portraitOrbitGlow)"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -100 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              )}
            </motion.div>
          </div>

          {/* Color timer */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#05070d] p-2">
            <span className="timer-dot block" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[var(--silver)]"
      >
        <ArrowDown />
      </a>
    </section>
  );
}