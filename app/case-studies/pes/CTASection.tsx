import CTAButton from "@/app/components-custom/CTAButton";
import React from "react";

const CTASection = () => {
  return (
    <section>
      <div className="relative w-full container flex flex-col items-center gap-y-8 py-20">
        <h2 className="text-h2 text-center">
          Ready to team up to grow
          <br /> your business?
        </h2>
        <CTAButton />
      </div>
    </section>
  );
};

export default CTASection;
