"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Defines the structure of a single item in our cart
export interface CartItem {
  id: string;
  name: string;
  priceStr: string;
  price: number;
  image: string;
  quantity: number;
  store?: string;
}

// Defines all the variables and functions exposed by the CartContext
interface CartContextType {
  // Array of items currently in the cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity" | "price">) => void; // function to add a product (quantity string/price handle automatically)
  removeFromCart: (id: string) => void; // Function to remove a product entirely
  updateQuantity: (id: string, newQuantity: number) => void; // Function to change the quantity (+ / -) of a product
  isCartOpen: boolean; // State tracking if the cart slider is visible
  setIsCartOpen: (isOpen: boolean) => void; // Function to open/close the cart slider
  totalItems: number; // Total number of individual items in the cart
  totalPrice: number; // Total combined price of all items in the cart
}

// Create the context (initial value is undefined before the Provider wraps the app)
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Helper utility to extract a clean number from a formatted price string.
 * Example: Converts "₦25,000" or "₦ 25,000.50" into 25000 / 25000.50
 * This ensures we can do math operations (like calculating the subtotal) accurately.
 */
const parsePrice = (priceStr: string) => {
  const numericString = priceStr.replace(/[^0-9.]/g, "");
  return parseFloat(numericString) || 0;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // --- STATE ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Track if component has mounted on the client to avoid Next.js hydration errors
  // with browser APIs like localStorage.
  const [isMounted, setIsMounted] = useState(false);

  // --- EFFECTS ---

  // 1. Initial Load Effect:
  // Runs once when the application loads on the client.
  // Grabs the persisting cart data from localStorage so users don't lose items on refresh.
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("tgipay_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from local storage", error);
      }
    }
  }, []);

  // 2. Auto-Save Effect:
  // Runs every time the `cart` state changes.
  // Updates localStorage to keep our persistent storage in sync with React state.
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("tgipay_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  // --- CART ACTIONS ---

  /**
   * Adds a new item to the cart or increases its quantity if it already exists.
   * We omit 'quantity' and 'price' from the parameter because we set the quantity to 1
   * and parse the price string automatically.
   */
  const addToCart = (item: Omit<CartItem, "quantity" | "price">) => {
    setCart((prev) => {
      // Check if product is already in the cart
      const existingItem = prev.find((i) => i.id === item.id);

      // If it exists, just bump the quantity by 1
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      // If it doesn't exist, append it and parse the numeric price for calculations
      return [
        ...prev,
        { ...item, quantity: 1, price: parsePrice(item.priceStr) },
      ];
    });

    // Automatically slide the cart open so the user sees their action was successful
    setIsCartOpen(true);
  };

  /**
   * Removes an item from the cart entirely using its ID.
   */
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  /**
   * Updates the exact quantity of a cart item (used by the + and - buttons).
   * Prevents quantity from dropping below 1.
   */
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent 0 or negative quantities
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQuantity } : i)),
    );
  };

  // --- DERIVED STATE ---

  // Calculate the total number of items (taking quantity multiplier into account)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the subtotal price (quantity * parsed numeric price)
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/**
 * Custom hook to allow easy consumption of the CartContext in any component.
 * Throws a helpful error if used outside of the CartProvider.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
