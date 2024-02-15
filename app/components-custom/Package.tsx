import Image from "next/image";
import React from "react";
import CTAButton from "./CTAButton";
import { PackagesCTAButton } from "./PackagesCTAButton";

const Package = ({
  packageData,
}: {
  packageData: {
    packageName: string;
    packagePrice: string;
    packageBenefits: string[];
  };
}) => {
  return (
    <div className="rounded-[32px] flex flex-col text-start p-8 bg-white gap-10 w-full max-w-[332px] lg:max-w-none h-full z-[1]">
      {/* Name and Price */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-neutral-400 uppercase">
          {packageData.packageName}
        </p>
        <p className="text-neutral-800 text-4xl font-bold header">
          {packageData.packagePrice}
          <span className="pl-2 text-sm">USD</span>
        </p>
      </div>
      {/* Benefits List */}
      <div className="flex flex-col text-neutral-800 gap-4">
        {packageData.packageBenefits.map((benefit, idx) => (
          <div key={idx} className="flex gap-2 items-center text-neutral-800">
            <Image
              src="/icons/checkmark.svg"
              alt="Benefit"
              height={24}
              width={24}
            />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 text-center mt-auto">
        <PackagesCTAButton />
        <p className="text-sm text-neutral-700">
          or <u>Book a call</u> first
        </p>
      </div>
    </div>
  );
};

export default Package;
