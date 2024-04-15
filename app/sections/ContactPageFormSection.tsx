import ContactPageForm from "@/app/components-custom/ContactPageForm";
import React from "react";

const ContactPageFormSection = () => {
  return (
    <section
      id="packages"
      className="py-20 bg-neutral-800 relative packages-bg"
    >
      <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
        <p className="text-lg text-neutral-300 w-full lg:max-w-[352px]">
          We&apos;d like to start with a chat about you and your business, so
          fill in the form and we&apos;ll set up a call
          <br />
          <br />
          We can&apos;t wait to hear about your project and explore how we can
          elevate your online presence to the next level
        </p>
        <ContactPageForm />
      </div>
    </section>
  );
};

export default ContactPageFormSection;
