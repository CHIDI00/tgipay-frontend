import Image from "next/image";
import React from "react";
import primaryLogo from "../../../public/TGIPrimaryLogo.svg";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="w-full py-5">
      <div className="max-w-[90rem] mx-auto flex justify-between items-center">
        <Image src={primaryLogo} alt="TGI Pay Logo" width={120} height={40} />

        <div className="flex justify-between items-center gap-10 font-light">
          <p>Home</p>
          <p>Who We Are</p>
          <p>Our Product</p>
          <p>Our Pricing</p>
          <p>Contact Us</p>
        </div>
        <div className="flex justify-between items-center gap-7">
          <p>Pay your Task</p>

          <Button>Login</Button>
          <Button>Start free account</Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
