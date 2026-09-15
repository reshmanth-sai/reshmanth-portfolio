import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const inner = project.tint
    ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-accent)_14%,var(--color-surface)),var(--color-surface)_60%)]"
    : "bezel-inner";
  return (
    <article
      className="bezel sticky rounded-[2rem] p-2"
      style={{ top: `calc(5.5rem + ${index * 0.75}rem)` }}
    >
      <div className={`rounded-[calc(2rem-0.5rem)] p-7 md:p-10 ${inner} shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)]`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {project.year}
              <span className="mx-3 text-line-2">/</span>
              {project.role}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{project.name}</h3>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-muted md:text-base">{project.hook}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div className="border-l-2 border-accent pl-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Deterministic core</p>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/85">{project.core}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Live site
                  <ArrowUpRight size={16} weight="light" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium text-fg transition-colors duration-300 hover:border-fg/40 hover:bg-fg/5"
              >
                <GithubLogo size={16} weight="light" />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
