# GitHub Profile Search App

Este projeto foi criado com Vite + React e permite buscar perfis do GitHub.

## Funcionalidades

- Rota com Styled-Components: `/styled/users/:username`
- Rota com Tailwind CSS: `/tailwind/users/:username`
- Busca de perfil na API do GitHub (`https://api.github.com/users/{username}`)

## Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/giulliaVilanova/github-profile-search-app.git
   cd github-profile-search-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra `http://localhost:5173` no browser.

5. Na página inicial, digite o nome de usuário do GitHub e escolha:
   - **Styled-Components** para ver o perfil com Styled-Components.
   - **Tailwind CSS** para ver o perfil com Tailwind CSS.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: cria build de produção
- `npm run preview`: pré-visualiza o build de produção

## Observações

- Caso apresente erros, verifique se as dependências estão corretamente instaladas e se você está usando Node >= 14.
