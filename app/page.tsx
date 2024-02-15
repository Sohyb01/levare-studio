import HeroSection from "./sections/HeroSection";
import TestimonialSection1 from "./sections/TestimonialSection1";
import ValueSection from "./sections/ValueSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ClientShowcaseSection from "./sections/ClientShowcaseSection";
import IsThisForMeSection from "./sections/IsThisForMeSection";
import PackagesSection from "./sections/PackagesSection";
import SalesNavbar from "./components-custom/SalesNavbar";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TestimonialSection1 />
      <ValueSection />
      <HowItWorksSection />
      <ClientShowcaseSection />
      <PackagesSection />
      <IsThisForMeSection />
    </main>
  );
}
