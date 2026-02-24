import type { Metadata } from "next";

import LegalPage from "@/components/sections/Legal/LegalPage";
import { legalTabs, policyIntro, policySections } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Review TGIPAY policy details on cookies, data security, retention, transfer, and user rights.",
};

const page = () => {
  return (
    <LegalPage
      heading="Cookies Policy"
      intro={policyIntro}
      sections={policySections}
      activeTab="/policy"
      tabs={legalTabs}
    />
  );
};

export default page;
