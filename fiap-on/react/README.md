# FIAP ON

## React

O React foi originalmente desenvolvido no Facebook em 2012. Naquele mesmo ano, outro framework já era consolidado como “padrão” por muitas indústrias: AngularJS.

Esses frameworks nada mais são do que bibliotecas JavaScript capazes de criar componentes, além de gerenciar estados e eventos no browser (Front-End).


### NodeJS: quando o JavaScript sai do browser

O JavaScript é muito conhecido por ser uma linguagem interpretada nos Browsers. Assim, um dos papéis dos browsers é entender esse código e reagir de forma adequada. O componente dos browsers que faz essa tarefa se chama “interpretador JavaScript”. Um dos interpretadores mais rápidos conhecidos atualmente é o V8, utilizado no Chrome.

O NodeJS é um programa que isola o V8 em um programa executável,tornando-o capaz de interpretar códigos JavaScript. Assim, o NodeJS é simplesmente um programa que entende JavaScript

O NodeJS pode ser utilizado de diversas formas diferentes:

  - A primeira, e mais frequente, é interpretar códigos no Back-End (servidor) para gerar páginas e mandá-las para o cliente.

  - A segunda forma é utilizá-lo para executar códigos para aplicações Desktop. O VisualStudioCode é um bom exemplo disso, uma vez que ele é escrito em JavaScript e roda como um programa qualquer.

  - A terceira forma é utilizá-lo como uma ferramenta para o desenvolvedor. Nesse caso, podemos utilizar códigos JavaScript para gerar outros códigos JavaScript. Um exemplo prático é o processo de “minificação”, que reescreve um arquivo js de forma a diminuir seu tamanho sem alterar a lógica de seu código.
  O React utiliza o NodeJS para gerar códigos que o Browser entende.

  Junto à instalação do NodeJS, há outro programa, chamado npm (node package manager). O papel do npm é gerenciar bibliotecas de códigos JavaScript. Com npm é possível fazer downloads automaticamente de bases de dados de código públicas para usar em qualquer projeto, o React está cadastrado no npm.

### Primeira aplicação em React

```
cd codigos-react/
npx create-react-app primeiro_app
```

### Principais conceitos

A pasta `src` contém diversos arquivos JavaScript, CSS, entre outros. Aqui está a parte mais importante da aplicação. Observe o arquivo `index.js`, que está na pasta `src`.

A primeira observação sobre esse código é a instrução `import`. Essa instrução é interpretada pelo NodeJS para inserir códigos-fonte que estão em outros arquivos, permitindo a modularização (separação) de códigos-fonte.

Outra parte interessante do código é a tag `<App />`. App é um componente que foi importado anteriormente. Usamos um componente da mesma forma como fossemos escrever um código HTML –por meio de tags-.

### JSX: a união entre HTML e JAVASCRIPT

Você deve ter notado que o arquivo index.js parece conter “tags” html dentro de parâmetros de funções. Essa sintaxe se chama JSX e faz referência à “JavaScript Extension”. Contudo, o JavaScript citado aqui é o ES6 que, é a última versão do JavaScript

Essa nova versão adiciona funcionalidades à linguagem, tais como: classes, herança, arrow functions, destructuring, entre muitas outras.

O JSX é fundamental para a escrita e o uso de componentes React, uma vez que é por meio dele que escrevemos o código HTML que será inserido na página quando o componente for utilizado. A versão original do arquivo index.js utilizou o componente App por meio da tag `<App/>`. No React, nossos componentes sempre devem ter a primeira letra maiúscula e é assim que o React sabe quando deve utilizar as “tags” originais do HTML ou buscar em outros arquivos.

### Importação e exportação de códigos

No Código-fonte App.js gerado por create-react-app, a importação e exportação de códigos fonte é feita por meio das palavras-chave `import` e `export`.

A instrução `export` tem a seguinte sintaxe: `export {var1, var2, var3... [as default]};`
Em  que: `var1, var2...` são variáveis ou objetos que se deseja exportar e as default é um parâmetro opcional que exporta a variável como elemento principal do arquivo.

`import [var], {var1, var2, var3};`
Em  que: `[var]` é o nome de como a variável exportada como elemento principal será importada e `var1, var2,...` são os nomes das  outras variáveis exportadas do código externo que devem ser importadas no código local. Dessa forma, teremos g = 10 e y = “um texto”.
Note que as variáveis dentro de `{ }` devem ser importadas com o `mesmo nome` em que foram exportadas. Contudo, a variável exportada como `principal` pode ter sua importação com `qualquer nome`.

### 4 Principais funcionalidades do React

- Eventos
- Props
- hrefs
- Estados
