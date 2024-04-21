import React from "react";
import Link from "next/link";
import Image from "next/image";

const SecondaryNavbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center z-50 section-padding">
      <div className="w-full lg:container py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/icons/levare-logo.svg"
            width={77}
            height={42.25}
            alt="Levare Studio"
          />
        </Link>
        {/* CTA and Menu Button */}
        <Link
          href="/"
          className={`text-white bg-neutral-800 text-center rounded-full px-8 py-3 cursor-pointer`}
        >
          Back to home
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
