import { NextResponse } from "next/server";

interface CartItemPayload {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartOrderPayload {
  createdAt: string;
  totalItems: number;
  totalPrice: number;
  items: CartItemPayload[];
}

export async function POST(request: Request) {
  const data = (await request.json()) as CartOrderPayload;

  console.log("Pedido recebido:", data);

  return NextResponse.json({
    status: "ok",
    recebido: data,
  });
}
