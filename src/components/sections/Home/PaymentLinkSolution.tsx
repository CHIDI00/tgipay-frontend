"use client";

import Image from "next/image";
import React from "react";

import arrowRight from "../../../../public/arrow-right.svg";
import paymentlinksolution from "../../../../public/paymentlinksolution.png";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const PaymentLinkSolution = () => {
  return (
    <div id="payment-link" className="w-full py-20 lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {/* content */}
          <FadeInAnimation
            stagger={0.3}
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
                Payment Link
              </span>
            </div>

            <h2 className=" font-bold text-[23px] md:text-[36px] leading-[30px] text-brand-navy">
              Payment Link Solution
            </h2>

            <p className=" font-normal text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              TGIPAY takes cognizance of merchants that may not want to have a
              website and will depend on us as their payment gateway to make
              payment collections accessible to them. So, we create a payment
              link for our merchants with which they can give to their customers
              to facilitate easy payment collections. So as a merchant you can
              get onboarded to TGIPAY even though you do not have a functional
              website as we take away the worries from you. So, share payment
              link with your customer either through SMS or email and get paid
              instantly.
            </p>
          </FadeInAnimation>

          {/* card image */}
          <FadeInAnimation
            duration={1}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src={paymentlinksolution}
              alt="Debit cards illustration"
              width={650}
              height={400}
              className="w-full max-w-[650px] h-auto"
            />
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default PaymentLinkSolution;
