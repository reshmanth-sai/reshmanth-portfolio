import { profile } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex-1">
      <h1 className="font-display text-6xl p-10">{profile.name}</h1>
    </main>
  );
}
