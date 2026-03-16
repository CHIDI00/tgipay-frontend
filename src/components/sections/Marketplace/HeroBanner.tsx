import React from "react";
import Image from "next/image";
import banner from "../../../../public/bannerImage.png";

const HeroBanner = () => {
  return (
    <>
      {/* <section className="relative rounded-xl overflow-hidden bg-brand-navy min-h-[400px] flex flex-col md:flex-row items-center">
        <div className="relative z-10 flex-1 p-8 space-y-6 md:p-16">
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Shop securely.
            <br />
            Pay seamlessly.
          </h2>
          <p className="max-w-md text-lg text-slate-300">
            Your trusted marketplace powered by TgiPay. Experience safe escrow
            transactions and verified sellers.
          </p>
          <button
            className="bg-[#0A2540] text-white font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#14416e" }}
          >
            Shop Now
          </button>
        </div>
        <div
          className="flex-1 w-full h-full min-h-[300px] bg-cover bg-center md:absolute md:right-0 md:top-0 md:w-1/2"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsBkaHY9ZitshxJL-GyScqAEvgOhO5uI1Pc7OFvaiGaJbRe6l5BSlRTuEhhJykM3zbDsSth35H2WDBKY8MEIgbzJ3OAf7_csDVEMh1QIdwaZzuecd-7yuhP5ecsjNGaskLcB8EVxGtqpZ9no7Ursray7nl6pH9Z9eJSpJZSAVlnt7o3YMB_W3f4CnONSIWn1rWe_ii0qYtkJICxMcaxIOLVSh4mHbH9B1DB7uPU_ey1hcI1q1OK7Odg8rtbIp0tjIU-QawoAjapVUq")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/40 to-transparent"></div>
        </div>
      </section> */}

      <Image
        src={banner}
        alt="TGI Pay Logo"
        width={1400}
        height={45}
        className="w-full rounded-xl"
        quality={90}
      />
    </>
  );
};

export default HeroBanner;
