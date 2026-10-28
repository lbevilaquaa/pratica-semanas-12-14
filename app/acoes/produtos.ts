"use server";

import { revalidatePath } from "next/cache";

export async function revalidarProdutos() {
  revalidatePath("/produtos");
}

export async function cadastrarProduto(formData: FormData) {
  const nome = String(formData.get("nome") ?? "");
  const preco = Number(formData.get("preco"));

  console.log("Nome:", nome);
  console.log("Preço:", preco);

  revalidatePath("/produtos");
}