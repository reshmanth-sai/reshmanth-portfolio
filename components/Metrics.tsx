"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import Container from "./Container";
import { metrics } from "@/lib/content";

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = fmt(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, decimals]);

  return (
    <>
      <span ref={ref} className="tabular-nums">
        {fmt(0)}
      </span>
      {suffix && <span className="text-accent">{suffix}</span>}
    </>
  );
}

// Full-bleed band; numbers count up once when they enter the viewport.
export default function Metrics() {
  return (
    <section className="border-y border-line bg-surface/60 py-20 md:py-28">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="min-w-0">
              <dd className="font-mono text-3xl font-medium leading-none tracking-tight md:text-5xl">
                <Counter value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </dd>
              <dt className="mt-4 max-w-[22ch] text-sm leading-snug text-muted">{m.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
