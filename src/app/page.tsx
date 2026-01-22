import BankAccountSolution from "@/components/sections/Home/BankAccountSolution";
import BankTransferSolution from "@/components/sections/Home/BankTransferSolution";
import GrowYourBusiness from "@/components/sections/Home/GrowYourBusiness";
import HeroSection from "@/components/sections/Home/HeroSection";
import InvoicingSolution from "@/components/sections/Home/InvoicingSolution";
import LicencedSection from "@/components/sections/Home/LicencedSection";
import OfflinePayment from "@/components/sections/Home/OfflinePayment";
import OurResultSpeaks from "@/components/sections/Home/OurResultSpeaks";
import OurWords from "@/components/sections/Home/OurWords";
import PaymentLinkSolution from "@/components/sections/Home/PaymentLinkSolution";
import PaymentQuestionAnswered from "@/components/sections/Home/PaymentQuestionAnswered";
import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";
import WaysToReceivePayments from "@/components/sections/Home/WaysToReceivePayments";
import WeEmpowerBusiness from "@/components/sections/Home/WeEmpowerBusiness";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <LicencedSection />
      <WeEmpowerBusiness />
      <GrowYourBusiness />
      <OfflinePayment />
      <BankAccountSolution />
      <BankTransferSolution />
      <InvoicingSolution />
      <PaymentLinkSolution />
      <OurResultSpeaks />
      <OurWords />
      <WaysToReceivePayments />
      <PaymentQuestionAnswered />
      <ReadyToTransform />
    </div>
  );
};

export default page;
