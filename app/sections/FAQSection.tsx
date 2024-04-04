import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section
      id="packages"
      className="py-20 bg-neutral-800 relative packages-bg"
    >
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-white section-header">
          Frequently Asked Questions
        </h2>
        {/* Questions container */}
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-8 items-center justify-center lg:grid lg:grid-cols-2 md:container"
        >
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-1"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              What can I expect after applying and filling out the form?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              We will get back to you within 24 hours informing you of whether
              we think you are a good match who we can get great results for, or
              if we don’t think we are the right fit for you
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-2"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              What happens if we decide to work together?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              We will begin the onboarding process for you, begin understanding
              your business and its requirements further, and then carrying out
              the strategies and systems to make sure you reach your goals
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-3"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              How do you manage communication between you and clients you work
              with?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              We value consistent and clear communication as it allows us to
              deliver the best results to our clients.
              <br />
              <br />
              We use E-mail for communication, as well as Notion as a portal for
              our clients to find all the information (files, invoices,
              presentations, questionnaires…) they need in one place once they
              have been onboarded.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-4"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              What types of businesses can you bring the best results for?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              We focus primarily on businesses who have been in business for at
              least a few months and have one or two solidified offers, and also
              who preferably already have an audience or a plan to market
              themselves in the future
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-5"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              Do you provide marketing services?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              We do not provide marketing services, we focus on creating an
              effective, high conversion machine for our clients&apos;
              businesses so that they can confidently market themselves or push
              their existing audience towards profitable sales pages and
              websites
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-6"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              Do you provide SEO services?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              SEO essentials are included in our packages (image optimization,
              website speed, link optimization…) , however we do not provide
              advanced SEO to help our client&apos;s businesses rank on first
              pages of search engines.
              <br />
              <br />
              However, if a blog is included in your package, you can use that
              to start ranking for articles on specific topics, driving more
              traffic to the rest of your website from searches.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full text-white border-solid border-[4px] border-l-levare-red border-t-[0px] border-b-[0px] border-r-[0px] bg-neutral-900 p-6"
            value="item-7"
          >
            <AccordionTrigger className="text-white text-md font-normal p-0 text-start">
              Do you provide ongoing website maintenance?
            </AccordionTrigger>
            <AccordionContent className="text-normal-200 text-sm pt-4">
              Yes, our ongoing maintenance rate is 100 USD / Month for up to 2
              hours of maintenance. You can use this to change any information,
              text, or images on your website and you can inform us of the
              changes you want to make.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <div className="flex flex-wrap gap-8 items-center justify-center lg:grid lg:grid-cols-3 max-w-screen-md lg:max-w-none"></div> */}
      </div>
    </section>
  );
};

export default FAQSection;
