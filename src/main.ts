import { criarChamado } from "./criar-chamado.js";
import type { Chamado } from "./models/chamado";
import { Categoria } from "./types/categoria";
import { Prioridade } from "./types/prioridade";

const nomeSistema: string = "Sistema de chamados de TI";
console.log(nomeSistema);

const primeiroChamado: Chamado = {
  id: 1,
  titulo: "Computador não liga",
  descricao: "O computador do setor financeiro não está iniciando",
  solicitante: "Carlos",
  setor: "Financeiro",
  categoria: "Hardware",
  prioridade: "Alta",
  status: "Aberto",
  dataAbertura: "10/08/2026",
};

console.log("Primeiro chamado criado", primeiroChamado);

let proximoId: number = primeiroChamado.id + 1;

const chamados: Chamado[] = [];

chamados.push(primeiroChamado);

console.log("Primeiro chamado adicionado", chamados);

const formulario = document.querySelector("#form-chamado") as HTMLFormElement;
const inputTitulo = document.querySelector("#titulo") as HTMLInputElement;
const inputSolicitante = document.querySelector(
  "#solicitante",
) as HTMLInputElement;
const inputSetor = document.querySelector("#setor") as HTMLInputElement;
const selectCategoria = document.querySelector(
  "#categoria",
) as HTMLSelectElement;
const selectPrioridade = document.querySelector(
  "#prioridade",
) as HTMLSelectElement;
const textareaDescricao = document.querySelector(
  "#descricao",
) as HTMLTextAreaElement;
const listaChamados = document.querySelector(
  "#lista-chamados",
) as HTMLDivElement;
const filtroStatus = document.querySelector(
  "#filtro-status",
) as HTMLSelectElement;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo: string = inputTitulo.value;
  const solicitante: string = inputSolicitante.value;
  const setor: string = inputSetor.value;
  const descricao: string = textareaDescricao.value;
  const categoria: Categoria = selectCategoria.value as Categoria;
  const prioridade: Prioridade = selectPrioridade.value as Prioridade;
  const id: number = proximoId++;

  // console.log(titulo, solicitante, setor, descricao, categoria, prioridade);
  // console.log(typeof(titulo));
  // console.log(typeof(solicitante));
  // console.log(typeof(setor));
  // console.log(typeof(descricao));
  // console.log(typeof(categoria));
  // console.log(typeof(prioridade));

  const novoChamado: Chamado = criarChamado(
    id,
    titulo,
    descricao,
    solicitante,
    setor,
    categoria,
    prioridade,
  );

  console.log("Formulário enviado!", novoChamado);

  chamados.push(novoChamado);

  console.log(chamados);

  formulario.reset();
});
