"use client";

import { useState } from "react";
import Image from "next/image";
import OrderModal, {OrderData} from "@/components/modelCliente"; 
import { AdditionalList } from "./componentes/AdditionalList"; 
import type { Additional, Product } from "@/types/Product";
import { api } from "@/lib/api";
import { redirect  } from "next/navigation";

interface ProductProps{
  product: Product;
  valorEntrega:number;
}
interface ClientProdutsprops{
  clientedata:OrderData,
  nome:string,
  preçoFinal:number
  observação:string,
}
export function Productcomponente({product,valorEntrega }:ProductProps) {
  const [qty, setQty] = useState<Record<number, number>>({});
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  const [clientedata, setClientedata] = useState<ClientProdutsprops>({
    clientedata: {nome: "",
    telefone: "",
    endereco: {
      rua: "",
      bairro: "",
      numero: "",
      complemento: "",
    },
    entrega: false,
    formaPagamento: "pix"},
    nome:"",
    preçoFinal:0,
    observação:""
});
  const add = (id: number) => {
    setQty((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const sub = (id: number) => {
    setQty((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  const filtered = product.additionals?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  
    const extrasTotal = product.additionals?.reduce((sum, item) => {
        const count = qty[item.id] || 0;
        return sum + count * item.price;
    }, 0) || 0;

  
    const finalTotal = product.price + extrasTotal;

  /* ---------------------------------------------------------
     LISTA DE ADICIONAIS (AGORA DENTRO DO COMPONENTE)
  ---------------------------------------------------------- */
    const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleOrderSubmit(data: OrderData) {
  const updated = {
    ...clientedata,
    clientedata: data,
    nome: product.name,
    preçoFinal: data.entrega ? finalTotal + valorEntrega: finalTotal,
    observação: note
  };

  setClientedata(updated);

  const response = await api.post("/api/cliente", updated);
  console.log("Resposta:", response.data.recebido);
    // Aqui você pode enviar os dados para sua API
    setIsModalOpen(false);
    redirect(response.data.recebido)
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
          {/* IMAGEM */}
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-64 object-cover"
          />

          {/* TÍTULO */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

            <span className="text-3xl font-bold text-green-600 block mt-4">
              R$ {finalTotal.toFixed(2)}
            </span>
          </div>



          {/* LISTA DE ADICIONAIS */}
          {/* BUSCA */}
          {filtered && (
          <>
          <div className="px-6 pb-4">
            <input
              placeholder="Buscar complementos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-100 rounded-2xl p-3 text-sm focus:ring-2 focus:ring-green-500"
            />
          </div>
          <AdditionalList items={filtered} qty={qty} add={add} sub={sub} />
          </>
          ) }

          {/* OBSERVAÇÃO */}
          <div className="px-6 py-3 bg-white">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observação
            </label>
            <textarea
              placeholder="Observações (ex: tirar cebola, ponto da carne...)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-gray-100 rounded-2xl p-3 text-sm resize-none border-0 outline-none focus:border-2 focus:border-green-500 focus:ring-0"
              rows={2}
            />
          </div>

          {/* BOTÃO CARRINHO */}
          <div className="px-6 py-4 bg-white border-t">
            <div className="text-lg font-semibold text-gray-900 mb-3">
              Total: R$ {finalTotal.toFixed(2)}
            </div>

            <button onClick={() => setIsModalOpen(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl text-lg">
              Finalizar Pedido
            </button>
          </div>

        </div>
          {/* Modal */}
          <OrderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleOrderSubmit}
            valorEntrega={valorEntrega}
          />
      </main>
    </>
  );
}
