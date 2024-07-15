import React from "react";
import Package from "../components-custom/Package";
import Image from "next/image";
import CTAButton from "../components-custom/CTAButton";
import Link from "next/link";

const packagesData = [
  {
    packageName: "14-Day Autopilot Patient-Attracting Blueprint",
    packagePrice: "9600",
    packageBenefits: [
      "Brand Strategy",
      "Wordmark Logo",
      "Brand Design",
      "Messaging Strategy",
      "3-Page High-Converting website",
      "Essential SEO Optimizations",
    ],
    packageAbout: [
      "A guided experience from start to finish, you'll leave with a ready online presence including a clean & elevated brand & action driven website",
      "This is perfect for newer businesses who need foundational brand designs and a simple website to get started",
      "If you are a more established business who needs an extensive brand strategy, full brand identity and a more expansive website, then our full service package may be better suited for you",
    ],
  },
  // {
  //   packageName: "FULL SERVICE PACKAGE (3-4 Weeks)",
  //   packagePrice: "6000",
  //   packageBenefits: [
  //     "Brand Strategy",
  //     "Wordmark Logo",
  //     "Brand Design",
  //     "Messaging Strategy",
  //     "Social Media Strategy",
  //     "5-10 Page High-Converting website",
  //     "Advanced SEO Optimizations",
  //     // "Website Blog Features",
  //   ],
  //   packageAbout: [
  //     "A comprehensive experience rooted in strategy and designed to give you everything you need to set your business apart as an industry leader",
  //     "Starting with strategy we'll carry out an in depth audience & competitor analysis to inform all our design decisions",
  //     "We'll then craft you a standout & action driven online presence driven by your long term strategy and ambitions for your business",
  //   ],
  // },
];

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="py-20 bg-neutral-800 relative packages-bg"
    >
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-white text-h2">The Investment</h2>
        {/* Packages Container */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center w-full lg:max-w-none">
          {/* {packagesData.map((packageData, idx) => (
            <Package packageData={packageData} key={idx} />
          ))} */}
          {/* Standard package */}
          <div className="rounded-[3px] flex flex-col text-start p-8 bg-white gap-8 h-full z-[1] w-full text-neutral-900">
            {/* Name and Price */}
            <div className="flex flex-col gap-2">
              <p className="text-neutral-900 text-p font-bold">
                {packagesData[0].packageName}
              </p>
              <p className="text-neutral-900 text-h1 font-bold header">
                {packagesData[0].packagePrice}
                <span className="pl-2 text-subtle-medium">USD</span>
              </p>
            </div>
            {/* Benefits List */}
            <div className="flex flex-col gap-1 text-p font-bold">
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">
                  Brand Strategy to give you a clear direction
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">Brand Design to show that you’re a pro</span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">
                  Optimized Google Business Profile to attract visitors
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">
                  Specialized Practice Website to convert visitors
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">
                  SEO Strategy to rank higher for Google searches
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">
                  Clear daily communication so that you never feel lost
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/checkmark.svg"
                  alt="Benefit"
                  height={20}
                  width={20}
                />
                <span className="">1-Year maintenance plan included</span>
              </div>
            </div>
            {/* Package About */}
            <p className="">
              A guided experience from start to finish. You&apos;ll leave with a
              magnetic online presence that includes a clean & elevated brand, a
              hyper-effective website, and an optimized google business profile
              that drives traffic and conversions.
              <br />
              <br />
              This is perfect for practitioners who want to attract patients
              digitally. Whether you receive patients at your own private
              practice or in a shared medical center.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 text-center w-full items-center mt-auto">
              <CTAButton />
            </div>
          </div>
          {/* Custom Package */}
          <div className="rounded-[3px] flex flex-col text-start text-p p-8 bg-white gap-8 w-full lg:max-w-[448px]">
            {/* Name and Price */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-neutral-900 text-p">
                Custom Package
              </p>
              <p className="text-h1 font-bold header">Custom</p>
            </div>
            <p className="mt-[-16px]">
              If you are a more established business who has more specific goals
              or needs something different then apply below, or email us with
              more information at{" "}
              <span className="underline">sonny@levarestudio.com</span>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 text-center w-full items-center mt-auto">
              <Link
                href="/contact"
                className={`text-white uppercase text-cta bg-levare-red text-center w-fit px-5 py-2 cursor-pointer`}
              >
                Apply now (3 min)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
