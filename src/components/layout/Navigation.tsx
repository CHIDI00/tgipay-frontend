"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import primaryLogo from "../../../public/TGIPrimaryLogo.svg";
import whiteLogo from "../../../public/TGIWhiteLogo.svg";
import cbnLogo from "../../../public/cbnLogo.svg";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const pathname = usePathname();

  const darkBackgroundPages = [
    "/ourPricing",
    "/ourProduct",
    "/whoWeAre",
    "/privacy",
    "/policy",
  ];

  const isDarkTheme = darkBackgroundPages.includes(pathname);

  const textColor = isDarkTheme ? "text-white" : "text-brand-navy";
  const hoverColor = isDarkTheme
    ? "hover:text-brand-cyan"
    : "hover:text-brand-cyan";
  const logoSrc = isDarkTheme ? whiteLogo : primaryLogo;

  const loginBtnStyle = "bg-brand-cyan hover:bg-brand-cyan/90 text-white";
  const startBtnStyle = isDarkTheme
    ? "border-white text-brand-navy hover:bg-white/10 border-2"
    : "border-brand-navy text-brand-navy hover:bg-brand-navy/5 border-2";

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Who We Are", link: "/whoWeAre" },
    { label: "Our Product", link: "/ourProduct" },
    { label: "Our Pricing", link: "/ourPricing" },
    { label: "Contact Us", link: "/contactUs" },
  ];

  return (
    <div className={`absolute top-0 w-full py-6 z-50 bg-transparent`}>
      <div className="max-w-[90rem] mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-end justify-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="TGI Pay Logo"
              width={100}
              height={35}
              className="w-auto h-8 md:h-9"
            />
          </Link>

          <div className="flex items-center gap-1 mt-0.5">
            <p className={`text-[0.6rem] font-medium ${textColor} opacity-90`}>
              Licensed by CBN
            </p>
            <Image
              src={cbnLogo}
              alt="CBN Logo"
              width={12}
              height={12}
              className="w-auto"
            />
          </div>
        </div>

        <div
          className={`items-center justify-between hidden gap-8 font-medium lg:flex xl:text-[16px] lg:text-[12px]  ${textColor}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className={`transition-colors ${hoverColor} ${pathname === item.link ? "text-brand-cyan font-bold " : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="items-center justify-between hidden gap-6 lg:flex xl:text-[16px] lg:text-[12px]">
          <div className="relative h-6 overflow-hidden cursor-pointer group w-28">
            <span
              className={`absolute inset-0 flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full font-medium ${textColor}`}
            >
              Pay your Tax
            </span>
            <span className="absolute inset-0 flex items-center font-medium transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 text-brand-cyan">
              Coming Soon
            </span>
          </div>

          <Link href="https://merchant.tgipay.com">
            <Button className={`font-semibold rounded-lg ${loginBtnStyle}`}>
              Login
            </Button>
          </Link>

          <Link href="https://merchant.tgipay.com">
            <Button
              size="lg"
              variant="outline"
              className={`font-semibold rounded-lg ${startBtnStyle}`}
            >
              Start free account
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileMenu items={menuItems} isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
