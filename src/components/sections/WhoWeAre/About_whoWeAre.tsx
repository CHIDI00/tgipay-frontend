import Image from "next/image";
import React from "react";

import personingreenbackground from "../../../../public/personingreenbackground.svg";
import womanselling from "../../../../public/womanselling.svg";
import maninstore from "../../../../public/maninstore.svg";
import girlshops from "../../../../public/girlshops.svg";

const About_whoWeAre = () => {
  return (
    <div className="w-full py-20 overflow-hidden bg-white lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start justify-center space-y-6">
            <h2 className="text-3xl font-bold md:text-5xl md:leading-tight text-brand-navy">
              Who We Are
            </h2>

            <p className="text-base leading-relaxed md:text-lg md:leading-loose text-slate-700">
              TGIPAY is licensed by the Central Bank of Nigeria as a Payment
              Solution Service Provider. We bring simplicity, trust,
              reliability, and speed to every transaction, ensuring a seamless
              user experience and optimized value for merchants. Our secure
              interface offers multiple payment channels designed to meet the
              needs of businesses, delivering comfort and security every time.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] mt-10 lg:mt-0">
            <div className="absolute top-0 left-0 z-10 transition-all duration-300 transform md:left-4 -rotate-3 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg ">
                <Image
                  src={personingreenbackground}
                  alt="Man with shopping bags"
                  width={260}
                  height={180}
                  className="w-[160px] md:w-[260px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            {/* Image 2: Top Right (Market Woman) - Tilted Right Strongly */}
            <div className="absolute right-0 z-20 transition-all duration-300 transform top-4 md:right-8 -rotate-10 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg ">
                <Image
                  src={womanselling}
                  alt="Market woman"
                  width={240}
                  height={200}
                  className="w-[170px] md:w-[240px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            {/* Image 3: Bottom Left (Shop Counter) - Slight Tilt Left */}
            <div className="absolute z-30 transition-all duration-300 transform bottom-4 left-4 md:left-12 -rotate-3 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg">
                <Image
                  src={maninstore}
                  alt="Shop owner"
                  width={350}
                  height={220}
                  className="w-[190px] md:w-[350px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            {/* Image 4: Bottom Right (Lady on Phone) - Tilted Right */}
            <div className="absolute z-10 transition-all duration-300 transform bottom-10 right-2 md:right-4 rotate-6 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg ">
                <Image
                  src={girlshops}
                  alt="Shopper on phone"
                  width={250}
                  height={160}
                  className="w-[150px] md:w-[250px] h-auto rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_whoWeAre;
