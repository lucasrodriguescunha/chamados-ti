import type { Chamado } from "./models/chamado";
import type { Categoria } from "./types/categoria";
import type { Prioridade } from "./types/prioridade";
import type { StatusChamado } from "./types/status-chamado";

export function criarChamado(
  id: number,
  titulo: string,
  descricao: string,
  solicitante: string,
  setor: string,
  categoria: Categoria,
  prioridade: Prioridade,
): Chamado {
  const status: StatusChamado = "Aberto";
  const dataAbertura: string = new Date().toLocaleDateString("pt-BR");

  const novoChamado: Chamado = {
    id,
    titulo,
    descricao,
    solicitante,
    setor,
    categoria,
    prioridade,
    status,
    dataAbertura,
  };

  return novoChamado;
}
