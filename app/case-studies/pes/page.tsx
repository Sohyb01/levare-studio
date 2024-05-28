import React from "react";
import HeroSection from "./HeroSection";
import ProjectGoalsSection from "./ProjectGoalsSection";
import Strategy from "./Strategy";
import CTASection from "./CTASection";
import SalesNavbar from "@/app/components-custom/SalesNavbar";
import Website from "./Website";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <SalesNavbar />
      <HeroSection />
      <ProjectGoalsSection />
      <Strategy />
      <Website />
      <CTASection />
    </main>
  );
};

export default Page;
