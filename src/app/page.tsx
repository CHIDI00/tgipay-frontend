import HeroSection from "@/components/sections/Home/HeroSection";
import LicencedSection from "@/components/sections/Home/LicencedSection";
import WeEmpowerBusiness from "@/components/sections/Home/WeEmpowerBusiness";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <LicencedSection />
      <WeEmpowerBusiness />
    </div>
  );
};

export default page;
