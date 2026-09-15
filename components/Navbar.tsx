"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, profile } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-5 pointer-events-none">
        <nav
          aria-label="Primary"
          className="glass pointer-events-auto flex h-14 items-center gap-1 rounded-full pl-5 pr-2"
        >
          <a href="#top" className="font-display text-base font-semibold tracking-tight mr-3">
            RS
          </a>
          <ul className="hidden md:flex items-center">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors duration-300 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden md:inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-bg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#ffcb5c] active:scale-[0.98]"
          >
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-fg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-fg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-bg/90 px-6 pb-14 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {[...nav, { label: "Resume", href: profile.resume }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-5xl font-medium tracking-tight py-2"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
