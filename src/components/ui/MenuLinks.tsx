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
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;

      if (isOpen) {
        gsap.fromTo(
          chars,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.03,
            delay: 0.4 + index * 0.1,
            ease: "power3.out",
            overwrite: "auto",
          },
        );
      } else {
        // reset quickly
        gsap.set(chars, { y: 40, opacity: 0 });
      }
    },
    { scope: containerRef, dependencies: [isOpen] },
  );

  return (
    <Link
      ref={containerRef}
      href={href}
      onClick={onClick}
      className="relative block py-1 overflow-hidden text-[2rem] font-bold transition-colors  text-brand-navy hover:text-brand-cyan hover:text-[2rem]"
    >
      <span className="sr-only">{children}</span>{" "}
      <span aria-hidden="true" className="block leading-tight">
        {children.split("").map((char, i) => (
          <span key={i} className="inline-block char" style={{ opacity: 0 }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Link>
  );
};

export default MenuLink;
