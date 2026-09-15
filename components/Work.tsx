import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { moreProjects, profile, projects } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-36">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Selected work</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Five systems, each with a part the model can&apos;t touch.
          </h2>
        </Reveal>

        {/* Sticky stack: every card pins below the nav and the next one slides over it. */}
        <div className="mt-14 flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-28">
          <div className="flex items-end justify-between gap-6">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">More on GitHub</h3>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg whitespace-nowrap"
            >
              All repositories
              <ArrowUpRight size={14} weight="light" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((r) => (
              <li key={r.name} className="border-t border-line">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-5 transition-colors"
                >
                  <div>
                    <p className="font-medium text-fg group-hover:text-accent transition-colors">{r.name}</p>
                    <p className="mt-1 text-sm text-muted">{r.blurb}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted/70">{r.lang}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    weight="light"
                    className="mt-1 shrink-0 text-muted transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
