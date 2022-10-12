# FIAP ON

## jQuery

O jQuery é um framework criado em dezembro de 2006 com o seguinte slogan: `write less, do more` (escreva menos, faça mais). Ao utilizá-lo, resolvemos a incompatibilidade entre os navegadores, reduzimos o tamanho do código e reutilizamos códigos por meio de plug-inscriados por milhares de programadores do mundo inteiro.

### jQuery UI

https://jqueryui.com/

O jQueryUI é uma biblioteca criada por cima do jQuery, focada em interacões com a interface de usuário, widgets e efeitos visuais.

E possivel baixar os componentes de forma fragmentada, permitindo ao desenvolvedor baixar apenas os elementos que ele deseja.

Com a adição do método `draggable()` um elemento pode ser arrastado pela tela.

O elemento `accordion()` permite mostrar e esconder informaçõess na tela.

### Introdução ao jQuery

Usando frameworks, ganhamos produtividade, atingindo resultados maiores com uma menor quantidade de códigos.

O jQuery é um framework que resolve a incompatibilidade entre os navegadores, reduz o tamanho do código e reutiliza codigos através de plug-ins.

Ao invés de utilizar o nome da classe padrão jQuery, use o simbolo `$`(cifrão) como atalho.

A palavra `document` entre parênteses é um seletor, a partir do qual podemos acessar o documento como um todo.

0 evento `ready()` sé sera acionado quando todo o documento HTML estiver devidamente renderizado e pronto para uso. A linha é o equivalente exato de `window.onload = function() {}` no JS tradicional.

https://jquery.com/

Primeiro é necessário baixar o arquivo jQuery no site oficial e em seguida referênciar ele no HTML:

``` HTML
<script src="jquery-2.min.js"></script>
```

Feito isso, conseguimos utilizar ele no arquivo JS:

``` JS
$(document).ready(function(){ // para garantir que o HTML seja carregado primeiro antes de excutar a função
  console.log("A16 mundo!");
});
```

### Magia dos seletores

O que torna o framework jQuery tão prático e simples são os seletores utilizados.

Tratam-se dotrigger()ready(function() {
  $("“#botao").click(function() {
    $("p").addClass("vermelho") ;
  });
});
```

``` JS
$(document).ready(function(){
  $("#botao").click(function() {
    $("div:contains(‘'azul')").addClass("azul") ;
    $("div:not(:contains('azul'))").addClass("naoAzul") ;
  });
});
```

### Formulários

Validação de campos.

Uma das grandes vantagens do uso do jQuery é na manipulação de formulários.

O evento `blur` é disparado quando o elemento em questão `perde o foco`.

O evento focus faz a dica desaparecer quando o usuário voltar a preencher o campo.

``` JS
$(document).ready(function() {
  $("span").hide(); // vai esconder os elementos

  $("input[type='text']").blur(function() { // seleciona os inputs com o type text e irá disparar uma função quando o usuário "deixar" a caixa do input(perder o foco) - blur
    if ($(this).val().length == 0) { // verifica se o conteúdo da caixa/input é igual a 0
      $(this).next().show(); // caso seja verdadeiro, irá exibir o elemento seguinte
    }
  });

  $("input[type='text']").focus(function() {
    $(this).next().hide();
  });
});
```

O jQuery também facilita muito a manipulação de checkboxes em formularios HTML.

Podemos criar o checkbox “marcar todos" através do método `trigger()`.

### AJAX

O AJAX possibilita que seja feita uma requisição nos bastidores do que está sendo mostrado em tela.

Para que funcione, o AJAX necessita de um servidor web.

