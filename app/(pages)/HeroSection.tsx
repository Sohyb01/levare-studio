import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="container flex flex-col lg:flex-row justify-between items-start text-start section-px pt-[160px] pb-[80px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-end text-start gap-6 w-full">
          {/* Title */}
          <h1 className="text-h2 lg:max-w-[448px] md:text-h1 relative">
            10-30 New clients per month <br className="md:hidden" /> for your
            service business
          </h1>
          {/* Text and CTAs and graphic */}
          <div className="flex lg:flex-row-reverse pt-6 lg:pt-0 justify-between lg:gap-8 w-full items-end">
            {/* Text + CTAs */}
            <div className="w-full max-w-[419px] lg:max-w-none">
              <p className="text-p">
                We work with service-based businesses to help them attract more
                clients digitally with brand strategy, websites, copywriting,
                and SEO
              </p>
              {/* CTAs */}
              <div className="pt-6 flex gap-4 items-center w-full flex-wrap justify-start">
                <Link
                  href={"/contact"}
                  className={`${buttonVariants({ variant: "default" })}`}
                >
                  Start a project
                </Link>
                <Link
                  href={"/#process"}
                  className={`${buttonVariants({ variant: "secondary" })}`}
                >
                  Our process
                </Link>
              </div>
            </div>
            {/* Graphic */}
            <div className="hidden md:block relative aspect-[64/59.19] h-[146px] lg:h-[59.19px] animate-bounce">
              <Image
                fill
                src="/shape-1.svg"
                alt="Service business digital marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
