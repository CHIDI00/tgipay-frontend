"use client";

import React from "react";
import Image from "next/image";

import cbnlogo from "../../../../public/cbnLogo.svg";
import ndpc from "../../../../public/NDPClogo.svg";
import pcidss from "../../../../public/pcidsslogo.svg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const LicencedSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-[90rem] px-4 mx-auto py-10">
        <FadeInAnimation
          stagger={0.2}
          className="flex flex-wrap items-center justify-between gap-6 md:gap-0"
        >
          <p className="w-full mb-4 text-lg font-bold text-center md:text-xl text-brand-navy md:w-auto md:text-left md:mb-0">
            We are fully licenced by:
          </p>

          <Image
            src={ndpc}
            alt="NDPC Logo"
            width={300}
            height={100}
            className="w-32 md:w-[300px] h-auto"
          />

          <Image
            src={cbnlogo}
            alt="CBN Logo"
            width={100}
            height={100}
            className="w-16 md:w-[100px] h-auto"
          />

          <Image
            src={pcidss}
            alt="PCI DSS Logo"
            width={150}
            height={150}
            className="w-24 md:w-[150px] h-auto"
          />
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default LicencedSection;
