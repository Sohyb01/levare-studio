import Image from "next/image";
import React from "react";
import CTAButton from "./CTAButton";

const Package = ({
  packageData,
}: {
  packageData: {
    packageName: string;
    packagePrice: string;
    packageBenefits: string[];
    packageAbout: string[];
  };
}) => {
  return (
    <div className="rounded-[3px] flex flex-col text-start p-8 bg-white gap-8 w-full max-w-[332px] md:max-w-[324px] lg:max-w-none h-full z-[1]">
      {/* Name and Price */}
      <div className="flex flex-col gap-2">
        <p className="text-neutral-400 uppercase text-subtle-semibold">
          {packageData.packageName}
        </p>
        <p className="text-neutral-800 text-h1 font-bold header">
          {packageData.packagePrice}
          <span className="pl-2 text-subtle-medium">USD</span>
        </p>
      </div>
      {/* Benefits List */}
      <div className="flex flex-col text-neutral-800 gap-2 font-bold">
        {packageData.packageBenefits.map((benefit, idx) => (
          <div key={idx} className="flex gap-2 items-center text-neutral-800 ">
            <Image
              src="/icons/checkmark.svg"
              alt="Benefit"
              height={20}
              width={20}
            />
            <span className="text-detail">{benefit}</span>
          </div>
        ))}
      </div>
      {/* Package About */}
      <p className=" text-neutral-800 text-detail">
        {packageData.packageAbout[0]}
        <br />
        <br />
        {packageData.packageAbout[1]}
        <br />
        <br />
        {packageData.packageAbout[2]}
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 text-center w-full items-center mt-auto">
        <CTAButton />
      </div>
    </div>
  );
};

export default Package;
