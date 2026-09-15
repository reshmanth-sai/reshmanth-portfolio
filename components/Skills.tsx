import Container from "./Container";
import Reveal from "./Reveal";
import { skills } from "@/lib/content";

// Four flat columns; no cards, no bars, no ratings.
export default function Skills() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Stack</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{g.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((s) => (
                  <li key={s} className="text-[15px] text-fg/85">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
