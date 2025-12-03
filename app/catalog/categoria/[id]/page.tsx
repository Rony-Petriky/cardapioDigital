import Navbar from "@/components/Navbar";
import ProductsByCategory from "@/components/ProductsByCategory";
import { getCliente, getProducts } from "@/lib/getProducts";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoriaPage({ params }: PageProps){
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const products = await getProducts({ category: id });
      const clientes = await getCliente();
      const cliente = clientes[0];
      const navbarobj = {
        nomeLoja: cliente.nomeLoja,
        logo: cliente.logoLoja,
      };

    return (
        <main>
        <Navbar dadosNav={navbarobj} />
        <ProductsByCategory products={products} />
        </main>
    );
};