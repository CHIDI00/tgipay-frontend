import ProductCard from "@/components/sections/Marketplace/ProductCard";

export default function RelatedProducts() {
  const relatedProducts = [
    {
      id: "101",
      name: "Premium True Wireless Earbuds Pro",
      price: "₦22,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZwI4v1xqPT478ML5tMs5qqah3LzzL2YK39zIIcIhHKoUsnRhkHjpLLTGXJHofRV_8jZroyQ9glYl4wZLXFyDjGqKnl_5QUNrKEwJ3Gc_7l3NEX8RtWMmPHQ4EgiAFF6XGNJXIeDta65XD_4SHrKlWqI2IV82MK5TmtpU_Kds4ixrI5kBA8DaWp8o-iw45bUxekzBSjc7IUpVYBSl5xcF3FXPEYqr8GsgLSH9PYqFJ22gIx7O3bagwwKwRymPy89UsV7gr4hOXvg1",
      store: "Audio Hub",
      rating: 4,
      reviews: 80,
      hasFavorite: false,
    },
    {
      id: "102",
      name: "Portable Waterproof Bluetooth Speaker",
      price: "₦15,500",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEmv3xeR2dG0ylEnQcV19Kx9G9Sw5HfD291N3AwxLror_KvxELxHhgL-WjPfFLj-mLhaATRA-_v3pum0etGP-zcNdMlbMte7lSpWCmv1f7qVOEUhqTeJfwWyuxEmzvtvrbsNE18jL3MAjHoVtjnRzaCybtK4MvD8Bab-POk3uqRWOVIp0LN-ypUG74zFkohkc9dsze-Ydy1k5CSWmi6vMWBTxOIQDD42cZxrC91xgVre4b-gXliR1WwIV2i5cfzeOJevfqFiHSa6Ib",
      store: "Audio Hub",
      rating: 4.5,
      reviews: 120,
      hasFavorite: true,
    },
    {
      id: "103",
      name: "Professional Studio Monitoring Headphones",
      price: "₦45,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyM0DeB85FqUIstjUfLosy1WAn-5ak8nQiByntrZvHJgFQUykWtAWrh5czSDt9T2t_WYJqF3A6wj1yVzFhn8LToqn-toSx1VCWaVdJNfJ_Qv7t1HieX8O1XMv0QGTKwdIspOsITA8jB0rOCT-SG2TKufhf1ZYA-cm_V1rgANr3Z7fovftQiR8_E-_3UI1QE7Dul_NU-KtoQLKom2EdnsWctl6gX5eWLsDUVxibkzMi-hJIqi4gvJBJuD36LgGeipFi__LcRbxs0QSS",
      store: "Studio Gear",
      rating: 5,
      reviews: 45,
      hasFavorite: false,
    },
    {
      id: "104",
      name: "RGB Gaming Headset with Boom Mic",
      price: "₦28,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD34LSIEx4CCbGpmKxPle-88LxL3U6PGrjliD3RIJqHbm8mFH04n9lBCbJ0dj9kBjEy9YcM0RDHkDL7YYx8skY1oKKqwsMUhQ5KhgfgbzBbsM9ZZz4972PaOtbkkqNDFn_NCfH1vuFm_15Mkdd2kJdenIC_KxQ2CypXX6MfE2t2Y386NJNfaQtHQCSZEQj0QAX4V1dS-Pj_sFwwrMNOgKiIRirilyCSPDbPk4Iy1rQ93uULUQCk3attKySSkfsm85oEUKWPYe9UK0b7",
      store: "Tech Store",
      rating: 4.2,
      reviews: 90,
      hasFavorite: false,
    },
    {
      id: "105",
      name: "Hi-Res Digital Audio Player",
      price: "₦85,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Yct4WaQyh5KS0XgDBvs_DWddXJR8KlsxYFAhabB4vSWw88qT7lA4WCt2WxwHUFc_QDu2RuGXbnkqxm_73GMToWNgh-fTFEUha3puErVEqGnYCMu5y_FNXjtSyD6YMaB8bCmGystA2ffBwlcPE0wLlXODCORv6ZfyHuYdDk_B8CKa33G4EmRJJRErBgpcdSd2tSDPZgXPBxHz7jvzV7mqo3azYDYofzcQvibUdpOr0xu8ouEkthYSJ715oTCHbnGvvM8_abhImF6b",
      store: "Tech Store",
      rating: 4.8,
      reviews: 200,
      hasFavorite: true,
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-8">
        <h3 className="text-2xl font-black text-primary">Related Products</h3>
        <a
          className="flex items-center gap-1 font-bold text-accent hover:underline"
          href="#"
        >
          View All
          <span className="text-sm">→</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
