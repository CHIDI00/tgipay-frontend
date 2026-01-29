"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    number: "2,345",
    description: "Total Merchants Onboarded",
  },
  {
    number: "23",
    description: "Trillion Total Value of Transactions Processed",
  },
  {
    number: "350",
    description: "Million Total Number of Transactions",
  },
  {
    number: "99.9",
    description: "Average Success Rate",
  },
];

const OurResultSpeaks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="px-4 py-24 bg-brand-navy sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* heading */}
        <h2 className="text-white text-center font-bold text-3xl sm:text-5xl lg:text-[55px] leading-tight lg:leading-[60px] mb-20 max-w-5xl mx-auto">
          Our results speak for themselves, check out the numbers.
        </h2>

        {/* stats grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center value-card">
              <div className="text-white font-bold text-5xl lg:text-[55px] leading-[60px] mb-4">
                {stat.number}
              </div>
              <p className="text-white text-lg leading-[30px] max-w-[250px] font-light mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurResultSpeaks;
