# Decola Tech 3

## Aula 8(30/09/2022)

- [x] **Revisão para a Prova**
  - [x] Conteúdo semântico
  - [x] Estrutura HTML
    - [x] Elemento de linha
      - [x] <a>
      - [x] <span>
    - [x] Elemento de bloco
      - [x] <h1>
      - [x] <div>
      - [x] <p>
  - [x] Propriedades CSS
    - [x] especificidade
      - [x] body > header > nav
      - [x] body header > nav

- [x] **JavaScript**
  - [x] Spread Operator e Destructuring Assignment: Para entendermos melhor vamos criar os arquivos `spread.html` e `assets/js/spread.js`.
  - [x] **Spread Operator**
      - [x] Vamos imaginar a situação seguinte, temos um array com companias de aéreas nacionais(`nationalAirlines`) e queremos inserir todas essas empresas/o conteúdo desse array em um outro array junto com empresas internacionais. Para isso, vamos usar o `operador spread(...)` para fazer uma cópia do conteúdo do array `nationalAirlines` dentro do array `airCompanies`:

        ``` JS
        const nationalAirlines = ["Azul", "Gol", "Latam"];

        const airCompanies = [
          ...nationalAirlines,
          "Delta",
          "United Airlines",
          "Emirates",
          "Qatar",
          "Tap"
        ];

        console.log(airCompanies);
        ```

  - [x] **Destructuring Assignment - Atribuição por desestruturação**
    - [x] array
    - [x] objeto
    - [x] Para entendermos melhor vamos imaginar a situação seguinte, do array `airCompanies` queremos armazenar os elementos `Azul`, `Gol`, `Latam` e `Delta` cada um em uma variável própria e o restante dos elementos(`United Airlines`, `Emirates`, `Qatar` e `Tap`) em um array. Para isso, vamos usar a `atribuição via desestruturação`:

      ``` JS
      const [azul, voeGol, latam, delta, ...international] = airCompanies;

      console.log("verificando a variável delta:", delta);
      console.log("verificando a variável internacionais:", international);
      ```

    - [x] Agora, vamos supor que queremos mandar os dados do usuário para o front-end, mas não queremos enviar os dados sensíveis como a senha, podemos fazer assim:

      ``` JS
      const { password, ...data } = user; // ignora a variável password e o restante das informações colocamos na variável data

      console.log("Retornando dados da API:", data);
      ```

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

    - [x] Exemplo de uso:

      ``` JS
      const elBody = document.querySelector("body");
      elBody.style.width = "100%";
      elBody.style.height = "100%";

      elBody.addEventListener("mouseover", (event) => {
        elBody.style.backgroundColor = "#d4d4d4";
        console.log("Executou o evento");
      });
      ```

## Próxima aula

- [ ]

## Conteúdo prova

[ ] Elementos Semânticos do HTML5 - SEO
[ ] Principais propriedades do CSS3
[ ] Funções JavaScript


## Grupo da Semana

- Camis
- Gabriel
- Gustavo
- Íris
- Miguel
- Milena
- Nathallye
