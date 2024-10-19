import React from "react";

const ContactPageProcessSection = () => {
  return (
    <section id="process" className="border-border border-t-[1px]">
      <div className="container flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-20 section-px py-20 text-foreground">
        <div className="lg:max-w-[448px]">
          <h2 className="text-h2 text-start text-foreground">
            See how it works
          </h2>
          <p className="text-p py-4">
            This 2 min video will explain the complete process when you decide
            to work with us. We value clarity and want to help you make the best
            decision for yourself.
          </p>
        </div>
        {/* Video goes here later */}
        <div className="rounded-[1rem] border-border border-[1px] w-full lg:max-w-[592px] aspect-video"></div>
      </div>
    </section>
  );
};

export default ContactPageProcessSection;
