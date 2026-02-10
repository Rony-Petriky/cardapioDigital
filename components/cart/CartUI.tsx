"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import OrderModal, {OrderData} from "@/components/modelCliente"; 
import { api } from "@/lib/api";
import { useRouter } from 'next/navigation';



export default function CartUI() {
  const pathname = usePathname();
  const shouldShow = pathname?.startsWith("/catalog");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { 
    items, 
    model,
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const [open, setOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (model) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [model]);

  if (!shouldShow) return null;

  const handleClose = () => {
    setIsModalOpen(true);
  };

  const handleCheckout = async (data: OrderData) => {
    if (items.length === 0 || isSubmitting) return;
    setIsSubmitting(true);
    setSubmitMessage(null);
    

    const payload = {
      cliente:data,
      createdAt: new Date().toISOString(),
      totalItems,
      totalPrice,
      items: items.map((item) => ({
        id: item.id,
        idproduct: item.product?.id,
        name: item.product.name,
        price: item.totalPrice || 0,
        quantity: item.quantity,
        observation: item.observation,
        selectedType: item.selectedType?.name,
        additionals: item.selectedAdditionals?.map((a) => ({name: a.name, price: a.price})) || [],
      })),
    };
    console.log("Payload do pedido:", payload);
    try {
      const response = await api.post("/api/cliente", payload)
      console.log("Resposta da API:", response.data.recebido);
      
      if (!response.status || response.status >= 400) {
        throw new Error("Falha ao enviar pedido");
      }
      setIsModalOpen(false)
      clearCart();
      setSubmitMessage("Pedido enviado com sucesso!");
      setOpen(false);
      router.refresh();
      router.push(response.data.recebido);
      
    } catch (err) {
      setSubmitMessage("Não foi possível enviar o pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
    
  };

  // Função auxiliar para formatar preço com segurança
  const formatPrice = (price: number | undefined): string => {
    if (price === undefined || price === null) return "0.00";
    return price.toFixed(2);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 transition-colors"
        aria-label="Abrir carrinho"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13M7 13H5.4M10 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </button>

      {submitMessage && (
        <div className="fixed bottom-24 right-6 z-40 bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-2 text-sm text-gray-700">
          {submitMessage}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h3 className="text-xl font-bold text-gray-900">Carrinho</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                  Seu carrinho está vazio.
                </div>
              )}

              {items.map((item) => {
                // Calcular preço dos adicionais
                const additionalPrice = item.selectedAdditionals?.reduce((sum, a) => sum + (a.price || 0), 0) || 0;
                
                return (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white">
                      {item.product?.image && (
                        <Image 
                          src={item.product.image} 
                          alt={item.product?.name || "Produto"} 
                          fill 
                          className="object-cover" 
                          sizes="64px"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {item.product?.name || "Produto sem nome"}
                      </div>
                      
                      {item.selectedType && (
                        <div className="text-sm text-gray-600">
                          {item.selectedType.name}
                        </div>
                      )}
                      
                      {item.selectedAdditionals && item.selectedAdditionals.length > 0 && (
                        <div className="text-sm text-gray-600">
                          <div>Adicionais:</div>
                          <div className="text-xs">
                            {item.selectedAdditionals.map(a => 
                              `${a.name} (+R$ ${formatPrice(a.price)})`
                            ).join(', ')}
                          </div>
                        </div>
                      )}
                      
                      {item.observation && (
                        <div className="text-xs text-gray-500 mt-1">
                          Obs: {item.observation}
                        </div>
                      )}
                      
                      <div className="text-sm text-gray-700 mt-1">
                         R$ {formatPrice(item.totalPrice)}
                      </div>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm hover:text-red-600"
                    >
                      Remover
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="border-t px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold text-gray-900">
                <span>Total ({totalItems} {totalItems === 1 ? 'item' : 'itens'})</span>
                <span>R$ {formatPrice(totalPrice)}</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={clearCart}
                  className="flex-1 rounded-full border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                  disabled={items.length === 0}
                >
                  Limpar
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={items.length === 0 || isSubmitting}
                  className="flex-1 rounded-full bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Finalizar Pedido"}
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
                {/* Modal */}
                <OrderModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onSubmit={handleCheckout}
                  valorEntrega={3}
                />
    </>
  );
}
