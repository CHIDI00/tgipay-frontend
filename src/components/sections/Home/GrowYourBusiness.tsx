"use client";

import React from "react";
import Image from "next/image";

import cards1 from "../../../../public/cards1.svg";
import arrowRight from "../../../../public/arrow-right.svg";

const GrowYourBusiness = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#f9f9f9]">
      <div className="max-w-[90rem] px-4 mx-auto">
        <h1 className="font-bold text-[27px] md:text-[45px] lg:text-[55px] leading-tight lg:leading-[60px] text-center text-brand-navy mb-16 lg:mb-16">
          Grow Your Business with Us!
        </h1>

        {/* Content Grid */}
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Card Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={cards1}
              alt="Debit cards illustration"
              width={510}
              height={383}
              className="w-full max-w-[510px] h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
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
                Debit Cards
              </span>
            </div>

            <h2 className=" font-bold text-[28px] md:text-[36px] leading-[30px] text-brand-navy">
              TGIPay Debit Card Solution
            </h2>

            <p className=" font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              We are integrated with the world&apos;s biggest and most
              acceptable card networks. You can receive payments from your
              customers using local debit and credit cards, VISA, Mastercard and
              any other widely accepted card. Settlement will be in currency of
              choice as it could be in the originating paying currency or the
              local currency of the merchant. Whichever choice you make, you are
              guaranteed of speedy and safe payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourBusiness;
