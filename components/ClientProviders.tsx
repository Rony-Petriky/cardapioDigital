"use client";

import { CartProvider } from "@/components/cart/CartContext";
import CartUI from "@/components/cart/CartUI";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartUI />
    </CartProvider>
  );
}
