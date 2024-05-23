import Link from "next/link";
import React from "react";

const CTAButton = ({
  buttonText,
  classname,
}: {
  buttonText?: string;
  classname?: string;
}) => {
  return (
    <Link
      href="/contact"
      className={`text-white uppercase text-cta bg-levare-red text-center w-fit px-5 py-2 cursor-pointer ${classname}`}
    >
      {buttonText ? buttonText : "Grow my Business"}
    </Link>
  );
};

export default CTAButton;
