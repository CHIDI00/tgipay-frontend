"use client";

import { Button } from "@/components/ui/button";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import Image from "next/image";
import React from "react";

import personinproductpage from "../../../../public/personinproductpageRaw.webp";
import Link from "next/link";

const OurProductHeroSection = () => {
  return (
    <section className="w-full lg:max-h-[60rem] h-[100dvh] bg-brand-navy ">
      <div className="max-w-[90rem] h-full flex justify-between items-center px-4 mx-auto overflow-y-hidden ">
        {/* CHANGED: grid -> flex flex-col lg:flex-row */}
        <div className="flex flex-col items-center w-full h-full lg:flex-row lg:gap-32 xl:gap-56">
          {/* left content - Takes approx 50% width on desktop */}
          <FadeInAnimation
            stagger={0.2}
            duration={1.2}
            className="w-full lg:w-1/2 md:py-[4.4rem] pt-[6rem] xl:space-y-14 md:space-y-5 space-y-3"
          >
            <h1 className="font-bold text-white text-[30px] md:text-[50px] lg:text-[45px] xl:text-[50px] leading-tight lg:leading-[50px] xl:leading-[70px]">
              Grow your business with our products and services
            </h1>

            <p className="font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white max-w-[628px]">
              Start accepting payments with our payment gateway
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="https://merchant.tgipay.com">
                <Button
                  size="lg"
                  className="bg-hero-cyan hover:bg-hero-cyan/90 text-white font-semibold text-[15px] px-6 py-4 h-auto rounded-lg 
                  transition-all duration-300 transform hover:-translate-y-1"
                >
                  Create Free Account
                </Button>
              </Link>
            </div>
          </FadeInAnimation>

          {/* right content - Takes approx 50% width on desktop */}
          <div className="relative flex items-center justify-center w-full h-full lg:w-1/2 lg:justify-center -bottom-2">
            <FadeInAnimation
              duration={1}
              className="relative flex items-center justify-center w-full lg:h-[80%] py-20"
            >
              <Image
                src={personinproductpage}
                alt="Payment solutions professional"
                width={1000}
                height={700}
                loading="lazy"
                className="w-[100%] h-auto"
                quality={100}
              />
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductHeroSection;
