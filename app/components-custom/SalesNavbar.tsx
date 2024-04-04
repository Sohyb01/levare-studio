import Link from "next/link";
import CTAButton from "./CTAButton";
import Image from "next/image";

const SalesNavbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center z-50 section-padding">
      <div className="w-full max-w-[1920px] p-6 px-8 flex justify-between items-center">
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
        <CTAButton />
      </div>
    </nav>
  );
};

export default SalesNavbar;
