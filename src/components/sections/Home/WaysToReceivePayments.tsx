"use client";

import React from "react";

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
  return (
    <section className="px-4 md:py-24 py-16 bg-[#EAFBF1] sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col w-full gap-14">
          <p className="md:ext-[3rem] text-[2rem] font-bold md:leading-[50px] leading-[40px] text-brand-navy">
            Ways to Receive <br /> Payments with Ease
          </p>

          <p className="text-lg lg:w-[70%]">
            There are multiple simple and effective ways to collect payments
            tailored to both businesses and individuals. Whether you&apos;re a
            merchant, freelancer, or service provider, here’s how you can
            streamline the process
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cardContent.map((card) => (
              <div
                key={card.id}
                className="flex flex-col w-full p-10 bg-white rounded-lg md:p-20 gap-7"
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
