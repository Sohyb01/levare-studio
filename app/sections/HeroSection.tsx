import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-bg-gradient relative overflow-hidden">
      <div className="container flex flex-col justify-center items-center text-center gap-10 pb-20 pt-[120px] md:pt-20 md:min-h-[744px] lg:min-h-[724px] lg:h-[100vh] lg:max-h-[1080px] text-neutral-800">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Level up your <br></br> [service] business
        </h1>
        <p className="text-neutral-800 text-xl max-w-[644px]">
          Attract more high-budget clients by positioning yourself as the
          [niche] market expert you&apos;ve become with an attractive brand &
          website
        </p>
        <CTAButton />
      </div>
      {/* Background Graphics */}
      <Image
        src="/graphics/boost-ramp.png"
        width={576}
        height={387}
        className="absolute right-[-100px] lg:right-[0%] bottom-0 pointer-events-none"
        alt=""
      />
      <Image
        src="/graphics/hero-shapes.png"
        width={502}
        height={457}
        className="hidden lg:block absolute left-[-100px] bottom-0 pointer-events-none"
        alt=""
      />
    </section>
  );
};

export default HeroSection;
