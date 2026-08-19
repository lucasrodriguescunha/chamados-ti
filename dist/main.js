import { criarChamado } from "./criar-chamado.js";
import { renderizarChamados } from "./renderizar-chamados.js";
import { alterarStatus } from "./alterar-status.js";
import { carregarChamados, salvarChamados } from "./armazenamento.js";
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
function calcularProximoId(chamados) {
    let maiorId = 0;
    chamados.forEach(function (chamado) {
        if (chamado.id > maiorId) {
            maiorId = chamado.id;
        }
    });
    return maiorId + 1;
}
const chamados = carregarChamados();
if (chamados.length === 0) {
    chamados.push(primeiroChamado);
    salvarChamados(chamados);
}
let proximoId = calcularProximoId(chamados);
console.log("Chamados carregados", chamados);
const formulario = document.querySelector("#form-chamado");
const inputTitulo = document.querySelector("#titulo");
const inputSolicitante = document.querySelector("#solicitante");
const inputSetor = document.querySelector("#setor");
const selectCategoria = document.querySelector("#categoria");
const selectPrioridade = document.querySelector("#prioridade");
const textareaDescricao = document.querySelector("#descricao");
const listaChamados = document.querySelector("#lista-chamados");
const filtroStatus = document.querySelector("#filtro-status");
const inputBusca = document.querySelector("#busca");
function aplicarFiltros() {
    const termo = inputBusca.value.toLowerCase();
    const statusSelecionado = filtroStatus.value;
    let resultado = chamados;
    if (statusSelecionado !== "Todos") {
        resultado = resultado.filter(function (chamado) {
            return chamado.status === statusSelecionado;
        });
    }
    if (termo !== "") {
        resultado = resultado.filter(function (chamado) {
            return (chamado.titulo.toLowerCase().includes(termo) ||
                chamado.id.toString() === termo);
        });
    }
    renderizarChamados(resultado, listaChamados);
}
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
    salvarChamados(chamados);
    console.log(chamados);
    aplicarFiltros();
    formulario.reset();
});
listaChamados.addEventListener("click", function (evento) {
    const botao = evento.target;
    if (!botao.dataset.id) {
        return;
    }
    const id = Number(botao.dataset.id);
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
