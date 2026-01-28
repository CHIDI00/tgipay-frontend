import React from "react";
import type { Metadata } from "next";

import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";
import About_whoWeAre from "@/components/sections/WhoWeAre/About_whoWeAre";
import HomeSectionForAbout from "@/components/sections/WhoWeAre/HomeSectionForAbout";
import OurValue from "@/components/sections/WhoWeAre/OurValue";
import VisonAndMission from "@/components/sections/WhoWeAre/VisonAndMission";

export const metadata: Metadata = {
  title: "Who We Are | TGIPay",
  description:
    "Learn about TGIPAY's mission, vision, and values. We are a CBN licensed Payment Solution Service Provider committed to simplifying transactions.",
  openGraph: {
    title: "Who We Are | TGIPay",
    description: "Simplifying payments across Africa with trust and speed.",
  },
};

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
