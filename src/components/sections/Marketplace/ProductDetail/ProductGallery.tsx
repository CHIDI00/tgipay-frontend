"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVr5QPgW8WNDsqxGbkvHRJLquVKqu8rAErY6pMmitD1pLPnfXt2Oe2-UdugGyG43Lyk0TFivO6tHQiahmzH8A3GlSgXH3Mkeurrs-2Gw_zy4j2wff3CzvVEZUbPKmPFXWQwuMVSrUFMYvmCcHCmej0uarcFA3QPpDG-gn3WUCQTMJi1OXY1RkIelQ0CfCmRQQcevo4qUMGR16G1eYRhCsWRLUFeKQmD2dfSrDbuStVxHphBm84fIEQKmjyuA3onBoP0Nq85Vrw9dxV",
    alt: "Close up view of black premium headphones",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiXiMHc0z3y4SGQ4uJDzCw3UITdi0mIBnvUYQZKichiebAkVpfqaOFZO6jdlJakHK41KgCaEMXKg0l2Kzs8whUkn31qKzd_PrpK9W1oZhGIBFTGfU4x2cGnqUxqKmydOeP7SwJhYVXa4j0dmluxvJRgHtHZ07mLj3WPoekKyo6AYKeKsOuOKfqBSoQwiW6AbQiX7zczIPbNWBlsRHAFlx2WL26f5HLZ6YInbvPhmgs22CemfKrnUXqJtaYgGBmXoJ8BZKKRbZV40LL",
    alt: "Side view of wireless headphones",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyd85C4hTYj0ixCdmHE5hZNt_CfFRLA7drqcKXsDnQe6VhyuPA8D4shYVrBJWFELoQbDH223MOLXasIT3a31PD5ik_eJk9bcbBPGHlOHL5xpNWnyUNmvOQAWCdt0QdMD8Dkc7lisGE7z9jYEPsMbmtxAfZsXjggqjWzb5ecZul9Nhn29cSho3lej2RF7KgHTOQfDtCsR7CDM3I9j0wgAh1boXg1ILkJGWMRbydc9JQ6LEBoF6eXUoh0rk5Kk0HlDO1roUAbLIzXc-7",
    alt: "Detail of headphone ear cushions",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMtfGaW63S9Rl7gQ8YJEfU7IhEdNzN-rUAogZx3y83A4oI-ft-dANHBRENtxEnIgdPSH-KO9MhiqIXAvqVmP_KifyvitpEVtBZLZHocK6qmH1VaeC0J0P5A3oxc_Rmslj2kVzAnBu_uKrCXDCKkTT68IylCwrQ7kNMrk6hOi2b4pA1j9aIJ2neAdmumDH_JVEsqr6DoUFC_f3lsUDjwpAGYLbsgwvrFPuai1D5slWmRFqtq3kYFOmt0Af3kNE3pFw17m5zjtu--u6i",
    alt: "Headphones folded for travel",
  },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4 lg:col-span-7 md:flex-row">
      <div className="flex order-2 gap-3 md:flex-col md:order-1">
        {galleryImages.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative w-20 h-20 rounded-lg transition-all overflow-hidden ${
              idx === selectedImage
                ? "border-2 border-accent"
                : "border border-slate-200 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
      <div className="flex-1 order-1 md:order-2">
        <div className="relative aspect-square rounded-xl border border-slate-100 overflow-hidden bg-slate-100">
          <Image
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].alt}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
