# Decola Tech 3

## Aula 7(29/09/2022)

- [x] **Funções em JS**
  - [x] Existe 4 formas de criar uma função em JavaScript:
    - [x] **Função nominal:**  toda função de declaração começa com a palavra reservada e obrigatória `function`, seguida pelo nome da função (também obrigatório) e uma lista de parâmetros (opcionais) separados por vírgula e encapsulados em parenteses (obrigatórios), o último passo é definir as chaves (obrigatórias) que será o corpo da função:

      ```  JS
      function name(params) {}
      ```

      - [x] Temos como exemplo de uso dessa função é a função mudar titilo(`changeTitle`) que recebe como parâmetro o novo titulo(`newTitle`) e seleciona no documento o elemento h1 e "injeta" nele o novo titulo:

        ``` JS
        function changeTitle(newTitle) {
          document.querySelector("h1").innerHTML = newTitle;
        }

        changeTitle("Trocando o Titilo");
        ```

        - [x] **Características:**
          - [x] Em uma Função Nominal existe escopo temos o `this`;

            ``` JS
            let user = {
              usingNominal() {
                console.log("Meu nome é ", this.name, " - Nominal Function");
              }
            }

            user.usingNominal();

            // RETORNO =>
            // Meu nome é  Nathallye Bacelar  - Nominal Function
            ```

          - [x] Existe um método construtor.

      - [x] Função nominal sofre rosting: não importa a linha que escrevemos a função ela vai ser içada para a primeira linha.

    - [x] **Function expression ou Função anônima:** bem parecida com as funções de declaração/nominais, uma das sútis diferenças é que ela é atribuída para uma variável, onde não definimos o nome da função e sim o nome da variável que irá referenciar a mesma:

      ``` JS
      const name = function(params) {}
      ```

      - [x] Temos como exemplo de uso dessa função é a função mudar subtitulo(`changeTitle2`) que recebe como parâmetro o novo subtitulo(`newTitle`) e seleciona no documento o elemento h2 e "injeta" nele o novo titulo:

        ``` JS
        const changeTitle2 = function(newTitle) {
          document.querySelector("h2").innerHTML = newTitle;
        }

        changeTitle2("Tocando o Subtitulo");
        ```

      - [x] **Características:**
          - [x] Em uma Function Expression existe `this`;
          - [x] Existe um método construtor.
          - [x] Uma função de expressão é armazenada dentro de uma variável ou const. As funções anônimas precisam de um contexto.

    - [x] **Arrow Function:** são simplificações para as functions expression:

      ``` JS
      const name = (params) => {}
      ```

       - [x] Temos como exemplo de uso dessa função é a função relógio(`clock`) que não recebe nenhum parâmetro  e armazena na const `date` uma nova data e chama a função que muda o subtitulo(`changeTitle2`) que seleciona no documento o elemento h2 e "injeta" nele o novo titulo(a data atual):

        ``` JS
        const clock = () => {
          const date = new Date();
          changeTitle2(date.toLocaleDateString());
        }

        setInterval(clock, 1000);
        ```
        - [x] Características:
          - [x] Arrow Function é uma função criada no ES6 ou ES2015;
          - [x] Arrow Function não tem escopo, não possui o existe this;

            ``` JS
            let user = {
              name: "Nathallye Bacelar",
              usingArrow: () => {
                console.log("Meu nome é ", this.name, " - Arrow Function");
              }
            }

            user.usingArrow();

            // RETORNO =>
            // Meu nome é    - Arrow Function
            ```

          - [x] Não existe um método construtor;
          - [x] Sintaxe mais simples e prática.

## Próxima aula

- [ ]

## Conteúdo prova

- [ ] Elementos Semânticos do HTML5 - SEO
- [ ] Principais propriedades do CSS3
- [ ] Funções JavaScript


## Grupo da Semana

- Camis
- Gabriel
- Gustavo
- Íris
- Miguel
- Milena
- Nathallye
