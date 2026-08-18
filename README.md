# Sistema de Chamados de TI

Aplicação web para abertura e acompanhamento de chamados de suporte técnico, feita em **TypeScript puro**, sem framework, com manipulação direta do DOM.

Projeto de estudo focado em tipagem estática (`type`, `interface`, union types) e no fluxo de compilação do TypeScript para JavaScript.

## Pré-requisitos

- **Node.js 18 ou superior** (o npm já vem junto) — instalador em <https://nodejs.org>

## Como rodar

```bash
git clone https://github.com/lucasrodriguescunha/chamados-ti.git
cd chamados-ti
npm install
npm start
```

O `npm start` compila o TypeScript e sobe um servidor HTTP local. Acesse o endereço exibido no terminal (normalmente <http://localhost:3000>).

> **Não abra o `index.html` com duplo clique.** Pelo protocolo `file://` o navegador trata
> a origem como `null` e bloqueia o carregamento de módulos ES por CORS:
>
> ```
> Access to script at 'file:///.../dist/main.js' from origin 'null'
> has been blocked by CORS policy
> ```
>
> O `src/main.ts` importa tipos de outros arquivos, o que o torna um módulo ES — por isso o
> `index.html` carrega o script com `<script type="module">`.

## Scripts

| Comando          | O que faz                                        |
| ---------------- | ------------------------------------------------ |
| `npm start`      | Compila e serve o projeto via HTTP               |
| `npm run build`  | Compila `src/` para `dist/`                      |
| `npm run dev`    | Recompila a cada alteração salva (`tsc --watch`) |
| `npm run check`  | Verifica erros de tipo sem gerar arquivos        |
| `npm run format` | Formata o código com Prettier                    |

## Estrutura do projeto

```
chamados-ti/
├── dist/
│   └── main.js          # JavaScript gerado pelo tsc (não editar)
├── src/
│   └── main.ts          # Código-fonte TypeScript
├── index.html           # Estrutura da página
├── style.css            # Estilos
└── tsconfig.json        # Configuração do compilador
```

## Status e próximos passos

- [x] Modelagem dos tipos (`Categoria`, `Prioridade`, `StatusChamado`)
- [x] Interface `Chamado`
- [x] Formulário de abertura de chamado (HTML)
- [x] Seleção dos elementos do DOM
- [ ] Cadastro de chamado no `submit` do formulário
- [ ] Renderização da lista de chamados
- [ ] Filtro por status
- [ ] Alteração de status do chamado
- [ ] Persistência com `localStorage`

## Autor

Lucas Rodrigues Cunha — <https://github.com/lucasrodriguescunha>
