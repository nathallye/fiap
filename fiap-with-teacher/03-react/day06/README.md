# Decola Tech 3

## Aula 6(17/10/2022)

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
      - [x] Temos também uma subpasta chamada `api` e dentro dela temos o arquivo chamado `hello.ts` e se abrirmos a página localhost:3000/api/hello vamos ver os dados dessa página. Ou seja, o next.js é um framework fullstack, ele vai dar a parte do front como também vai permitir a criação da API dentro dele.

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

  - [x] Hooks
    - [x] `UseState`
      - [x] Não conseguimos mudar o estado de um componente diretamente a partir da interface, primeiro temos que mudar o estado, para quando esse estado mudar aí sim conseguimos refletir essa mudança na interface gráfica. O caminho é unidirecional, o estado muda e altera a interface gráfica. A interface gráfica não altera o estado(isso acontece indiretamente a partir dos eventos).
      - [x] State colocamos dentro de uma variável.

        ``` JS
        const [valor, setValor] = useState<type>("ValorInicial")
        ```

      - [x] Exemplo:

        ``` TSX
        const [counter, setCounter] = useState<number | undefined>(0);
        ```

    - [x] `UseEffect`
      - [x] Permite executar efeitos colaterais em componentes funcionais
        - [x] Ele é executado a primeira vez que a página é carregada(ou seja, ele será executado pelo menos uma vez);
        - [x] Ele é executado sempre que qualquer alteração acontece;
        - [x] Ele é executado sempre que qualquer elemento é destruído.

      - [x] Sintaxe: useEffect(function, array);

        ``` TSX
        useEffect(() => { // function callback, que será chamada sempre que o number(number é o "DependencyList" - segundo parametro passado para a função) modificar
        // EffectCallback
        }, []) // DependencyList
        ```

      - [x] Exemplo:

        ``` TSX
        useEffect(() => {
          if(counter == 0) {
            document.title = `Executando useEffect a primeira vez ${counter}`;
          } else {
            document.title = `Executando useEffect a cada alteração ${counter}`;
          }
          console.log(`Executando useEffect a cada alteração ${counter}`);
        }, [counter]);
        ```

## Próxima aula

- [ ]
