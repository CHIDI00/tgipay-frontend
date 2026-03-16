import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const OfficialStores = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Official Stores</h2>
        <Link
          className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-accent hover:underline"
          href="#"
        >
          See All
          <span className="text-sm material-symbols-outlined">
            <ChevronRight />
          </span>
        </Link>
      </div>
      <div className="flex gap-3 pb-6 overflow-x-auto hide-scrollbar">
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-[#0A2540] text-white whitespace-nowrap">
          All
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-slate-100 text-[#0A2540] hover:bg-slate-200 transition-colors whitespace-nowrap">
          Electronics
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-slate-100 text-[#0A2540] hover:bg-slate-200 transition-colors whitespace-nowrap">
          Fashion
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-slate-100 text-[#0A2540] hover:bg-slate-200 transition-colors whitespace-nowrap">
          Home
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-slate-100 text-[#0A2540] hover:bg-slate-200 transition-colors whitespace-nowrap">
          Sports
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-slate-100 text-[#0A2540] hover:bg-slate-200 transition-colors whitespace-nowrap">
          Beauty
        </button>
      </div>
      <div className="flex gap-4 pb-4 overflow-x-auto hide-scrollbar">
        {/* Store Logos */}
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="max-w-full transition-all grayscale hover:grayscale-0"
            alt="Watch brand official store logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1F8_Ov2OpTsWY85wN2BdlW1EAUMewAa3KyW91wu3OrXELUzVRq6-MQqRoRFH0nSFsynCBYsPAVe5NTS_JEzsB9t_JqAPXq8Mwb_b1pgtwE7SbOJofgo_L3qDJJMzB2pSLZ1KTVHNsD3LLVfFdjDkRasz8P0IkP8K2Ne2THK8HuSf_M-G8cAazbvzuoFRey3AWnbmNuMOr58VfU4Z6lTr310wOi9bp1EtZSIIZzJKhp7W7oNV2B9_lGQarBc3YsR6o4svMIDrdrmSC"
          />
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="max-w-full transition-all grayscale hover:grayscale-0"
            alt="Cosmetics brand official store logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJIXW4Ek43Sj9zywh3hGEY23fF3h36U56JaJNx3OAUUMGv0X8j1L5k3IJkengvmDhHMhChFsFsek_Ic28Fx12ntUmtALoFJNNpIlggYTpyhYD7I6DttZuKARAu7GMO2ii4lYc4kl46y7d_wAOm4ILGaw2vkvblIQ_U48znqcBqdvkpDJXGsBC-aDYJ8Td9iuWnBGZatMxVi7M6Dl-EEqwkyMzePgKIG6eAcdc8pg3gluZhRHUIImomHddgcU9ZdTW0F-wPDkLcSkul"
          />
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="text-xl font-bold text-slate-300">TECH</div>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="text-xl font-bold text-slate-300">HOME</div>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="max-w-full transition-all grayscale hover:grayscale-0"
            alt="Electronics brand official store logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABsoFiLtjFhHSf5zQiItX6MbdLKy26MevHJq0Fy3FC3k8GpvVMQdzEQFbyoWkybMr6UeSLEyyglrqeDFHZLJCqSdrFLVx-MHwdQsvCxqw0oOwWgAfg7hr30pKzhmmDTEUc-CeQe0lqN-JRQpjmikDvqY18bCTmAF_RrKUW1eZQ99UVLm85Fk_aa0Htjb5UIU-YXerO-jZMc7PeuzF2Aog29PddBUSCLHp8oOzkVjnYbYK1cEUSZxcP6RRTTK9DMu_d9rYlqXdKre2e"
          />
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="text-xl font-bold text-slate-300">FASHION</div>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="text-xl font-bold text-slate-300">LUXE</div>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 p-4 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="text-xl font-bold text-slate-300">SPORT</div>
        </div>
      </div>
    </section>
  );
};

export default OfficialStores;
