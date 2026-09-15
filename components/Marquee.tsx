import { marquee } from "@/lib/content";

// CSS-only strip; paused under prefers-reduced-motion via the global rule.
export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div
      aria-label="Technologies"
      className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
    >
      <ul className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-muted">
        {items.map((t, i) => (
          <li key={`${t}-${i}`} className="flex items-center gap-10" aria-hidden={i >= marquee.length}>
            {t}
            <span className="h-1 w-1 rounded-full bg-line-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
