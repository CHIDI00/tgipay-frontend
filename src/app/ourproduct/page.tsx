import BankAccountSolution from "@/components/sections/Home/BankAccountSolution";
import BankTransferSolution from "@/components/sections/Home/BankTransferSolution";
import GrowYourBusiness from "@/components/sections/Home/GrowYourBusiness";
import InvoicingSolution from "@/components/sections/Home/InvoicingSolution";
import OfflinePayment from "@/components/sections/Home/OfflinePayment";
import PaymentLinkSolution from "@/components/sections/Home/PaymentLinkSolution";
import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";
import OurProductHeroSection from "@/components/sections/OurProduct/OurProductHeroSection";
import WeEmpowerBusinessInOurProduct from "@/components/sections/OurProduct/WeEmpowerBusinessInOurProduct";
import React from "react";

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
