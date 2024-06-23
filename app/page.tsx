import HeroSection from "./sections/HeroSection";
import TestimonialSection1 from "./sections/TestimonialSection1";
import ValueSection from "./sections/ValueSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ClientShowcaseSection from "./sections/ClientShowcaseSection";
import IsThisForMeSection from "./sections/IsThisForMeSection";
import PackagesSection from "./sections/PackagesSection";
import SalesNavbar from "./components-custom/SalesNavbar";
import AboutSection from "./sections/AboutSection";
import FAQSection from "./sections/FAQSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SalesNavbar />
      <HeroSection />
      <TestimonialSection1 />
      <ValueSection />
      <HowItWorksSection />
      <ClientShowcaseSection />
      {/* <PackagesSection /> */}
      <IsThisForMeSection />
      <AboutSection />
      <FAQSection />
    </main>
  );
}
