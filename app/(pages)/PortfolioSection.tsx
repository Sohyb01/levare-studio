import { buttonVariants } from "@/components/ui/button";
import { projectsData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-border border-t-[1px]">
      <div className="container flex flex-col text-start section-px py-20 text-foreground">
        <h2 className="text-h2">
          <span className="text-muted">Portfolio</span>
          <br />
          Selected Works
        </h2>
        {/* Portfolio container */}
        <div className="flex flex-col gap-16 w-full pt-8">
          {/* Portfolio */}
          {projectsData.map((project, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col-reverse md:flex-row w-full gap-8 md:gap-20 lg:gap-[8rem] pt-8 border-border border-t-[1px]"
              >
                {/* Info */}
                <div className="flex flex-col w-full max-w-[448px]">
                  {/* Title */}
                  <h3 className="text-h3">
                    <span className="text-muted">{project.title}</span>
                    <br />
                    {project.description}
                  </h3>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-8 pb-8 lg:pb-0">
                    {project.tags.map((tag, idx) => (
                      <div
                        className="px-2.5 py-1.5 rounded-full border-border border-[1px] bg-card text-card-foreground text-badge"
                        key={idx}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={project.projectUrl}
                    className={`${buttonVariants({
                      variant: "secondary",
                    })} gap-2 items-center mt-auto w-fit`}
                  >
                    See project
                    <ArrowUpRight size={16} className="mb-1" />
                  </Link>
                </div>
                {/* Image */}
                <div className="relative w-full aspect-[3/2] md:max-w-[324px] lg:max-w-[544px]">
                  <Image
                    className="rounded-[0.5rem] object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
