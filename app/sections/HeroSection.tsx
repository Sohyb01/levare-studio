import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden text-neutral-900">
      <div className="container pt-[140px] pb-[100px] relative flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        {/* Section content */}
        <div className="w-full max-w-[586px] flex flex-col items-start text-center gap-10 ">
          {/* 2 Headers */}
          <div className="flex flex-col gap-4 text-start items-start w-full">
            <h1 className="text-detail font-bold text-neutral-500">
              HOLISTIC PRACTICE MARKETING
            </h1>
            <h2 className="text-h1">
              Attract 100s of New Patients on Autopilot
            </h2>
          </div>
          {/* Text content */}
          <div className="flex flex-col gap-4 text-start items-start w-full">
            <p className="text-p w-full">
              Simply put — We help you attract patients to your practice so you
              can focus on helping them with your expertise, and not have to
              worry about marketing.
            </p>
            <div className="flex items-center w-full gap-4 flex-wrap md:flex-nowrap text-subtle-medium">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3333 4.5L5.99996 11.8333L2.66663 8.5"
                    stroke="#87C2A2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Proven methods
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3333 4.5L5.99996 11.8333L2.66663 8.5"
                    stroke="#87C2A2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Personalized for you
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3333 4.5L5.99996 11.8333L2.66663 8.5"
                    stroke="#87C2A2"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Lasting solutions
              </div>
            </div>
          </div>
          <CTAButton />
        </div>
        {/* Image Container */}
        <div className="relative aspect-[396/464] w-full max-w-[586px] lg:max-w-[396px]">
          <Image
            src="/optimized/holistic-marketing.png"
            fill
            alt="Happy Customer"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
