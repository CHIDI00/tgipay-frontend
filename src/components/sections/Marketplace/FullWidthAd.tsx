import React from "react";

const FullWidthAd = () => {
  return (
    <section className="relative flex items-center h-48 overflow-hidden rounded-xl md:h-64 bg-slate-900">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-60"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBifaz_O-RsdDxKxPmGL-DfTkscOpeIriJ2m7EFEVLO76EZud_jV_L-6AzaZpLmxJHUroeJuNLL5TocAoFF7H_ZKZDSHFfLoxoyYQbtkm5A8iRu1eSiAZX9XkkAQ6KREIkQOX_sVWVcMFEDKSqgQ2a3Q2xJ8K2eSqX7_J2kvH2YwbQKkZ13UHh2OC3p2LT_wTlIyPhctipx5GUC4lR7PpK0h_ClwqzqCo2q5RhpdrMgccOH0uRseu46en94UKKUmVbjlI11RMRLbAVJ")',
        }}
      ></div>
      <div className="relative z-10 max-w-lg p-8 text-white md:p-12">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold rounded bg-accent text-primary">
          Tech Week
        </span>
        <h3 className="mb-4 text-3xl font-bold">
          Up to 40% off on premium laptops
        </h3>
        <button
          className="bg-[#0A2540] text-white font-bold px-6 py-2 rounded-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: "#14416e" }}
        >
          Shop Laptops
        </button>
      </div>
    </section>
  );
};

export default FullWidthAd;
