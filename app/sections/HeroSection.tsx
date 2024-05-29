import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container flex flex-col lg:justify-between lg:flex-row items-start lg:items-center text-start gap-10 pt-[140px] pb-[100px]">
        <div className="flex flex-col gap-10 max-w-[448px]">
          <h1 className="text-h1 text-neutral-800 header">
            Brand design that fuels your business growth
          </h1>
          <p className="text-neutral-900 text-p max-w-[644px]">
            Start on a clear path to success for your business, position
            yourself as the expert you’ve become with an attractive brand &
            online presence
          </p>
          <CTAButton buttonText="Grow my business" />
        </div>
        {/* Image container */}
        <div className="relative aspect-[5376/3072] w-full max-w-[544px]">
          <Image alt="Business Owner" src="/stock/business_owner.jpg" fill />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
