import Image from "next/image";
import React from "react";

const IsThisForMeSection = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-8 container">
        <h2 className="text-neutral-900 section-header text-center">
          Is this for me?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Negatives Container */}
          <div className="flex flex-col gap-8 p-8 bg-neutral-800 border-and-shadow w-full">
            <p className="text-neutral-200 text-lg font-bold">
              Does this sound familiar?
            </p>
            <div className="flex flex-col items-start text-yellow-300 gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/xmark.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Weak Engagement</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/xmark.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Poor, Unattractive Branding</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/xmark.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Ineffective DIY Website</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/xmark.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Clients Undervalue your Services</p>
              </div>
            </div>
          </div>
          {/* Positives Container */}
          <div className="flex flex-col gap-8 p-8 testimonial-bg-2 border-and-shadow w-full">
            <p className="text-neutral-200 text-lg font-bold">
              Now imagine if you could...
            </p>
            <div className="flex flex-col items-start text-green-300 gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/checkmark-green.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Engage your customers</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/checkmark-green.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Attract Higher Budget Leads</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/checkmark-green.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Have a competitive market position</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/checkmark-green.svg"
                  alt="Business pain"
                  width={20}
                  height={20}
                />
                <p>Confidently Raise your Rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisForMeSection;
