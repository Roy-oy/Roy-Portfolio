"use client";
import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  background?: "grid" | "plain";
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  background = "plain",
  children,
}: Props) {
  return (
    <section id={id} className="relative isolate scroll-mt-16">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 ${
          background === "grid" ? "bg-grid" : "bg-[#080b12]"
        }`}
      />
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs tracking-[0.4em] text-[var(--timer)]">{subtitle}</p>
        <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
          {title}
          <span className="text-[var(--red)]">.</span>
        </h2>
        <div className="mt-3 h-1 w-24 bg-gradient-to-r from-[var(--red)] via-[var(--silver)] to-[var(--blue)]" />
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}