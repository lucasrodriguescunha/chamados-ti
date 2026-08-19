import type { Chamado } from "./models/chamado.js";

const CHAVE: string = "chamados-ti";

export function salvarChamados(chamados: Chamado[]): void {
  localStorage.setItem(CHAVE, JSON.stringify(chamados));
}

export function carregarChamados(): Chamado[] {
  const dados: string | null = localStorage.getItem(CHAVE);

  if (!dados) {
    return [];
  }

  try {
    const chamados = JSON.parse(dados) as Chamado[];

    if (!Array.isArray(chamados)) {
      return [];
    }

    return chamados;
  } catch {
    console.error("Não foi possível ler os chamados salvos.");
    return [];
  }
}
