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