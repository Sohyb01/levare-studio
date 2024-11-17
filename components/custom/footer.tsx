import Link from "next/link";
import React from "react";
import SocialButtons from "./SocialButtons";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <section className="border-solid border-t-[1px] border-border w-full bg-background/80">
      <div className="px-4 md:px-8 lg:px-20 flex flex-col items-start text-start section-px pt-[100px] pb-8 text-foreground gap-y-[4rem]">
        {/* First Row - Logo & Links */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-y-8">
          {/* Footer CTA */}
          <div>
            <h3 className="text-h3 max-w-[280px] pb-4">
              Do you like <br /> what you see?
            </h3>
            <Link
              href={"/contact"}
              className={`${buttonVariants({ variant: "default" })}`}
            >
              Start a project
            </Link>
          </div>
          {/* Links */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-2 text-detail min-w-[7.5rem]">
            Explore
            <div className="flex flex-col gap-1">
              {/* Col 1 */}
              <Link
                className="text-muted hover:text-foreground w-fit"
                href="/contact"
              >
                Discovery call
              </Link>
              {/* <Link
                className="text-muted hover:text-foreground w-fit"
                href="/#process"
              >
                Our process
              </Link> */}
              <Link
                className="text-muted hover:text-foreground w-fit"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-muted hover:text-foreground w-fit"
                href="/about"
              >
                About
              </Link>
            </div>
          </div>
        </div>
        {/* Second Row - Legal & Socials */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-y-4">
          {/* Other Links */}
          <div className="flex flex-wrap gap-3 text-detail">
            <Link className="text-muted hover:text-foreground" href="/">
              Levare studio
            </Link>
            <span className="text-muted">|</span>
            <Link className="text-muted hover:text-foreground" href="/legal">
              Privacy policy
            </Link>
          </div>
          {/* Socials */}
          <SocialButtons />
        </div>
      </div>
    </section>
  );
};

export default Footer;
