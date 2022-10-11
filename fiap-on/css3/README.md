# FIAP

## CSS

O `Cascading Style Sheets (CSS)` é uma linguagem de estilos para trazer melhores recursos visuais a um documento HTML. Foi criada pelo W3C para definir cores, tipologia, posicionamento e mais recursos em páginas web.

Ele possibilita que determinadas propriedades sejam aplicadas,ao mesmo tempo,a diversos elementos de uma página ou site que estejam marcados com uma tag ou atributo específico. Assim, facilitam a criação, formatação emanutenção de layouts e estilos de páginas web.

`Criado no fim de 1996`, é um padrão que define um dos principais conceitos relacionados aos Web Standards. Assim, como o HTML estrutura um documento por meiode blocos de informação, o `CSS controla toda a aparência` e o `layout do documento`. É uma solução eficiente para administração de sites com alto volume de páginas.

Existem três maneiras de aplicar, ou utilizar, um código CSS em um documento HTML:

  - CSS Inline

    ``` HTML
    <p style="background-color: #900;">
      Luke, eu sou seu pai!
    </p>
    ```

  - CSS Interno

    ```CSS
    <style type="text/css">
      p {
        background-color: #900;
      }
    </style>
    ```

  - CSS Externo

    ``` HTML
    <link rel="stylesheet" type="text/css" href="css/style.css">
    ```

### Mobile First

É um conceito aplicado em projetos web onde o foco inicial da arquitetura e desenvolvimento é direcionado aos dispositivos móveis.

### Pseudo-classes

- a
  - :link - links não visitados
  - :visited - depois que o usuário acessar o link(podemos mudar a cor, por exemplo)
  - :active
  - :hover

- input
  - :focus - quando o usuário clicar dentro do campo

### Utilizando atributo no seletor de elemento

- Podemos selecionar elementos pegando os valores dos atributos a eles atribuidos(el[atributo]):

  ``` CSS
  input[required] {

  }
  ```

  ``` CSS
  img[title~≃FIAP] {

  }
  ```

### Class e id

- As ids são uma forma de identificar um elemento, e devem ser ÚNICAS para cada elemento. Seu seletor fica assim:

  ``` CSS
  #id
  ```

- As classes são uma forma de identificar um grupo de elementos. Através delas, pode-se atribuir formatação a VÁRIOS elementos de uma vez. Class pode receber mais de um valor. Seu seletor fica assim:

  ``` CSS
  el.className
  .className
  ```

### Importação

- Para importarmos um arquivo CSS externo dentro de outro usamos o `@import`. Ele deve ser a primeira instrução no topo do arquivo.

### Medidas

- **Unidades de medidas Absolutas**
Essas medidas são fixas e não mudam de acordo com as especificações do dispositivo. Esse tipo de medida é indicada para quando conhecemos perfeitamente as características físicas e as configurações das mídias onde serão exibidos nossos projetos.

  - px
  - mm

- **Unidades de medidas Relativas**
Essas são as que normalmente não estamos habituados. Essas medidas são calculadas tendo como base uma outra unidade de medida definida. O uso delas é mais apropriado para que possamos fazer ajustes em diferentes dispositivos garantindo um layout consistente e fluido em diversas mídias.

  - em
  - rem
  - vw -> largura da tela -> 1vw representa 1% do tamanho da largura dessa área visível

### Cores

Cores são formadas em telas com a combinação das luzes vermelha, verde e azul.
A maneira mais facil é informar o nome de uma cor válida, em inglês.

### Posicionamento

A position propriedade especifica o tipo de método de posicionamento usado para um elemento (estático, relativo, fixo, absoluto ou fixo).

- **static:** Os elementos HTML são posicionados estáticos por padrão. Elementos estáticos posicionados não são afetados pelas propriedades superior, inferior, esquerda e direita.

- **relative:** É posicionado em relação à sua posição normal. Definir as propriedades superior, direita, inferior e esquerda de um elemento relativamente posicionado fará com que ele seja ajustado para fora de sua posição normal. Outros conteúdos não serão ajustados para caber em qualquer lacuna deixada pelo elemento.

- **fixed:** É `posicionado em relação à janela de visualização`, o que significa que ele sempre permanece no mesmo lugar, mesmo que a página seja rolada. As propriedades top, right, bottom e left são usadas para posicionar o elemento. Um elemento fixo não deixa uma lacuna na página onde normalmente estaria localizado.

- **absolute:** É `posicionado em relação ao ancestral posicionado mais próximo` (em vez de posicionado em relação à janela de visualização, como fixo). No entanto, se um elemento posicionado absoluto `não tiver ancestrais` posicionados, `ele usará o corpo do documento e se moverá junto com a rolagem da página`.

A propriedade `clear` limpa a flutuacao, obrigando o elemento seguinte a comecar na linha de baixo.

### Formatação de fontes

A `font-family` permite que seja definida a familia de fonte a ser utilizada no estilo.

A responsável pelo tamanho da fonte é a propriedade `font-size`.

A propriedade para mudar o estilo de fonte é `font-style`, como, por exemplo, `italic` ou `oblique`.

A propriedade `font-weight` define o “peso” da fonte no texto, como, por exemplo, `bold` ou `lighter`.

O alinhamento de texto pode ser obtido usando a propriedade `text-align`.

Para sublinhar um texto, por exemplo, usamos a propriedade `text-decoration`.

A propriedade para indentação é `text-indent`.

Propriedades como `letter-spacing `permitem um espacamento maior entre as letras de um texto.

A propriedade `word-spacing` possibilita aumentar a distância entre as palavras.

A propriedade `text-transform` possibilita uma verdadeira modificação no texto.

### @mediaquery

O `@mediaquery` é uma parte fundamental para a criação de uma pagina responsiva

A clausula `@media` sera geralmente acompanhada pelo tipo da midia a que tal formatação se destina. Por exemplo, `all`, que é valido para todos os tipos de dispositivos, e `print`, para dispositivos de impressão.
