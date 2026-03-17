"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";

const CartDrawer = () => {
  // Destructure all the necessary state and methods from our custom CartContext
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  // Effect: Lock body scroll when the drawer is open.
  // This prevents the user from accidentally scrolling the page underneath the cart slider.
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function ensures body scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  // Utility to format the dynamic raw price number back into standard Nigerian currency formats
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* 
        1. Overlay Backdrop 
        The semi-transparent dark background that covers the page.
        Clicking anywhere on this overlay triggers the drawer to close. 
      */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* 
        2. Side Drawer Container
        Uses Tailwind's translate-x utility classes to animate sliding in and out from the left.
        Z-index set higher than the overlay (z-[70]) to ensure it rests on top.
      */}
      <div
        className={`fixed top-0 left-0 z-[70] flex flex-col h-full w-full sm:w-[400px] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
            Your Cart ({cart.length})
          </h2>
          {/* Close button triggers context state change */}
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 transition-colors rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* 
          3. Drawer Content (Scrollable) 
          Flex-1 takes up the remaining vertical space, pushing the checkout footer to the bottom.
        */}
        <div className="flex-1 p-4 overflow-y-auto">
          {cart.length === 0 ? (
            // Empty State UI
            <div className="flex flex-col items-center justify-center flex-1 h-full gap-4 text-slate-500">
              <span className="text-4xl material-symbols-outlined">
                shopping_cart
              </span>
              <p>Your cart is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2 mt-4 text-sm font-medium text-white transition-colors rounded-lg bg-brand-navy dark:bg-brand-cyan hover:bg-brand-navy/90"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            // Populated State UI: Map through the global context array of CartItems
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Product Miniature Image */}
                  <div className="relative w-20 h-20 overflow-hidden border rounded-lg shrink-0 bg-slate-100 border-slate-200 dark:border-slate-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Details Section */}
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm font-medium line-clamp-2 text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      {/* Trash icon permanently removes item */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="mt-1 font-bold text-brand-cyan">
                      {item.priceStr}
                    </div>

                    {/* Quantity Selector Constraints (+ / - buttons) */}
                    <div className="flex items-center gap-3 mt-auto pt-2">
                      <div className="flex items-center gap-1 p-1 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                        {/* Decrement logic, disabled if quantity is 1 */}
                        <button
                          className="p-1 rounded text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white shadow-sm disabled:opacity-50"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        {/* Current item quantity */}
                        <span className="w-8 text-sm font-medium text-center text-slate-900 dark:text-white">
                          {item.quantity}
                        </span>
                        {/* Increment logic */}
                        <button
                          className="p-1 rounded text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white shadow-sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 
          4. Drawer Footer
          Sticky fixed element at the bottom holding the live subtotal and the ultimate checkout button.
        */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                Subtotal
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {/* Dynamically re-rendering formatted total */}
                {formatPrice(totalPrice)}
              </span>
            </div>

            <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
              Shipping and taxes calculated at checkout.
            </p>

            <button className="w-full py-3 text-sm font-bold text-white transition-opacity rounded-lg bg-[#14416e] hover:opacity-90">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
