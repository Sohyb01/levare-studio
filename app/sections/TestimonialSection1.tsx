import Image from "next/image";
import React from "react";

const TestimonialSection1 = () => {
  return (
    <section className="bg-neutral-800 py-8">
      <div className="container flex flex-col items-center gap-6">
        {/* Quote mark */}
        <Image
          src="/icons/quote-mark-light.svg"
          alt="Quotation Symbol"
          width={48}
          height={48}
        />
        <p className="text-2xl text-neutral-200">
          Glowing testimonial goes here
        </p>
        <p className="text-lg text-neutral-300">Name</p>
      </div>
    </section>
  );
};

export default TestimonialSection1;
