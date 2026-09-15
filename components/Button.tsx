import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
};

// Pill button with the trailing icon nested in its own disc.
export default function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  icon,
}: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-[15px] font-medium whitespace-nowrap transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-[#ffcb5c]"
      : "border border-line-2 text-fg hover:border-fg/40 hover:bg-fg/5";
  const disc =
    variant === "primary" ? "bg-bg/15 text-bg" : "bg-fg/10 text-fg";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${disc}`}
      >
        {icon ?? <ArrowUpRight size={18} weight="light" />}
      </span>
    </a>
  );
}
