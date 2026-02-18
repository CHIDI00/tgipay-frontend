"use client";

import React, { useRef, useEffect } from "react";
import FadeInAnimation from "@/components/ui/FadeInAnimation";

// import tgiVideo from "../../../../public/theEasiestWayforNigerianBusinessestoGetPaid.mp4";

const OurWords = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play when element is 30% visible
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          } else {
            // Optional: Pause when scrolled out of view to save performance
            videoElement.pause();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div id="know-how-to" className="w-full py-20 bg-white lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        {/* Switched to FLEX layout for consistency */}
        <div className="flex flex-col items-center gap-8 lg:flex-col lg:gap-10">
          {/* Content Section - 50% width */}
          <FadeInAnimation
            stagger={0.7}
            className="flex flex-col items-start justify-center w-full space-y-8 md:flex-row lg:w-full md:items-center lg:items-start"
          >
            <h2 className="font-bold text-[23px] text-left md:text-[45px] lg:text-[45px] xl:text-[55px] leading-tight text-brand-navy">
              Don’t just take our words for it
            </h2>

            <p className="font-normal text-[14px] md:text-[18px] leading-[28px] md:leading-[30px] text-black max-w-[693px]">
              There are multiple simple and effective ways to collect payments
              tailored to both businesses and individuals. Whether you&apos;re a
              merchant, freelancer, or service provider, here’s how you can
              streamline the process.
            </p>
          </FadeInAnimation>

          {/* Video Section */}
          <FadeInAnimation
            duration={1.5}
            className="flex justify-center w-full lg:w-full lg:justify-end"
          >
            <div className="relative w-full p-4 overflow-hidden border border-gray-200 rounded-2xl">
              <video
                ref={videoRef}
                width="800"
                height="600"
                muted
                loop
                playsInline
                className="object-cover w-full h-auto rounded-2xl"
              >
                {/* Update source path here */}
                <source
                  src="theEasiestWayforNigerianBusinessestoGetPaid.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default OurWords;
