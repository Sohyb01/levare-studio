import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

const BadToGoodSection = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row gap-y-12 lg:justify-between items-start text-start section-px py-20 text-foreground">
        {/* Text and cons */}
        <div className="lg:max-w-[448px] flex flex-col gap-4 w-full">
          <h2 className="text-h2">We help you go from this</h2>
          {/* Cons */}
          <div className="flex flex-col gap-4 text-p">
            {/* Con */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <XCircle size={16} className="stroke-destructive" />
              Weak audience engagement
            </div>
            {/* Con */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <XCircle size={16} className="stroke-destructive" />
              Poor unattractive branding
            </div>
            {/* Con */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <XCircle size={16} className="stroke-destructive" />
              Clients undervalue your services
            </div>
            {/* Con */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <XCircle size={16} className="stroke-destructive" />
              Website doesn’t make you money
            </div>
          </div>
        </div>
        {/* Text and Pros */}
        <div className="lg:max-w-[448px] flex flex-col gap-4 w-full">
          <h2 className="text-h2">to this</h2>
          {/* Pros */}
          <div className="flex flex-col gap-4 text-p">
            {/* Pro */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <CheckCircle size={16} className="stroke-primary" />
              Engaging your audience
            </div>
            {/* Pro */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <CheckCircle size={16} className="stroke-primary" />
              Attract higher-budget leads
            </div>
            {/* Pro */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <CheckCircle size={16} className="stroke-primary" />
              Competitive market position
            </div>
            {/* Pro */}
            <div className="px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-card flex items-center gap-4">
              <CheckCircle size={16} className="stroke-primary" />
              Confidently grow your business
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadToGoodSection;
