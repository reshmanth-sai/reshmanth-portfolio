import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

import Calendar from "./GitHubCalendarClient";

async function getRepoCount(): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/users/${profile.githubUser}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return 22;
    const data = (await res.json()) as { public_repos?: number };
    return data.public_repos ?? 22;
  } catch {
    return 22;
  }
}

export default async function GitHubActivity() {
  const repos = await getRepoCount();
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">On GitHub</h2>
            <p className="mt-4 text-muted">
              <span className="font-mono text-fg">{repos}</span> public repositories. Most of what I build ships
              with source.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
            >
              github.com/{profile.githubUser}
              <ArrowUpRight
                size={14}
                weight="light"
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
          <div className="bezel rounded-[2rem] p-2 lg:col-span-8">
            <div className="bezel-inner rounded-[calc(2rem-0.5rem)] p-5 md:p-7">
              <Calendar />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
