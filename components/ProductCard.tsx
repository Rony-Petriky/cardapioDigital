"use client";

import Image from "next/image";
import { Product } from "@/types/Product";
import { useCart } from "@/components/cart/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-lg object-cover"
      />
      <h3 className="font-bold text-lg mt-4">{product.name}</h3>
      <p className="text-blue-600 font-semibold text-xl">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
