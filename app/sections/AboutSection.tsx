import React from "react";
import Image from "next/image";
import CTAButton from "../components-custom/CTAButton";

const AboutSection = () => {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start lg:justify-center">
        {/* Image Container */}
        <div className="relative w-full aspect-[592/384] border-and-shadow">
          <Image
            src="/stock/happy_business_onwer_2.jpg"
            fill
            alt="Happy Customer"
            className="object-cover object-center"
          />
        </div>
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full max-w-[448px] relative">
          <h2 className="text-h2">
            Empowering You to Grow Your Business & Brand With Ease{" "}
          </h2>
          <p className="text-p">
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
      </div>
    </section>
  );
};

export default AboutSection;
