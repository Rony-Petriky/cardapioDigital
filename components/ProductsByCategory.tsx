"use client";

import { Product } from "@/types/Product";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface Props {
  products: Product[];
}
interface ProductsByCategoryProps {
  products: Product[];
  botaoMiasCategoria?: boolean;
}

export default function ProductsByCategory({ products,  botaoMiasCategoria}: ProductsByCategoryProps) {
    const router = useRouter();

  const goToProduct = (id: number) => {
    router.push(`/catalog/product/${id}`);
  };
  const handlecategoryClick = (category: string) => {
    router.push(`/catalog/categoria/${category}`);
  }
  // Agrupar produtos por categoria
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const categories = Object.keys(productsByCategory);
  if (botaoMiasCategoria){

  };
  if (categories.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Nenhuma categoria disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{category}</h3>
            <div className="w-20 h-1 bg-green-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
          {(botaoMiasCategoria ? productsByCategory[category].slice(0, 3):productsByCategory[category]).map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-68 ">
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
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
                    <button onClick={()=> goToProduct(product.id)} 
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-xs transition-colors duration-300">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {botaoMiasCategoria && (
          <div className="pt-2 flex justify-end">
                <button onClick={() => handlecategoryClick(category)}
                      className="felx justify-end bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duração-300 shadow-lg hover:shadow-xl cursor-pointer">
                      Ver Mais {`>>`} 
              </button>
          </div>)}
        </div>
      ))}
    </div>
  );
}

