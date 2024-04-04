import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container flex flex-col justify-center items-center text-center gap-10 pb-20 pt-[152px] md:pt-20 md:min-h-[744px] lg:min-h-[724px] lg:h-[100vh] lg:max-h-[1080px]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-neutral-800 header">
          Designs to Ignite Your Success
        </h1>
        <p className="text-neutral-900 text-lg max-w-[644px]">
          Attract more high-budget clients by positioning yourself as the market
          expert you&apos;ve become with an attractive brand & website
        </p>
        <CTAButton buttonText="Apply Now (It's Free!)" />
      </div>
    </section>
  );
};

export default HeroSection;
