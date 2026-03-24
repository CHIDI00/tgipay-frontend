"use client";
import React, { useRef } from "react";
import logo from "../../public/TGIPrimaryLogo.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  const container = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-screen bg-white"
    >
      <Image ref={logoRef} src={logo} alt="TGI Logo" className="w-32 h-auto" />
    </div>
  );
};

export default Loader;
