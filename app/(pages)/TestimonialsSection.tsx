import { testimonialsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="border-border border-t-[1px]">
      <div className="container flex flex-col gap-10 section-px py-20 text-foreground">
        <h2 className="text-h2 text-start lg:text-center">
          <span className="text-muted">Testimonials</span>
          <br />
          Our wall of love
        </h2>
        {/* Testimonials Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {testimonialsData.map((testimonial, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-4 p-4 rounded-[0.5rem] text-start items-start w-full border-border bg-card border-[1px]"
              >
                {/* Avatar and Role */}
                <div className="flex gap-2 items-center justify-start">
                  <Image
                    height={32}
                    width={32}
                    src={testimonial.imageUrl}
                    alt={testimonial.text}
                    className="aspect-square rounded-full object-cover"
                  />
                  <div>
                    <div className="text-badge">{testimonial.name}</div>
                    <div className="text-badge text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-p text-foreground">{testimonial.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
