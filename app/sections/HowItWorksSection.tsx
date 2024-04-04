import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="py-20 testimonial-bg-1">
      <div className="container flex flex-col text-center items-center gap-12 text-neutral-800">
        <h2 className="section-header text-white">How it Works</h2>
        <p className="text-lg text-neutral-200 italic">
          The steps to take your business to the next level
        </p>
        {/* Steps Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12 items-start justify-center text-start text-lg max-w-screen-sm md:max-w-none">
          {/* Step */}
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full pt-6 pb-8 px-6 bg-white border-solid border-levare-red border-l-[4px]">
            <Image
              className="absolute top-2 right-2"
              width={32}
              height={32}
              src="/icons/phone.svg"
              alt="Strategy Call"
            />
            <h3 className="text-lg font-bold w-full">Strategy Call</h3>
            <p>
              We get to know your business goals & define the ideal clients for
              you to attract
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full pt-6 pb-8 px-6 bg-white border-solid border-levare-red border-l-[4px]">
            <Image
              className="absolute top-2 right-2"
              width={32}
              height={32}
              src="/icons/list.svg"
              alt="Execution"
            />
            <h3 className="text-lg font-bold w-full">Planning & Execution</h3>
            <p>
              We implement our process for your business to help you reach your
              goals
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full pt-6 pb-8 px-6 bg-white border-solid border-levare-red border-l-[4px]">
            <Image
              className="absolute top-2 right-2"
              width={32}
              height={32}
              src="/icons/happy.svg"
              alt="Delivery"
            />
            <h3 className="text-lg font-bold w-full">Delivery</h3>
            <p>
              Become a market leader using your new strategic brand, messaging
              and website
            </p>
          </div>
        </div>
        <CTAButton />
      </div>
    </section>
  );
};

export default HowItWorksSection;
