import BadToGoodSection from "./BadToGoodSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <HeroSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <BadToGoodSection />
    </main>
  );
}
