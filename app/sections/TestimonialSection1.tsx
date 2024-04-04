import Image from "next/image";
import React from "react";

const TestimonialSection1 = () => {
  return (
    <div className="section-padding bg-neutral-800 pt-10 pb-[60px] testimonial-bg-1">
      <div className="container flex flex-col items-center gap-6 italic">
        {/* Quote mark */}
        <Image
          src="/icons/quote-mark-light.svg"
          alt="Quotation Symbol"
          width={48}
          height={48}
        />
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 text-center">
          “They have built us a stunning website which builds trust with
          visitors and makes them excited work with us!”
        </p>
        <p className="text-base text-neutral-300 md:text-lg lg:text-xl">
          - M. Kamel
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection1;
