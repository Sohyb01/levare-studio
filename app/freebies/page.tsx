import React from "react";
import SalesNavbar from "../components-custom/SalesNavbar";
import FreebiesPageFormSection from "../sections/FreebiesPageFormSection";

const FreebiesPage = () => {
  return (
    <>
      <SalesNavbar />
      <main>
        <section className="py-20 pt-[160px] bg-white relative">
          <div className="container flex flex-col items-center gap-8">
            <h1 className="text-neutral-800 text-3xl header text-start w-full">
              High-Quality free resources to help you on your journey
            </h1>
          </div>
        </section>
        {/* <ContactPageFormSection /> */}
        <FreebiesPageFormSection />
      </main>
    </>
  );
};

export default FreebiesPage;
