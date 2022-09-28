# Decola Tech 3

## Aula 5(27/09/2022)

- [x] Sempre que vamos usar o JS para manipular o HTML, chamamos esse recurso de `Web API`. Dentro do Web API quem cuida dessa manipulação é o `DOM(Document Object Model`.
  - [x] O DOM significa que as tags(div, h1, h2, video, canvas...) possui recursos. 
  - [x] A tag `canvas` é a mais poderosa.

- [x] **Concluindo a tela Home**
  - [x] Criando uma barra de rolagem:
    - [x] No `reset scss` vamos aplicar uma altura de 2000px:

      ``` SCSS
      * {
      box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        height: 2000px; // altura para gerar a barra de rolagem
        
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
      }
      ```
  
  - [x] No projeto original do C6BANK quando rolamos a tela o `header` e o `button`(que está dentro do header) saem da transparência e ficam em evidência;
    - [x] Prioridade usar classes ao invés de tags para selecionar os elementos em JS;
      - [x] No `header` vamos criar a class `top-site` e para o `button` a class `top-button`;
        - [x] Agora, podemos selecionar esses elementos por suas classes via JavaScript:
          
          ``` HTML
          <script>
            const header = document.querySelector(".top-site");
            const button = document.querySelector(".top-button");
          </script>
          ```
        - [x] `Document.querySelector()` - Retorna o primeiro elemento dentro do documento ue corresponde ao grupo especificado de seletores. Por isso, o uso de classe é importante, pois torna a seleção mais precisa.
          - [x] Sintaxe:
            
            ``` JS
            const el = document.querySelector(".myclass");
            ```

            - [x] `document` é a página html(o site).

  - [x] Em seguida, precisamos "escutar" o evento `scroll` do `window` para entendermos quando devemos mudar as cores do `header`(top-site) e do `button`(top-button);
    - [x] JS é uma linguagem dirigida a eventos

      ``` HTML
      <script>
        const header = document.querySelector(".top-site");
        const button = document.querySelector(".top-button");

        // quando rolar o mause na tela execute a função callback
        window.addEventListener("scroll", () => {
          console.log(window.scrollY); // scrollY pega quantos pixels rolamos a partir do top/eixo y
        });
      </script>
      ```

  - [x] Feito isso, fora do evento(função callback) vamos definir os estilos que queremos usar no evento. Definimos fora porque o que é definido dentro do evento só pode ser chamado dentro dele.
    - [x] Remover o fundo branco e quando passarmos o cursor em cima ele parece uma sombra(background cinza):
      
      ``` HTML
       <script>
        const elHeader = document.querySelector(".top-site");
        const elButton = document.querySelector(".top-button");
        elHeader.style.background = "none"; // aplica um estilo ao elemento header selecionado
        elButton.classList.add("disabled"); // adiciona uma classe ao elemento button selecionado

        window.addEventListener("scroll", (e) => {
          console.log(window.scrollY); 
        });
      </script>
      ```

      - [x] `window.addEventListener` - método anexa um manipulador de eventos.
        - [x] `window` é o browser(a janela).

      - [x] Entendido isso, agora, podemos definir dentro da função callback as aplicações de estido e classes de forma condicional:

        ``` HTML
         <script>
          const elHeader = document.querySelector(".top-site");
          const elButton = document.querySelector(".top-button");

          elHeader.style.background = "none";
          elButton.classList.add("disabled");
        
          window.addEventListener("scroll", (e) => {
            // console.log(window.scrollY);
            const position = window.scrollY;
            if (position <= 100) {
              elHeader.style.background = "none"; // aplica um estilo ao elemento header selecionado
              elButton.classList.add("disabled"); // adiciona uma classe ao elemento button selecionado
            } else {
              elHeader.style.background = "#fff";
              elButton.classList.remove("disabled"); // remove uma classe ao elemento button selecionado
            }
          });

        </script>
        ```

    - [x] Diferença entre `janela` e `site`
      - [x] `janela` é o browser
        - [x] `window`
      - [x] `site` é a página html
        - [x] `document`


- [x] **Login** 
  - [x] Vamos formatar as caixas de `input` no arquivo `reset.scss`, para ficar disponivel em toda aplicação:

    ``` SCSS
    input {
      background: #fff;
      
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    }
    ```

    - [x] As demais formatações da tela login iremos fazer no arquivo `login.scss`.

## Próxima aula

- [ ] Desafio fazer uma caixa no login e na parte do fundo colocar uma imagem do c6bank

