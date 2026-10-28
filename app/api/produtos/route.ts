
import { NextResponse } from "next/server";

const produtos = [
  { id: 1, nome: "Máquina de cortar cabelo", preco: 189.9 },
  { id: 2, nome: "Navalha profissional", preco: 49.9 },
  { id: 3, nome: "Pomada modeladora", preco: 35.9 },
  { id: 4, nome: "Shampoo para cabelo", preco: 29.9 },
  { id: 5, nome: "Tesoura de barbeiro", preco: 79.9 },
];

// GET: retorna a lista de produtos
export async function GET() {
  return NextResponse.json(produtos);
}

// POST: recebe os dados de um novo produto
export async function POST(request: Request) {
  const dados = await request.json();

  const novoProduto = {
    id: Date.now(),
    nome: dados.nome,
    preco: Number(dados.preco),
  };

  return NextResponse.json(novoProduto, { status: 201 });
}
