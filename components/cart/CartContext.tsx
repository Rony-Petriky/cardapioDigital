"use client";

import { createContext, useContext, useState, useCallback } from 'react';
import type { Product, CartItem, Tipos, Additional } from "@/types/Product";

interface ClientProdutsprops {
  product: Product;
  valorEntrega: number;
  selectedAdditionals?: Additional[];
  preçoFinal: number
  observação: string;
  tipos: string | undefined;

  
}
interface CartContextType {
  items: CartItem[];
  model: boolean;
  addItem: (clientProdutsprops: ClientProdutsprops) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  openModal: () => void;
  closeModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface AddItemParams {
  product: Product;
  selectedType?: Tipos;
  selectedAdditionals?: Additional[];
  observation?: string;
  preçoFinal: number;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Gera um ID único baseado no produto + tipo + adicionais
  const generateItemId = (params: AddItemParams): string => {
    const { product, selectedType, selectedAdditionals } = params;
    
    // ID do produto
    let id = `prod-${product.id}`;
    
    // Adiciona tipo selecionado
    if (selectedType) {
      id += `-type-${selectedType.name}`;
    }
    
    // Adiciona adicionais (ordenados para garantir ID único)
    if (selectedAdditionals && selectedAdditionals.length > 0) {
      const additionalIds = selectedAdditionals
        .map(a => a.id)
        .sort()
        .join('-');
      id += `-add-${additionalIds}`;
    }
    
    return id;
  };

  // Calcula preço unitário
  const calculateUnitPrice = (params: AddItemParams): number => {
    const {selectedType, selectedAdditionals, preçoFinal } = params;
    let price = preçoFinal;
    
    // Adiciona preço do tipo selecionado
    
    // Adiciona preço dos adicionais selecionados
    if (selectedAdditionals && selectedAdditionals.length > 0) {
      selectedAdditionals.forEach(additional => {
        price += additional.price;
      });
    }
    
    return price;
  };

  // Adiciona item ao carrinho
  const addItem = useCallback((
clientProdutsprops: ClientProdutsprops
  ) => {
    setItems((prev) => {
      const params: AddItemParams = { 
        product: clientProdutsprops.product,
        selectedType: clientProdutsprops.tipos ? clientProdutsprops.product.tipos?.find(t => t.name === clientProdutsprops.tipos) : undefined,
        selectedAdditionals: clientProdutsprops.selectedAdditionals,
        observation: clientProdutsprops.observação,
        preçoFinal: clientProdutsprops.preçoFinal
      };
      const itemId = generateItemId(params);
      const existing = prev.find((item) => item.id === itemId);
      const unitPrice = calculateUnitPrice(params);

      if (existing) {
        // Atualiza quantidade se já existe
        return prev.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.unitPrice,
              }
            : item
        );
      }

      // Adiciona novo item
      const newItem: CartItem = {
        id: itemId,
        product: clientProdutsprops.product,
        selectedType: clientProdutsprops.tipos ? clientProdutsprops.product.tipos?.find(t => t.name === clientProdutsprops.tipos) : undefined,
        selectedAdditionals: clientProdutsprops.selectedAdditionals || [],
        observation: clientProdutsprops.observação,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice,
      };

      return [...prev, newItem];
    });
  }, []);

  // Remove item do carrinho
  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // Atualiza quantidade
  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity,
              totalPrice: quantity * item.unitPrice,
            }
          : item
      )
    );
  }, [removeItem]);

  // Limpa carrinho
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Calcula preço total
  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  }, [items]);

  // Calcula total de itens
  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  //abrir modal
  const [model, setModel] = useState(false);
  const openModal = useCallback(() => {
    setModel(true);
  }, [model]);

  const closeModal = useCallback(() => {
    setModel(false);
  }, [model]);

  return (
    <CartContext.Provider
      value={{
        items,
        model,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o carrinho
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}