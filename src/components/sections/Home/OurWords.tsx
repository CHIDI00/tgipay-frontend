"use client";

import Image from "next/image";
import React from "react";

import ourwords from "../../../../public/ourwords.png";

const OurWords = () => {
  return (
    <div className="w-full py-20 lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Content */}
          <div className="flex flex-col items-start justify-center space-y-8 md:items-center lg:items-start lg:mr-28">
            <h2 className=" font-bold text-[28px] text-left md:text-[55px] leading-tight text-brand-navy">
              Don’t just take our words for it
            </h2>

            <p className=" font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              There are multiple simple and effective ways to collect payments
              tailored to both businesses and individuals. Whether you&apos;re a
              merchant, freelancer, or service provider, here’s how you can
              streamline the process
            </p>
          </div>

          {/* Card Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={ourwords}
              alt="Debit cards illustration"
              width={800}
              height={600}
              quality={90}
              className="w-full max-w-[800px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWords;
