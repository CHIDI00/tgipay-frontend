"use client";

import Image from "next/image";
import React from "react";

import arrowRight from "../../../../public/arrow-right.svg";
import invoicingsolution from "../../../../public/invoicingsolution.svg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const InvoicingSolution = () => {
  return (
    <div id="invoicing" className="w-full py-20 lg:py-0 lg:pt-20 bg-[#F9F9F9]">
      <div className="max-w-[90rem] px-4 mx-auto ">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {/* card image */}
          <FadeInAnimation
            duration={1}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src={invoicingsolution}
              alt="Debit cards illustration"
              width={620}
              height={400}
              className="w-full max-w-[620px] h-auto"
            />
          </FadeInAnimation>

          {/* Content */}
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
                Invoice
              </span>
            </div>

            <h2 className=" font-bold text-[28px] md:text-[36px] leading-[30px] text-brand-navy">
              Invoicing Solution
            </h2>

            <p className=" font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              Generate invoices through simple input of item and price, our
              system creates an invoice with which the customer can make
              payments, track payments and receive instant acknowledgment once
              payment is received.
            </p>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default InvoicingSolution;
