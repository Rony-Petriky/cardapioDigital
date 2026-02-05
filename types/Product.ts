import OrderModal, {OrderData} from "@/components/modelCliente"; 
export interface Additional {
  id: number;
  name: string;
  price: number;
  image?: string;
  icon?: string;
}
export interface Tipos {
  id: number;
  name: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  additionals?: Additional[];
  destaque: boolean;
  maisVendidos: boolean;
  tipos?: Tipos[];
}

// Adicione esta interface para o item do carrinho
export interface CartItem {
  id: string; // ID único para cada combinação
  product: Product; // O produto base
  selectedType?: Tipos; // Tipo escolhido (se houver)
  selectedAdditionals?: Additional[]; // Adicionais selecionados
  observation?: string; // Observações do cliente
  quantity: number; // Quantidade
  unitPrice: number; // Preço unitário (calculado)
  totalPrice: number; // Preço total (unitPrice * quantity)
}
