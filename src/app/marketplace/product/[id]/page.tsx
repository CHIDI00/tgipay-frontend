import Breadcrumb from "@/components/sections/Marketplace/ProductDetail/Breadcrumb";
import ProductGallery from "@/components/sections/Marketplace/ProductDetail/ProductGallery";
import ProductInfo from "@/components/sections/Marketplace/ProductDetail/ProductInfo";
import ProductTabs from "@/components/sections/Marketplace/ProductDetail/ProductTabs";
import FrequentlyBoughtTogether from "@/components/sections/Marketplace/ProductDetail/FrequentlyBoughtTogether";
import RelatedProducts from "@/components/sections/Marketplace/ProductDetail/RelatedProducts";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="px-4 py-6 mx-auto max-w-[90rem]">
      <Breadcrumb />

      <div className="grid grid-cols-1 gap-10 p-6 bg-white border lg:grid-cols-12 rounded-xl border-slate-200">
        <ProductGallery />
        <ProductInfo />
      </div>

      <ProductTabs />

      <FrequentlyBoughtTogether />

      <RelatedProducts />
    </main>
  );
}
