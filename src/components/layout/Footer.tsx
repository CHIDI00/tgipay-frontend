import React from "react";
import Image from "next/image";
import Link from "next/link";

import whiteLogo from "../../../public/TGIWhiteLogo.svg";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import x from "../../../public/x.svg";
import playstore from "../../../public/playstore.svg";
import applestore from "../../../public/applestore.svg";

const Footer = () => {
  const aboutUsLinks = [
    { label: "Why Us", href: "#" },
    { label: "Vision", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Our Values", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const productsLinks = [
    { label: "Collect Payments", href: "#" },
    { label: "Cards", href: "#" },
    { label: "USSD", href: "#" },
    { label: "Bank Transfer", href: "#" },
    { label: "Bank Account", href: "#" },
    { label: "Invoices", href: "#" },
    { label: "Payment Link", href: "#" },
  ];

  const securityLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
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

  return (
    <footer className="w-full py-16 bg-brand-navy">
      <div className="mx-auto max-w-[90rem] px-4 lg:my-20 my-2">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-12 mb-8">
          {/* Brand Column */}
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

            {/* Social Icons */}
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
                  />
                </Link>
              ))}
            </div>

            {/* Mobile App Section */}
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
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={applestore}
                    alt="App Store"
                    width={140}
                    height={42}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* About Us Column */}
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">About us</h3>
            <ul className="space-y-1">
              {aboutUsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xl font-light text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Products</h3>
            <ul className="space-y-1">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xl font-light text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Column */}
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Security</h3>
            <ul className="space-y-1">
              {securityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xl font-light text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-white">Support</h3>
            <ul className="space-y-1">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xl font-light text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
