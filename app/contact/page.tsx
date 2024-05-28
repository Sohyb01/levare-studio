import React from "react";
import ContactPageFormSection from "../sections/ContactPageFormSection";
import SecondaryNavbar from "../components-custom/SecondaryNavbar";

const ContactPage = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="py-20 pt-[160px] bg-white relative">
          <div className="container flex flex-col items-center gap-8">
            <h1 className="text-neutral-800 text-h1 text-start w-full">
              We&apos;re excited to journey with you!
            </h1>
          </div>
        </section>
        <ContactPageFormSection />
      </main>
    </>
  );
};

export default ContactPage;
