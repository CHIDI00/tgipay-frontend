"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";

import mobilephone from "../../../../public/mobilephone.svg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ReadyToTransform = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".ripple-ring", {
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
      className="relative w-full lg:py-0 lg:pt-36 bg-brand-cyan overflow-hidden"
    >
      <div className="absolute right-20 z-0  -translate-y-1/2 pointer-events-none top-[25%]">
        <div className="relative flex items-center justify-center">
          <div className="ripple-ring absolute w-[25rem] h-[25rem] border-2 border-gray-200/20 rounded-full shadow-lg" />
          <div className="ripple-ring absolute w-[45rem] h-[45rem] border-[3px] border-gray-200/20 rounded-full shadow-lg" />
          <div className="ripple-ring absolute w-[65rem] h-[65rem] border-[4.7px] border-gray-200/20 rounded-full shadow-lg" />
        </div>
      </div>

      <div className="max-w-[90rem] px-4 mx-auto ">
        <div className="flex flex-col-reverse items-center justify-center w-full gap-10 md:flex-row">
          {/* Card Image */}
          <FadeInAnimation
            duration={1.2}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src={mobilephone}
              alt="Debit cards illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </FadeInAnimation>

          {/* Content */}
          <FadeInAnimation
            stagger={0.5}
            className="flex flex-col items-start justify-start py-8 space-y-8 md:py-20 lg:space-y-14 md:items-center lg:items-start lg:max-w-xl"
          >
            <h2 className=" font-bold text-[28px] md:text-[55px] md:leading-[60px] leading-[30px] text-white">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg font-normal leading-[30px] text-white">
              Unlock new possibilities with our smart payment solutions.
              Streamline transactions, secure your revenue, and watch your
              business grow. Start transforming your business today!
            </p>

            <Button
              size="lg"
              className="rounded-lg py-7 bg-brand-navy hover:bg-slate-700"
            >
              Create a Free Account Now!
            </Button>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTransform;
