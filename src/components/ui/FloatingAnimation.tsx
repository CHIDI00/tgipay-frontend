"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface FloatingAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const FloatingAnimation = ({
  children,
  className = "",
}: FloatingAnimationProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(innerRef.current, {
        y: -17,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: innerRef },
  );

  return (
    <div className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
};

export default FloatingAnimation;
