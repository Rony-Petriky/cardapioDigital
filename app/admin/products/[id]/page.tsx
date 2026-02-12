"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductForm from "@/components/admin/ProductForm";
import { Product } from "@/types/Product";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Em produção, isso faria uma chamada à API
    const productId = params.id as string;
    
    // Simular carregamento
    setTimeout(() => {
      const mockProduct: Product = {
        id: parseInt(productId),
        name: "Produto Exemplo",
        description: "Descrição do produto exemplo",
        price: 99.90,
        category: "eletrônicos",
        image: "/images/headphone.jpeg",
        tags: ["novo", "promoção"],
        destaque: true,
        maisVendidos: false,
      };
      setProduct(mockProduct);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleSubmit = (productData: Omit<Product, "id">) => {
    // Em produção, isso faria uma chamada à API
    console.log("Atualizando produto:", productData);
    // Simular sucesso
    alert("Produto atualizado com sucesso!");
    router.push("/admin/products");
  };

  const handleCancel = () => {
    router.push("/admin/products");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Produto não encontrado</p>
        <button
          onClick={() => router.push("/admin/products")}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Voltar para Produtos
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Editar Produto</h1>
        <p className="text-gray-600 mt-1">
          Atualize as informações do produto
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <ProductForm
          product={product}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

