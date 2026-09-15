import Container from "./Container";
import Reveal from "./Reveal";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <section className="pb-24 md:pb-36">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Certifications</h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.05} className="bezel rounded-[2rem] p-2">
              <div className="bezel-inner flex h-full items-start justify-between gap-6 rounded-[calc(2rem-0.5rem)] px-7 py-6">
                <div>
                  <p className="font-medium leading-snug">{c.title}</p>
                  <p className="mt-1.5 text-sm text-muted">{c.issuer}</p>
                </div>
                <p className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted">{c.date}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
