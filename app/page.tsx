import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Principles from "@/components/Principles";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Metrics from "@/components/Metrics";
import Research from "@/components/Research";
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
      </main>
      <Footer />
      <SocialRail />
    </>
  );
}
