import React from "react";
import MarketplaceHeader from "@/components/sections/Marketplace/MarketplaceHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <MarketplaceHeader />
      {children}
    </div>
  );
};

export default Layout;
