const CHAVE = "chamados-ti";
export function salvarChamados(chamados) {
    localStorage.setItem(CHAVE, JSON.stringify(chamados));
}
export function carregarChamados() {
    const dados = localStorage.getItem(CHAVE);
    if (!dados) {
        return [];
    }
    try {
        const chamados = JSON.parse(dados);
        if (!Array.isArray(chamados)) {
            return [];
        }
        return chamados;
    }
    catch {
        console.error("Não foi possível ler os chamados salvos.");
        return [];
    }
}
