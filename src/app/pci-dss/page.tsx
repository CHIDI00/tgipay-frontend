import Image from "next/image";
import React from "react";

export const metadata = {
  title: "PCI DSS Certification | TGIPAY",
  description:
    "Learn more about TGIPAY's PCI DSS compliance and security standards.",
};

export default function PCIDSSPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-[60rem] px-4 mx-auto">
        <div className="flex flex-col items-center p-4 bg-white border shadow-sm rounded-3xl md:p-14 border-slate-100">
          <h1 className="mb-8 text-2xl font-bold text-center md:text-5xl text-brand-navy">
            PCI DSS Certification
          </h1>

          <div className="mb-12 space-y-6 leading-relaxed text-md text-slate-600">
            <p>
              At TGIPAY, the security of our customers and their sensitive data
              is our highest priority. We are proud to be fully{" "}
              <strong>
                Payment Card Industry Data Security Standard (PCI DSS)
              </strong>{" "}
              compliant, ensuring your transactions are processed in a highly
              secure environment.
            </p>
            <p>
              PCI DSS is a globally recognized security standard mandated by
              major default card brands (Visa, Mastercard, American Express,
              etc.) designed to protect cardholder information and prevent
              credit card fraud. Meeting these stringent requirements
              demonstrates our ongoing commitment to maintaining robust data
              security, continuous monitoring, and strict network controls.
            </p>
            <p>
              When you do business with TGIPAY, you can trust that your payment
              information is encrypted and managed according to the highest
              industry standards.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="relative flex items-center justify-center w-full max-w-2xl p-3 border shadow-sm bg-slate-50 rounded-xl border-slate-200">
              <Image
                src="/PCIDSSCERTIFICATE.jpg"
                alt="TGIPAY PCI DSS Certificate"
                width={800}
                height={1200}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
