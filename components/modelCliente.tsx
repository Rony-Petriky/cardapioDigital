"use client";

import { useState } from "react";


interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: OrderData) => void;
  valorEntrega:number;
}

export interface OrderData {
  nome: string;
  telefone: string;
  endereco: {
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
  };
  formaPagamento: "cartao" | "pix";
  entrega: boolean;
}

export default function OrderModal({ isOpen, onClose, onSubmit, valorEntrega }: OrderModalProps) {
  const [formData, setFormData] = useState<OrderData>({
    nome: "",
    telefone: "",
    endereco: {
      bairro: "",
      rua: "",
      numero: "",
      complemento: ""
    },
    formaPagamento: "pix",
    entrega: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.startsWith("endereco.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [field]: value
        }
      }));
    } else if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500/10 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          {/* Header */}
          <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Finalizar Pedido</h3>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-white hover:bg-green-600 transition-colors"
              >
                X
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white px-6 py-6">
            <div className="space-y-6">
              {/* Informações Pessoais */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="endereco.rua" className="block text-sm font-medium text-gray-700 mb-1">
                      Rua *
                    </label>
                    <input
                      type="text"
                      id="endereco.rua"
                      name="endereco.rua"
                      required
                      value={formData.endereco.rua}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Nome da rua"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="endereco.bairro" className="block text-sm font-medium text-gray-700 mb-1">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      id="endereco.bairro"
                      name="endereco.bairro"
                      required
                      value={formData.endereco.bairro}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Nome do bairro"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="endereco.numero" className="block text-sm font-medium text-gray-700 mb-1">
                      Número *
                    </label>
                    <input
                      type="text"
                      id="endereco.numero"
                      name="endereco.numero"
                      required
                      value={formData.endereco.numero}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Nº"
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <label htmlFor="endereco.complemento" className="block text-sm font-medium text-gray-700 mb-1">
                      Complemento
                    </label>
                    <input
                      type="text"
                      id="endereco.complemento"
                      name="endereco.complemento"
                      value={formData.endereco.complemento}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Apartamento, bloco, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Entrega */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-gray-900">Entrega</h5>
                    <p className="text-sm text-gray-600">Deseja receber o pedido em casa?</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="entrega"
                      checked={formData.entrega}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                
                {formData.entrega && valorEntrega > 0 && (
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p className="text-sm text-yellow-700">
                        Será adicionado <span className="font-bold">R$ {valorEntrega.toFixed(2)}</span> para taxa de entrega
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Forma de Pagamento */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Forma de Pagamento</h4>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`relative flex cursor-pointer rounded-xl border-2 p-4 focus:outline-none ${
                    formData.formaPagamento === "pix" 
                      ? "border-green-500 bg-green-50" 
                      : "border-gray-200"
                  }`}>
                    <input
                      type="radio"
                      name="formaPagamento"
                      value="pix"
                      checked={formData.formaPagamento === "pix"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">PIX</div>
                          <div className="text-gray-500">Pagamento instantâneo</div>
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {formData.formaPagamento === "pix" && (
                          <div className="h-2 w-2 rounded-full bg-green-600" />
                        )}
                      </div>
                    </div>
                  </label>

                  <label className={`relative flex cursor-pointer rounded-xl border-2 p-4 focus:outline-none ${
                    formData.formaPagamento === "cartao" 
                      ? "border-green-500 bg-green-50" 
                      : "border-gray-200"
                  }`}>
                    <input
                      type="radio"
                      name="formaPagamento"
                      value="cartao"
                      checked={formData.formaPagamento === "cartao"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">Cartão</div>
                          <div className="text-gray-500">Crédito/Débito</div>
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {formData.formaPagamento === "cartao" && (
                          <div className="h-2 w-2 rounded-full bg-green-600" />
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Enviar Pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}