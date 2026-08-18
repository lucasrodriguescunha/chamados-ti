const nomeSistema: string = 'Sistema de chamados de TI';
console.log(nomeSistema);

type Prioridade =
    'Baixa' | 'Média' | 'Alta';

type Categoria =
    'Hardware' | 'Software' | 'Rede' | 'Acesso' | 'Outros';

type StatusChamado =
    'Aberto' | 'Em atendimento' | 'Resolvido';

interface Chamado {
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

const primeiroChamado: Chamado = {
    id: 1,
    titulo: 'Computador não liga',
    descricao: 'O computador do setor financeiro não está iniciando',
    solicitante: 'Carlos',
    setor: 'Financeiro',
    categoria: 'Hardware',
    prioridade: 'Alta',
    status: 'Aberto',
    dataAbertura: '10/08/2026'
}

console.log(primeiroChamado);

const chamados: Chamado[] = [];

chamados.push(primeiroChamado);

console.log(chamados);

const form = document.querySelector('#form-chamado') as HTMLFormElement;
const inputTitulo = document.querySelector('#titulo') as HTMLInputElement;
const inputSolicitante = document.querySelector('#solicitante') as HTMLInputElement;
const inputSetor = document.querySelector('#setor') as HTMLInputElement;
const selectCategoria = document.querySelector('#categoria') as HTMLSelectElement;
const selectPrioridade = document.querySelector('#prioridade') as HTMLSelectElement;
const textareaDescricao = document.querySelector('#descricao') as HTMLTextAreaElement;
const listaChamados = document.querySelector('#lista-chamados') as HTMLDivElement;
const filtroStatus = document.querySelector('#filtro-status') as HTMLSelectElement;


