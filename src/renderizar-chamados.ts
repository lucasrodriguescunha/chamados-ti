import type { Chamado } from "./models/chamado.js";

function escaparHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderizarChamados(
  chamados: Chamado[],
  listaChamados: HTMLDivElement,
): void {
  if (chamados.length === 0) {
    listaChamados.innerHTML = "<p>Nenhum chamado cadastrado.</p>";
    return;
  }

  let html: string = "";

  chamados.forEach(function (chamado) {
    html += `
      <div class="chamado">
        <h3>#${chamado.id} - ${escaparHtml(chamado.titulo)}</h3>
        <p><strong>Solicitante:</strong> ${escaparHtml(chamado.solicitante)}</p>
        <p><strong>Setor:</strong> ${escaparHtml(chamado.setor)}</p>
        <p><strong>Categoria:</strong> ${escaparHtml(chamado.categoria)}</p>
        <p><strong>Prioridade:</strong> ${escaparHtml(chamado.prioridade)}</p>
        <p><strong>Status:</strong> ${escaparHtml(chamado.status)}</p>
        <p><strong>Data:</strong> ${escaparHtml(chamado.dataAbertura)}</p>
        <p>${escaparHtml(chamado.descricao)}</p>

        <button data-id="${chamado.id}">
          Alterar status
        </button>
      </div>
    `;
  });

  listaChamados.innerHTML = html;
}
