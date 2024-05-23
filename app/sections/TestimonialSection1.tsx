import Image from "next/image";
import React from "react";

const TestimonialSection1 = () => {
  return (
    <div className="section-padding bg-sky-100 py-10">
      <div className="container flex flex-col md:flex-row items-center gap-x-4 gap-y-10 lg:gap-x-20 italic">
        {/* Testimonial Container */}
        <div className="flex gap-4 items-center w-full max-w-[448px]">
          {/* Person IMG Container */}
          <div className="relative w-[48px] lg:w-[96px] aspect-square bg-white"></div>
          <p className="text-p w-full text-neutral-900 text-start text-detail">
            “They have built us a stunning website which builds trust with
            visitors and makes them excited work with us!”
          </p>
        </div>
        {/* Testimonial Container */}
        <div className="flex gap-4 items-center w-full max-w-[448px]">
          {/* Person IMG Container */}
          <div className="relative w-[48px] lg:w-[96px] aspect-square bg-white"></div>
          <p className="text-p w-full text-neutral-900 text-start text-detail">
            “Before working with them we felt nervous and doubtful about how
            we’re going to grow. Now we feel confident moving forward with
            growing our business and brand”
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection1;
