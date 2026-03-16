import { BusFront, ShieldCheck, ShieldUserIcon } from "lucide-react";
import React from "react";

const ValueProposition = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex items-center gap-4 p-6 bg-white border shadow-sm dark:bg-slate-900 rounded-xl border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-lg bg-primary/10 dark:bg-accent/10">
          <span className="text-3xl material-symbols-outlined text-primary dark:text-accent">
            <ShieldCheck />
          </span>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Secure Escrow Payments
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Funds released only after delivery
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-6 bg-white border shadow-sm dark:bg-slate-900 rounded-xl border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-lg bg-primary/10 dark:bg-accent/10">
          <span className="text-3xl material-symbols-outlined text-primary dark:text-accent">
            <BusFront />
          </span>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Fast Nationwide Delivery
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Orders delivered within 48 hours
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-6 bg-white border shadow-sm dark:bg-slate-900 rounded-xl border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-lg bg-primary/10 dark:bg-accent/10">
          <span className="text-3xl material-symbols-outlined text-primary dark:text-accent">
            <ShieldUserIcon />
          </span>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Buyer Protection
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Dedicated support for every dispute
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
