"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import MenuLink from "../ui/MenuLinks";
import primaryLogo from "../../../public/TGIPrimaryLogo.svg";
import cbnLogo from "../../../public/cbnLogo.svg";

interface MenuItem {
  label: string;
  link: string;
}

interface MobileMenuProps {
  items: MenuItem[];
  isDarkTheme: boolean;
}

const MobileMenu = ({ items, isDarkTheme }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const iconColorClass = isDarkTheme
    ? "text-white hover:bg-white/10"
    : "text-brand-navy hover:bg-slate-100";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`p-2 transition-colors rounded-md ${iconColorClass}`}
        aria-label="Open menu"
      >
        <Menu size={32} />
      </button>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex justify-end transition-all duration-500 ${
              isOpen
                ? "pointer-events-auto visible"
                : "pointer-events-none invisible delay-500"
            }`}
          >
            <div
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />

            <div
              className={`relative w-[100vw] max-w-md h-full bg-white shadow-2xl flex flex-col px-4 py-5 transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* menu header */}
              <div className="flex items-center justify-between mb-10">
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
                    <Image
                      src={cbnLogo}
                      alt="CBN Logo"
                      width={12}
                      height={12}
                      className="w-auto"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 transition-colors rounded-full text-slate-500 hover:bg-slate-100"
                >
                  <X size={28} />
                </button>
              </div>

              {/* links */}
              <div className="flex flex-col space-y-6">
                {items.map((item, index) => (
                  <MenuLink
                    key={index}
                    href={item.link}
                    isOpen={isOpen}
                    index={index}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </MenuLink>
                ))}
              </div>

              {/* bottom buttons */}
              <div className="flex flex-col gap-4 pt-8 mt-auto border-t border-slate-100">
                <Link
                  href="/login"
                  className="w-full py-4 font-bold text-center rounded-lg bg-slate-100 text-brand-navy hover:bg-slate-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full py-4 font-bold text-center text-white rounded-lg shadow-lg bg-brand-cyan hover:bg-brand-cyan/90"
                >
                  Start free account
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileMenu;
