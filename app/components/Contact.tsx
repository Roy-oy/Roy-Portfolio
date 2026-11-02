"use client";
import { Suspense, use, useState } from "react";
import { io } from "next/cache";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { siGithub, type SimpleIcon } from "simple-icons";
import Section from "./Section";
import { contact } from "../lib/data";

function CurrentYear() {
  use(io());
  return <>{new Date().getFullYear()}</>;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const items: {
    icon: LucideIcon;
    brandIcon?: SimpleIcon;
    brand?: "linkedin";
    label: string;
    value: string;
    href: string;
  }[] = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Telepon", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: ExternalLink, brandIcon: siGithub, label: "GitHub", value: "Roy-oy", href: contact.github },
    { icon: ExternalLink, brand: "linkedin", label: "LinkedIn", value: "Roy Sigalingging", href: contact.linkedin },
  ];

  return (
    <Section id="contact" title="Let's Connect" subtitle="HUBUNGI SAYA" background="grid">
      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="space-y-7">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--timer)]/25 bg-[var(--timer)]/10 px-3 py-1.5 text-xs font-medium text-[var(--timer)]">
              <Sparkles size={14} aria-hidden="true" />
              Terbuka untuk kesempatan baru
            </span>
            <h3 className="font-display mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Punya ide menarik?
              <span className="block text-[var(--silver)]">Mari wujudkan bersama.</span>
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--silver)]">
              Saya senang berdiskusi tentang pengembangan web, aplikasi, maupun
              kolaborasi project. Kirim pesan dan saya akan segera menghubungi Anda.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-[var(--silver)]/70">
              <MapPin size={14} className="text-[var(--red)]" aria-hidden="true" />
              Indonesia
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, brandIcon, brand, label, value, href }) => {
              const isExternal = href.startsWith("https://");

              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-[var(--timer)]/50 hover:bg-white/[0.06]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--red)]/10 text-[var(--red)] transition group-hover:bg-[var(--red)]/20">
                    {brand === "linkedin" ? (
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
                        <circle cx="7.1" cy="6.8" r="1.5" />
                        <path d="M5.8 9.2h2.6v8.9H5.8zm4.4 0h2.5v1.2h.04a2.75 2.75 0 0 1 2.47-1.36c2.64 0 3.13 1.74 3.13 4v5.06h-2.6v-4.49c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.57h-2.6z" />
                      </svg>
                    ) : brandIcon ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-6 fill-current"
                      >
                        <path d={brandIcon.path} />
                      </svg>
                    ) : (
                      <Icon size={20} aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[var(--silver)]/65">{label}</span>
                    <span className="mt-1 block truncate text-sm font-medium text-white">
                      {value}
                    </span>
                  </span>
                  {isExternal && (
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[var(--silver)]/50 transition group-hover:text-[var(--timer)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={submit} className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-[var(--blue)]/10 blur-3xl" />
          <div className="relative space-y-5">
            <div className="mb-6">
              <p className="font-display text-xs tracking-[0.25em] text-[var(--timer)]">
                MULAI KOLABORASI
              </p>
              <h3 className="font-display mt-2 text-xl font-bold">Kirim pesan</h3>
            </div>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[var(--silver)]">
                Nama
              </label>
              <input
                id="contact-name"
                required
                autoComplete="name"
                placeholder="Nama kamu"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#05070d]/70 px-4 py-3 text-sm outline-none transition placeholder:text-[var(--silver)]/40 focus:border-[var(--timer)] focus:ring-2 focus:ring-[var(--timer)]/10"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--silver)]">
                Pesan
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Ceritakan project atau ide kamu..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-y rounded-lg border border-white/10 bg-[#05070d]/70 px-4 py-3 text-sm outline-none transition placeholder:text-[var(--silver)]/40 focus:border-[var(--timer)] focus:ring-2 focus:ring-[var(--timer)]/10"
              />
            </div>
            <button
              type="submit"
              className="ray font-display relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[var(--red)] py-3.5 text-xs font-bold tracking-widest transition hover:bg-[#ff241e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--timer)]"
            >
              <Send size={16} aria-hidden="true" /> KIRIM PESAN
            </button>
            <p className="text-center text-xs text-[var(--silver)]/55">
              Pesan akan dibuka melalui aplikasi email Anda.
            </p>
          </div>
        </form>
      </div>

      <p className="font-display mt-20 text-center text-xs tracking-widest text-[var(--silver)]/60">
        © <Suspense fallback={null}><CurrentYear /></Suspense> ROY S SIGALINGGING — All rights reserved.
      </p>
    </Section>
  );
}