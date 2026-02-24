"use client";

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Who can use the service of TGI PAY?",
    answer:
      "TGI Pay is designed for businesses of all sizes, from freelancers and startups to large enterprises registered in Nigeria. Whether you have a full e-commerce website, a simple blog, or sell directly on social media, our platform provides the tools you need to accept payments securely.",
  },
  {
    question: "How simple is it to open a merchant account?",
    answer:
      "It is completely seamless and 100% online. You don't need to visit a physical branch. Simply sign up with your email, upload your business registration documents (CAC), valid ID, and settlement bank account details. Most accounts are reviewed and activated within 24-48 hours.",
  },
  {
    question: "What are the payment channels that TGI PAY Offers?",
    answer:
      "We offer a wide range of payment channels to ensure your customers never get stuck. This includes local and international Cards (Visa, Mastercard, Verve), direct Bank Transfers, USSD, and Pay with Bank options.",
  },
  {
    question: "How secure is my data when I transact through TGI Pay?",
    answer:
      "Security is our top priority. We are PCI DSS Certified, which is the global standard for payment security. We use military-grade encryption to protect transaction data and employ advanced fraud detection systems to monitor and prevent suspicious activities in real-time.",
  },
];

const PaymentQuestionAnswered = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 bg-white lg:py-24">
      <div className="max-w-[90rem] px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-center md:text-5xl text-brand-navy">
            Your Top Payment Questions Answered
          </h2>
          <p className="max-w-4xl text-lg font-normal text-center text-slate-600">
            Explore answers to the most common questions about our payment
            gateway and how it works for your business.
          </p>

          <div className="flex flex-col gap-5 lg:w-[65%] w-full mt-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={cn(
                    "flex flex-col px-8 py-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out",
                    isOpen
                      ? "border-brand-cyan bg-brand-cyan/5"
                      : "border-brand-navy hover:border-brand-cyan/50",
                  )}
                >
                  <div className="flex items-center justify-start w-full gap-7">
                    <ChevronRight
                      className={cn(
                        "w-6 h-6 transition-transform duration-300 ease-in-out",
                        isOpen
                          ? "text-brand-cyan rotate-90"
                          : "text-brand-navy rotate-0",
                      )}
                    />
                    <p className="md:text-lg text-md font-normal select-none text-brand-navy">
                      {faq.question}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex gap-7">
                        <div className="min-w-[24px]" />
                        <p className="leading-relaxed md:text-md text-sm text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentQuestionAnswered;
