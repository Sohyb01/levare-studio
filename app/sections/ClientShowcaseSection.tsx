import Image from "next/image";
import React from "react";

const ClientShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-8 text-center">
        <h3>Client Showcase</h3>
        <p className="text-lg text-neutral-600">
          A few examples of what we can do
        </p>

        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 gap-4 lg:gap-8">
          {/* The Brief Text */}
          <div className="flex flex-col text-start gap-8 text-neutral-200 p-8 bg-neutral-800 rounded-[32px]">
            <p className="text-xl">The Brief</p>
            <p className="text-lg">
              When [client] came to me they were struggling with [this problem].
              So I helped them [brief project outline]. Now they have [detail
              positive results or outcome of project].
            </p>
          </div>
          {/* Image 1*/}
          <div className="relative w-full h-full row-span-2">
            <Image
              src="/images/happy-business.jpg"
              alt=""
              fill
              className="object-cover bg-levare-brick-red rounded-[32px]"
            />
          </div>
          {/* Image 2*/}
          <div className="relative w-full h-full row-span-2">
            <Image
              src="/images/happy-business.jpg"
              alt=""
              fill
              className="object-cover bg-levare-brick-red rounded-[32px]"
            />
          </div>
          {/* The Testimonial Text */}
          <div className="flex flex-col text-start gap-8 text-neutral-200 p-8 bg-neutral-800 rounded-[32px]">
            <p className="text-xl">The Testimonial</p>
            <p className="text-lg">
              “Before I was struggling with this [problem] and it made me feel
              [negative emotion], now I have achieved [this result] and I feel
              [positive emotion]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
