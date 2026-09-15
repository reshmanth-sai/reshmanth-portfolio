import Container from "./Container";
import Reveal from "./Reveal";
import { publications } from "@/lib/content";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Research</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-14 lg:grid-cols-2">
          {publications.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 0.1} className="border-t border-line pt-8">
              <p className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.status}
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-[1.15] md:text-3xl">{p.title}</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">{p.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                {p.stats.map((s) => (
                  <li key={s} className="text-fg/90">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted/70">{p.stack}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
