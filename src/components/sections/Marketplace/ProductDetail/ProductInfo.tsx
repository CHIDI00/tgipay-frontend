"use client";

import { useState } from "react";
import { Star, ShoppingBag, Truck, Store } from "lucide-react";

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:col-span-5">
      <div>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-navy">
          Wireless Noise Cancelling Headphones - Audio Hub
        </h2>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={20} className="fill-current" />
            ))}
            <Star size={20} className="fill-current text-slate-300" />
          </div>
          <span className="text-sm font-medium text-slate-500">
            4.8 (156 reviews)
          </span>
        </div>
      </div>

      <div className="py-6 border-y border-slate-100">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-brand-navy">
            ₦55,000
          </span>
          <span className="text-lg line-through text-slate-400">₦68,500</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 mt-4 text-xs font-semibold text-green-600 rounded-full bg-green-50 w-fit">
          <Truck size={18} />
          Free delivery within Lagos
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-bold text-brand-navy">Quantity:</label>
          <div className="flex items-center overflow-hidden border rounded-lg border-slate-200">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-4 py-2 transition-colors hover:bg-slate-50"
            >
              −
            </button>
            <span className="px-4 py-2 font-bold text-brand-navy">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-4 py-2 transition-colors hover:bg-slate-50"
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
          <button className="flex items-center justify-center gap-2 py-2 font-bold text-white transition-all rounded-lg shadow-sm bg-brand-navy hover:bg-brand-navy/90">
            <ShoppingBag size={20} />
            Add to Cart
          </button>
          <button className="py-4 font-bold transition-all shadow-sm bg-accent text-brand-navy rounded-xl hover:opacity-90">
            Buy Now
          </button>
        </div>
      </div>

      {/* seller info box */}
      <div className="p-4 mt-4 border bg-slate-50 rounded-xl border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy/10 text-brand-navy">
              <Store size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Sold by</p>
              <p className="font-bold text-brand-navy">Audio Hub</p>
            </div>
          </div>
          <button className="text-accent bg-white border border-accent/20 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-accent hover:text-brand-navy transition-all">
            Visit Store
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-3 mt-4 text-center border-t border-slate-200">
          <div>
            <p className="text-xs text-slate-500">Seller Rating</p>
            <p className="font-bold text-brand-navy">92% Positive</p>
          </div>
          <div className="border-l border-slate-200">
            <p className="text-xs text-slate-500">Fast Shipping</p>
            <p className="font-bold text-brand-navy">Top Rated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
