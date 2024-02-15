import React from "react";
import Package from "../components-custom/Package";
import Image from "next/image";

const packagesData = [
  {
    packageName: "Website in a week",
    packagePrice: "1200",
    packageBenefits: [
      "Up to 3 page high-converting website",
      "Basic Branding",
      "Brand Guidelines",
      "1 Month Post-Launch Support ",
    ],
  },
  {
    packageName: "FULL BRANDING & WEBSITE",
    packagePrice: "7600",
    packageBenefits: [
      "Up to 5 page high-converting website",
      "Full Strategic Brand Identity",
      "Brand Guidelines",
      "6-Month Post-Launch Support",
    ],
  },
  {
    packageName: "FULL SERVICE SUBSCRIPTION",
    packagePrice: "18600",
    packageBenefits: [
      "Unlimited Pages on Demand",
      "Full Strategic Brand Identity",
      "Customizable Templates for Social Media Posts",
      "Full Brand Guidelines Document",
      "1-Year Post-Launch Support",
      "24-Hour Support Guarantee",
      "Complete Brand Script (?)",
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-neutral-800 relative">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-white z-[1]">The Investment</h3>
        {/* Packages Container */}
        <div className="flex flex-wrap gap-8 items-center justify-center lg:grid lg:grid-cols-3 max-w-screen-md lg:max-w-none">
          {packagesData.map((packageData, idx) => (
            <Package packageData={packageData} key={idx} />
          ))}
        </div>
      </div>
      {/* Background Graphic */}{" "}
      <Image
        src="/graphics/Circle-Brush-Dark.svg"
        fill
        className="absolute top-0 left-0 pointer-events-none "
        alt=""
      />
    </section>
  );
};

export default PackagesSection;
