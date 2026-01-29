"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";

import whiteLogo from "../../../public/TGIWhiteLogo.svg";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import x from "../../../public/x.svg";
import playstore from "../../../public/playstore.svg";
import applestore from "../../../public/applestore.svg";

const Footer = () => {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  }, [lenis, pathname, searchParams]);

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
    { label: "Blog", href: "/blog" },
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
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "PCI DSS", href: "#" },
  ];

  const supportLinks = [
    { label: "Getting Started", href: "#" },
    { label: "Setting up Account", href: "#" },
    { label: "Dashboard", href: "#" },
    { label: "Settlements", href: "#" },
    { label: "Disputes", href: "#" },
  ];

  const socialLinks = [
    { icon: facebook, label: "Facebook" },
    { icon: instagram, label: "Instagram" },
    { icon: x, label: "X" },
  ];

  const renderTheFooterLinks = (links: { label: string; href: string }[]) => (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-xl font-light text-blue-200 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="w-full py-16 bg-brand-navy">
      <div className="mx-auto max-w-[90rem] px-4 lg:my-20 my-2">
        <div className="grid grid-cols-1 gap-12 mb-8 lg:grid-cols-5">
          {/* brand column */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="col-span-1">
              <Image
                src={whiteLogo}
                alt="TGI Pay Logo"
                width={140}
                height={45}
              />
            </div>

            <p className="mb-6 text-xl font-light text-blue-300">
              support@tgipay.com
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href="#"
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
                Get The TGI PAY Mobile App
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
            {renderTheFooterLinks(aboutUsLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Products</h3>
            {renderTheFooterLinks(productsLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Security</h3>
            {renderTheFooterLinks(securityLinks)}
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Support</h3>
            {renderTheFooterLinks(supportLinks)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
