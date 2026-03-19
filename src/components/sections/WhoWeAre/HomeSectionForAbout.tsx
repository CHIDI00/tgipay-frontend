"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
// import herosectionperson from "../../../../public/personinwhoweareRaw.webp";
import herosectionperson from "../../../../public/aboutimage.png";

import FadeInAnimation from "@/components/ui/FadeInAnimation";
import Link from "next/link";

const HomeSectionForAbout = () => {
  return (
    <section className="w-full lg:max-h-[60rem] h-[100dvh] bg-brand-navy">
      <div className="max-w-[90rem] h-full flex justify-between items-center px-4 mx-auto overflow-y-hidden">
        <div className="flex flex-col items-center w-full h-full gap-5 lg:flex-row">
          {/* left content */}
          <FadeInAnimation
            stagger={0.2}
            duration={1.2}
            className="w-full lg:w-1/2 lg:py-[4.4rem] pt-[6rem] xl:space-y-14 md:space-y-5 space-y-3"
          >
            <h1 className="font-bold text-white text-[30px]  md:text-[50px] lg:text-[40px] xl:text-[50px] leading-tight lg:leading-[45px] xl:leading-[60px]">
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
              className="relative w-full lg:h-[90%] h-full overflow-hidden flex justify-center items-center"
            >
              <Image
                src={herosectionperson}
                alt="Payment solutions professional"
                width={600}
                height={1000}
                loading="lazy"
                className="z-50 w-auto h-full"
              />

              <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-[70%] h-[70%] bg-brand-cyan"></div>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionForAbout;
