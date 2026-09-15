import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Principles from "@/components/Principles";
import Work from "@/components/Work";
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
      </main>
      <Footer />
      <SocialRail />
    </>
  );
}
