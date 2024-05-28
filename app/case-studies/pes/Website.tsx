import Image from "next/image";
import React from "react";

const Website = () => {
  return (
    <section>
      <div className="relative container w-full mx-auto max-w-[736px] aspect-[736/2994] border-[2px] border-solid border-black mt-20">
        <Image fill src="/case-studies/pes-website.png" alt="Client Website" />
      </div>
    </section>
  );
};

export default Website;
