import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="border-solid border-t-[2px] border-neutral-200 w-full">
      <div className="container flex flex-col items-start text-start section-px pt-[100px] pb-8 text-neutral-800 gap-y-20">
        {/* First Row - Logo & Links */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-y-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icons/levare-logo.svg"
              width={168}
              height={92}
              alt="Levare Studio"
            />
          </Link>
          {/* Links */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 text-detail">
            <Link href="/case-studies/pes">Case Study</Link>
            <Link href="/contact">Work with us</Link>
            <Link
              href="https://www.instagram.com/sonny.branding/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@sonny.branding" target="_blank">
              TikTok
            </Link>
            {/* <Link href="/locations">Locations</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/gallery">Gallery</Link> */}
          </div>
        </div>
        {/* Second Row - Legal & Socials */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-y-6 pt-6 border-solid border-t-[1px] border-neutral-200">
          {/* Other Links */}
          <Link href="/legal" className="text-detail">
            Legal
          </Link>
          {/* Tiktok */}
          <Link href="https://www.tiktok.com/@sonny_imm" target="_blank">
            <Image
              src="/icons/tiktok.svg"
              height={24}
              width={20}
              alt="Tiktok"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
