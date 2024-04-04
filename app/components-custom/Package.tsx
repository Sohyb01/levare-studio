import Image from "next/image";
import React from "react";
import CTAButton from "./CTAButton";
import { PackagesCTAButton } from "./PackagesCTAButton";
import Link from "next/link";
import { calendlyLink } from "../data/links";

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
    <div className="rounded-[32px] flex flex-col text-start p-8 bg-white gap-8 w-full max-w-[332px] lg:max-w-none h-full z-[1]">
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
      <div className="flex flex-col text-neutral-800 gap-2 font-bold">
        {packageData.packageBenefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex gap-2 items-center text-neutral-800 text-sm"
          >
            <Image
              src="/icons/checkmark.svg"
              alt="Benefit"
              height={20}
              width={20}
            />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      {/* Package About */}
      <p className="text-sm text-neutral-800">
        {packageData.packageAbout[0]}
        <br />
        <br />
        {packageData.packageAbout[1]}
        <br />
        <br />
        {packageData.packageAbout[2]}
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 text-center mt-auto">
        <CTAButton />
      </div>
    </div>
  );
};

export default Package;
