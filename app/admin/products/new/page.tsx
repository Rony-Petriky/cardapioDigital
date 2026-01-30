"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { Product } from "@/types/Product";

export default function NewProductPage() {
  const router = useRouter();

  const handleSubmit = (productData: Omit<Product, "id">) => {
    // Em produção, isso faria uma chamada à API
    console.log("Criando produto:", productData);
    // Simular sucesso
    alert("Produto criado com sucesso!");
    router.push("/admin/products");
  };

  const handleCancel = () => {
    router.push("/admin/products");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Novo Produto</h1>
        <p className="text-gray-600 mt-1">
          Adicione um novo produto ao seu catálogo
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <ProductForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
}

