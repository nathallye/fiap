# Decola Tech 3

## Aula 11(05/10/2022)

- [x] **Resolução do desafio aula passada:** criar o tooltip em uma função.

  ``` JS
  const tooltip = (target, text) => {

    target.addEventListener("mouseover", (event) => {

      if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
      }

      const newDiv = document.createElement("div");
      newDiv.classList.add("tooltip");
      newDiv.innerHTML = text;

      const widthTooltip = 200;
      newDiv.style.position = "fixed";
      newDiv.style.width = widthTooltip;
      newDiv.style.top = event.clientY + "px";
      newDiv.style.left =
        (event.clientX + widthTooltip > elBody.clientWidth
          ? event.clientX - widthTooltip
          : event.clientX + widthTooltip) + "px";

      newDiv.style.display = "flex";
      elHeader.appendChild(newDiv);

    });

    target.addEventListener("mouseout", () => {
      if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
      }
    });
  };

  const elTooltip = document.querySelector("#tooltip");

  tooltip(elTooltip, "Minions ipsum bappleees chasy tulaliloo la bodaaa ti aamoo! Daa daa belloo! Aaaaaah gelatooo daa tatata bala tu tank yuuu! Poulet tikka masala hahaha potatoooo poulet tikka masala para tú la bodaaa potatoooo chasy jeje gelatooo. Ti aamoo!");
  ```

- [x] JavaScript Assincrono
  - [x] Para entendermos melhor vamos criar os arquivos `fetch.html` e `assets/js/fetch.js`. E vamos consumir uma API que fazer busca de CEP.

    - [x] Trabalhando com promise:

      - [x] `fetch.html`

        ``` HTML
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CEP - Consultando CEP</title>
        </head>
        <body>
          <input type="text" maxlength="9" required id="cep">
          <div id="result"></div>

          <script type="text/javascript" src="assets/js/fetch.js"></script>
        </body>
        </html>
        ```

      - [x] `assets/js/fetch.js`

        - [x] Recurso assíncrono, retorna uma `promise` porque eu não sei se vai funcionar. Promise é um recurso que não temos certeza se deu certo ou não, é uma `intenção`.
        - [x] Se der certo ele vai retornar o `resolve`, se der errado ele vai retornar o `reject`.
        - [x] Resolver quer dizer que funcionou, aí usamos a função `then`, se der errado, usamos o `catch`.

        ``` JS
        const cep = document.querySelector("#cep");

        // só podemos pegar o que a pessoa digitou, depois de um evento
        cep.addEventListener("blur", (e) => { // blur quando "perder o foco"
          let search = cep.value.replace("-", "");

          if (search.length < 8 || Number(search.value) === NaN) { // se o tamanho de search é menor que 8 e se converter para number é o resultado for Not a Number(não é um número), então é inválido
            alert("CEP inválido!");
            cep.focus();
            return;
          };

          const options = {
            method: "GET",
            mode: "cors",
            cache: "default",
          };

          // https://viacep.com.br/ws/01311100/json/
          fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then((response) => {
              response.json().then((result) => {
                console.log(result);
              });
            })
            .catch((err) => {
              console.log(e.message);
            });
        });
        ```

    - [x] Trabalhando com o `async await`:

      - [x] Onde tiver o await o async tem que estar.

      ``` JS
      const cep = document.querySelector("#cep");

      // só podemos pegar o que a pessoa digitou, depois de um evento
      cep.addEventListener("blur", async (e) => { // blur quando "perder o foco"
        let search = cep.value.replace("-", "");

        if (search.length < 8 || Number(search.value) === NaN) { // se o tamanho de search é menor que 8 e se converter para number é o resultado for Not a Number(não é um número), então é inválido
          alert("CEP inválido!");
          cep.focus();
          return;
        };

        const options = {
          method: "GET",
          mode: "cors",
          cache: "default",
        };

        // onde tiver o await o async tem que estar
        const result = await fetch(
          `https://viacep.com.br/ws/${search}/json/`,
          options
        );
        const json = await result.json();
        console.log(json);
      });
      ```

      - [x] Podemos capturar os erros com o `try` `catch`:

        ``` JS
        const cep = document.querySelector("#cep");

        cep.addEventListener("blur", async (e) => {
          let search = cep.value.replace("-", "");

          if (search.length < 8 || Number(search.value) === NaN) {
            alert("CEP inválido!");
            cep.focus();
            return;
          };

          const options = {
            method: "GET",
            mode: "cors",
            cache: "default",
          };

          // onde tiver o await o assinc tem que estar
          try { // tente
            const result = await fetch(
              `https://viacep.com.br/ws/${search}/json/`,
              options
            );
            const json = await result.json();
            console.log(json);
          } catch (error) { // se der erro, capture
            console.log("Temos um problema", error.message);
          }
        });
        ```

## Próxima aula

- [ ]

## Conteúdo da prova
