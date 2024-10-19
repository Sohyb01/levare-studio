import ContactPageForm from "@/components/custom/ContactPageForm";
import React from "react";

const ContactPageHeroSection = () => {
  return (
    <section>
      <div className="container flex flex-col gap-y-12 lg:flex-row lg:justify-between items-start text-start section-px pt-[140px] pb-[80px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col items-start max-w-[448px] text-start gap-4 w-full">
          {/* Title */}
          <h1 className="text-h2 lg:max-w-[448px] md:text-h1 relative">
            We&apos;re excited to help you grow!
          </h1>
          {/* Text and CTAs and graphic */}
          <p className="text-p">
            We&apos;d like to start with a chat about you and your business, so
            fill in the following form and we&apos;ll get in contact with you.
          </p>
        </div>
        {/* Form */}
        <ContactPageForm />
      </div>
    </section>
  );
};

export default ContactPageHeroSection;
