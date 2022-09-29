// trabalhando com JS em um arquivo externo.

// var faz hosting
console.log(nome, " chamando variável criada com var");

var nome = "Fiap";

// const não faz hosting
const nome = "Fiap"; // não conseguimos atribuir um novo valor para uma constante

console.log(nome, " chamando variável criada com var");

//função nominal - udf
escreve("Exemplo de função nominal");

function escreve(titulo) {
  alert(titulo);
}

// existem 7 tipos de erros diferentes no JS
// 3 deles são os principais
