import Image from "next/image";
import { Plus } from "lucide-react";

export default function FrequentlyBoughtTogether() {
  return (
    <section className="mt-12">
      <h3 className="mb-6 text-xl font-bold text-primary">
        Frequently Bought Together
      </h3>
      <div className="flex flex-col items-center gap-8 p-6 bg-white border rounded-xl border-slate-200 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 bg-center bg-cover border rounded-lg border-slate-100 overflow-hidden bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbhyXPQTb9lgn1jRzgIewQwtiKt8yxnhWeowVBSo55wtMmBoQ8yuY27mb2MAC1dpisrjDmakZkod9brI98wF-gitCw67Jhrgm02-8VpjBakgtoVKJak2vfRqPaBLYz_1uEJg2siNG8AhUWuUVybY85XG3qM8RTVEKi_5458dIcuots0BwUZM8Q8rAgJm4hI8aLh1KNPptwKe4_6s5WbHl1lwwujE2UIwwcpzPFMrobiNtBxiEnvdr_NWYNTauyaYIOLmv9AiN1Nq0k"
                alt="Main headphones product"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-bold text-primary">This Item</p>
          </div>
          <Plus className="text-slate-300" size={32} />
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 bg-center bg-cover border rounded-lg border-slate-100 overflow-hidden bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbIG5kzNEfTwmGZeJH8m7vzCoS2wvJNvY4P716XWZxbZ94MvINJIKyF6L0TOLkL365LrERyEOt1_F_1xCMzxXaHOVWvBOK-EI3w-yT5M3l5zVvl78YCnfMkEsK53yhyD1bNxtwvvPiu0cb3jkQpM2TNTAQYqwBL7Scsc7m9FNP0E25RymLU-p_igjx1lMJeHu5iB1VY2wkRCXmYdMDRsntSD_jidRDPf8ndrnjokD5BPb6WfGL769vd2MkFwJbPQej08NVecoAV4UF"
                alt="Travel Case"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-medium text-slate-500">Travel Case</p>
          </div>
          <Plus className="text-slate-300" size={32} />
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 bg-center bg-cover border rounded-lg border-slate-100 overflow-hidden bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Vs6-QTUz7q15uQNNPt9WtT9cYhTzmg1cDoFhyJK_Nsmbip9cx1oOihAfbjduVSKSsGivTKtbzZZx4AK68JNf0J3iEZ6sWh3lTkBGVp2-UfJFblirV2K_3z9VYOo-OAdh_T-MoAXZM2k4xF-yceTZHSN9pr33JlbeeiakUhM0xu2rarqwRjh2vo2TFD0mt9PHI3ImwyEF0X3ucQTHs0dw3-VEVSFNAV0E4Dr2blq_qKQYWeaRVfXVg5LtTB56YA-Y9cAiThLHXPiZ"
                alt="Desk Stand"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-medium text-slate-500">Desk Stand</p>
          </div>
        </div>
        <div className="flex-1 pl-0 text-center border-l border-slate-100 md:pl-8 md:text-left">
          <p className="text-sm text-slate-500">Bundle Price:</p>
          <p className="text-3xl font-bold text-primary">₦68,500</p>
          <button className="mt-4 bg-accent text-primary px-8 py-2.5 rounded-lg font-bold hover:opacity-90 transition-all">
            Add All 3 to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
