"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  store: string;
  price: string;
  image?: string;
  rating?: number;
  reviews?: number;
  hasFavorite?: boolean;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  store,
  price,
  image = "https://placehold.co/400x400/eeeeee/999999?text=No+Image",
  rating = 0,
  reviews = 0,
  hasFavorite = true,
}) => {
  return (
    <Link href={`/marketplace/product/${id}`} className="block">
      <div className="flex flex-col h-full overflow-hidden transition-shadow bg-white border dark:bg-slate-900 rounded-xl border-slate-200 dark:border-slate-800 hover:shadow-lg">
        <div className="relative overflow-hidden aspect-square bg-slate-100">
          <Image
            className="object-cover w-full h-full"
            alt={name}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {hasFavorite && (
            <div
              className="absolute z-10 transition-colors cursor-pointer top-2 right-2 text-slate-400 hover:text-red-500"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="mb-1 text-sm font-medium line-clamp-2">{name}</h3>
          <p className="mb-2 text-xs text-slate-400">{store}</p>
          <div className="mt-auto">
            <div className="flex items-center gap-1 mb-2 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-sm material-symbols-outlined ${
                    i < Math.floor(rating) ? "fill-current" : "text-slate-300"
                  }`}
                >
                  <Star
                    size={16}
                    className={i < Math.floor(rating) ? "fill-current" : ""}
                  />
                </span>
              ))}
              <span className="text-xs text-slate-400">({reviews})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary dark:text-slate-50">
                {price}
              </span>
            </div>
            <button
              className="w-full mt-3 bg-[#0A2540] text-white font-bold py-2 rounded text-xs hover:opacity-90 transition-colors relative z-10"
              style={{ backgroundColor: "#14416e" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
