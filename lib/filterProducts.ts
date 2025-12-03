import { Product } from "@/types/Product";

export function filterProducts(products: Product[], search: string) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}