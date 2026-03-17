import React from "react";
import MarketplaceHeader from "@/components/sections/Marketplace/MarketplaceHeader";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/sections/Marketplace/CartDrawer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Wrap the entire marketplace section in the CartProvider to allow any nested component to access total cart states
    <CartProvider>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
        <MarketplaceHeader />
        {children}
        {/* Render the CartDrawer at the route-layout level so it's always accessible overlaying the screen */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Layout;
