import Container from "./Container";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";

// Timeline: mono dates in a left column, an amber rule, entries on the right.
export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Experience and education</h2>
        </Reveal>
        <ol className="mt-14 relative border-l border-line pl-8 md:border-l-0 md:pl-0">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.1} className="relative grid grid-cols-1 gap-3 pb-14 last:pb-0 md:grid-cols-12 md:gap-8">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg md:hidden"
              />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:col-span-3 md:pt-2">{e.period}</p>
              <div className="md:col-span-9 md:border-l md:border-line md:pl-8 relative">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2.5 hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg md:block"
                />
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{e.title}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-fg/80 max-w-[70ch]">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
