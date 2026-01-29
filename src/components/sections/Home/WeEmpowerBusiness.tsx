"use client";

import { Button } from "@/components/ui/button";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import React from "react";

const WeEmpowerBusiness = () => {
  return (
    <div id="why-us" className="w-full py-24 bg-brand-navy">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col items-center justify-center lg:w-[45%] md:w-[60%] w-full mx-auto">
          <FadeInAnimation
            stagger={0.4}
            className="flex flex-col items-center justify-center gap-10"
          >
            <h1 className=" leading-tight text-center md:text-[3rem] text-[2rem] font-bold text-white">
              We empower businesses with easy, reliable, and <br />
              <span className="text-brand-cyan">secure payment systems</span>
            </h1>

            <p className="text-white font-light text-center md:text-[24px] text-[14px]">
              helping you collect payments, confirm transactions instantly,
              track financial activities, and grow with unmatched efficiency.
            </p>

            <Button className="px-12 py-6 bg-transparent border-2 border-white rounded-lg">
              Learn more
            </Button>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default WeEmpowerBusiness;
