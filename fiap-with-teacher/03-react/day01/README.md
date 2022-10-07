# Decola Tech 3

## Aula 1(07/10/2022)

- [x] React
  - [x] Antes do React usávamos o Angular. Criado pelo Google é um framework JavaScript.

  - [x] Ecossistema do React
    - [x] React Developer
      - [x] Desenvolvedor que utiliza somenta a biblioteca React.
      - [x] Consegue utilizar as bibliotecas e frameworks que compõem o ecossistema React.
          - [x] React Router
          - [x] Redux - Agora podemos usar nativamente a Context API. (16.8)
          - [x] Jest - Testes automatizados - unitários, e2e End-to-End.
            - [x] TDD - Test Driven Design
      - [x] Áreas diferentes
        - [x] Web - Netflix, facebook
        - [x] Desktop - Electron
        - [x] Native - iOS x Android(Java e Kotlin - Jetbrains - Google)
          - [x] Dart - Flutter
    - [x] React era um antes da versão 16.8. Se tornou outro completamente diferente após essa versão. Fevereiro de 2019.
      - [x] Hooks

- [x] Criação de um projeto React com NextJS
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


  - [x] Primeiro componente
    - [x] Dentro de `pages` vamos criar um arquivo `login.tsx` e nesse arquivo vamos criar uma função chamada `LoginPage` e vai retornar um `h1` na página:

      ``` TSX
      import React from "react";

      export default function LoginPage() {
        return (
          <h1>Bem vindo ao Banco Digital</h1>
        )
      };
      ```

    - [x] Para acessarmos essa página vamos na url `http://localhost:3000/login`.

  - [x] Usando Componente
    - [x] Vamos criar uma pasta chamada `components` e dentro dela vamos criar uma pasta chamada `Header` e dentro dela o componente `Header.jsx` e o arquivo `index.tsx`; vamos definir um componente funcional:

      ``` TSX
      import React from "react";

      export default function Header() {
        return (
          <header>
            <div>Logotipo</div>
            <nav>
              Menu
            </nav>
            <div>
              Busca
            </div>
          </header>
        )
      };
      ```

    - [x] Em seguida, vamos importar esse componente `Header` no arquivo `components/Header/index.tsx` e exportar:

      ``` TSX
      import Header from "./Header";

      export default Header;
      ```

      - [x] Fazemos isso, só para quando formos importar esse componente em outro arquivo não ficar Header/Header.

    - [x] Feito isso, vamos importar o index do componente Header no componente principal `login.tsx`:

      ``` TSX
      import React from "react";
      import Header from "../components/Header";

      export default function LoginPage() {
        return (
          <>
            <Header />
            <h1>Bem vindo ao Banco Digital</h1>
          </>
        )
      };
      ```

## Próxima aula

- [ ] Composição de Componentes
- [ ] Props e State
