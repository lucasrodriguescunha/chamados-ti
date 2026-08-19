import { criarChamado } from "./criar-chamado.js";
import { renderizarChamados } from "./renderizar-chamados.js";
import { alterarStatus } from "./alterar-status.js";
import { carregarChamados, salvarChamados } from "./armazenamento.js";
import type { Chamado } from "./models/chamado.js";
import type { Categoria } from "./types/categoria.js";
import type { Prioridade } from "./types/prioridade.js";

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

function calcularProximoId(chamados: Chamado[]): number {
  let maiorId: number = 0;

  chamados.forEach(function (chamado) {
    if (chamado.id > maiorId) {
      maiorId = chamado.id;
    }
  });

  return maiorId + 1;
}

const chamados: Chamado[] = carregarChamados();

if (chamados.length === 0) {
  chamados.push(primeiroChamado);
  salvarChamados(chamados);
}

let proximoId: number = calcularProximoId(chamados);

console.log("Chamados carregados", chamados);

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
const inputBusca = document.querySelector("#busca") as HTMLInputElement;

function aplicarFiltros(): void {
  const termo: string = inputBusca.value.toLowerCase();
  const statusSelecionado: string = filtroStatus.value;

  let resultado: Chamado[] = chamados;

  if (statusSelecionado !== "Todos") {
    resultado = resultado.filter(function (chamado) {
      return chamado.status === statusSelecionado;
    });
  }

  if (termo !== "") {
    resultado = resultado.filter(function (chamado) {
      return (
        chamado.titulo.toLowerCase().includes(termo) ||
        chamado.id.toString() === termo
      );
    });
  }

  renderizarChamados(resultado, listaChamados);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id: number = proximoId++;
  const titulo: string = inputTitulo.value.trim();
  const descricao: string = textareaDescricao.value.trim();
  const solicitante: string = inputSolicitante.value.trim();
  const setor: string = inputSetor.value.trim();
  const categoria: Categoria = selectCategoria.value as Categoria;
  const prioridade: Prioridade = selectPrioridade.value as Prioridade;

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

  salvarChamados(chamados);

  console.log(chamados);

  aplicarFiltros();

  formulario.reset();
});

listaChamados.addEventListener("click", function (evento) {
  const botao = evento.target as HTMLElement;

  if (!botao.dataset.id) {
    return;
  }

  const id: number = Number(botao.dataset.id);

  alterarStatus(chamados, id);

  salvarChamados(chamados);

  aplicarFiltros();
});

filtroStatus.addEventListener("change", function () {
  aplicarFiltros();
});

inputBusca.addEventListener("input", function () {
  aplicarFiltros();
});

aplicarFiltros();
