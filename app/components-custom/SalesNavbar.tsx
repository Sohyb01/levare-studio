import Link from "next/link";
import CTAButton from "./CTAButton";
import Image from "next/image";

const SalesNavbar = () => {
  return (
    <nav className="relative w-full flex justify-center z-50">
      <div className="fixed top-2 z-[1] w-full p-6 px-8 flex justify-between items-center duration-300 container backdrop-blur-sm bg-white bg-opacity-[0.8] rounded-full">
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
