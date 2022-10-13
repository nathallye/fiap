# FIAP ON

## Bootstrap

O Bootstrap foi lançado em meados de 2010 e,apesar de sua primeira iniciativa ser um framework open-source, atualmente ele é a base da identidade do Twitter. Em sua versão 4 (5 está em alpha), utiliza tecnologias como SASS e o flexbox é a base do posicionamento dos elementos na tela. O projeto, hoje, é mantido por dez desenvolvedores focados em CSS de escala e em Vanilla JS, mas eles pretendem expandir o número de membros.

https://getbootstrap.com/

Ele é dotado de diversos elementos e funcões personalizaveis, e possibilita a responsividade total dos projetos onde é aplicado, seja para um pequeno celular, seja para uma TV de 40'.

### Instalando o Bootstrap

Existem duas maneiras de utilizarmos o Bootstrap em nosso sistema. A primeira é efetuando o download dos arquivos CSS e JavaScript do Bootstrap e incluindo-os em nosso projeto. Assim, podemos controlar a versão que estamos utilizando em nosso sistema e decidimos quando vamos ou não fazer o upgrade de versão. Nessa forma,precisamos utilizar também os frameworks de JavaScript,como o jQuery (https://jquery.com/) e o Popper.js (https://popper.js.org/),que são dependências do Bootstrap. Dessa forma, garantimos que o projeto não quebre em longo prazo.

`Metatags` são tags HTML que, posicionadas no cabeçalho do arquivo, podem determinar valores que vão influenciar desde a codificação dos caracteres apresentados até o formato como sua página será apresentada pelos navegadores.
Essa metatag deve ser posicionada no cabeçalho do documento entre as tags HEAD.
A importação do jQuery deve vir antes do Bootstrap, já que o Bootstrap ele usa o jQuery.

### Estados

O Bootstrap divide suas acões em 5 tipos de diferentes estados. Esses estados são identificados por cores:

  - azul: importante
  - verde: sucesso
  - azul claro: informação
  - amarelo: atenção
  - vermelho: erro/proibido/problema

### Grids, Linhas e Colunas

O sistema de grid do Bootstrap define colunas e linhas, alinhando na horizontal e na vertical todo o conteddo na viewport. O sistema de grid deixa o layout com a aparência de uma tabela.

O sistema de grid do Bootstrap é fixado em até 12 colunas. Ou seja, cada linha tem uma ou varias colunas onde a soma dessas colunas deve sempre ser 12 ou menor que 12.

O container, que é uma div que foi declarada com a classe especifica de “.container” do Bootstrap, é  um box base para a montagem do layout. Todos os outros elementos devem estar dentro do container.

Para a declaração das colunas, o Bootstrap utiliza quatro medidas diferentes e determina uma classe para cada uma delas, levando em consideração o dispositivo que esta carregando o site:

  - col-xs (para telefones celulares)
  - col-sm (para tablets)
  - col-md [para desktops)
  - col-lg (para monitores grandes, TVs)

### Formulários

Os formulários sao elementos HTML que utilizam diversos tipos de componentes do Bootstrap e de quebra se aplica o grid layout nele.

A classe form-inline indica que 0 formulario em questão deve posicionar os seus elementos em linha.

A classe form-vertical é a classe padrão estabelecida pelo Bootstrap e seus elementos são dispostos na vertical.

Na classe form-horizontal os elementos são dispostos na posição horizontal.

### Iconografia

O Bootstrap fornece uma lista de ícones próprios bastante extensa. São chamados de Glyphicons.

