"use client";

import React, { useState } from "react";
import FreebiesPageForm from "../components-custom/FreebiesPageForm";
import Link from "next/link";
import Image from "next/image";

const FreebiesPageFormSection = () => {
  const [userHasSubmittedEmail, setUserHasSubmittedEmail] = useState(false);

  return (
    <section className="py-20 bg-neutral-800 relative packages-bg">
      <div className="container flex flex-col gap-[120px]">
        {/* First row, contains text and form */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          <p className="text-p text-neutral-300 w-full lg:max-w-[352px]">
            Enter your email once, receive lifetime access to all current and
            future free resources
          </p>
          <FreebiesPageForm
            setUserHasSubmittedEmail={setUserHasSubmittedEmail}
          />
        </div>
        {/* Second: text and grid of resources */}
        <div className="flex flex-col gap-12 items-center">
          <h4 className="text-2xl w-full text-white text-center header">
            Available Resources
          </h4>
          <div className="grid grid-cols-1 gap-8 lg:flex lg:flex-row lg:justify-between w-full">
            <div className="freebie-container">
              {/* Image of PDF */}
              <div className="absolute aspect-[595/842] bottom-6 md:bottom-auto right-2 md:right-auto md:top-5 md:left-[-80px] w-[65px] md:w-[160px] shadow-lg rotate-3">
                <Image
                  src="/optimized/website-checklist-cover.png"
                  fill
                  alt="Checklist for an Effective Website"
                  className="object-cover object-center"
                />
              </div>
              {/* Title and paragrapgh */}
              <div className="flex flex-col gap-4">
                <h5 className="header text-p">Effective Website Checklist</h5>
                <p className="w-full text-sm text-neutral-800">
                  Learn the core elements needed to turn your website into a
                  client-getting machine that boosts your business and revenue.
                  <br />
                  <br />
                  <span className="font-bold">
                    Includes 9 points with examples
                  </span>
                </p>
              </div>
              {/* Download button */}
              <Link
                href={
                  userHasSubmittedEmail ? `/files/Website-Checklist.pdf` : `#`
                }
                className={`flex items-center gap-2 py-3 pl-4 pr-6 text-center bg-neutral-800 w-fit font-bold text-sm ${
                  userHasSubmittedEmail ? `text-white` : `text-neutral-400`
                }`}
              >
                <Image
                  src="/icons/download.svg"
                  height={24}
                  width={24}
                  alt="Download"
                />
                {userHasSubmittedEmail
                  ? `Download`
                  : `Submit Your Email to Download`}
              </Link>
            </div>
            <div className="freebie-container">
              {/* Image of PDF */}
              <div className="absolute aspect-[595/842] bottom-6 md:bottom-auto right-2 md:right-auto md:top-5 md:left-[-80px] w-[65px] md:w-[160px] shadow-lg rotate-3">
                <Image
                  src="/optimized/unknown.png"
                  fill
                  alt="Checklist for an Effective Website"
                  className="object-cover object-center"
                />
              </div>
              {/* Title and paragrapgh */}
              <div className="flex flex-col gap-4">
                <h5 className="header text-p">Website Copy Templates</h5>
                <p className="w-full text-sm text-neutral-800">
                  Copywriting templates which will help you write
                  high-converting sales copy for your website pages, allowing
                  you to convert visitors into buyers
                  <br />
                  <br />
                  <span className="font-bold">
                    Includes templates for website sections & pages
                  </span>
                </p>
              </div>
              {/* Download button */}
              <div
                // href="/freebies"
                className="flex items-center gap-2 py-3 pl-4 pr-4 text-center text-neutral-400 bg-neutral-800 w-fit font-bold text-sm"
              >
                {/* <Image
                  src="/icons/download.svg"
                  height={24}
                  width={24}
                  alt="Download"
                /> */}
                Coming Soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreebiesPageFormSection;
