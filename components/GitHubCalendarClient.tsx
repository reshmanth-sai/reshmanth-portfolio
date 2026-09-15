"use client";

import dynamic from "next/dynamic";
import { profile } from "@/lib/content";

// Client-only: the calendar's markup depends on the current date and the
// GitHub API, so it must not be server rendered.
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((m) => m.GitHubCalendar), {
  ssr: false,
  loading: () => <div className="h-[132px] w-full animate-pulse rounded-xl bg-fg/5" aria-hidden />,
});

const theme = {
  dark: ["#17171a", "#4a3a17", "#8a6620", "#c98f1e", "#f5b942"],
};

export default function GitHubCalendarClient() {
  return (
    <div className="overflow-x-auto text-muted">
      <GitHubCalendar
        username={profile.githubUser}
        colorScheme="dark"
        theme={theme}
        blockSize={11}
        blockMargin={4}
        fontSize={12}
        errorMessage="Contribution calendar is unavailable right now."
      />
    </div>
  );
}
