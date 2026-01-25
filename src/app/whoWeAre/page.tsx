"use client";

import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";
import About_whoWeAre from "@/components/sections/WhoWeAre/About_whoWeAre";
import HomeSectionForAbout from "@/components/sections/WhoWeAre/HomeSectionForAbout";
import OurValue from "@/components/sections/WhoWeAre/OurValue";
import VisonAndMission from "@/components/sections/WhoWeAre/VisonAndMission";
import React from "react";

const page = () => {
  return (
    <div>
      <HomeSectionForAbout />
      <About_whoWeAre />
      <VisonAndMission />
      <OurValue />
      <ReadyToTransform />
    </div>
  );
};

export default page;
