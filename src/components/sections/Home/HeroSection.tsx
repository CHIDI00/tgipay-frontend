"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import herosectionperson from "../../../../public/herosectionperson.png";
import CircularChart from "../../../../public/CircularChart.svg";
import SplitText from "@/components/ui/SplitText";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import FloatingAnimation from "@/components/ui/FloatingAnimation";

const HeroSection = () => {
  return (
    <section className="w-full lg:max-h-[60rem] h-[100dvh] bg-[#F9FAFB] ">
      <div className="max-w-[90rem] h-full flex justify-between items-center px-4 mx-auto overflow-y-hidden ">
        <div className="flex flex-col items-center w-full h-full lg:flex-row">
          {/* left content*/}
          <div className="w-full lg:w-1/2 py-[4.4rem] lg:space-y-5 md:space-y-14 space-y-3 ">
            <h1 className="font-bold text-[30px] md:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight lg:leading-[50px] xl:leading-[70px]">
              <span className="block text-hero-navy">
                {" "}
                <SplitText
                  text="Enjoy fast, secure,"
                  className="inline-block"
                  delay={10}
                  duration={0.7}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                />
              </span>

              <span className="flex flex-wrap gap-x-3 md:gap-x-5">
                <span className="text-hero-navy">
                  <SplitText
                    text="and"
                    className="inline-block"
                    delay={20}
                    duration={0.7}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </span>
                <span className="text-hero-cyan">
                  <SplitText
                    text="seamless"
                    className="inline-block"
                    delay={40}
                    duration={0.7}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </span>
              </span>

              <span className="text-hero-cyan">
                <SplitText
                  text="payment  solutions"
                  className="flex"
                  delay={50}
                  duration={0.7}
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </span>
            </h1>

            <FadeInAnimation delay={0.5}>
              <p className="font-medium text-[14px] xl:text-[20px] lg:text-[17px] md:text-[20px] leading-[24px] md:leading-[30px] text-[rgba(41,39,39,0.72)] max-w-[628px]">
                Experience payments without boundaries. We offer fast, secure,
                and frictionless transactions for businesses and individuals.
                You can focus on growing while we handle the payments.
              </p>
            </FadeInAnimation>

            <FadeInAnimation
              delay={1}
              stagger={0.2}
              className="flex gap-4 pt-6"
            >
              <Button
                size="lg"
                className="bg-hero-cyan hover:bg-hero-cyan/90 text-white font-semibold md:text-[15px] text-[13px] px-6 py-4 h-auto rounded-lg"
              >
                Create Free Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-hero-navy text-hero-navy hover:bg-gray-50 font-semibold md:text-[15px] text-[13px] px-6 py-4 h-auto rounded-lg"
              >
                Learn more
              </Button>
            </FadeInAnimation>
          </div>

          {/* right content  */}
          <div className="relative flex items-end justify-center w-full h-full lg:w-1/2 lg:justify-end -bottom-2">
            <FadeInAnimation
              delay={0.6}
              stagger={0.2}
              className="h-full lg:h-auto"
            >
              <div className="relative w-full h-full ">
                <Image
                  src={herosectionperson}
                  alt="Payment solutions professional"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full lg:h-auto "
                  priority
                />
              </div>

              <FloatingAnimation className="absolute bottom-0 z-10 -translate-x-1/2 left-1/2">
                <Image
                  src={CircularChart}
                  alt="Payment solutions professional"
                  width={300}
                  height={300}
                  className="w-auto shadow-3xl"
                  priority
                />
              </FloatingAnimation>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
