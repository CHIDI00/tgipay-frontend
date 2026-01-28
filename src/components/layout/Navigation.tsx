import Image from "next/image";
import React from "react";
import primaryLogo from "../../../public/TGIPrimaryLogo.svg";
import cbnLogo from "../../../public/cbnLogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Who We Are", link: "/whoWeAre" },
    { label: "Our Product", link: "/ourProduct" },
    { label: "Our Pricing", link: "/ourPricing" },
    { label: "Contact Us", link: "/contactUs" },
  ];

  return (
    <div className="fixed top-0 w-full py-3 bg-[#f9fafbc4] backdrop-blur-md z-50 transition-all">
      <div className="max-w-[90rem] mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <Image
            src={primaryLogo}
            alt="TGI Pay Logo"
            width={100}
            height={35}
            className="w-auto h-8 md:h-9"
          />
          <div className="flex items-center gap-1 mt-0.5">
            <p className="text-[0.6rem] font-medium text-brand-navy">
              Licensed by CBN
            </p>
            <Image src={cbnLogo} alt="CBN Logo" width={12} height={12} />
          </div>
        </div>

        <div className="items-center justify-between hidden gap-8 font-medium text-brand-navy lg:flex">
          <Link href="/" className="transition-colors hover:text-brand-cyan">
            Home
          </Link>
          <Link
            href="/whoWeAre"
            className="transition-colors hover:text-brand-cyan"
          >
            Who We Are
          </Link>
          <Link
            href="/ourProduct"
            className="transition-colors hover:text-brand-cyan"
          >
            Our Product
          </Link>
          <Link
            href="/ourPricing"
            className="transition-colors hover:text-brand-cyan"
          >
            Our Pricing
          </Link>
          <Link
            href="/contactUs"
            className="transition-colors hover:text-brand-cyan"
          >
            Contact Us
          </Link>
        </div>

        <div className="items-center justify-between hidden gap-6 lg:flex">
          <p className="font-medium text-brand-navy">Pay your Tax</p>
          <Button className="font-semibold text-white rounded-lg bg-brand-cyan hover:bg-brand-cyan/90">
            Login
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold border-2 rounded-lg border-brand-navy text-brand-navy hover:bg-brand-navy/5"
          >
            Start free account
          </Button>
        </div>

        {/* mobile menu*/}
        <div className="lg:hidden">
          <MobileMenu items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
