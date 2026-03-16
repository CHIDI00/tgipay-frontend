import React from "react";
import Link from "next/link";
import Image from "next/image";

const HalfWidthAds = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="relative h-40 overflow-hidden rounded-xl bg-slate-200 group">
        <Image
          className="object-cover transition-transform group-hover:scale-110"
          alt="Sneakers close up"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLhw5HFc4wg57S9q1wJFQmFg6Ndz5_O4bpXnD8nxvuoeJit0vaGhRVSC-USLeyR6FyRSk-O_pR_MM7x1Z-mgK6RAzRwvsywVeRO8_nR4ANMwcOym4u_rGw-cpW924qwBfkKnx_MoU1ucavj2af8Qa55VDUFYpeedco4OqWGRm78vkJ5mdxVi6BqwBsYzR2EfS2os1egTBQ77_6BiOBOf9ct24h9apcwXdteQd4J9pzZWFKfhmJGd8Sat1yp1rwwL8GZCIad2sHiEC"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 bg-primary/40">
          <h4 className="text-2xl font-black text-white">20% off Sneakers</h4>
          <p className="text-sm text-white/80">Step up your game</p>
          <Link
            className="flex items-center gap-1 mt-2 font-bold text-accent"
            href="#"
          >
            Shop Now
            <span className="text-sm material-symbols-outlined">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
      <div className="relative h-40 overflow-hidden rounded-xl bg-slate-200 group">
        <Image
          className="object-cover transition-transform group-hover:scale-110"
          alt="Blender and kitchen appliances"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPW2gQ8T_G5s8LdZ9Lj1M0eTaX7r9ly4kzT0gfp5v7-gZEgSnvBhVJPEFBX-6KSoaSLEqDDG0vBTQPPQeQlbiV5DTJz4eZS07kVB8DKc0lVYEBxl2NQVemtqt2dmSVciAs8DbthtQW6FquQKhyWZAr3If-yDK8VrhIuhQrGS8GgSCs99b5Fa_zI4iXDJXjT-owghph3vd09asTotNeHG8OXzKC3RG38Kz2z8yCg5PynJpaUK-w-lOv_kuT_66VMSsyGkBi-d6lkjK"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 bg-primary/40">
          <h4 className="text-2xl font-black text-white">Home Appliances</h4>
          <p className="text-sm text-white/80">Modern kitchen essentials</p>
          <Link
            className="flex items-center gap-1 mt-2 font-bold text-accent"
            href="#"
          >
            Shop Now
            <span className="text-sm material-symbols-outlined">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HalfWidthAds;
