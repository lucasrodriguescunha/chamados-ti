# Sistema de Chamados de TI

Aplicação web para abertura e acompanhamento de chamados de suporte técnico, feita em **TypeScript puro**, sem framework, com manipulação direta do DOM.

Projeto de estudo focado em tipagem estática (`type`, `interface`, union types) e no fluxo de compilação do TypeScript para JavaScript.

---

## Tecnologias

- TypeScript (compilação via `tsc`)
- HTML5
- CSS3
- JavaScript (ES2020) gerado na pasta `dist/`

---

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

---

## Pré-requisitos

- **Node.js 18 ou superior** (o npm já vem junto)
- **Git** (para clonar o repositório)

Para conferir se já estão instalados:

```bash
node -v
npm -v
git --version
```

---

## Instalação em uma máquina virgem

### 1. Instalar o Node.js

**Windows (PowerShell como administrador):**

```powershell
winget install OpenJS.NodeJS.LTS
```

**Linux (Debian/Ubuntu):**

```bash
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**macOS (com Homebrew):**

```bash
brew install node
```

> Alternativa para qualquer sistema: baixar o instalador LTS em <https://nodejs.org>.

### 2. Instalar o Git

**Windows:**

```powershell
winget install Git.Git
```

**Linux (Debian/Ubuntu):**

```bash
sudo apt install -y git
```

**macOS:**

```bash
brew install git
```

### 3. Clonar o repositório

```bash
git clone https://github.com/lucasrodriguescunha/chamados-ti.git
cd chamados-ti/chamados-ti
```

### 4. Instalar as dependências

O projeto ainda não possui `package.json`. Crie um e instale o TypeScript como dependência de desenvolvimento:

```bash
npm init -y
npm install --save-dev typescript
```

Confira a versão instalada:

```bash
npx tsc --version
```

> Se preferir instalar o TypeScript globalmente (disponível em qualquer projeto da máquina):
>
> ```bash
> npm install -g typescript
> ```
>
> Nesse caso, use `tsc` no lugar de `npx tsc` nos comandos abaixo.

---

## Compilação

Compilar uma vez (gera `dist/main.js` a partir de `src/main.ts`):

```bash
npx tsc
```

Compilar automaticamente a cada alteração salva:

```bash
npx tsc --watch
```

Verificar erros de tipo sem gerar arquivos:

```bash
npx tsc --noEmit
```

---

## Executando o projeto

Depois de compilar, o projeto **precisa ser servido via HTTP local**:

```bash
npx serve .
```

E acesse o endereço exibido no terminal (normalmente <http://localhost:3000>).

Alternativas equivalentes: a extensão **Live Server** do VS Code (botão _Go Live_) ou
`python -m http.server 3000`.

> **Não abra o `index.html` com duplo clique.** Pelo protocolo `file://` o navegador trata
> a origem como `null` e bloqueia o carregamento de módulos ES por CORS:
>
> ```
> Access to script at 'file:///.../dist/main.js' from origin 'null'
> has been blocked by CORS policy
> ```
>
> Isso acontece porque o `src/main.ts` importa tipos de outros arquivos, o que o torna um
> módulo ES — por isso o `index.html` carrega o script com `<script type="module">`.

---

## Scripts sugeridos

Para encurtar os comandos, adicione ao `package.json`:

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "check": "tsc --noEmit",
    "start": "serve ."
  }
}
```

Uso:

```bash
npm run build
npm run dev
npm run check
```

---

## Configuração do TypeScript

O `tsconfig.json` do projeto:

| Opção     | Valor      | O que faz                                   |
| --------- | ---------- | ------------------------------------------- |
| `target`  | `es2020`   | Versão do JavaScript gerado                 |
| `module`  | `esnext`   | Formato dos módulos                         |
| `rootDir` | `./src`    | Pasta de entrada do código-fonte            |
| `outDir`  | `./dist`   | Pasta de saída do JavaScript compilado      |
| `strict`  | `true`     | Ativa todas as checagens estritas de tipo   |

---

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

---

## Autor

Lucas Rodrigues Cunha — <https://github.com/lucasrodriguescunha>
