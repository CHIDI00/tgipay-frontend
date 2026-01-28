"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. Import ScrollTrigger

import personingreenbackground from "../../../../public/personingreenbackground.svg";
import womanselling from "../../../../public/womanselling.svg";
import maninstore from "../../../../public/maninstore.svg";
import girlshops from "../../../../public/girlshops.svg";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

const About_whoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bounce-card",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",

          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full py-20 overflow-hidden bg-white lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Section */}
          <FadeInAnimation
            stagger={0.2}
            className="flex flex-col items-start justify-center space-y-6"
          >
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
          </FadeInAnimation>

          <div
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[500px] mt-10 lg:mt-0"
          >
            <div className="absolute top-0 left-0 z-10 transition-all duration-300 transform md:left-4 -rotate-3 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg bounce-card">
                <Image
                  src={personingreenbackground}
                  alt="Man with shopping bags"
                  width={260}
                  height={180}
                  className="w-[160px] md:w-[260px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            <div className="absolute right-0 z-20 transition-all duration-300 transform top-4 md:right-8 -rotate-10 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg bounce-card">
                <Image
                  src={womanselling}
                  alt="Market woman"
                  width={240}
                  height={200}
                  className="w-[170px] md:w-[240px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            <div className="absolute z-30 transition-all duration-300 transform bottom-4 left-4 md:left-12 -rotate-3 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg bounce-card">
                <Image
                  src={maninstore}
                  alt="Shop owner"
                  width={350}
                  height={220}
                  className="w-[190px] md:w-[350px] h-auto rounded-md object-cover"
                />
              </div>
            </div>

            <div className="absolute z-10 transition-all duration-300 transform bottom-10 right-2 md:right-4 rotate-6 hover:z-50 hover:scale-105">
              <div className="bg-white rounded-lg bounce-card">
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
