export interface SobreLoja {
  titulo: string;
  texto: string;
}
export interface Cliente {
  id: number;
  nome: string;
  endereco?: string;
  telefone: string;
  nomeLoja: string;
  descricaoLoja: string;
  horarioFuncionamento: string; 
  sobreLoja: SobreLoja;
  valorEntrega?: number;
 logoLoja?: string; 
}