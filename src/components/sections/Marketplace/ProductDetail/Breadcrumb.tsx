import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 mb-8 overflow-x-auto text-sm text-slate-500 no-scrollbar">
      <Link
        className="transition-colors hover:text-brand-navy"
        href="/marketplace"
      >
        Market
      </Link>
      <ChevronRight size={16} />
      {/* <Link className="transition-colors hover:text-primary" href="/marketplace">Electronics</Link>
      <ChevronRight size={16} /> */}
      <span className="font-medium text-brand-navy">Headphones</span>
    </nav>
  );
}
