import Button from "@/components/Button";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold md:text-7xl">Nothing at this address.</h1>
        <p className="mt-5 max-w-[40ch] text-lg text-muted">The page you asked for does not exist or has moved.</p>
        <div className="mt-10">
          <Button href="/">Back to the front page</Button>
        </div>
      </Container>
    </main>
  );
}
