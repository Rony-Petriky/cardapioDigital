"use client";

import { useState, useEffect,useRef } from "react";
import Image from "next/image";
import OrderModal, {OrderData} from "@/components/modelCliente"; 
import { AdditionalList } from "./componentes/AdditionalList"; 
import type { Additional, Product,} from "@/types/Product";
import { api } from "@/lib/api";
import { redirect  } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";
import { products } from "@/data/products";

interface ClientProdutsprops {
  product: Product;
  valorEntrega: number;
  selectedAdditionals?: Additional[];
  preçoFinal: number   ;
  observação: string;
  tipos: string | undefined;
}
export function Productcomponente({product,valorEntrega }:ClientProdutsprops) {
  const [qty, setQty] = useState<Record<number, number>>({});
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState<number | null>(null);
  const { addItem, openModal } = useCart();

  const [clientedata, setClientedata] = useState<ClientProdutsprops>({
    product: product,
    valorEntrega: valorEntrega,
    preçoFinal: 0,
    observação: "",
    tipos: undefined,
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

const filteredGroups = product.additionals?.map(group => ({
  ...group,
  items: group.items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
}));
  const tipos = product.tipos || [];
  const isButtonEnabled = tipos.length > 0 ? tipoSelecionado !== null : true;

    const extrasTotal =
      product.additionals?.reduce((groupSum, group) => {
        return (
          groupSum +
          group.items.reduce((itemSum, item) => {
            const count = qty[item.id] || 0;
            return itemSum + count * item.price;
          }, 0)
        );
      }, 0) || 0;

      const selectedAdditionals =
  product.additionals?.flatMap(group =>
    group.items
      .filter(item => qty[item.id] && qty[item.id] > 0)
      .map(item => ({
        ...item,
        quantity: qty[item.id],
        groupTitle: group.title,
        groupType: group.type
      }))
  ) || [];

    const tipoprice = tipos.find(t => t.id === tipoSelecionado)?.price || 0;
    const finalTotalaux = tipoprice > 0 ?  tipoprice : product.price;
    const finalTotal = finalTotalaux + extrasTotal;
    
  /* ---------------------------------------------------------
     LISTA DE ADICIONAIS (AGORA DENTRO DO COMPONENTE)
  ---------------------------------------------------------- */
    const [isModalOpen, setIsModalOpen] = useState(false);

const updated = {
  ...clientedata,
  preçoFinal: finalTotalaux,
  observação: note,
  tipos: tipos.find(t => t.id === tipoSelecionado)?.name || undefined,
  selectedAdditionals: selectedAdditionals
};

    console.log("selectedAdditionals:", selectedAdditionals);
    useEffect(() => { 
    setClientedata(updated);}, [finalTotal, note, tipoSelecionado, qty]);
    
  const handleOrderSubmit = async () => {

  
  addItem(clientedata);
  openModal()
  console.log("Dados do pedido adicionados ao carrinho:", clientedata);
}

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

              {/* tipos de produtos */}
              <div className="px-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos</h4>
              <div className="flex px=4">
              <div className="grid grid-cols-2 gap-4">
            {tipos && tipos.map((item) => (

                  <label key={item.id}
                    className={`relative flex cursor-pointer rounded-xl border-2 p-4 focus:outline-none ${
                      tipoSelecionado === item.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="formaPagamento"
                      value={item.name}
                      checked={tipoSelecionado === item.id}
                      onChange={() => setTipoSelecionado(item.id)}
                      className="sr-only"
                    />

                    <div className="flex w-full items-center justify-between">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-gray-500">R$ {item.price.toFixed(2)}</div>
                      </div>

                      <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {tipoSelecionado === item.id && (
                          <div className="h-2 w-2 rounded-full bg-green-600" />
                        )}
                      </div>
                    </div>
                  </label>
            ))}
                </div>
                </div>
                </div>


          {/* LISTA DE ADICIONAIS */}
          {/* BUSCA */}
          {filteredGroups && (
          <>
          <div className="px-6 pb-4">
            <input
              placeholder="Buscar complementos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-100 rounded-2xl p-3 text-sm focus:ring-2 focus:ring-green-500"
            />
          </div>
          {filteredGroups?.map(group => (
            <div key={group.title}>
              <div className="px-6 pb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {group.title}
                </h4>
                <h5 className="text-sm text-gray-500">Escolha até {group.max} itens</h5>
              </div>

              <AdditionalList
                type={group.type}
                max={group.max}
                items={group.items}
                qty={qty}
                add={add}
                sub={sub}
              />
            </div>
          ))}

          </>
          ) }

          {/* OBSERVAÇÃO */}
          <div className="px-6 py-3 pb-30 bg-white">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observação
            </label>
            <textarea
              placeholder="Observações"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-gray-100 rounded-2xl p-3 text-sm resize-none border-0 outline-none focus:border-2 focus:border-green-500 focus:ring-0"
              rows={2}
            />
          </div>

          {/* BOTÃO CARRINHO */}
            <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t shadow-lg">
              <div className="max-w-screen-lg mx-auto">
                <div className="text-lg font-semibold text-gray-900 mb-3">
                  Total: R$ {finalTotal.toFixed(2)}
                </div>
                <button 
                  disabled={!isButtonEnabled}
                  onClick={() => handleOrderSubmit()}
                  className={`w-full text-white font-bold py-4 rounded-2xl text-lg
                            ${isButtonEnabled
            ? ' bg-green-600 hover:bg-green-700 text-white cursor-pointer'
            : 'bg-gray-400 text-white cursor-not-allowed'
          }
        `}
                >
                  {isButtonEnabled ? 'Continuar' : 'Selecione um tipo '}
                </button>
              </div>
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

