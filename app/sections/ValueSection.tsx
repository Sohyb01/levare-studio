import Image from "next/image";
import React from "react";

const ValueSection = () => {
  return (
    <section className="relative py-20">
      <div className="container md:max-w-screen-md lg:max-w-screen-lg flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-video lg:aspect-square">
          <Image
            src="/images/happy-business.jpg"
            fill
            alt="Happy Customer"
            className="object-cover rounded-[32px]"
          />
        </div>
        {/* Header and Paragraph */}
        <div className="flex flex-col text-start text-neutral-800 gap-8 w-full relative">
          <h4>
            We know the value of your work, its time your customers did too
          </h4>
          <p className="text-xl">
            You put your heart and soul into your business, but hard work can
            only get you so far and a poor brand presence will have you working
            overtime and not seeing results
            <br />
            <br />
            Its time to set yourself apart as the industry leader you&apos;ve
            become with a kick-ass brand your customers genuinely love and a
            website & online presence that work as hard as you do.
          </p>
          {/* Background Graphic */}
          <Image
            src="/graphics/Circle-Brush.svg"
            fill
            className="lg:block absolute top-0 left-0 pointer-events-none -z-[1]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
