import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import DestinationsSection from "../components/home/DestinationsSection";
import PackagesSection from "../components/home/PackagesSection";
import ExperiencesSection from "../components/home/ExperiencesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import GallerySection from "../components/home/GallerySection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand-bg text-charcoal antialiased">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <DestinationsSection />
        <PackagesSection />
        <ExperiencesSection />
        <TestimonialsSection />
        <GallerySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
