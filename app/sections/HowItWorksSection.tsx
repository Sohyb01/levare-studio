import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="py-20 testimonial-bg-1">
      <div className="container flex flex-col text-center items-center gap-8 text-neutral-800">
        <h2 className="text-h2 text-white">How it Works</h2>
        <p className="text-p text-neutral-200 italic">
          The steps to take your business to the next level
        </p>
        {/* Steps Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12 items-start justify-center text-start text-p max-w-screen-sm md:max-w-none">
          {/* Step */}
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start">
            <h3 className="w-full text-h3">1 - Strategy Call</h3>
            <p className="text-p">
              We get to know your business goals & define the ideal clients for
              you to attract
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start">
            <h3 className="w-full text-h3">2 - Planning & Execution</h3>
            <p className="text-p">
              We implement our process for your business to help you reach your
              goals
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start">
            <h3 className="w-full text-h3">3 - Delivery</h3>
            <p className="text-p">
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
