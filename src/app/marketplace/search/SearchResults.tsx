"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/sections/Marketplace/ProductCard";
import { ChevronDown } from "lucide-react";
import {
  topSellingProducts,
  recommendedProducts,
  newlyAddedProducts,
} from "@/components/sections/Marketplace/dummyData";

// combine all products to simulate a DB query for the search
const allProducts = [
  ...topSellingProducts,
  ...recommendedProducts,
  ...newlyAddedProducts,
];

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category");

  const [sortOption, setSortOption] = useState("Newest Arrivals");
  const [currentPage, setCurrentPage] = useState(1);

  // We filter the combined allProducts array based on the user's search query and selected category.
  const filteredProducts = allProducts.filter((product) => {
    // check if the product matches the search query.
    // If a query exists, we check if the search string is included in either:
    // - The product's name (case-insensitive)
    // - The product's description, if it exists (case-insensitive)
    // If there is no query provided in the URL, we skip this check by returning 'true'.
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(query.toLowerCase()))
      : true;

    // check if the product belongs to the selected category.
    // If a specific category is selected (and it's not the default "All Categories"),
    // verify that the product's category strictly matches it.
    // If no category is selected or "All Categories" is active, we bypass this check returning 'true'.
    const matchesCategory =
      category && category !== "All Categories"
        ? product.category === category
        : true;

    // final Validation
    // for a product to appear in the results, it must satisfy BOTH the text search and category filter.
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* header section */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Showing results for &apos;{query}&apos;
            {category && (
              <span className="ml-2 text-lg text-slate-500">in {category}</span>
            )}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {filteredProducts.length} items found
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Sort by:
          </span>
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="py-2 pl-4 pr-10 text-sm bg-white border rounded-lg appearance-none cursor-pointer border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
            >
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
            <span className="absolute inset-y-0 flex items-center pointer-events-none right-3 text-slate-500">
              <ChevronDown size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* search results */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} {...product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 mb-4 text-slate-300">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
            No results found
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            We couldn&apos;t find any items matching &quot;{query}&quot;.
            <br /> Try checking your spelling or using more general terms.
          </p>
        </div>
      )}

      {/* pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium border rounded-md text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">
              Previous
            </button>

            <div className="hidden gap-1 md:flex">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
                    currentPage === page
                      ? "bg-[#14416e] text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="flex items-center justify-center w-10 h-10 cursor-default text-slate-500">
                ...
              </span>
              <button
                onClick={() => setCurrentPage(12)}
                className="flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                12
              </button>
            </div>

            <button className="px-4 py-2 text-sm font-medium border rounded-md text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
