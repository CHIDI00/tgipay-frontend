"use client";

import React from "react";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const OurWords = () => {
  return (
    <div id="know-how-to" className="w-full py-20 bg-white lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
          {/* Content Section */}
          <FadeInAnimation
            stagger={0.7}
            className="flex flex-col items-start justify-center w-full space-y-8 lg:w-full md:items-center lg:items-start"
          >
            <h2 className="font-bold text-[23px] text-left md:text-[45px] lg:text-[45px] xl:text-[55px] leading-tight text-brand-navy">
              Don’t just take our words for it
            </h2>

            <p className="font-normal text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              There are multiple simple and effective ways to collect payments
              tailored to both businesses and individuals. Whether you&apos;re a
              merchant, freelancer, or service provider, here’s how you can
              streamline the process.
            </p>
          </FadeInAnimation>

          {/* Video Section */}
          <FadeInAnimation
            duration={1.5}
            className="flex justify-center w-full lg:w-full lg:justify-end"
          >
            <div className="relative w-full p-4 overflow-hidden border border-gray-200 rounded-2xl">
              <iframe
                className="w-full h-auto aspect-video rounded-2xl"
                src="https://www.youtube.com/embed/raOxsiitHyQ?si=G19KN6J2FNFekHXX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default OurWords;
