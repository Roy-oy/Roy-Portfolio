"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact Me" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const lastSection = links[links.length - 1];
      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      const sectionAtPageEnd = lastSection
        ? document.getElementById(lastSection.href.slice(1))
        : null;

      if (isAtPageEnd && sectionAtPageEnd) {
        setActiveSection(sectionAtPageEnd.id);
        return;
      }

      const activationLine = Math.max(80, window.innerHeight * 0.3);
      const currentSection = [...links]
        .reverse()
        .map(({ href }) => document.getElementById(href.slice(1)))
        .find((section) => section && section.getBoundingClientRect().top <= activationLine);

      if (currentSection) setActiveSection(currentSection.id);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/85 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display flex shrink-0 items-center gap-3 font-bold">
          <span className="timer-dot" />
          <span>
            ROY<span className="text-[var(--red)]">.DEV</span>
          </span>
        </a>

        <motion.ul
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, staggerChildren: 0.07 }}
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1);

            return (
            <motion.li
              key={l.href}
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            >
              <a
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={`font-display relative block py-2 text-[11px] tracking-[0.16em] transition-colors duration-300 hover:text-white ${
                  isActive ? "text-white" : "text-[var(--silver)]"
                }`}
              >
                {l.label.toUpperCase()}
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[var(--red)] via-white to-[var(--blue)] shadow-[0_0_10px_rgba(0,229,255,0.65)]"
                    transition={{
                      type: "spring",
                      stiffness: shouldReduceMotion ? 1000 : 420,
                      damping: 32,
                    }}
                  />
                )}
              </a>
            </motion.li>
          )})}
        </motion.ul>

        <motion.button
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[var(--silver)] transition hover:border-[var(--timer)]/50 hover:text-[var(--timer)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--timer)] md:hidden"
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              className="flex"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#080b12]/98 px-6 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.4)] md:hidden"
          >
            {links.map((l, index) => {
              const isActive = activeSection === l.href.slice(1);

              return (
              <motion.li
                key={l.href}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                  delay: shouldReduceMotion ? 0 : index * 0.045,
                }}
              >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`font-display group flex items-center justify-between rounded-lg border py-3 pl-4 pr-3 text-xs tracking-[0.16em] transition ${
                  isActive
                    ? "border-[var(--timer)]/20 bg-gradient-to-r from-[var(--red)]/10 via-white/[0.03] to-[var(--blue)]/10 text-white"
                    : "border-transparent text-[var(--silver)] hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                {l.label.toUpperCase()}
                <span
                  className={`size-1.5 rounded-full transition ${
                    isActive
                      ? "bg-[var(--timer)] shadow-[0_0_10px_var(--timer)]"
                      : "bg-transparent group-hover:bg-[var(--red)]"
                  }`}
                />
              </a>
              </motion.li>
            )})}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}