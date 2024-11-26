import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProcessSection = () => {
  return (
    <section id="process">
      <div className="container flex flex-col items-center gap-8 section-px py-20 text-foreground">
        <h2 className="text-h2 text-center text-foreground">
          <span className="text-muted">Our process</span>
          <br />
          See how it works
        </h2>
        {/* Video goes here later */}
        <div className="rounded-[1rem] border-border border-[1px] w-full aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cnaE8Blrqfs?si=QgIp4VgNiE6KJQH5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
