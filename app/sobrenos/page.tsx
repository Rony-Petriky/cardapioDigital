import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts, getCliente } from "@/lib/getProducts";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductsByCategory from "@/components/ProductsByCategory";
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation';

export default async function sobrePage() {
  const bestSellers = await getProducts({destaque: true});
  const featuredProducts = await getProducts({maisVendidos: true});
  const CategoryProducts_ = await getProducts();
  const clientes = await getCliente();
  const cliente = clientes[0];
  const navbarobj = {
    nomeLoja: cliente.nomeLoja,
    logo: cliente.logoLoja,
  };
 
  const CategoryProducts = CategoryProducts_;
  const mensagem = `Olá, gostaria de saber mais sobre os produtos da loja.`
  const falarConoscoLink = () => {
    redirect(`https://wa.me/${cliente.telefone}?text=${mensagem}`)
  }
  console.log(`https://wa.me/${cliente.telefone}?text=${mensagem}`);
  return (
    <>
      <Navbar dadosNav={navbarobj} />
    <main className="min-h-screen bg-green-500 flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl rounded-2xl shadow-xl p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
          Sobre Nós
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{cliente.sobreLoja.titulo}</h1>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          {cliente.sobreLoja.texto}
       
        </p>

        <div className="mt-8 text-center">
          <Link href={`https://wa.me/${cliente.telefone}?text=${mensagem}`}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition">
            Fale Conosco
          </Link>
        </div>

      </div>
    </main>

    </>)}