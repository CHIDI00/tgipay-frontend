"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import herosectionperson from "../../../../public/aboutimage.webp";

import FadeInAnimation from "@/components/ui/FadeInAnimation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HomeSectionForAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".ripple-ring-about", {
        scale: 0.5,
        opacity: 0,
        duration: 1.9,
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
    <section
      ref={containerRef}
      className="w-full lg:max-h-[60rem] h-[100dvh] bg-brand-navy overflow-hidden"
    >
      <div className="max-w-[90rem] h-full flex justify-between items-center px-4 mx-auto overflow-hidden">
        <div className="flex flex-col items-center w-full h-full gap-5 lg:flex-row">
          {/* left content */}
          <FadeInAnimation
            stagger={0.2}
            duration={1.2}
            className="w-full lg:w-1/2 lg:py-[4.4rem] pt-[6rem] xl:space-y-14 md:space-y-5 space-y-3"
          >
            <h1 className="font-bold text-white text-[25px]  md:text-[50px] lg:text-[40px] xl:text-[50px] leading-tight lg:leading-[45px] xl:leading-[60px]">
              <span>The payment gateway</span>
              <br />
              <span>built for simplicity </span>
              <span>and Speed</span>
            </h1>

            <p className="font-medium text-[14px] xl:text-[20px] lg:text-[17px] md:text-[20px] leading-[24px] md:leading-[30px] text-white max-w-[628px]">
              Experience seamless payments with TGIPAY. Built to ensure fast,
              secure transactions every time allowing you focus on growing your
              business with confidence.
            </p>

            <Link
              href="https://merchant.tgipay.com/signup"
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button
                size="lg"
                className="bg-hero-cyan hover:bg-hero-cyan/90 text-white font-semibold md:text-[15px] text-[13px] px-6 py-4 h-auto rounded-lg"
              >
                Create Free Account
              </Button>
            </Link>
          </FadeInAnimation>

          {/* right content */}
          <div className="relative flex items-end justify-center w-full h-full lg:w-1/2">
            <FadeInAnimation
              duration={1}
              className="relative w-full lg:h-[90%] h-full overflow-visible flex justify-center items-center"
            >
              <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 -z-10">
                <div className="ripple-ring-about absolute w-[35rem] h-[35rem] border-[1px] border-brand-cyan/20 rounded-full" />
                <div className="ripple-ring-about absolute w-[45rem] h-[45rem] border-[2px] border-brand-cyan/20 rounded-full" />
                <div className="ripple-ring-about absolute w-[55rem] h-[55rem] border-[3px] border-brand-cyan/20 rounded-full" />
                <div className="ripple-ring-about absolute w-[65rem] h-[65rem] border-[4px] border-brand-cyan/20 rounded-full" />
              </div>

              <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-[30rem] h-[30rem] md:w-[35rem] md:h-[35rem] bg-brand-cyan flex justify-center items-center">
                <div className="w-[90%] h-[90%] bg-transparent border-[15px] md:border-[20px] border-brand-navy rounded-full"></div>
              </div>

              <Image
                src={herosectionperson}
                alt="Payment solutions professional"
                width={600}
                height={1000}
                loading="lazy"
                className="z-50 w-auto h-full"
              />
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionForAbout;
