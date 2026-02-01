"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="absolute top-0 left-0 w-full h-[38rem] lg:h-[42rem] bg-brand-navy z-0" />

      <div className="relative z-10 px-4 md:py-36 py-[6rem] mx-auto max-w-[90rem]">
        <div className="mb-16 text-center lg:mb-24">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[55px]">
            Pricing You Can <br /> Trust
          </h1>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2 lg:gap-16">
          {/* local payments card */}
          <Card className="bg-white rounded-[30px] shadow-2xl border-0 p-8 lg:p-10 hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-0 space-y-6">
              <div className="text-3xl font-bold leading-tight text-brand-cyan lg:text-[55px]">
                1.5%
              </div>

              <h2 className="text-2xl font-bold text-brand-navy lg:text-[36px] leading-tight">
                Local Payments
              </h2>

              <p className="text-[#292727] text-md lg:text-[20px] font-semibold leading-relaxed">
                Charges for local transactions is maximum of N1,500
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Local Cards", "USSD", "Bank Account", "Bank Transfer"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-brand-cyan lg:text-base"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* international cards */}
          <Card className="bg-white rounded-[30px] shadow-2xl border-0 p-8 lg:p-10 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <CardContent className="p-0 space-y-6">
              <div className="text-3xl font-bold leading-tight text-brand-cyan lg:text-[55px]">
                5%
              </div>

              <h2 className="text-2xl font-bold text-brand-navy lg:text-[36px] leading-tight">
                International <br className="hidden lg:block" /> Cards
              </h2>

              <p className="text-[#292727] text-md lg:text-[20px] font-semibold leading-relaxed">
                Transactions are settled in USD or local currency
              </p>
            </CardContent>

            <div className="mt-auto" />
          </Card>
        </div>

        <div className="flex justify-center w-full">
          <Button
            className="bg-brand-navy hover:bg-brand-navy/90 text-white text-base lg:text-lg font-semibold px-12 py-7 rounded-xl transition-all "
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
