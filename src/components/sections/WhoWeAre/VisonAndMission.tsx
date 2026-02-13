"use client";

import Image from "next/image";
import React from "react";

import missionandvisionimage from "../../../../public/missionandvisionimage.svg";
import qrCodeImage from "../../../../public/qrCodeImage.svg";

const VisonAndMission = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden lg:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={missionandvisionimage}
          alt="Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 mix-blend-multiply bg-[#000000c6]" />
      </div>

      <div className="relative z-10 max-w-[90rem] px-4 mx-auto">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-300/80 -translate-x-1/2" />

          <div
            id="mission"
            className="flex flex-col items-start justify-start space-y-6"
          >
            <h3 className="text-4xl font-bold text-brand-cyan md:text-5xl">
              Mission
            </h3>
            <p className="text-base leading-relaxed text-slate-200 md:text-lg md:leading-loose">
              We strive to provide the most trusted payment service solution in
              Africa through strong partnerships and continuous commitment to
              our customers and our people. We work to help businesses
              throughout Africa maximize their profits and create consistent
              value and support to our merchants. This is our mission.
              Everything we do reflects this mission and the values that make it
              possible.
            </p>
          </div>

          <div
            id="vision"
            className="flex flex-col items-start justify-start space-y-6"
          >
            <h3 className="text-4xl font-bold text-brand-cyan md:text-5xl">
              Vision
            </h3>
            <p className="text-base leading-relaxed text-slate-200 md:text-lg md:leading-loose">
              To provide an environment for enduring partnerships, using
              technologies to foster profitability and sustainable growth.
            </p>

            <div className="relative w-full max-w-md mt-8 overflow-hidden border rounded-lg shadow-2xl border-white/10">
              <Image
                src={qrCodeImage}
                alt="Scan to pay"
                width={400}
                height={200}
                loading="lazy"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisonAndMission;
