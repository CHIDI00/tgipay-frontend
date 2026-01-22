import Image from "next/image";
import React from "react";
import primaryLogo from "../../../public/TGIPrimaryLogo.svg";
import cbnLogo from "../../../public/cbnLogo.svg";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full py-5 bg-[#F9FAFB]">
      <div className="max-w-[90rem] mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-end justify-end">
          <Image src={primaryLogo} alt="TGI Pay Logo" width={120} height={40} />
          <div className="flex items-center justify-center gap-1">
            <p className="text-[0.7rem]">Licenced by CBN</p>
            <Image src={cbnLogo} alt="TGI Pay Logo" width={10} height={10} />
          </div>
        </div>

        <div className="items-center justify-between hidden gap-10 font-normal lg:flex">
          <Link href="/">Home</Link>
          <Link href="/whoWeAre">Who We Are</Link>
          <Link href="/ourProduct">Our Product</Link>
          <Link href="/ourPricing">Our Pricing</Link>
          <Link href="/contactUs">Contact Us</Link>
        </div>

        <div className="items-center justify-between hidden md:flex gap-7">
          <p>Pay your Task</p>

          <Button className="rounded-lg">Login</Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 rounded-lg border-brand-navy text-brand-navy hover:bg-gray-50"
          >
            Start free account
          </Button>
        </div>

        {/* {window.innerHeight < 500 && <Button className="p-0 text-black bg-transparent"><Menu size={100} /></Button>} */}
      </div>
    </div>
  );
};

export default Navigation;
