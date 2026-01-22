import Image from "next/image";
import React from "react";

import arrowRight from "../../../../public/arrow-right.svg";
import ussd from "../../../../public/ussd.svg";

const OfflinePayment = () => {
  return (
    <div className="w-full py-20 lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        {/* Content Grid */}
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Content */}
          <div className="flex flex-col items-start justify-center space-y-8 md:items-center lg:items-start">
            <div className="inline-flex items-center gap-[10px] px-4 py-2 border border-[#44c3e3] rounded-[20px]">
              <Image
                src={arrowRight}
                alt=""
                width={5}
                height={9}
                className="w-[5px] h-[9px]"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(66%) sepia(51%) saturate(632%) hue-rotate(145deg) brightness(95%) contrast(89%)",
                }}
              />
              <span className=" font-semibold text-[14px] text-[#727677]">
                USSD
              </span>
            </div>

            <h2 className=" font-bold text-[28px] md:text-[36px] leading-[30px] text-brand-navy">
              USSD / Offline Payment
            </h2>

            <p className=" font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              It gives us a delight to keep our customers satisfied by providing
              various channels to ease payment collections, The Unstructured
              Supplementary Service Data (USSD) allows customers without
              internet access to receive payments for goods and services via
              USSD unique codes in a simple, safe and fast manner. This also can
              be used to collect payments for other purposes. As long as you
              have a phone, without data for internet access you are not
              hindered from receiving payments for goods and services.
            </p>
          </div>

          {/* Card Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={ussd}
              alt="Debit cards illustration"
              width={650}
              height={400}
              className="w-full max-w-[650px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfflinePayment;
