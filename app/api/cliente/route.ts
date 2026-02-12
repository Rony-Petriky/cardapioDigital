import { NextResponse } from "next/server";
import OrderModal, {OrderData} from "@/components/modelCliente"; 
import { getProducts, getCliente } from "@/lib/getProducts";

interface CartItemPayload {
  id: number;
  idproduct: number | null;
  name: string;
  price: number;
  quantity: number;
  selectedType?: string;
  observation?: string;
  additionals?: {
    id: number;
    name: string;
    price: number;
  }[];
}

interface CartOrderPayload {
  cliente: OrderData;
  totalItems: number;
  totalPrice: number;
  items: CartItemPayload[];
}
const clientes = await getCliente();
const cliente = clientes[0];
// Formatando a mensagem
function formatarMensagem(pedido: CartOrderPayload) {
  // Função para formatar os itens com seus adicionais
  const formatarItemComAdicionais = (item: CartItemPayload, index: number) => {
    let itemText = `${index + 1}. ${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price).toFixed(2)}`;
    // Adicionar os adicionais se existirem
    if (item.selectedType) {
      itemText += `   \n [ Tipo: ${item.selectedType} ]`;
    }

    if (item.additionals && item.additionals.length > 0) {
      itemText += '\n  Adicionais:';
      item.additionals.forEach((additional, idx) => {
        itemText += `\n    • ${additional.name} - R$ ${(additional.price).toFixed(2)}`;
      });
    }
    console.log(`Item formatado ${index + 1}:`, itemText);
    return itemText;
  };

  // Formatar todos os itens do pedido
  const itensFormatados = pedido.items
    .map((item, index) => formatarItemComAdicionais(item, index))
    .join('\n\n');

  // Calcular o total de itens (quantidade total de produtos + adicionais)
  const calcularTotalItens = () => {
    let total = 0;
    pedido.items.forEach(item => {
      total += item.quantity; // quantidade do item principal

    });
    return total;
  };

  const totalItens = pedido.totalItems || calcularTotalItens();

  // Formatar a observação
  const observacaoFormatada = pedido.items.some(item => item.observation)
    ? pedido.items.filter(item => item.observation).map(item => item.observation).join('\n')
    : 'Nenhuma observação fornecida';

  // Montar a mensagem completa
  return `>>> NOVO PEDIDO <<<

CLIENTE: ${pedido.cliente.nome}
TELEFONE: ${pedido.cliente.telefone}

ENDEREÇO DE ENTREGA:
• Bairro: ${pedido.cliente.endereco.bairro}
• Rua: ${pedido.cliente.endereco.rua}
• Número: ${pedido.cliente.endereco.numero}
• Complemento: ${pedido.cliente.endereco.complemento || 'Não informado'}

ITENS DO PEDIDO:
${itensFormatados}

TOTAL DE ITENS: ${totalItens}
VALOR TOTAL: R$ ${(pedido.totalPrice + (cliente.valorEntrega || 0)).toFixed(2)}
FORMA DE PAGAMENTO: ${pedido.cliente.formaPagamento.toUpperCase()}
ENTREGA: ${pedido.cliente.entrega ? 'SIM' : 'NÃO'}

OBSERVAÇÕES:
${observacaoFormatada}`;
}


// Gerar o link do WhatsApp
function gerarLinkWhatsApp(pedido: CartOrderPayload) {
  console.log("Gerando link do WhatsApp para o pedido:", pedido);
  const mensagem = formatarMensagem(pedido);
  const mensagemCodificada = encodeURIComponent(mensagem);
  const numeroWhatsApp = cliente.telefone; // Substitua pelo número da empresa
  
  return `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
}

// Gerar e usar o link

// Para usar em HTML (se estiver em uma página web):
// window.open(linkWhatsApp, '_blank');

export async function POST(request: Request) {
  const data = await request.json();
  const linkWhatsApp = gerarLinkWhatsApp(data);
  console.log('Link do WhatsApp:', linkWhatsApp);
  

  return NextResponse.json({
    status: "ok",
    recebido: linkWhatsApp,
  });
}