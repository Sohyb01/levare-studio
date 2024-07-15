import Image from "next/image";
import React from "react";
import CTAButton from "../components-custom/CTAButton";

const ValueSection = () => {
  return (
    <section className="relative py-8 md:py-20">
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-20 items-center lg:justify-center mr-auto">
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full relative max-w-[586px] mx-auto md:mx-0">
          <h2 className="text-h2">
            We know the value of your expertise, it&apos;s time you get what
            you&apos;re worth
          </h2>
          <p className="text-p">
            You’ve spent years learning how to heal and help your patients, and
            we want to help you attract more of them.
            <br />
            <br />
            Our service will give you a constant stream of new patients every
            month, completely on autopilot.
          </p>
          <CTAButton />
        </div>
        {/* Image Container */}
        <div className="relative aspect-square w-full max-w-[586px]">
          <Image
            src="/optimized/functional-medicine-marketing.png"
            fill
            alt="Happy Customer"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
