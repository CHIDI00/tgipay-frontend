import BankAccountSolution from "@/components/sections/Home/BankAccountSolution";
import BankTransferSolution from "@/components/sections/Home/BankTransferSolution";
import GrowYourBusiness from "@/components/sections/Home/GrowYourBusiness";
import HeroSection from "@/components/sections/Home/HeroSection";
import LicencedSection from "@/components/sections/Home/LicencedSection";
import OfflinePayment from "@/components/sections/Home/OfflinePayment";
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
    </div>
  );
};

export default page;
