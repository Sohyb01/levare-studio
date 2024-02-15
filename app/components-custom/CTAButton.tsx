import Link from "next/link";
import React from "react";

const CTAButton = ({ buttonText }: { buttonText?: string }) => {
  return (
    <Link
      href="/"
      className="text-white bg-levare-red font-bold text-center rounded-full px-8 py-3 cursor-pointer"
    >
      {buttonText ? buttonText : "Get Started"}
    </Link>
  );
};

export default CTAButton;
