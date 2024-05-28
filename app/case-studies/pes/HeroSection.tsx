import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pes-bg lg:aspect-video h-[100vh] w-full lg:max-h-[100vh] bg-cover bg-center">
      <div className="container grid place-items-center text-center w-full h-full">
        {/* Img container */}
        <div className="relative aspect-[352/158] w-full max-w-[352px]">
          <Image src="/icons/pes-logo-white.svg" alt="Client Logo" fill />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
