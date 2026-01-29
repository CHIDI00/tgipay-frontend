"use client";

import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

import FadeInAnimation from "@/components/ui/FadeInAnimation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WeEmpowerBusinessInOurProduct = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // left rings animation
      gsap.from(".ring-left", {
        x: -150,
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // right rings animation
      gsap.from(".ring-right", {
        x: 150,
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full py-32 overflow-hidden bg-white"
    >
      {/* left rings */}
      <div className="absolute left-0 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2">
        <div className="relative flex items-center justify-center">
          <div className="ring-left absolute w-[25rem] h-[25rem] border-2 border-brand-cyan/80 rounded-full" />
          <div className="ring-left absolute w-[45rem] h-[45rem] border-[3px] border-brand-cyan/80 rounded-full" />
          <div className="ring-left absolute w-[65rem] h-[65rem] border-[4.7px] border-brand-cyan/80 rounded-full" />
        </div>
      </div>

      {/* right rings */}
      <div className="absolute right-0 z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2">
        <div className="relative flex items-center justify-center">
          <div className="ring-right absolute w-[25rem] h-[25rem] border-2 border-brand-cyan/80 rounded-full" />
          <div className="ring-right absolute w-[45rem] h-[45rem] border-[3px] border-brand-cyan/80 rounded-full" />
          <div className="ring-right absolute w-[65rem] h-[65rem] border-[4.7px] border-brand-cyan/80 rounded-full" />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col items-center justify-center lg:w-[55%] md:w-[70%] w-full mx-auto">
          <FadeInAnimation
            stagger={0.2}
            className="flex flex-col items-center justify-center gap-10"
          >
            <h1 className="leading-tight text-center md:text-[3.5rem] text-[2.2rem] font-bold text-brand-navy">
              We empower businesses with easy, reliable, and{" "}
              <span className="text-brand-cyan">secure payment systems</span>
            </h1>

            <p className="text-slate-600 font-normal text-center md:text-[20px] text-[14px] max-w-2xl leading-relaxed">
              Helping you collect payments, confirm transactions instantly,
              track financial activities, and grow with unmatched efficiency.
            </p>

            <div>
              <Button className="px-10 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl py-7 bg-brand-navy hover:bg-brand-navy/90 hover:shadow-2xl hover:-translate-y-1">
                Learn more
              </Button>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default WeEmpowerBusinessInOurProduct;
