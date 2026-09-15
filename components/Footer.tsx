import Container from "./Container";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-muted">
        <p>
          <span className="text-fg">{profile.fullName}</span>. {profile.location}.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-fg transition-colors">
            Email
          </a>
        </div>
        <p>Built with Next.js. {new Date().getFullYear()}.</p>
      </Container>
    </footer>
  );
}
