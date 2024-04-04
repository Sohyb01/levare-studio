import React from "react";
import Image from "next/image";
import CTAButton from "../components-custom/CTAButton";

const AboutSection = () => {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full relative">
          <h2 className="section-header">
            Empowering You to Grow Your Business & Brand With Ease{" "}
          </h2>
          <p className="text-lg">
            We understand that growing your business and brand can feel
            confusing and challenging.
            <br />
            <br />
            Every day, we meet with people just like you who are looking to take
            their business to the next level.
            <br />
            <br />
            That&apos;s why we&apos;ve dedicated ourselves to helping you
            achieve just that in a streamlined way, so you can confidently grow
            and increase revenue.
          </p>
          <CTAButton classname="w-fit" />
        </div>
        {/* Image Container */}
        <div className="relative w-full aspect-square md:aspect-[680/354] lg:aspect-square border-and-shadow">
          <Image
            src="/optimized/levare-about.png"
            fill
            alt="Happy Customer"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
