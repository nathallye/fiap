# Decola Tech 3

## Aula 10(04/10/2022)

- [x] **Eventos**
  - [x] JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
    - [x] `Eventos de tempo`: setTimeout, setInterval
    - [x] `Eventos de DOM`: onClick, onChange, onSubmit
    - [x] `Eventos de teclado`: onKeyDown, onKeyUp, onKeyPress
    - [x] `Eventos de mouse`: onMouseDown, onMouseUp, onMouseMove
    - [x] `Eventos de formulário`: onFocus, onBlur, onChange
    - [x] `Eventos de mídia`: onPlay, onPause, onEnded
    - [x] `Eventos de rede`: onLoad, onError, onAbort

  - [x] Sintaxe de um evento:

    ``` JS
    quem.addEventListener("evento", funçãoCallback);
    ```

- [x] **Criação do tooltip com eventos**
  - [x] Para isso iremos criar os arquivos `tooltip.html`, `assets/js/tooltip.js` e `assets/scss/tooltip.scss`.

  - [x] `tooltip.html`
    - [x] No arquivo html iremos criar uma estrutura básica html e importar os arquivos css e js nesse arquivo:

      ``` HTML
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tooltip - Eventos em JavaScript</title>
        <link rel="stylesheet" href="assets/css/tooltip.css">
      </head>
      <body>
        <header class="top-site">
          <div id="tooltip">
            <svg></svg>
          </div>
        </header>

        <script type="text/javascript" src="assets/js/tooltip.js"></script>
      </body>
      </html>
      ```

  - [x] `assets/scss/tooltip.scss`
    - [x] No arquivo scss iremos importar o `reset.scss` e posicionar o svg(#tooltip) fixado 5% da direita e 5% do topo; e quando colocarmos o mouse encima(hover) desse elemento irá aparecer um cursor ponteira:

      ``` SCSS
      @import "reset.scss";

      .top-site {
        width: 100%;
        height: 100px;

        #tooltip {
          position: fixed;
          right: 5%;
          top: 5%;

          &:hover { // & significa o próprio elemento
            cursor: pointer;
          }
        }
      }
      ```

    - [x] Ainda no arquivo scss vamos definir que a class tooltip só irá aparecer quando passarmos o cursor sobre a ícone de ajuda entre outros ajustes. Essa classe será inserida no elemento via JS:

      ``` SCSS
      @import "reset.scss";

      .top-site {
        width: 100%;
        height: 100px;

        #tooltip {
          position: fixed;
          right: 5%;
          top: 5%;

          &:hover { // & significa o próprio elemento
            cursor: pointer;
          }
        }

        .tooltip { // essa classe será inserida no elemento via JS
          background-color: #fff;
          box-shadow: 0px 0px 4px 10px rgba(0, 0, 0, 0.2);
          border: solid 3px rgba(255, 255, 255, 0.5);

          display: none; // por padrão iremos esconder esse elemento
          align-items: center;
          text-align: center;

          width: 200px;
          height: 300px;
          padding: 10px;
        }
      }
      ```

  - [x] `assets/js/tooltip.js`
    - [x] Agora, no arquivo JS vamos selecionar os elementos e armazenar cada um deles na sua própria constante:

      ``` JS
      const elTooltip = document.querySelector("#tooltip");
      const elBody = document.querySelector("body");
      const elHeader = document.querySelector(".top-site");
      ```

    - [x] Feito isso, vamos alterar o background do body quando passarmos o cursor sobre ele e remover quando tirarmos o cursor:

      ``` JS
      const elTooltip = document.querySelector("#tooltip");
      const elBody = document.querySelector("body");
      const elHeader = document.querySelector(".top-site");

      elBody.addEventListener("mouseover", (event) => {
        elBody.style.background = "#555";
      });

      elBody.addEventListener("mouseout", (event) => {
        elBody.style.background = "unset";
      });
      ```

    - [x] Agora, quando passarmos o cursor sobre o ícone de ajuda(svg - id tooltip - `elTooltip`) vamos verificar se a classe .tooltip já existe, se sim iremos remove-la, em seguida, iremos criar uma div, adicionar nele a classe .tooltip nele, injar o html nesse elemento, por fim inserir essa div como elemento filho do header:

      ``` JS
      const elTooltip = document.querySelector("#tooltip");
      const elBody = document.querySelector("body");
      const elHeader = document.querySelector(".top-site");

      elBody.addEventListener("mouseover", (event) => {
        elBody.style.background = "#555";
      });

      elBody.addEventListener("mouseout", (event) => {
        elBody.style.background = "unset";
      });

      elTooltip.addEventListener("mouseover", (event) => {

        if(document.querySelector(".tooltip")){
          document.querySelector(".tooltip").remove();
        }

        const newDiv = document.createElement("div");
        newDiv.classList.add("tooltip");
        newDiv.innerHTML = "Minions ipsum bappleees chasy tulaliloo la bodaaa ti aamoo! Daa daa belloo! Aaaaaah gelatooo daa tatata bala tu tank yuuu! Poulet tikka masala hahaha potatoooo poulet tikka masala para tú la bodaaa potatoooo chasy jeje gelatooo. Ti aamoo!";
        newDiv.style.display = "flex";
        elHeader.appendChild(newDiv);
      });
      ```

## Próxima aula

- [ ]

