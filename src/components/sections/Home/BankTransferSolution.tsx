"use client";

import Image from "next/image";
import React from "react";

import arrowRight from "../../../../public/arrow-right.svg";
import transferimageRaw from "../../../../public/transferimageRaw.jpg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import FloatingAnimation from "@/components/ui/FloatingAnimation";

const BankTransferSolution = () => {
  return (
    <div id="bank-transfer" className="w-full py-20 lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {/* content */}
          <FadeInAnimation
            stagger={0.2}
            className="flex flex-col items-start justify-center space-y-8 md:items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-[10px] px-4 py-2 border border-[#44c3e3] rounded-[20px]">
              <Image
                src={arrowRight}
                alt=""
                width={5}
                height={9}
                className="w-[5px] h-[9px]"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(66%) sepia(51%) saturate(632%) hue-rotate(145deg) brightness(95%) contrast(89%)",
                }}
              />
              <span className=" font-semibold text-[14px] text-[#727677]">
                Transfers
              </span>
            </div>

            <h2 className=" font-bold text-[23px] md:text-[36px] leading-[30px] text-brand-navy">
              Bank Transfer Solution
            </h2>

            <p className=" font-normal text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              Safety, security and simplicity are our unique selling points. The
              bank transfer channel provides the customer the opportunity to
              make a transfer to a one time bank account uniquely generated and
              customized to the customer making the payment. It is easily
              identifiable for prompt transaction termination without delay or
              hiccups
            </p>
          </FadeInAnimation>

          {/* card image */}
          <FloatingAnimation className="flex justify-center lg:justify-end">
            <Image
              src={transferimageRaw}
              alt="Debit cards illustration"
              width={650}
              height={400}
              loading="lazy"
              className="w-full max-w-[650px] h-auto"
            />
          </FloatingAnimation>
        </div>
      </div>
    </div>
  );
};

export default BankTransferSolution;
