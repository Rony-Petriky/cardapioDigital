"use client";

import { Product } from "@/types/Product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Rolagem } from "./divrolagens";
import { useCart } from "@/components/cart/CartContext";


interface Props {
  products: Product[];
}

export default function FeaturedProducts({ products }: Props) {
  const [current, setCurrent] = useState(0);
  const { addItem } = useCart();


  const nextSlide = () => {
  setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };


  const prevSlide = () => {
  setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };
  
  const router = useRouter();
  const goToProduct = (id: number) => {
    router.push(`/catalog/product/${id}`);
  };
  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Nenhum produto em destaque no momento.</p>
      </div>
    );
  }

  return (
    <Rolagem>
      
      {products.map((product) => (
        <div
          onClick={() => goToProduct(product.id)}
          key={product.id}
          className="flex-1 bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-h-xs max-w-xs md:max-w-xl"
        >
          <div className="relative  h-72 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%22c55e' width='400' height='300'/%3E%3Ctext fill='white' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EProduto%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Mais Vendido
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{product.description}</p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-2xl font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => addItem(product)}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Adicionar
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
   
      </Rolagem>
  );
}

