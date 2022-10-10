# FIAP ON

## HTML - O início

A `linguagem de marcação de hipertexto HTML` foi criada como intuito de diagramar documentos para o serviço  de World Wide Web(WWW). Em seus primórdios, foi concebida pelo físico britânico Tim Berners-Lee para reproduzir documentos de pesquisa e compartilhá-los com facilidade. O padrão logo foi adotado pelas universidades que começavam a fazer parte da Internet, na década de 1990, na reprodução e compartilhamento de teses acadêmicas.

A WWW, no entanto, evoluiu muito nas últimas décadas: ela é usada de forma  comercial, divulgando e vendendo  produtos e serviços de empresas, estreitando os relacionamentos e comunicação em redes sociais e no entretenimento, veiculando áudio, vídeo e jogos. Uma boa linguagem, seja ela de  programação ou marcação, é realmente boa quando permanece viva, ou seja, é constantemente atualizada para se adequar à realidade atual. Felizmente o HTML é uma destas linguagens.


### Desafios

- HTML semântico;
- Não conseguirmos debugar para sabermos onde o código está dando erro;
- SEO;
- O mesmo código HTML ser interpretado sem quebrar em todos os browsers.

### Padrões HTML

- A linguagem HTML deriva da metalinguagem Standard Generalized Markup Language (SGML), inventada pela IBM da década de 1960

  - Elemento/Tag:

    ``` HTML
    <nomeTag></nomeTag>
    <!--Tag de abertura e fechamento-->
    ```

  - Parâmetros: atributo="valor" - para mudar o comportamento do elemento

### Tags Essenciais

1. `<!DOCTYPE>` - O Document Type Definition(DTD), essa tag `não é exatamente parte do padrão HTML`, mas é muito importante. Conforme dito anteriormente, existem vários padrões HTML. Pois bem, como o navegador do usuário sabe em qual destes padrões do documento HTML foi escrito? Bem, ele não sabe, ele “adivinha” qual é,e nem sempre acerta.

Exemplo: `<!DOCTYPE  html>`

2. `<html>` - Determina onde começa e termina o documento HTML. Todas as outras tags devem ser contidas dentro  dela.
O atributo `lang` é global, ou seja, pode ser utilizado em qualquer tag da linguagem  HTML. Entretanto,  é `mais  comum  que  seja  informada  em  <html>`, determinando assim o `idioma do documento` todo.

3. `<head>`- Determina o cabeçalho de um documento HTML. Serve, na verdade, como um container de outras tags importantes para o documento, mas não fazem parte do corpo deste propriamente dito.
O cabeçalho do documento não é visível no navegador, mas é importante para definir algumas configurações.

4. `<body>` - Determina o corpo de um  documento HTML. Todas as tags apartir daqui ficarão contidas dentro deste elemento.

### Tags Essenciais 2

1. `<title>` - Utilizada para `informar o título do documento HTML`. Como <title>  faz parte do cabeçalho (`<head>`), este título não é renderizado em tela, trata-se  do título que será utilizado pelos mecanismos de buscas, topo e abas do seu navegador.

2. `<link>` - não é a tag dos tradicionais hyperlinks clicáveis da Internet: que faz isso é a tag `<a>`, que veremos mais adiante, ele `serve para vincular documentos`. Uma página muitas vezes é composta de vários arquivos: mantemos o HTML, CSS e JavaScript em arquivos separados (esta é a boa prática e, portanto, prática SEO). Esta tag é filha de `<head>`. Esta não possui uma tag de fechamento.

3. `<meta>` - Este elemento é utilizado para informar os `metadados do documento HTML`. Trata-se de uma tag que também não possui fechamento.

4. `<style>` - Permite aplicar estilos CSS diretamente no documento. A boa prática é, no entanto, criar um arquivo .css separado e vinculá-lo com a tag `<link>`.

5. `<script>` - Utilizado para inserir comandos de linguagem do tipo script que seja interpretado pelo navegador (ou seja, do lado cliente). Resumidamente, JavaScript.

### Tags Básicas

1. `<p>` - Utilizada para definir o início e o fim de um parágrafo. Os navegadores atribuem automaticamente uma margem entre um parágrafo e outro, que pode ser eliminada ou até mesmo aumentada usando CSS. Boa prática utilizá-las dentro de `<div>`.

2. `<br>` - Vem da palavra breakline, ou seja, quebra de linha, utilizado antes para “pular” de linha. Esta tag não possui versão de fechamento.

3. `<h1>, <h2>, <h3>`... até `<h6>` - Trata-se de tags específicas para títulos e subtítulos, sendo possível, portanto, subdividir conteúdos até um sexto nível.


**Obs.:** No padrão HTML 5 as tags que não contém tag de fechamento `não contém autofechamento` ex.: `<meta />`, isso é padrão XHTML 1.0 e 1.1, não vai dar erro no navegador, mas isso não é padrão HTML5 puro.

4. `<img>` - É utilizada para aplicar imagens ao documento HTML. Boa prática é ultilizar tanto o `title` para (caso o imagem não seja encontrada) quanto o `alt` (para melhor acessibilidade) nas imagens.

5. `<div>` - Representa uma `divisão ou seção` do documento HTML. Trata-se de um container utilizado para agrupar elementos como texto e imagens. Com ao CSS, este container pode ser posicionado em qualquer parte da  página(esteticamente dizendo), tornando-se uma verdadeira revolução na diagramação de páginas.

6. Substitutivos do `<div>` para melhorar a semântica - Muitos autores encorajam fortemente o uso das novas tags que foram criadas no HTML5 (como `<article>`, `<section>`, entre outras), reservando a tag `<div>` apenas nos casos em que estas novas tags não parecem ser aplicáveis. Todas elas se comportam como a tag` <div>`, mas facilitam a manutenção dos documentos, além de `melhorar a compreensão do texto` por parte dos mecanismos de busca.

  - `<section>:` representa a seção de um documento ou página, podem ser capítulos ou seções de uma tese.

  - `<nav>:` um container de links para navegação, como um menu.

  - `<article>:` contém o artigo propriamente dito, trata-sedo conteúdo próprio do documento, podendo ser um  artigo de jornal ou revista, uma postagem de fórum, entre outros.

  - `<aside>:` este container ficará ao lado, tangenciando o conteúdo principal (geralmente um artigo), pode  ser usado para a publicidade ou um conteúdo de menor importância, pois o `<aside>` é um dos primeiros elementos a sumir em dimensões de tela menores, quando nos referimos aum layout responsivo.

  - `<hgroup>:` é o título da seção, por ser um agrupamento, pode conter tags `<h1>` até `<h6>`, contendo assim subtítulos, por exemplo.

  - `<header>:` container de cabeçalho do documento (ou de um artigo), pode possuir menu de navegação (`<nav>`), o título (com elemento `<hgroup>` e/ou `<h1>-<h6>`), entre outros.

  - `<footer>:` geralmente utilizados no final de uma seção, representam o rodapé de uma seção ou do documento como um todo, podem conter links relacionados, referências de direitos autorais, entre outros.

  - `<time>:` - representa não só a hora, mas uma data do calendário gregoriano; é muito útil aos mecanismos  de busca, pois indica a idade da informação ali contida (considerado que será usado em um contexto, como um artigo).

  - `<mark>:` serve para dar ênfase ou destaque em uma parte do texto ou documento, como referência.

  - `<figure>:i` indica a presença de uma figura no contêiner, podendo conter uma legenda.

  - `<figcaption>:` legenda de uma figura, deve ser usadodentro da tag `<figure>`.

7. Tags de listas: `<ol>`, `<ul>` e `<li>` - são utilizadas para a criação de listas ordenadas e não ordenadas respectivamente. A tag `<li>` é utilizada para os itens da lista, independente do formato.

8. `<table>` - Utilizar para determinar o início e o fim de uma tabela. Embora possamos utilizar os atributos `width` e `height` para  dimensionar  a tabela – seja em seu tamanho exato em pixels ou percentualmente – além de alinhá-la usando `align` e a possibilidade de determinar a espessura de sua borda com `border`,tudo  isso  pode ser feito com melhores resultados usando CSS.

  - `<thead>`, `<tbody>` e `<tfoot>` - Embora sejam tags consideradas opcionais, ajudam a `definir  bem  as áreas distintas` de uma tabela. `<thead>` indica o início do cabeçalho da tabela, `<tbody>` seu corpo e `<tfoot>` seu rodapé.

    - `<tr>` - Utilizada para determinar o início e o fim de uma `linha da tabela`, que poderá ter inúmeras linhas
