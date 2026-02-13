"use client";

import React from "react";
import Image from "next/image";

import cardsRaw from "../../../../public/cardsRaw.png";
import arrowRight from "../../../../public/arrow-right.svg";
import SplitText from "@/components/ui/SplitText";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import FloatingAnimation from "@/components/ui/FloatingAnimation";

const GrowYourBusiness = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#f9f9f9]">
      <div className="max-w-[90rem] px-4 mx-auto">
        <h1 className="font-bold text-[27px] md:text-[45px] lg:text-[55px] leading-tight lg:leading-[60px] text-center text-brand-navy mb-16 lg:mb-16">
          <SplitText
            text="Grow Your Business with Us!"
            className="inline-block"
            delay={10}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
        </h1>

        {/* content */}
        <FadeInAnimation
          stagger={0.5}
          className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0"
        >
          <FloatingAnimation>
            <div className="flex justify-center lg:justify-start">
              <Image
                src={cardsRaw}
                alt="Debit cards illustration"
                width={510}
                height={383}
                className="w-full max-w-[510px] h-auto"
              />
            </div>
          </FloatingAnimation>

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
                Debit Cards
              </span>
            </div>

            <h2 className=" font-bold text-[23px] md:text-[36px] leading-[30px] text-brand-navy">
              TGIPay Debit Card Solution
            </h2>

            <p className=" font-normal text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              We are integrated with the world&apos;s biggest and most
              acceptable card networks. You can receive payments from your
              customers using local debit and credit cards, VISA, Mastercard and
              any other widely accepted card. Settlement will be in currency of
              choice as it could be in the originating paying currency or the
              local currency of the merchant. Whichever choice you make, you are
              guaranteed of speedy and safe payment.
            </p>
          </FadeInAnimation>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default GrowYourBusiness;
