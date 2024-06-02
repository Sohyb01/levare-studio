import Image from "next/image";
import React from "react";
import CTAButton from "../components-custom/CTAButton";

const ValueSection = () => {
  return (
    <section className="relative py-[100px] md:pt-[140px] lg:pt-[100px] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:items-center lg:justify-center mr-auto">
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full relative max-w-[448px] mx-auto md:mx-0">
          <h2 className="text-h2">
            We know the value of your work, its time your customers did too{" "}
          </h2>
          <p className="text-p">
            You put your heart and soul into your business, but hard work can
            only get you so far and a poor brand presence will have you working
            extra but not seeing results
            <br />
            <br />
            It’s time to kickstart your business growth journey with a powerful
            brand & online presence that captivates your ideal audience and make
            them excited to throw money at you
          </p>
          <CTAButton />
        </div>
        {/* Image Container */}
        <Image
          src="/graphics/graphic-2.svg"
          width={592}
          height={565}
          alt="Happy Customer"
          className="object-cover object-center hidden md:block absolute lg:static left-[608px] top-[40px]"
        />
      </div>
    </section>
  );
};

export default ValueSection;
