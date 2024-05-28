import Image from "next/image";
import React from "react";

const Strategy = () => {
  return (
    <section>
      <div className="container flex flex-col">
        {/* 1st Image */}
        <div className="relative w-full aspect-[744/120]">
          <Image fill src="/case-studies/pes-client-1.png" alt="Client Name" />
        </div>
        <div className="relative w-full aspect-[1120/630] border-[2px] border-solid border-black">
          <Image
            fill
            src="/case-studies/pes-brand-strategy.png"
            alt="Client Name"
          />
        </div>
        <div className="relative w-full aspect-[1120/630] border-[2px] border-solid border-black">
          <Image
            fill
            src="/case-studies/pes-brand-strategy-2.png"
            alt="Client Slide"
          />
        </div>
        <div className="relative w-full aspect-[744/120] border-[2px] border-solid border-black">
          <Image fill src="/case-studies/pes-client-2.png" alt="Client Work" />
        </div>
        <div className="relative w-full aspect-[1120/630] border-[2px] border-solid border-black">
          <Image fill src="/case-studies/pes-values.png" alt="Client Work" />
        </div>
      </div>
    </section>
  );
};

export default Strategy;
