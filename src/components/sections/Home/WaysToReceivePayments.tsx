"use client";

import FadeInAnimation from "@/components/ui/FadeInAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Smartphone, Building2, Link2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cardContent = [
  {
    id: 1,
    title: "Mobile & Card Payments",
    description:
      "Use mobile devices, apps, or card readers to accept payments on the go. Customers can pay using mobile wallets or credit/debit cards.",
    icon: Smartphone,
    statValue: "99.9%",
    statLabel: "Uptime",
  },
  {
    id: 2,
    title: "Bank Transfers & USSD",
    description:
      "Offer direct bank transfers for secure and fee-free transactions, or allow payments via USSD codes, ideal for customers without smartphones or internet access.",
    icon: Building2,
    statValue: "0%",
    statLabel: "Hidden Fees",
  },
  {
    id: 3,
    title: "Payment Links",
    description:
      "Create and share personalized payment links via email or messaging platforms, making it simple for customers to pay from anywhere with just a click.",
    icon: Link2,
    statValue: "Instant",
    statLabel: "Generation",
  },
];

const WaysToReceivePayments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="receive-payment"
      className="px-4 py-16 bg-white md:py-24 sm:px-6 lg:px-8"
    >
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col w-full gap-8 mb-16">
          <FadeInAnimation>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50">
              <span className="text-sm font-semibold text-slate-700">
                Payment Collection
              </span>
            </div>
          </FadeInAnimation>

          <FadeInAnimation className="md:text-[3rem] text-[2.25rem] font-bold md:leading-[1.2] leading-tight">
            <span className="text-brand-navy">Ways to receive payments</span>{" "}
            <br className="hidden md:block" />
            <span className="text-brand-cyan">with ease</span>
          </FadeInAnimation>

          <FadeInAnimation className="block text-lg lg:w-[60%] text-slate-600">
            There are multiple simple and effective ways to collect payments
            tailored to both businesses and individuals. Whether you&apos;re a
            merchant, freelancer, or service provider, here’s how you can
            streamline the process.
          </FadeInAnimation>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {cardContent.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="flex flex-col w-full bg-white border border-slate-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-sm transition-shadow duration-300 value-card"
              >
                <div className="flex-1 p-8 pb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] flex items-center justify-center text-brand-navy mb-6">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-brand-navy">
                    {card.title}
                  </h3>
                  <p className="leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                </div>

                <div className="w-[85%] mx-auto h-px bg-slate-200" />

                <div className="flex items-center gap-3 px-8 py-5 rounded-b-2xl">
                  <span className="text-xl font-bold text-brand-navy">
                    {card.statValue}
                  </span>
                  <span className="text-sm font-medium tracking-wider uppercase text-slate-500">
                    {card.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaysToReceivePayments;
