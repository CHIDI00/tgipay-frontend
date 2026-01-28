"use client";

import FadeInAnimation from "@/components/ui/FadeInAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cardContent = [
  {
    id: 1,
    title: "Mobile & Card Payments",
    description:
      "Use mobile devices, apps, or card readers to accept payments on the go. Customers can pay using mobile wallets or credit/debit cards.",
  },
  {
    id: 2,
    title: "Bank Transfers & USSD",
    description:
      "Offer direct bank transfers for secure and fee-free transactions, or allow payments via USSD codes, ideal for customers without smartphones or internet access.",
  },
  {
    id: 3,
    title: "Payment Links",
    description:
      "Create and share personalized payment links via email or messaging platforms, making it simple for customers to pay from anywhere with just a click.",
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
    <section className="px-4 md:py-24 py-16 bg-[#EAFBF1] sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col w-full gap-14">
          <FadeInAnimation className="md:ext-[3rem] text-[2rem] font-bold md:leading-[50px] leading-[40px] text-brand-navy">
            Ways to Receive <br /> Payments with Ease
          </FadeInAnimation>

          <FadeInAnimation className="block text-lg lg:w-[70%]">
            There are multiple simple and effective ways to collect payments
            tailored to both businesses and individuals. Whether you&apos;re a
            merchant, freelancer, or service provider, here’s how you can
            streamline the process
          </FadeInAnimation>

          <div
            ref={containerRef}
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {cardContent.map((card) => (
              <div
                key={card.id}
                className="flex flex-col w-full p-10 bg-white rounded-lg value-card md:p-20 gap-7"
              >
                <p className="text-lg font-bold text-brand-navy">
                  {card.title}
                </p>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToReceivePayments;
