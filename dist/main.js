import { criarChamado } from "./criar-chamado.js";
import { renderizarChamados } from "./renderizar-chamados.js";
const nomeSistema = "Sistema de chamados de TI";
console.log(nomeSistema);
const primeiroChamado = {
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
let proximoId = primeiroChamado.id + 1;
const chamados = [];
chamados.push(primeiroChamado);
console.log("Primeiro chamado adicionado", chamados);
const formulario = document.querySelector("#form-chamado");
const inputTitulo = document.querySelector("#titulo");
const inputSolicitante = document.querySelector("#solicitante");
const inputSetor = document.querySelector("#setor");
const selectCategoria = document.querySelector("#categoria");
const selectPrioridade = document.querySelector("#prioridade");
const textareaDescricao = document.querySelector("#descricao");
const listaChamados = document.querySelector("#lista-chamados");
const filtroStatus = document.querySelector("#filtro-status");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const id = proximoId++;
    const titulo = inputTitulo.value.trim();
    const descricao = textareaDescricao.value.trim();
    const solicitante = inputSolicitante.value.trim();
    const setor = inputSetor.value.trim();
    const categoria = selectCategoria.value;
    const prioridade = selectPrioridade.value;
    const novoChamado = criarChamado(id, titulo, descricao, solicitante, setor, categoria, prioridade);
    console.log("Formulário enviado!", novoChamado);
    chamados.push(novoChamado);
    console.log(chamados);
    renderizarChamados(chamados, listaChamados);
    formulario.reset();
});
renderizarChamados(chamados, listaChamados);
