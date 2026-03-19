"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  ShieldCheck,
  Target,
  Lightbulb,
  Award,
  Zap,
  Handshake,
  Route,
  Flag,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    title: "Customers",
    description:
      "Empowering our customers with seamless and secure payment experiences",
    icon: Users,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Integrity",
    description:
      "Building trust through transparency, honesty, and ethical practices",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Focus",
    description: "Laser-focused on what matters most — our clients' success",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Innovation",
    description:
      "Driving progress with cutting-edge solutions that shape the future of payments",
    icon: Lightbulb,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Deliver excellence",
    description: "Exceeding expectations with consistent, high-quality service",
    icon: Award,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Work Smart",
    description:
      "Maximizing efficiency with intelligent strategies and innovative thinking",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Collaboration",
    description:
      "Together, we achieve more by fostering partnerships and teamwork",
    icon: Handshake,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Journey",
    description:
      "Committed to growth and continuous improvement in every step we take",
    icon: Route,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lead",
    description:
      "Leading by example to inspire progress and set new standards in payments",
    icon: Flag,
    className: "md:col-span-2 md:row-span-1",
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
      // ref={containerRef}
      className="w-full py-20 bg-white lg:py-24"
    >
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col space-y-12">
          <h2 className="text-4xl font-bold md:text-5xl text-brand-navy">
            Our Values
          </h2>

          {/* xalues */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[16rem]">
            {values.map((item, index) => (
              <div
                key={index}
                className={`value-card relative flex flex-col justify-between p-8 transition-all duration-300 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-1 ${item.className}`}
              >
                {/* Top Section: Icon */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-600 bg-white rounded-full">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Section: Text */}
                <div className="mt-8">
                  <h3 className="mb-3 text-2xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
