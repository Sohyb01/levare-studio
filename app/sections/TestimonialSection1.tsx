import Image from "next/image";
import React from "react";

const TestimonialSection1 = () => {
  return (
    <div className="section-padding py-10">
      <div className="container flex flex-col md:flex-row items-center gap-x-8 gap-y-4 lg:gap-x-20 italic">
        {/* Testimonial Container */}
        <div className="flex flex-col gap-2 bg-slate-100 rounded-[3px] items-center w-full px-4 pt-6 pb-8">
          {/* Person IMG Container */}
          <Image
            width={48}
            height={48}
            className="rounded-full"
            src="/optimized/testimonial_1.jpg"
            alt="Happy Customer"
          />
          {/* Quote mark */}
          <Image
            alt="Customer Testimonial"
            src="/icons/quote-mark.svg"
            width={16}
            height={16}
          />
          <p className="text-p w-full text-neutral-900 text-center">
            They built us a great foundational brand and an amazing website! Now
            our business looks really good to our customers.
          </p>
        </div>
        {/* Testimonial Container */}
        <div className="flex flex-col gap-2 bg-slate-100 rounded-[3px] items-center w-full px-4 pt-6 pb-8">
          {/* Person IMG Container */}
          <Image
            width={48}
            height={48}
            className="rounded-full"
            src="/optimized/testimonial_2.jpg"
            alt="Happy Customer"
          />
          <Image
            alt="Customer Testimonial"
            src="/icons/quote-mark.svg"
            width={16}
            height={16}
          />
          <p className="text-p w-full text-neutral-900 text-center">
            Before working with them we felt nervous and doubtful about how
            we’re going to grow. Now we feel confident moving forward with
            growing our business and brand
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection1;
