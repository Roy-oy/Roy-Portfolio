"use client";
import { motion } from "framer-motion";
import {
  Blocks,
  Award,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  GraduationCap,
  ExternalLink,
  Network,
  TestTube2,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  siAndroidstudio,
  siC,
  siCodeigniter,
  siDart,
  siFigma,
  siFlask,
  siFlutter,
  siGit,
  siGithub,
  siGo,
  siGooglecloud,
  siJavascript,
  siJquery,
  siLaravel,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSelenium,
  siTrello,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import Section from "./Section";
import { skills, education, certificates, organizations } from "../lib/data";

const skillIcons: Record<string, LucideIcon> = {
  "Programming Language": Code2,
  "Framework & Libraries": Blocks,
  "Testing Tools": FlaskConical,
  "Database Management": Database,
  Clouds: Cloud,
  Others: Wrench,
};

const technologyIcons: Record<string, SimpleIcon> = {
  PHP: siPhp,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Dart: siDart,
  Python: siPython,
  Java: siOpenjdk,
  C: siC,
  Golang: siGo,
  Laravel: siLaravel,
  CodeIgniter: siCodeigniter,
  "React.js": siReact,
  "Next.js": siNextdotjs,
  Flutter: siFlutter,
  "Node.js": siNodedotjs,
  Flask: siFlask,
  "jQuery EasyUI": siJquery,
  Selenium: siSelenium,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  "Google Cloud Service": siGooglecloud,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Figma: siFigma,
  "Android Studio": siAndroidstudio,
  Trello: siTrello,
};

const fallbackTechnologyIcons: Record<string, LucideIcon> = {
  "Manual Testing": FlaskConical,
  Katalon: TestTube2,
  "REST API": Network,
};

export default function Skills() {
  return (
    <Section id="skill" title="Skill" subtitle="KEMAMPUAN">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = skillIcons[group.group];

          return (
            <motion.article
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className="card p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-[var(--timer)]/20 bg-[var(--timer)]/10 p-2.5 text-[var(--timer)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-wide text-[var(--silver)]">
                  {group.group}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const brandIcon = technologyIcons[item];
                  const FallbackIcon = fallbackTechnologyIcons[item];

                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--silver)] transition-colors hover:border-[var(--timer)]/40 hover:text-white"
                    >
                      {brandIcon ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="size-4 shrink-0"
                          style={{ fill: `#${brandIcon.hex}` }}
                        >
                          <path d={brandIcon.path} />
                        </svg>
                      ) : FallbackIcon ? (
                        <FallbackIcon
                          size={16}
                          className="shrink-0 text-[var(--timer)]"
                          aria-hidden="true"
                        />
                      ) : null}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-20">
        <div className="mb-9 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--timer)]">
              BACKGROUND
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold sm:text-3xl">
              My Background<span className="text-[var(--red)]">.</span>
            </h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--silver)]">
            Education, community, and certifications shaping my journey as a developer.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <section className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap size={19} className="text-[var(--timer)]" aria-hidden="true" />
              <h4 className="font-display text-sm font-bold tracking-wide">Education</h4>
              <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
            </div>
            <div className="relative space-y-0 border-l border-white/10">
              {education.map((e) => (
                <article key={e.school} className="relative py-1 pb-6 pl-5 last:pb-0 sm:pl-6">
                  <span className="absolute -left-[4px] top-2 size-[7px] rounded-full bg-[var(--timer)] shadow-[0_0_10px_rgba(0,229,255,0.55)]" />
                  <p className="font-display text-[10px] tracking-[0.12em] text-[var(--timer)]">
                    {e.period}
                  </p>
                  <h5 className="mt-2 break-words text-base font-semibold leading-snug text-white">
                    {e.school}
                  </h5>
                  <p className="mt-1.5 break-words text-sm leading-relaxed text-[var(--silver)]">
                    {e.degree}
                  </p>
                  {e.note && (
                    <p className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--silver)]">
                      <span className="h-px w-4 bg-[var(--red)]" />
                      {e.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <Users size={18} className="text-[var(--red)]" aria-hidden="true" />
              <h4 className="font-display text-sm font-bold tracking-wide">Organizations</h4>
              <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
            </div>
            <div className="divide-y divide-white/[0.08]">
              {organizations.map((o) => (
                <article
                  key={o.name}
                  className="group grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-4"
                >
                  <div className="min-w-0">
                    <h5 className="break-words text-sm font-semibold text-white transition-colors group-hover:text-[var(--timer)]">
                      {o.name}
                    </h5>
                    <p className="mt-1 break-words text-xs leading-relaxed text-[var(--silver)]">
                      {o.role}
                    </p>
                  </div>
                  <span className="font-display pt-0.5 text-[9px] tracking-wide text-[var(--silver)]/60 sm:text-right">
                    {o.period}
                  </span>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 border-t border-white/10 pt-8">
          <div className="mb-5 flex items-center gap-3">
            <Award size={18} className="text-[var(--blue)]" aria-hidden="true" />
            <h4 className="font-display text-sm font-bold tracking-wide">Certificates</h4>
            <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <a
                key={certificate.file}
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[var(--blue)]/40 hover:bg-[var(--blue)]/[0.06]"
              >
                <span className="min-w-0">
                  <span className="block break-words text-sm font-medium leading-snug text-white">
                    {certificate.title}
                  </span>
                  <span className="mt-2 block text-[10px] tracking-wide text-[var(--silver)]/60">
                    VIEW CERTIFICATE
                  </span>
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[var(--silver)]/60 transition group-hover:border-[var(--blue)]/40 group-hover:text-[var(--timer)]">
                  <ExternalLink size={15} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}