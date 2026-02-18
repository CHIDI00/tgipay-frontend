import type { Metadata } from "next";

import LegalPage from "@/components/sections/Legal/LegalPage";
import { legalTabs, privacyIntro, privacySections } from "@/lib/legalContent";
import ReadyToTransform from "@/components/sections/Home/ReadyToTransform";

export const metadata: Metadata = {
  title: "Privacy Policy | TGIPay",
  description:
    "Read TGIPAY’s Privacy Policy on data collection, use, sharing, and protection.",
};

const page = () => {
  return (
    <>
      <LegalPage
        heading="Privacy Policy"
        intro={privacyIntro}
        sections={privacySections}
        activeTab="/privacy"
        tabs={legalTabs}
      />
      <ReadyToTransform />
    </>
  );
};

export default page;
