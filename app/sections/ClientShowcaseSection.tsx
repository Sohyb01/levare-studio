import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="md:container flex flex-col gap-8 text-center">
        <h2 className="section-header">Client Showcase</h2>
        <p className="text-lg text-neutral-600">
          A few examples of what we can do
        </p>

        <div className="grid grid-cols-1 grid-rows-6 lg:grid-rows-3 lg:grid-cols-2 gap-2 lg:gap-2">
          {/* The Brief Text */}
          <div className="flex flex-col text-start gap-8 p-8 testimonial-bg-2 rounded-[32px]">
            <p className="text-xl text-white">The Brief</p>
            <p className="text-lg text-neutral-200">
              When PES came to me they were struggling with communicating their
              services and mission effectively with their audience.
              <br />
              <br />
              We helped them by designing & building a website with a clear
              messaging strategy and effective structure.
              <br />
              <br />
              Now they can confidently send people to their website knowing it
              helps build trust & increase their perceived value, driving
              revenue.
            </p>
          </div>
          {/* Image 1*/}
          <div className="relative w-full h-full row-span-2 pb-8 border-[2px] border-solid border-black rounded-[32px] overflow-hidden">
            <Image
              src="/optimized/client-showcase-1.png"
              alt=""
              fill
              className="object-cover object-center blur-animation"
            />
          </div>
          {/* Image 2*/}
          <div className="relative w-full h-full row-span-2 border-[2px] border-solid border-black rounded-[32px] overflow-hidden">
            <Image
              src="/optimized/client-showcase-2.png"
              alt=""
              fill
              className="object-cover bg-levare-brick-red rounded-[32px] blur-animation"
            />
          </div>
          {/* The Testimonial Text */}
          <div className="flex flex-col text-start gap-8 p-8 testimonial-bg-2 rounded-[32px]">
            <p className="text-xl text-white">The Testimonial</p>
            <p className="text-lg text-neutral-200">
              <i>
                “Before, we felt frustrated and unconfident because we were
                struggling with how to talk to our audience effectively.
                <br />
                <br />
                Now, we have a clear messaging strategy and an effective website
                and we feel confident and excited to grow further.”
              </i>
              <br />
              <br />
              <span className="text-neutral-300">
                - Founder of Programmer&apos;s Elite School
              </span>
            </p>
            <Link
              className="button-2 font-bold"
              href={"https://www.pes-edu.com/"}
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
