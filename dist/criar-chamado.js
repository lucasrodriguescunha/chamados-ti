export function criarChamado(id, titulo, descricao, solicitante, setor, categoria, prioridade) {
    const status = "Aberto";
    const dataAbertura = new Date().toLocaleDateString("pt-BR");
    const novoChamado = {
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
