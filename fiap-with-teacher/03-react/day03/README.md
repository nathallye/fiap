# Decola Tech 3

## Aula 3(11/10/2022)

- [x] React com TypeScript
  - [x] Perguntar para o professor: Diferença entre `type` e `interface`, porque a sintaxe é a mesma.
    - [x] `interface` é como se fosse um contrato e tem have com orientação a objetos, e tem o recurso `extends`.
    - [x] O `type` não tem extends. Com o `type` conseguimos criar um tipo que é a junção de outros tipos.

  - [x] Um sistema em react - é igual uma receita de bolo tempos etapas que precisamos seguir para o bolo ficar pronto. Por isso, vamos desmembrar os componentes `Input` e `Button` de dentro do `Header` e deixar o `Header` com a única responsabilidade de ser o cabeçalho da página(princípio da responsabilidade única).

  - [x] Props - Passamos como parâmetro para dentro de um componente. É abreviação para propriedade e é um valor somente leitura.

  - [x] State - Para armazenar valor.
    - [x] Sempre que vamos trabalhar com o state para armazenar valores, temos os getters(pegar) & setters(alterar).

    ``` TSX
    const [userAuth, setUserAuth] = useState<boolean>(true); // o tipo de valor vai ser booleano e o valor inicial é false
    const [nameUser, setNameUser] = useState<string | undefined>(props.name);  // o tipo de valor vai ser booleano ou undefined(quando não for passado) e o valor inicial é o valor passado via props para name
    ```

  - [x] Embora a tipagem do typescript dê mais trabalho no processo de criação, é ele quem assegura a produtividade na manutenção e extensão.

  - [x] Métodos
    - [x] `getInitialProps` - É usado quando queremos enviar uma propriedade para props ao iniciar nosso componente.

      ``` TSX
      import { NextPageContext } from "next";
      import React, { useState } from "react";

      type HelloProps = {
        pharse: string;
      }

      export default function Hello(props: HelloProps) {

        const [pharse, setPharse] = useState<string | undefined>(props.pharse);

        return (
          <h1>{props.pharse ? props.pharse : "Seja muito bem vindo!"}</h1>
        )
      }

      Hello.getInitialProps = async (ctx: NextPageContext) => {

        return {
          pharse: "Seja muito bem vindo! (getInitialProps)"
        }
      }
      ```

    - [x] `useEffect` - Permite executar efeitos colaterais em componentes funcionais
      - [x] Ele é executado a primeira vez que a página é carregada;
      - [x] Ele é executado sempre que qualquer alteração acontece;
      - [x] Ele é executado sempre que qualquer elemento é destruído.

      - [x] Sintaxe: useEffect(function, array);

        ``` TSX
        useEffect(() => { // function callback, que será chamada sempre que o number(number é o "DependencyList" - segundo parametro passado para a função) modificar
        // EffectCallback
        }, []) // DependencyList
        ```

        ``` TSX
        let counter = 0;
        useEffect(() => {
          getPharse().then((data) => console.log(`Excecutou ${counter} vez`, data));
          counter++;
        }, [counter]) // a função callback só vai ser excutada quando o counter mudar(DependencyList)
        ```

      - [x]

## Próxima aula

- [ ]
