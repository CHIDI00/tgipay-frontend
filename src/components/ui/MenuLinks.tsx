"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MenuLinkProps {
  href: string;
  children: string;
  isOpen: boolean;
  index: number;
  onClick: () => void;
}

const MenuLink = ({
  href,
  children,
  isOpen,
  index,
  onClick,
}: MenuLinkProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const words = containerRef.current?.querySelectorAll(".word");
      if (!words) return;

      if (isOpen) {
        gsap.fromTo(
          words,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.4 + index * 0.1,
            ease: "power3.out",
            overwrite: "auto",
          },
        );
      } else {
        // Reset quickly
        gsap.set(words, { y: 40, opacity: 0 });
      }
    },
    { scope: containerRef, dependencies: [isOpen] },
  );

  return (
    <Link
      ref={containerRef}
      href={href}
      onClick={onClick}
      className="relative block py-1 overflow-hidden text-[1.2rem] font-medium text-brand-navy hover:text-brand-cyan hover:text-[1.5rem] transition-all duration-300 transform hover:-translate-y-[.15rem]"
    >
      <span className="sr-only">{children}</span>

      <span aria-hidden="true" className="block leading-tight">
        {children.split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block word mr-2"
            style={{ opacity: 0 }}
          >
            {word}
          </span>
        ))}
      </span>
    </Link>
  );
};

export default MenuLink;
