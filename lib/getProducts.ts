import { products } from "@/data/products";
import { Product } from "@/types/Product";
import { Cliente } from "@/types/UserCatolog";
import { userCatalog } from "@/data/UserCatalog";

export async function getProducts(where?: Partial<Product>): Promise<Product[]> {
  const  productsFiltered = where
    ? products.filter((product) =>
        Object.entries(where).every(([key, value]) => product[key as keyof typeof product] === value)
      )
    : products;
  
  return productsFiltered;
}
export async function getCliente(where?: Partial<Cliente>): Promise<Cliente[]> {
  const  userFiltered = where
    ? userCatalog.filter((user) =>
        Object.entries(where).every(([key, value]) => user[key as keyof typeof user] === value)
      )
    : userCatalog;
  
  return userFiltered;
}