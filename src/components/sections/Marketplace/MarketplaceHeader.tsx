"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

import primaryLogo from "../../../../public/TGIPrimaryLogo.svg";
import cbnLogo from "../../../../public/cbnLogo.svg";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Food",
  "Home & Office",
  "Health & Beauty",
  "Sports & Outdoors",
  "Toys & Games",
];

const MarketplaceHeader = () => {
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();

  // state for search and category filtering
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close category dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // handle search submission and route to search page with query params
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const categoryQuery =
        selectedCategory !== "Categories" &&
        selectedCategory !== "All Categories"
          ? `&category=${encodeURIComponent(selectedCategory)}`
          : "";
      router.push(
        `/marketplace/search?q=${encodeURIComponent(searchQuery)}${categoryQuery}`,
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b dark:bg-slate-900 border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-20 gap-4 px-4 mx-auto max-w-[90rem] ">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col items-end justify-center">
            <Link href="/">
              <Image
                src={primaryLogo}
                alt="TGI Pay Logo"
                width={100}
                height={35}
                className="w-auto h-8 md:h-9"
              />
            </Link>

            <div className="flex items-center gap-1 mt-0.5">
              <p className={`text-[0.6rem] font-medium opacity-90`}>
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
        </div>

        {/* search Bar */}
        <div className="flex-1 hidden max-w-2xl md:block">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-0 overflow-visible border rounded-lg bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          >
            {/* category dropdwn menu */}
            <div ref={dropdownRef} className="relative h-full">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1 h-full px-4 py-2 text-sm font-medium transition-colors border-r text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 shrink-0 min-w[120px] whitespace-nowrap"
              >
                {selectedCategory}
                <span
                  className={`text-lg material-symbols-outlined transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* category options menu */}
              {isCategoryOpen && (
                <div className="absolute left-0 z-50 w-56 py-2 mt-1 bg-white border shadow-lg top-full dark:bg-slate-900 rounded-xl border-slate-200 dark:border-slate-800">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        selectedCategory === category
                          ? "font-medium text-brand-navy dark:text-brand-cyan bg-slate-50 dark:bg-slate-800/50"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* search input field */}
            <div className="relative flex-1 group">
              <button
                type="submit"
                className="absolute transition-colors -translate-y-1/2 left-3 top-1/2 text-slate-400 group-focus-within:text-brand-navy hover:text-brand-navy"
              >
                <Search size={18} />
              </button>
              <input
                className="w-full h-10 pl-10 pr-4 text-sm bg-transparent border-none rounded-none focus:ring-0 focus:outline-none"
                placeholder="Search for products, brands and categories..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            className="hidden text-sm font-semibold lg:block text-brand-navy dark:text-accent hover:underline decoration-2 underline-offset-4"
            href="#"
          >
            Become a Seller
          </Link>
          {/* Cart Icon Button */}
          <button
            className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsCartOpen(true)} // Open the cart slider when clicked
          >
            <span className="material-symbols-outlined">
              <ShoppingCart />
            </span>
            {/* Red Badge Indicator - Only renders if there is at least 1 item total inside the cart */}
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-brand-cyan text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10 -translate-y-1 translate-x-1">
                {totalItems}
              </span>
            )}
          </button>
          {/* <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">person</span>
          </button> */}
          <div className="flex items-center justify-center w-8 h-8 overflow-hidden border rounded-full bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600">
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
