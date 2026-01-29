"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    title: "Customers",
    description:
      "Empowering our customers with seamless and secure payment experiences",
  },
  {
    title: "Integrity",
    description:
      "Building trust through transparency, honesty, and ethical practices",
  },
  {
    title: "Focus",
    description: "Laser-focused on what matters most — our clients' success",
  },
  {
    title: "Innovation",
    description:
      "Driving progress with cutting-edge solutions that shape the future of payments",
  },
  {
    title: "Deliver excellence",
    description: "Exceeding expectations with consistent, high-quality service",
  },
  {
    title: "Work Smart",
    description:
      "Maximizing efficiency with intelligent strategies and innovative thinking",
  },
  {
    title: "Collaboration",
    description:
      "Together, we achieve more by fostering partnerships and teamwork",
  },
  {
    title: "Journey",
    description:
      "Committed to growth and continuous improvement in every step we take",
  },
  {
    title: "Lead",
    description:
      "Leading by example to inspire progress and set new standards in payments",
  },
];

const OurValue = () => {
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
    <div
      id="our-values"
      ref={containerRef}
      className="w-full py-20 bg-white lg:py-24"
    >
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col space-y-12">
          <h2 className="text-4xl font-bold md:text-5xl text-brand-navy">
            Our Values
          </h2>

          {/* xalues */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="value-card flex flex-col items-start p-10 md:h-[20rem] transition-shadow duration-300 rounded-xl bg-slate-50 hover:shadow-md"
              >
                <div className="flex items-center w-full mb-4 space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
