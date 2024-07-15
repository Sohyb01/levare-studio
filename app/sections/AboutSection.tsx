import React from "react";
import Image from "next/image";
import CTAButton from "../components-custom/CTAButton";

const AboutSection = () => {
  return (
    <section className="relative py-20">
      <div className="container w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:justify-center">
        {/* Image Container */}
        <div className="relative w-full max-w-[586px] aspect-square">
          <Image
            src="/optimized/functional-medicine-marketing.png"
            fill
            alt="Happy Customer"
            className="object-cover object-center"
          />
        </div>
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full max-w-[586px] relative">
          <h2 className="text-h2">
            Empowering Holistic Experts to Grow Their Practice With Ease
          </h2>
          <p className="text-p">
            We understand that growing your practice and business can feel
            confusing and challenging.
            <br />
            <br />
            Every day, we meet with people just like you who are looking to take
            their practices to the next level.
            <br />
            <br />
            That’s why we’ve dedicated ourselves to helping you achieve just
            that in a streamlined way, so you can confidently grow and help more
            people.
          </p>
          <CTAButton classname="w-fit" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
