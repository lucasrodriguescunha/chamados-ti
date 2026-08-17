"use strict";
const nomeSistema = 'Sistema de chamados de TI';
console.log(nomeSistema);
const primeiroChamado = {
    id: 1,
    titulo: 'Computador não liga',
    descricao: 'O computador do setor financeiro não está iniciando',
    solicitante: 'Carlos',
    setor: 'Financeiro',
    categoria: 'Hardware',
    prioridade: 'Alta',
    status: 'Aberto',
    dataAbertura: '10/08/2026'
};
console.log(primeiroChamado);
const chamados = [];
chamados.push(primeiroChamado);
console.log(chamados);
const form = document.querySelector('#form-chamado');
const inputTitulo = document.querySelector('#titulo');
const inputSolicitante = document.querySelector('#solicitante');
const inputSetor = document.querySelector('#setor');
const selectCategoria = document.querySelector('#categoria');
const selectPrioridade = document.querySelector('#prioridade');
const textareaDescricao = document.querySelector('#descricao');
const listaChamados = document.querySelector('#lista-chamados');
const filtroStatus = document.querySelector('#filtro-status');
