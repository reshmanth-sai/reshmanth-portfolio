import Container from "./Container";
import Reveal from "./Reveal";
import { principles } from "@/lib/content";

// Asymmetric trio: the first belief is the lead, the other two sit beside it.
export default function Principles() {
  const [lead, ...rest] = principles;
  return (
    <section className="py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">How I build</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal className="bezel rounded-[2rem] p-2" delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-accent p-8 text-bg md:p-10">
              <div aria-hidden className="grain absolute inset-0 opacity-[0.12] mix-blend-multiply" />
              <p className="relative font-display text-3xl font-semibold leading-[1.1] md:text-4xl">{lead.title}</p>
              <p className="relative mt-6 max-w-[40ch] text-base leading-relaxed text-bg/75">{lead.body}</p>
            </div>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.title} className="bezel rounded-[2rem] p-2" delay={0.12 + i * 0.08}>
              <div className="bezel-inner flex h-full flex-col rounded-[calc(2rem-0.5rem)] p-8">
                <p className="font-display text-2xl font-semibold leading-[1.15]">{p.title}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
