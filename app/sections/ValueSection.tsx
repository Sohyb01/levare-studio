import Image from "next/image";
import React from "react";

const ValueSection = () => {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-square md:aspect-[680/354] lg:aspect-square border-and-shadow">
          <Image
            src="/optimized/levare-strategy.png"
            fill
            alt="Happy Customer"
            className="object-cover object-center"
          />
        </div>
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full relative">
          <h2 className="section-header">
            We know the value of your work, its time your customers did too{" "}
          </h2>
          <p className="text-lg">
            You put your heart and soul into your business, but hard work can
            only get you so far and a poor brand presence will have you working
            overtime and not seeing results
            <br />
            <br />
            Its time to set yourself apart as the industry leader you&apos;ve
            become with a kick-ass brand your customers genuinely love and a
            website & online presence that work as hard as you do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
