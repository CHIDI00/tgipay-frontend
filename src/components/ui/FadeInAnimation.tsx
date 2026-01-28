"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
  className?: string;
}

const FadeInAnimation = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  stagger = 0,
  className = "",
}: FadeInProps) => {
  const compRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = compRef.current;
      if (!el) return;

      // the animation Settings
      const animProps = {
        y: yOffset,
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        stagger: stagger,

        // scroll effect
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      };

      // run animation on children
      if (stagger > 0) {
        gsap.from(el.children, animProps);
      } else {
        gsap.from(el, animProps);
      }
    },
    { scope: compRef },
  );

  return (
    <div ref={compRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInAnimation;
