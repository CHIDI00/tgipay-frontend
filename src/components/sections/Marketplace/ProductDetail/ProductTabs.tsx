"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

type TabType = "description" | "specifications" | "reviews";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  return (
    <div className="mt-10 overflow-hidden bg-white border rounded-xl border-slate-200">
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-8 py-4 font-bold border-b-4 transition-colors ${
            activeTab === "description"
              ? "text-brand-navy border-accent"
              : "text-slate-500 border-transparent hover:text-brand-navy"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("specifications")}
          className={`px-8 py-4 font-medium border-b-4 transition-colors ${
            activeTab === "specifications"
              ? "text-brand-navy border-accent"
              : "text-slate-500 border-transparent hover:text-brand-navy"
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-8 py-4 font-medium border-b-4 transition-colors ${
            activeTab === "reviews"
              ? "text-brand-navy border-accent"
              : "text-slate-500 border-transparent hover:text-brand-navy"
          }`}
        >
          Reviews (156)
        </button>
      </div>

      <div className="p-8">
        {activeTab === "description" && (
          <>
            <p className="mb-6 leading-relaxed text-slate-600">
              Experience unmatched sound quality with our flagship Wireless
              Noise Cancelling Headphones. Designed for audiophiles and daily
              commuters alike, these headphones feature state-of-the-art hybrid
              noise cancellation technology that blocks out 95% of ambient
              noise.
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-600">
                  40-hour battery life on a single charge
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-600">
                  Fast charging: 5 hours of playback in 10 mins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-600">
                  Advanced 40mm drivers for deep bass
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-600">
                  Customizable EQ settings via mobile app
                </span>
              </li>
            </ul>
          </>
        )}

        {activeTab === "specifications" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Driver Size
                </p>
                <p className="text-lg font-bold text-brand-navy">40mm</p>
              </div>
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Frequency Response
                </p>
                <p className="text-lg font-bold text-brand-navy">
                  20Hz - 20kHz
                </p>
              </div>
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Battery Life
                </p>
                <p className="text-lg font-bold text-brand-navy">40 Hours</p>
              </div>
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Charge Time
                </p>
                <p className="text-lg font-bold text-brand-navy">2 Hours</p>
              </div>
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Connectivity
                </p>
                <p className="text-lg font-bold text-brand-navy">
                  Bluetooth 5.0
                </p>
              </div>
              <div className="pb-4 border-b">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Weight
                </p>
                <p className="text-lg font-bold text-brand-navy">250g</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <p className="text-slate-600">
              Customer reviews would be displayed here. Average rating: 4.8/5
              based on 156 reviews.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
