import type { Metadata } from "next";
import React from "react";

import BankAccountSolution from "@/components/sections/Home/BankAccountSolution";
import BankTransferSolution from "@/components/sections/Home/BankTransferSolution";
import GrowYourBusiness from "@/components/sections/Home/GrowYourBusiness";
import InvoicingSolution from "@/components/sections/Home/InvoicingSolution";
import OfflinePayment from "@/components/sections/Home/OfflinePayment";
import PaymentLinkSolution from "@/components/sections/Home/PaymentLinkSolution";
import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";
import OurProductHeroSection from "@/components/sections/OurProduct/OurProductHeroSection";
import WeEmpowerBusinessInOurProduct from "@/components/sections/OurProduct/WeEmpowerBusinessInOurProduct";

export const metadata: Metadata = {
  title: "Our Products | TGIPay",
  description:
    "Explore TGIPay's suite of payment solutions including bank transfers, invoicing, offline payments, and secure payment links designed to grow your business.",
  openGraph: {
    title: "Our Products | TGIPay",
    description: "Empowering businesses with secure, reliable payment systems.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <OurProductHeroSection />
      <WeEmpowerBusinessInOurProduct />
      <GrowYourBusiness />
      <OfflinePayment />
      <BankAccountSolution />
      <BankTransferSolution />
      <InvoicingSolution />
      <PaymentLinkSolution />
      <ReadyToTransform />
    </div>
  );
};

export default page;
