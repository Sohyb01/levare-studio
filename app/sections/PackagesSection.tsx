import React from "react";
import Package from "../components-custom/Package";
import Image from "next/image";
import CTAButton from "../components-custom/CTAButton";

const packagesData = [
  {
    packageName: "QUICK LAUNCH (1-2 Weeks)",
    packagePrice: "3470",
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
  {
    packageName: "FULL SERVICE PACKAGE (3-4 Weeks)",
    packagePrice: "6000",
    packageBenefits: [
      "Brand Strategy",
      "Wordmark Logo",
      "Brand Design",
      "Messaging Strategy",
      "Social Media Strategy",
      "5-10 Page High-Converting website",
      "Advanced SEO Optimizations",
      // "Website Blog Features",
    ],
    packageAbout: [
      "A comprehensive experience rooted in strategy and designed to give you everything you need to set your business apart as an industry leader",
      "Starting with strategy we'll carry out an in depth audience & competitor analysis to inform all our design decisions",
      "We'll then craft you a standout & action driven online presence driven by your long term strategy and ambitions for your business",
    ],
  },
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
        <div className="flex flex-wrap gap-8 items-center justify-center lg:grid lg:grid-cols-3 max-w-screen-md lg:max-w-none">
          {packagesData.map((packageData, idx) => (
            <Package packageData={packageData} key={idx} />
          ))}
          {/* Custom Package */}
          <div className="rounded-[3px] flex flex-col text-start p-8 bg-white gap-8 w-full max-w-[332px] lg:max-w-none">
            {/* Name and Price */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-neutral-400 uppercase text-subtle-semibold">
                CUSTOM PACKAGE
              </p>
              <p className="text-neutral-800 text-h1 font-bold header">
                Custom
              </p>
            </div>
            <p className="mt-[-16px]">
              Unsure? Get a custom quote and project that matches your budget
              and goals
              <br />
              <br />
              After applying, we will get in touch with you and discuss the
              details of your project
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 text-center w-full items-center mt-auto">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
