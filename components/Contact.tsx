"use client";

import { useEffect, useState } from "react";
import { Check, Copy, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden border-t border-line py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
            Let&apos;s build something you can audit.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-muted">
            Internships, research collaborations or a second pair of eyes on an ML pipeline. Email is fastest.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-14 items-center rounded-full border border-line-2 bg-surface px-6 font-mono text-sm text-fg transition-colors hover:border-fg/40 sm:text-base"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copy}
              aria-live="polite"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-bg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#ffcb5c] active:scale-[0.98]"
            >
              {copied ? <Check size={18} weight="bold" /> : <Copy size={18} weight="light" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <LinkedinLogo size={18} weight="light" />
              linkedin.com/in/reshmanth-sai
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <GithubLogo size={18} weight="light" />
              github.com/reshmanth-sai
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
