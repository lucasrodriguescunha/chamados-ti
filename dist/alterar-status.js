export function alterarStatus(chamados, id) {
    const chamado = chamados.find(function (chamado) {
        return chamado.id === id;
    });
    if (!chamado) {
        return;
    }
    if (chamado.status === "Aberto") {
        chamado.status = "Em atendimento";
    }
    else if (chamado.status === "Em atendimento") {
        chamado.status = "Resolvido";
    }
}
