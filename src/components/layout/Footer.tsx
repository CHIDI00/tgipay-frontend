"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

import whiteLogo from "../../../public/TGIWhiteLogo.svg";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import x from "../../../public/x.svg";
import playstore from "../../../public/playstore.svg";
import applestore from "../../../public/applestore.svg";

const Footer = () => {
  const lenis = useLenis();
  const pathname = usePathname();

  // handle scroll when page load
  useEffect(() => {
    if (lenis && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const element = document.getElementById(hash);

      if (element) {
        // added small delay to ensure the layout is ready
        setTimeout(() => {
          lenis.scrollTo(element, {
            offset: -20,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 100);
      }
    }
  }, [lenis, pathname]);

  // handle lick click on same page navigation
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path === "" || path === "/" ? "/" : path;
      const currentPath = pathname === "" || pathname === "/" ? "/" : pathname;

      // if someone is already on the page, then scroll manually
      if (targetPath === currentPath) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element && lenis) {
          lenis.scrollTo(element, {
            offset: -20,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    }
  };

  const aboutUsLinks = [
    { label: "Why Us", href: "/#why-us" },
    { label: "Vision", href: "/whoWeAre#vision" },
    { label: "Mission", href: "/whoWeAre#mission" },
    { label: "Our Values", href: "/whoWeAre#our-values" },
    { label: "Blog", href: "/" },
  ];

  const productsLinks = [
    { label: "Collect Payments", href: "/ourProduct#collect-payments" },
    { label: "Bank Transfer", href: "/ourProduct#bank-transfer" },
    { label: "Bank Account", href: "/ourProduct#bank-account" },
    { label: "Invoices", href: "/ourProduct#invoicing" },
    { label: "Payment Link", href: "/ourProduct#payment-link" },
    { label: "Offline Payment", href: "/ourProduct#offline-payment" },
  ];

  const securityLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Use", href: "/" },
    { label: "PCI DSS", href: "merchant.tgipay.com" },
  ];

  const supportLinks = [
    { label: "Getting Started", href: "merchant.tgipay.com" },
    { label: "Setting up Account", href: "#" },
    { label: "Dashboard", href: "merchant.tgipay.com" },
    { label: "Settlements", href: "#" },
    { label: "Disputes", href: "#" },
  ];

  const socialLinks = [
    {
      icon: facebook,
      label: "Facebook",
      link: "https://www.facebook.com/share/1GT64NACh6/",
    },
    {
      icon: instagram,
      label: "Instagram",
      link: "https://www.instagram.com/tgipay?igsh=MWh0cXVqb2NjNW94cA==",
    },
    { icon: x, label: "X", link: "https://x.com/tgipay" },
  ];

  const renderingTheFooterLinksFor = (
    links: { label: string; href: string }[],
  ) => (
    <ul className="space-y-5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="font-light text-blue-200 transition-colors text-md hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="w-full py-16 bg-brand-navy">
      <div className="mx-auto max-w-[90rem] px-4 lg:my-10 my-2">
        <div className="grid grid-cols-1 gap-12 mb-8 md:grid-cols-3 lg:grid-cols-5">
          {/* brand logo */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="col-span-1">
              <Image
                src={whiteLogo}
                alt="TGI Pay Logo"
                width={140}
                height={45}
                className="w-auto"
              />
            </div>

            <p className="mb-6 text-xl font-light text-blue-300">
              support@tgipay.com
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.link}
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-auto"
                  />
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-white">
                Get The TGIPAY Mobile App
              </p>
              <div className="flex gap-2">
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={playstore}
                    alt="Google Play"
                    width={140}
                    height={42}
                    className="w-auto"
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={applestore}
                    alt="App Store"
                    width={140}
                    height={42}
                    className="w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">About us</h3>
            {renderingTheFooterLinksFor(aboutUsLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Products</h3>
            {renderingTheFooterLinksFor(productsLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Security</h3>
            {renderingTheFooterLinksFor(securityLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Support</h3>
            {renderingTheFooterLinksFor(supportLinks)}
          </div>
        </div>

        {/* <div className="flex items-center justify-center w-full -top-10">
          <h1 className="text-[25rem] font-bold">tgipay</h1>
        </div> */}
        {/* 
        <div className="w-full flex justify-center items-center z-[4]">
          <h1
            className="lg:text-[25rem] md:text-[30rem] text-[7rem] font-bold leading-none bg-gradient-to-b from-[rgba(255,255,255,0.87)] to-[rgba(255,255,255,0.41)] bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            TGIPay
          </h1>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
