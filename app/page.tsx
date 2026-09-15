import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Principles from "@/components/Principles";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Metrics from "@/components/Metrics";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Principles />
        <Work />
        <Experience />
        <Metrics />
        <Research />
        <Skills />
        <Certifications />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
      <SocialRail />
    </>
  );
}
