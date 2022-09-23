# Decola Tech 3

## Contúdos do dia(22/09/2022)

- [x] HTML5, CSS3 & JS
  - [x] **Seletores CSS**
    - [x] `*` - seletor universal
    - [x] `body, h1, h2` - seletor de tag
    - [x] `.name_class` - sempre que possivel usar seletor de class
    - [x] `#name` - seletor por id para JS
    - [x] `:hover` pseudo seletor - significa que está acontecendo um evento nele
    - [x] Quanto mais especifico o seletor, mais importante(mais prioritário).

  - **Aplicação de estilo**
    - [x] Estilo Inline/linha 
      
      ``` HTML
      <div style=”color:red”>
      ``` 

    - [x] Estilo incorporado - Tag dentro da tag `head`

      ``` HTML
      <style></style>
      ```

  - [x] **Declaração CSS**
    - [x] propriedade_css: valor_propriedade;
      ``` CSS
      body { 
        margin: 0; /* propriedade_css: valor_propriedade; */
        padding: 0;
      }
      ```

  - [x] **Normalizar o navegador**
    - [x] Box-Sizing
      - [x]  content-box
      - [x]  border-box

    ``` CSS
    body { 
      margin: 0;
      padding: 0;
    }

    * { 
      box-sizing: border-box; /*box-sizing(tamanho da caixa) - propriedade CSS define como a largura e a altura totais de um elemento são calculadas. 
      border-box - informa ao navegador para considerar qualquer borda e preenchimento nos valores especificados para a largura e a altura de um elemento. 
      Se você definir a largura de um elemento para 100 pixels, esses 100 pixels incluirão qualquer borda ou preenchimento adicionado, 
      e a caixa de conteúdo diminuirá para absorver essa largura extra. Ou seja, ele não aumentará para incluir os elementos, e sim irá comprimi-los para que caibam na caixa*/
    }
    ```

  - [x] **Box-Model**
    - [x] Camadas: margin, border, padding e content
    - [x] Lados: top, right, bottom left

  - [x] **Imagens responsivas**
    - [x] @media
      - [x] Celular ? - Não tem - Mobile First
      - [x] Tablet - @media (min-width: 768px)
      - [x] Desktop - @media (min-width: 1280px)

      ``` CSS
      /*-------------mobile---------------*/
      body {
        background: url("assets/images/background-mobile.webp") no-repeat;
        background-size: cover;
        background-position: center center;
      }
      /*-------------mobile---------------*/

      /*Tablet - mediaquerie para largura da tela começando em 768px*/
      @media (min-width: 768px) {
        body {
        background: url("assets/images/background-tablet.webp") no-repeat;
        background-size: cover;
        background-position: center center;
        }
      }

      /*Desktop - mediaquerie para largura da tela começando em 1280px*/
      @media (min-width: 1280px) {
        body {
        background: url("assets/images/background-desktop.webp") no-repeat;
        background-size: cover;
        background-position: center center;
        }
      }
      ```

## Próxima aula

- [ ] 
