import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientShowcaseSection = () => {
  return (
    <section className="py-20">
      <div className="md:container flex flex-col md:flex-row gap-20 gap-y-8 items-start md:items-center">
        {/* Text */}
        <div className="flex flex-col text-start gap-4 md:max-w-[352px]">
          <h2 className="text-xl section-header">Client Showcase</h2>
          <div className="text-lg font-bold">
            Brand Strategy <br />
            Creative Direction <br />
            Copywriting <br />
            Website Design
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
