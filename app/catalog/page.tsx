import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts, getCliente } from "@/lib/getProducts";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductsByCategory from "@/components/ProductsByCategory";
import Image from "next/image";
import Link from "next/link";

export default async function CatalogPage() {
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
      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {cliente.nomeLoja}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-50 leading-relaxed">
                  {cliente.descricaoLoja}
                </p>
                <Link 
                  href="#produtos"
                  className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Produtos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  {cliente.logoLoja ? (
                    <Image
                      src={cliente.logoLoja}
                      alt="Logo da Loja"
                      fill
                      className="object-cover"
                    />
                  ) : (
                  <svg className="w-48 h-48 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600 text-lg">
                    Segunda a Sexta: <span className="font-semibold text-green-600">08:00 - 18:00</span>
                  </p>
                  <p className="text-gray-600 text-lg">
                    Sábado: <span className="font-semibold text-green-600">09:00 - 14:00</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-1 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Produtos em Destaque</h2>
              <div className="w-24 h-1 bg-green-500 rounded-full"></div>
            </div>
            <BestSellersCarousel products={bestSellers} />
          </div>
        </section>

        <section id="produtos" className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mais Vendidos</h2>
              <div className="w-24 h-1 bg-green-500 rounded-full"></div>
            </div>
            <FeaturedProducts products={featuredProducts} />
          </div>
        </section>

        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mais Produtos</h2>
              <div className="w-24 h-1 bg-green-500 rounded-full"></div>
            </div>
            <ProductsByCategory botaoMiasCategoria={true} products={CategoryProducts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}