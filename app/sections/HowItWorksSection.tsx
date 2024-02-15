import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col text-center items-center gap-12 text-neutral-800">
        <h3>How it Works</h3>
        <p className="text-lg text-neutral-600">
          The steps to take your business to the next level
        </p>
        {/* Steps Container */}
        <div className="flex flex-col md:flex-row gap-12 items-start text-center text-lg max-w-screen-sm md:max-w-none">
          {/* Step */}
          <div className="flex flex-col items-center gap-6 w-full">
            <Image
              width={48}
              height={48}
              src="/icons/phone.svg"
              alt="Strategy Call"
            />
            <p>
              <span className="font-bold">Strategy Call:</span> This is crucial
              to get to know your business goals & define the ideal clients you
              want to attract{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <Image
              width={48}
              height={48}
              src="/icons/list.svg"
              alt="Execution"
            />
            <p>
              <span className="font-bold">Planning & Execution:</span> We
              implement our process for your business to help you reach your
              targets
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <Image
              width={48}
              height={48}
              src="/icons/happy.svg"
              alt="Delivery"
            />
            <p>
              <span className="font-bold">Delivery:</span> Become a market
              leader using the benefits of your new strategic branding and
              business presence
            </p>
          </div>
        </div>
        <CTAButton />
      </div>
    </section>
  );
};

export default HowItWorksSection;
