"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import Button from "./Button";
import Container from "./Container";
import { profile } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay: 0.1 + i * 0.09, ease },
  });

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16 md:pt-24">
      {/* backdrop: fixed dot grid and one slow amber glow */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-accent/14 blur-[120px] motion-safe:animate-glow"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            {...item(0)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.status}
          </motion.p>

          {/* Headline is the LCP element: no opacity fade so it paints before hydration. */}
          <motion.h1
            initial={reduce ? false : { y: 22 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="font-display text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[3.6rem] xl:text-[4.4rem]"
          >
            {profile.name}
            <br />
            <span className="text-muted">
              builds AI systems you can{" "}
              <em className="not-italic text-accent">audit</em>.
            </span>
          </motion.h1>

          <motion.p {...item(2)} className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl">
            {profile.intro}
          </motion.p>

          <motion.div {...item(3)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={profile.resume} external>
              View resume
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" icon={<EnvelopeSimple size={18} weight="light" />}>
              Email me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 0, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
          className="lg:col-span-5 lg:justify-self-end w-full max-w-[340px] sm:max-w-[420px] mx-auto lg:mx-0"
        >
          <div className="bezel rounded-[2rem] p-2 shadow-[0_40px_120px_-30px_rgba(245,185,66,0.25)]">
            <div className="bezel-inner relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src={profile.photo}
                alt={`${profile.fullName} photographed against a green wall`}
                fill
                priority
                sizes="(max-width: 640px) 340px, 420px"
                quality={82}
                className="object-cover object-[50%_20%]"
              />
            </div>
            <dl className="grid grid-cols-3 divide-x divide-line px-1 pt-3 pb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              <div className="px-2">
                <dt className="sr-only">University</dt>
                <dd>VIT Chennai</dd>
              </div>
              <div className="px-3">
                <dt className="sr-only">GPA</dt>
                <dd>
                  GPA <span className="text-accent">9.0</span>
                </dd>
              </div>
              <div className="px-3">
                <dt className="sr-only">Location</dt>
                <dd>Chennai</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
