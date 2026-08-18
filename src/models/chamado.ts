import type { Categoria } from "../types/categoria";
import type { Prioridade } from "../types/prioridade";
import type { StatusChamado } from "../types/status-chamado";

export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  solicitante: string;
  setor: string;
  categoria: Categoria;
  prioridade: Prioridade;
  status: StatusChamado;
  dataAbertura: string;
}
