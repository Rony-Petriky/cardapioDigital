export interface Cliente {
  id: number;
  nome: string;
  endereco?: string;
  telefone: string;
  nomeLoja: string;
  descricaoLoja: string;
  horarioFuncionamento: string;
  valorEntrega?: number;
 logoLoja?: string; 
}