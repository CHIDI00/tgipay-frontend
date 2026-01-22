"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

import mobilephone from "../../../../public/mobilephone.svg";

const ReadyToTransform = () => {
  return (
    <div className="w-full lg:py-0 lg:pt-36 bg-brand-cyan">
      <div className="max-w-[90rem] px-4 mx-auto ">
        <div className="flex flex-col-reverse items-center justify-center w-full gap-10 md:flex-row">
          {/* Card Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={mobilephone}
              alt="Debit cards illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start justify-start py-8 space-y-8 md:py-20 lg:space-y-14 md:items-center lg:items-start lg:max-w-xl">
            <h2 className=" font-bold text-[28px] md:text-[55px] md:leading-[60px] leading-[30px] text-white">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg font-normal leading-[30px] text-white">
              Unlock new possibilities with our smart payment solutions.
              Streamline transactions, secure your revenue, and watch your
              business grow. Start transforming your business today!
            </p>

            <Button
              size="lg"
              className="rounded-lg py-7 bg-brand-navy hover:bg-slate-700"
            >
              Create a Free Account Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTransform;
