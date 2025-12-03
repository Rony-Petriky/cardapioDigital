import { NextResponse } from "next/server";
import type { Additional, Product } from "@/types/Product";
import { OrderData } from "@/components/modelCliente";
interface ClientProdutsprops{
  clientedata:OrderData,
  nome:string,
  preçoFinal:number
  observação:string,
}

// Formatando a mensagem
function formatarMensagem(pedido:ClientProdutsprops) {
  return `>>> NOVO PEDIDO <<<

CLIENTE: ${pedido.clientedata.nome}
TELEFONE: ${pedido.clientedata.telefone}

ENDEREÇO DE ENTREGA:
• Bairro: ${pedido.clientedata.endereco.bairro}
• Rua: ${pedido.clientedata.endereco.rua}
• Número: ${pedido.clientedata.endereco.numero}
• Complemento: ${pedido.clientedata.endereco.complemento}

PEDIDO: ${pedido.nome}
VALOR TOTAL: R$ ${pedido.preçoFinal},00
FORMA DE PAGAMENTO: ${pedido.clientedata.formaPagamento.toUpperCase()}
ENTREGA: ${pedido.clientedata.entrega ? 'SIM' : 'NÃO'}

OBSERVAÇÕES:
${pedido.observação}`;
}

// Gerar o link do WhatsApp
function gerarLinkWhatsApp(pedido: ClientProdutsprops) {
  const mensagem = formatarMensagem(pedido);
  const mensagemCodificada = encodeURIComponent(mensagem);
  const numeroWhatsApp = '5565996934486'; // Substitua pelo número da empresa
  
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