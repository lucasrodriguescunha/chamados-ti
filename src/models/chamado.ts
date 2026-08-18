import type { Categoria } from "../types/categoria.js";
import type { Prioridade } from "../types/prioridade.js";
import type { StatusChamado } from "../types/status-chamado.js";

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
