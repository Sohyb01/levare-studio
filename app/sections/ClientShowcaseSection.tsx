import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="md:container flex flex-col gap-8 items-center md:items-center text-neutral-900">
        <h2 className="text-xl text-h2">Client Showcase</h2>

        {/* Text and image */}
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center md:justify-center">
          {/* Image */}
          <div className="relative w-full aspect-video grid place-items-center max-w-[686px] border-[2px] border-solid border-black">
            <Image
              src="/optimized/showcase-dark.png"
              fill
              alt="Programmer's Elite School"
            />
            <Image
              src="/icons/pes-logo-white.svg"
              alt="Programmer's Elite School"
              width={310}
              height={140}
              className="z-[1]"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col text-center gap-4 w-fit">
            <Link
              href="/case-studies/pes"
              target="_blank"
              className="text-white uppercase text-cta bg-neutral-800 text-center w-fit px-5 py-2 cursor-pointer"
            >
              VIEW CASE STUDY
            </Link>
            <Link
              href="https://www.pes-edu.com/"
              target="_blank"
              className="text-neutral-800 uppercase text-cta bg-white border-[2px] border-solid border-neutral-800 text-center px-5 py-2 cursor-pointer w-full"
            >
              VISIT WEBSITE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
