import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/content";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubLogo },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
  { href: `mailto:${profile.email}`, label: "Email", Icon: EnvelopeSimple },
];

export default function SocialRail() {
  return (
    <aside className="fixed bottom-8 right-6 z-30 hidden lg:flex flex-col gap-1 rounded-full glass p-1.5">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-fg/8 hover:text-fg"
        >
          <Icon size={20} weight="light" />
        </a>
      ))}
    </aside>
  );
}
