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
      className={`text-white bg-levare-red text-center rounded-full px-8 py-3 cursor-pointer ${classname}`}
    >
      {buttonText ? buttonText : "Apply Now"}
    </Link>
  );
};

export default CTAButton;
