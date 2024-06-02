import React from "react";
import CTAButton from "../components-custom/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[720px] lg:aspect-video text-neutral-900 hero-bg">
      <div className="container flex flex-col items-center text-center gap-8 pt-[140px] pb-[100px] relative">
        <h1 className="text-h1 header w-full max-w-[596px]">
          Strategic Branding that fuels your business growth
        </h1>
        <p className="text-p max-w-[448px]">
          Start on a clear path to success for your business, position yourself
          as the expert you’ve become with a strategic brand and stunning
          website
        </p>
        <CTAButton buttonText="Grow my business" />
      </div>
    </section>
  );
};

export default HeroSection;
