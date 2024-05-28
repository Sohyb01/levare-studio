import React from "react";

const ProjectGoalsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-blue-50 text-neutral-900">
      <div className="container flex flex-col lg:flex-row gap-20 items-start lg:justify-center">
        {/* Goals */}
        <div className="flex flex-col gap-x-8 gap-y-4 w-full max-w-[448px]">
          <h2 className="text-h2">PROJECT GOALS</h2>
          <p>
            When PES came to us they were preparing to upgrade and expand their
            modern educational brand to new audiences across the region
            <br />
            <br />
            The goal for this project was to sharpen their brand and give them a
            highly competitive presence in their field. We achieved this with a
            modern, sleek, professional brand design
            <br />
            <br />
            We also combined this with an effective website and a streamlined
            customer journey that works with their social media presence to
            build trust with customers and guide them to the action PES wanted
            them to take
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col gap-x-8 gap-y-4 max-w-[208px]">
          <h2 className="text-h2">SERVICES</h2>
          <p>
            - Brand Strategy <br />
            - Creative Direction <br />
            - Copywriting <br />- Website Design
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGoalsSection;
