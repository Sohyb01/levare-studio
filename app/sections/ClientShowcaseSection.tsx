import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="md:container flex flex-col gap-8 items-center md:items-center text-neutral-900">
        <h2 className="text-xl text-h2">Client Showcase</h2>

        {/* Text and image */}
        <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-8 items-center lg:justify-center">
          {/* Image */}
          <Link
            href="https://www.pes-edu.com/"
            target="_blank"
            className="relative w-full aspect-video grid place-items-center max-w-[686px] border-[2px] border-solid border-black"
          >
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
            <p className="absolute bottom-2 right-2 text-white font-bold text-sm">
              To Programmer&apos;s Elite School --&gt;
            </p>
          </Link>
          {/* Text */}
          <div className="flex flex-col text-start gap- md:max-w-[352px]">
            <h3 className="text-h3">Services</h3>
            <div className="text-p">
              Brand Strategy <br />
              Creative Direction <br />
              Copywriting <br />
              Website Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
