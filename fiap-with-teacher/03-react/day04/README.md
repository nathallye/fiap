# Decola Tech 3

## Aula 4(13/10/2022)

- [x] React com TypeScript
  - [x] Criação de um novo projeto React no Next.
    - [x] Para criarmos o projeto na pasta atual rodamos o camando seguinte:

      ```
      npx create-next-app . --ts
      ```

  - [x] Para criarmos o projeto em uma nova pasta rodamos o camando seguinte:

      ```
      npx create-next-app my-app --ts
                          [name-directory]
      ```

    - [x] `npx install` melhor que o `npm install`. O `npx` não instala as dependecias sem baixar nada na máquina. Ele traz tudo que precisa, instala o que pedimos e quando termina ele apaga todos os arquivos de instalação.

   - [x] Estrutura de pastas
    - [x] Na pasta `pages` será a pasta que vamos acabar trabalhando a maior parte do tempo... dentro dela, temos o arquivo `index.jsx` e esse arquivo está sendo carregado no localhost:3000
      - [x] Temos também uma subpasta chamada `api` e dentro dela temos o arquivo chamado `hello.js` e se abrirmos a página localhost:3000/api/hello vamos ver os dados dessa página. Ou seja, o next.js é um framework fullstack, ele vai dar a parte do front como também vai permitir a criação da API dentro dele.

  - [x] Startando nosso projeto
    - [x] No nosso arquivo `package.json` já temos configurado o script para rodarmos corretamente o next e por isso só precisamos rodar o `npm run dev`.

  - [x] Criação de componentes
    - [x] Dentro de `pages` vamos criar os arquivos `login.tsx`, `register.tsx` e `extract.tsx`(em letras minúscula porque serão urls) os quais serão componentes baseadas em função:

      ``` TSX
      import React from "react";

      export default function LoginPage() {
        return (
          <div>
            <h1>LoginPage</h1>
          </div>
        )
      }
      ```

    - [x] Para acessarmos essas páginas vamos nas urls `http://localhost:3000/login`, `http://localhost:3000/register` e `http://localhost:3000/extract`.

  - [x] Usando Componente
    - [x] Na raiz do projeto vamos criar uma pasta chamada `components`.

  - [x] Publicando o projeto na Vercel.
    - [x] Primeiro passo é criar um repositório no github;
    - [x] Depois vou colocar o projeto criado em uma pasta a parte para;
    - [x] Feito isso, vamos criar uma conta na https://vercel.com/;
    - [x] Depois vamos fazer o depois do repositório em questão;
    - [x] Dica, fazer o depois no inicio do projeto ao invés do final.

  - [x] Usando o MUI:
    - [x] https://mui.com/
    - [x] Instalação do pacote no projeto: `npm install @mui/material @emotion/react @emotion/styled`;
    - [x] Agora conseguimos usar os componentes do MUI no React:
      - [x] `Typography`: Componente para texto formatado.

## Próxima aula

- [ ]
