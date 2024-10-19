import React from "react";
import ContactPageHeroSection from "./ContactPageHeroSection";
import ContactPageProcessSection from "./ContactPageProcessSection";
import ContactPageTestimonialsSection from "./ContactPageTestimonialsSection";

const ContactPage = () => {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <ContactPageHeroSection />
      <ContactPageProcessSection />
      <ContactPageTestimonialsSection />
    </main>
  );
};

export default ContactPage;
