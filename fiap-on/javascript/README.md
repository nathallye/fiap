# FIAP ON

## JavaScript

JavaScript é uma linguagem nativa da Web. Ela é utilizada para dar dinamismo e  interatividade às páginas  feitas  com  linguagens de marcação, como  HTML, e de estilização, como CSS. Quando falamos do mundo Web,a união entre HTML, CSS e JavaScript provê uma infinidadede  recursos.  Assim, nossos usuários poderão interagir com uma página não só bonita e animada, mas também com uma experiência incrível.

Apesar de atualmente o JavaScript ser a linguagem de todos os navegadores existentes, ele só se popularizoudepois queo framework para back-end NodeJS foicriado.

### Introdução ao JavaScript

Como é possível inserir um script de JavaScript no arquivo HTML?
Existem duas formasde fazer isso, a primeira é por meio da tag script, dentro do arquivo HTML:

  ``` JS
  <script type="text/javascript">
    // Codigo JavaScript
  </script>
  ```

E a segunda maneira é por meio da inclusão de um arquivo JavaScript no HTML:

  ``` JS
  <script type="text/javascript" src="js/app.js"></script>
  ```

O JavaScript, também conhecido como JScript ou pelo seu nome oficial, ECMAScript, é uma `linguagem de programacão do tipo script` que roda do `lado cliente`.

Graças a uma `interface conhecida como DOM` (Document Object Model), todos os `elementos em documentos HTML podem ser manipulados em JavaScript` como se fossem objetos.

JavaScript obstrutivo é quando o JavaScript está misturado com HTML no documento HTML.

Forma mais recomendada de executar o JS é colocando a tag `script` no `head` e dentro do arquivo JS usarmos o `window.onload = function() {}` para garantir que o HTML seja carregado primeiro.

### Erros JS

JavaScript é passível de falhas e erros, ao contrário do HTML. Para corrigi-los podemos usar ferramentas como o "Inspecionar” no Google Chrome.

Existem 7 tipos de erros diferentes no JS, 3 deles são os principais
  1. `SyntaxError`: Erro de escrita;
  2. `ReferenceError`: Chamou alguém que não existe. Exemplo, chamou uma variável que não foi declarada;
  3. `TypeError`: Violou alguma regra. Por exemplo, atribuir um novo valor para uma constante;
  4. `RangeError`: Estourou o limite de aninhamento ou faixa de valores;
  5. `EvalError`: Evitar o comando eval;
  6. `InternalError`: Memória, processamento, crash no chrome ou V8;
  7. `URIError`: Erros que acontecem ao consumir dados externos, com url inválidas.

### Variáveis e seus tipos

JavaScript é uma linguagem “não tipada’, ou seja, ao declarar uma variável, não é necessário [e nem
possível) identificar o tipo de informacão que você guardará.

As variáveis são do tipo variant e, por isso, assumem automaticamente seu tipo sempre que um valor é atribuido a elas.

Os tipos mais comuns que um variant pode assumir são:

  - `undefined`: indefinido é como o JavaScript declara uma variável que foi declarada mas não recebe qualquer valor;
  - `null`: é quando o valor null é literalmente atribuido a variável e ela está sem valor definido;
  - `Boolean`: tipo lógico, permite armazenar valores como true (verdadeiro] e false [falso);
  - `string`: cadeia de alfanuméricos;
  - `number`: tipo numérico, seja valores inteiros ou fracionados;
  - `object`: tipo objeto, utilizado para armazenar objetos instanciados a partir de uma classe ou retornados por funcões especificas;
  - `array`: utilizado quando for necessário armazenar mais de um valor simultaneamente.

### Operadores Matemáticos

Os operadores matemáticos em JS são:

  - "+" (soma)
  - "-" (subtração)
  - "*" (multiplicação)
  - "/" (divisão)
  - "%" (recupera o resto da divisão)

JavaScript conta com algumas funções matemáticas da classe `Math`, como, por exemplo: Math.PI, Math.log, Math.tan, Math.Random entre outras.

### Estruturas Condicionais

Estruturas condicionais como `if` e `elsif` estão presente no JS.

O JavaScript possui ainda o comando `switch`, para a aplicação da estrutura “caso”, que permite várias verificações de igualdade em uma única estrutura.

### Estruturas de Repetição

As estruturas de repeticao `while`, `do..while` e `for` estão disponíveis em JavaScript.

### Funções

Toda função em JavaScript é declarada com o comando “function”(exceto as arrows), e todo o procedimento que será realizado deve estar no bloco contido por chaves.

Toda função, seja em sua declaração ou chamada, possui abre e fecha parênteses.

### Programação Orientada a Eventos

Por ser uma linguagem client-side e interpretada pelo navegador, o grande trunfo do JavaScript é a possibilidade de se programar através de eventos.

Os eventos mais comuns são aqueles disparados pelo próprio usuário. Entretanto, existem outros disparados por tempo ou por alguma funcionalidade HTML5 que tenha sido previamente solicitada.

JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.

  - `Eventos de tempo`: setTimeout, setInterval
  - `Eventos de DOM`: onClick, onChange, onSubmit
  - `Eventos de teclado`: onKeyDown, onKeyUp, onKeyPress
  - `Eventos de mouse`: onMouseDown, onMouseUp, onMouseMove
  - `Eventos de formulário`: onFocus, onBlur, onChange
  - `Eventos de mídia`: onPlay, onPause, onEnded
  - `Eventos de rede`: onLoad, onError, onAbort

### AJAX

AJAX é um acrônimo de Asynchronous Javascript and XML que quer dizer JavaScript e XML assíncrono. Trata-se de um método para acessar novas informações no servidor web `sem necessidade de se fazer uma carga completa em um documento HTML`.

