# Decola Tech 3

## Aula 4(24/09/2022)

- [x] **RWD - Responsive Web Design**
  Para funcionar o design responsive o primeiro passo é inserir a tag `meta` viewport no `head` do projeto, em seguida definir as `mediaqueries` @media e por fim os `breakpoints` que são a largura máxima em px de cada dispositivo. 

  - [x] **Tag Meta**
    
    ``` HTML
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
  
  - [x] **Mediaqueries**
    
    ``` CSS
    @media (){
    }
    ```

  - [x] **Breakpoints:** a largura minina em px definidas dentro do @media para cada dispositivo (mobile, tablet, desktop).

    ``` CSS
    @media (min-width: 992px){
    }
    ```

    - [x] `Mobile First` - Não definimos a largura para mobile, na verdade tudo é mobile no começo do CSS;
    - [x] `Tablet` - Começa onde teoricamente termina o smartphone - `768px`;
    - [x] `Desktop` - Começa onde teoricamente termina o tablet - `992px` qualquer desktop - `1280px` mais comum;
    - [x] `Extra large` - `1920px` até `2520px`

    - [x] Links úteis: https://getbootstrap.com/docs/5.0/layout/breakpoints/

- [x] **Concluindo a página Index**
  - [x] **Fontes**
    - [x] Baixando a fonte para a página index:
      - [x] https://fonts.google.com/specimen/Open+Sans
      - [x] Vamos baixar a familia desse fonte clicando em `Download family`, feito isso, teremos um arquivo zip com a familia dessa fonte. Vamos recortar essa pasta e colar no diretório `assets/fonts` do nosso projeto;

    - [x] Criando as fontes dentro do arquivo `fonts.scss`:

      ``` SCSS
      // Nesse arquivo iremos criar as fontes necessárias para o site.

      @font-face { // Todo arroba no CSS é uma diretiva, ou seja, algo que muda o comportamento do CSS.
        font-family: "Open Sans"; // quando a familia da fonte Open Sans com o peso(font-weight) regular for chamada
        src: url("../fonts/OpenSans/OpenSans-Regular.ttf") format("truetype"); // ele vai buscar essa fonte nessa url e seu formato é ttf:truetype
        font-weight: regular; // peso regular
      }

      // [...]
      ```

    - [x] Importando o arquivo `fonts.scss` dentro do arquivo `main.scss` para essas fontes ficarem disponíveis no projeto:
        
        ``` SCSS
        @import "./fonts.scss";
        @import "./reset.scss";
        @import "./home.scss";
        ```

    - [x] Usando a fonte `Open Sans` regular no reset do `body` para carregar essa fonte por padrão para todos:

      ``` SCSS
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
      }
      ```

    - [x] Para verificarmos as alterações em tela vamos rodar o script `npm run dev` para converter os arquivo scss para css;

## Próxima aula

- [ ] Login
