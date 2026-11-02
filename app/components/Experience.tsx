"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  Briefcase,
  Code2,
  FolderGit2,
  type LucideIcon,
} from "lucide-react";
import {
  siCodeigniter,
  siDart,
  siFlutter,
  siLaravel,
  siMysql,
  siPhp,
  siPython,
  siPytorch,
  siSelenium,
  type SimpleIcon,
} from "simple-icons";
import Section from "./Section";
import { work, projects } from "../lib/data";

const technologyIcons: Record<string, SimpleIcon> = {
  CodeIgniter: siCodeigniter,
  Dart: siDart,
  Flutter: siFlutter,
  Laravel: siLaravel,
  MySQL: siMysql,
  PHP: siPhp,
  Python: siPython,
  PyTorch: siPytorch,
  Selenium: siSelenium,
};

const fallbackIcons: Record<string, LucideIcon> = {
  EasyUI: Blocks,
  MobileNetV4: BrainCircuit,
};

function TechChip({ name }: { name: string }) {
  const brandIcon = technologyIcons[name];
  const FallbackIcon = fallbackIcons[name] ?? Code2;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-[var(--silver)] transition-colors group-hover:border-white/15">
      {brandIcon ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 shrink-0"
          style={{ fill: `#${brandIcon.hex}` }}
        >
          <path d={brandIcon.path} />
        </svg>
      ) : (
        <FallbackIcon size={14} className="shrink-0 text-[var(--timer)]" aria-hidden="true" />
      )}
      {name}
    </span>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="PENGALAMAN" background="grid">
      {/* Work Experience */}
      <h3 className="font-display mb-8 flex items-center gap-3 text-xl font-bold">
        <Briefcase className="text-[var(--red)]" /> Work Experience
      </h3>
      <div className="space-y-6 border-l-2 border-[var(--red)] pl-6">
        {work.map((w, i) => (
          <motion.div
            key={w.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card relative p-6"
          >
            <span className="timer-dot absolute -left-[38px] top-8" />
            <p className="font-display text-xs text-[var(--timer)]">{w.period}</p>
            <h4 className="font-display mt-1 text-xl font-bold">{w.role}</h4>
            <p className="text-[var(--silver)]">{w.company}</p>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--silver)]">
              {w.points.map((description) => (
                <p key={description} className="break-words">
                  {description}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {w.tech.map((tech) => (
                <TechChip key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Experience */}
      <div className="mb-8 mt-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-[10px] tracking-[0.3em] text-[var(--timer)]">
            SELECTED WORK
          </p>
          <h3 className="font-display mt-2 flex items-center gap-3 text-xl font-bold sm:text-2xl">
            <FolderGit2 className="text-[var(--red)]" aria-hidden="true" />
            Project Experience
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--silver)]">
            A selection of applications and platforms I have designed and built.
          </p>
        </div>
      </div>
      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#111827] to-[#080b12] transition duration-300 hover:-translate-y-1 hover:border-[var(--timer)]/35 hover:shadow-[0_18px_50px_-28px_rgba(0,229,255,0.3)]"
          >
            <div
              className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(30,107,255,0.14),transparent_68%),linear-gradient(145deg,#101827,#080b12)] p-3 sm:p-4"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={95}
                className="object-contain p-3 transition duration-500 group-hover:scale-[1.025] sm:p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/30 via-transparent to-[#05070d]/15" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
              <p className="font-display text-[9px] font-semibold tracking-[0.17em] text-[var(--timer)]/85">
                {p.category}
              </p>
              <h4 className="font-display mt-3 break-words text-base font-bold leading-snug text-white sm:text-lg">
                {p.title}
              </h4>
              <p className="mt-3 break-words text-[13px] leading-6 text-[var(--silver)]">
                {p.desc}
              </p>

              <div className="mt-5">
                <p className="font-display mb-2 text-[9px] tracking-[0.18em] text-[var(--silver)]/55">
                  BUILT WITH
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6">
                <div className="mb-4 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold tracking-wide text-white transition hover:border-[var(--timer)]/40 hover:bg-[var(--timer)]/[0.06]"
                >
                  Lihat repository
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}