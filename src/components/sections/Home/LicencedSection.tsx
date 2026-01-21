import React from "react";
import Image from "next/image";

import cbnlogo from "../../../../public/cbnLogo.svg";
import ndpc from "../../../../public/NDPClogo.svg";
import pcidss from "../../../../public/pcidsslogo.svg";

const LicencedSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-[90rem] mx-auto py-10">
        <div className="flex items-center justify-between flex-wrap">
          <p className="text-xl font-bold text-brand-navy">
            We are fully licenced by:
          </p>

          <Image src={ndpc} alt="CBN Logo" width={300} height={300} />
          <Image src={cbnlogo} alt="CBN Logo" width={100} height={100} />
          <Image src={pcidss} alt="CBN Logo" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default LicencedSection;
