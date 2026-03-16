import React from "react";
import HeroBanner from "@/components/sections/Marketplace/HeroBanner";
import ValueProposition from "@/components/sections/Marketplace/ValueProposition";
import OfficialStores from "@/components/sections/Marketplace/OfficialStores";
import ProductGridSection from "@/components/sections/Marketplace/ProductGridSection";
import ProductCard from "@/components/sections/Marketplace/ProductCard";
import FullWidthAd from "@/components/sections/Marketplace/FullWidthAd";
import HalfWidthAds from "@/components/sections/Marketplace/HalfWidthAds";
import {
  topSellingProducts,
  recommendedProducts,
  newlyAddedProducts,
} from "@/components/sections/Marketplace/dummyData";

const MarketplacePage = () => {
  return (
    <main className="px-4 py-6 mx-auto space-y-12 max-w-[90rem] font-display">
      <HeroBanner />
      <ValueProposition />
      <OfficialStores />

      <ProductGridSection title="Top Selling Products">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGridSection>

      <FullWidthAd />

      <ProductGridSection title="Recommended for You">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGridSection>

      <HalfWidthAds />

      <ProductGridSection title="Newly Added">
        {newlyAddedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGridSection>
    </main>
  );
};

export default MarketplacePage;
