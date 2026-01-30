import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts, getCliente } from "@/lib/getProducts";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductsByCategory from "@/components/ProductsByCategory";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <>
      <Navbar dadosNav={navbarobj} />
    <main className="min-h-screen bg-green-500 flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl rounded-2xl shadow-xl p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
          Sobre Nós
        </h1>

        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Somos uma equipe apaixonada por tecnologia, inovação e soluções
          digitais. Nosso objetivo é criar aplicações modernas, eficientes
          e com excelente experiência para o usuário.
        </p>

        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Utilizamos tecnologias como <strong>Next.js</strong>,{" "}
          <strong>Tailwind CSS</strong> e outras ferramentas modernas para
          garantir performance, escalabilidade e design profissional.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Acreditamos que a tecnologia deve ser simples, acessível e resolver
          problemas reais. Por isso, cada projeto é desenvolvido com cuidado
          e atenção aos detalhes.
        </p>

        <div className="mt-8 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition">
            Fale Conosco
          </button>
        </div>

      </div>
    </main>

    </>)}