import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import herosectionperson from "../../../../public/herosectionperson.png";
import CircularChart from "../../../../public/CircularChart.svg";

const HeroSection = () => {
  return (
    <section className="w-full lg:h-[49rem] bg-[#F9FAFB] ">
      <div className="max-w-[90rem] h-full flex justify-center items-center px-4 mx-auto ">
        <div className="grid items-center h-full grid-cols-1 lg:grid-cols-2">
          {/* Left Content  */}
          <div className="py-[4.4rem] md:space-y-14 space-y-5">
            <h1 className="font-montserrat font-bold text-[30px] md:text-[60px] lg:text-[65px] leading-tight lg:leading-[80px]">
              <span className="text-hero-navy">Enjoy fast, secure,</span>
              <br />
              <span className="text-hero-navy">and </span>
              <span className="text-hero-cyan">seamless</span>
              <br />
              <span className="text-hero-cyan">payment solutions</span>
            </h1>

            <p className="font-montserrat font-medium text-[16px] md:text-[24px] leading-[24px] md:leading-[30px] text-[rgba(41,39,39,0.72)] max-w-[628px]">
              Experience payments without boundaries. We offer fast, secure, and
              frictionless transactions for businesses and individuals. You can
              focus on growing while we handle the payments.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="bg-hero-cyan hover:bg-hero-cyan/90 text-white font-montserrat font-semibold text-[15px] px-6 py-4 h-auto rounded-lg"
              >
                Create Free Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-hero-navy text-hero-navy hover:bg-gray-50 font-montserrat font-semibold text-[15px] px- py-4 h-auto rounded-lg"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-end justify-center h-full lg:justify-end">
            <div className="relative w-full">
              <Image
                src={herosectionperson}
                alt="Payment solutions professional"
                width={700}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>

            <Image
              src={CircularChart}
              alt="Payment solutions professional"
              width={300}
              height={300}
              className="absolute bottom-0 -translate-x-1/2 shadow-3xl left-1/2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
