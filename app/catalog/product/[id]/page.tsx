
import { getCliente, getProducts } from "@/lib/getProducts";
import { Productcomponente } from "../componentes/Productcomponente"; 
import type { Additional, Product } from "@/types/Product";
import Navbar from "@/components/Navbar";

type Props = {
  params: {
    id: string;
  };
};
export default async function ProductPage({ params }: Props) {
  const products = await getProducts()


  const {id} = await params
  const ids = Number(id)
  const product = products.find(p => p.id === ids) as Product;
  
  const clientes = await getCliente();
  const cliente = clientes[0];
  const navbarobj = {
    nomeLoja: cliente.nomeLoja,
    logo: cliente.logoLoja,
  };
  
  return(
    <>
    <Navbar dadosNav={navbarobj} />
    <Productcomponente valorEntrega={cliente.valorEntrega || 0} product={product}/>
    </>
  );
}
