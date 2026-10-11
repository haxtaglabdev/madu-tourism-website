import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import DestinationsSection from "../components/home/DestinationsSection";
import PackagesSection from "../components/home/PackagesSection";
import ExperiencesSection from "../components/home/ExperiencesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import GallerySection from "../components/home/GallerySection";
import FinalCTA from "../components/home/FinalCTA";
import PageMeta from "../components/seo/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        description="Discover Sri Lanka with Madu Tseylon Tours — private chauffeur journeys, UNESCO citadels, tea highlands, and wildlife safaris."
        title="Madu Tseylon Tours | Explore Sri Lanka"
      />
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
    </>
  );
}
