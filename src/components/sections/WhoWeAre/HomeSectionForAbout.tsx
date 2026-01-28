"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

import herosectionperson from "../../../../public/personinwhoweare.svg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const HomeSectionForAbout = () => {
  return (
    <section className="w-full lg:h-[49rem] h-[100dvh] bg-brand-navy ">
      <div className="max-w-[90rem] h-full flex justify-between items-center px-4 mx-auto overflow-y-hidden ">
        <div className="grid items-center w-full h-full grid-cols-1 lg:grid-cols-2">
          {/* left content */}
          <FadeInAnimation
            stagger={0.2}
            duration={1.2}
            className="py-[4.4rem] md:space-y-14 space-y-5 "
          >
            <h1 className="font-bold text-white text-[30px] md:text-[60px] lg:text-[60px] leading-tight lg:leading-[70px]">
              <span className="">The payment gatway</span>
              <br />
              <span className="">built for simplicity, </span>
              <span className="">trust, reliability, and</span>
              <br />
              <span className="">Speed</span>
            </h1>

            <p className="font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white max-w-[628px]">
              Experience seamless payments with TGIPAY. Built to ensure fast,
              secure transactions every time — allowing you focus on growing
              your business with confidence.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="bg-hero-cyan hover:bg-hero-cyan/90 text-white font-semibold text-[15px] px-6 py-4 h-auto rounded-lg"
              >
                Create Free Account
              </Button>
            </div>
          </FadeInAnimation>

          {/* right content */}
          <div className="relative flex items-center justify-center h-full lg:justify-center -bottom-2">
            <FadeInAnimation
              duration={1}
              className="relative flex items-center justify-center w-full lg:h-[80%] py-20"
            >
              <Image
                src={herosectionperson}
                alt="Payment solutions professional"
                width={800}
                height={700}
                className="w-[80%] h-auto"
                priority
              />
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionForAbout;
