// trabalhando com JS em um arquivo externo.

// var faz hosting
// console.log(nome, " chamando variável criada com var");

// var nome = "Fiap";

// const não faz hosting
const nome = "Fiap"; // não conseguimos atribuir um novo valor para uma constante

console.log(nome, " chamando variável criada com var");

//função nominal - udf
escreve("Exemplo de função nominal");

function escreve(titulo) {
  alert(titulo);
}

// existem 7 tipos de erros diferentes no JS, 3 deles são os principais

// existem 4 formas de criar uma função em JS

// função nominal - sofre rosting(não importa a linha que escrevemos a função ela vai ser issada para a primeira linha)
function changeTitle(newTitle) {
  document.querySelector("h1").innerHTML = newTitle;
}

changeTitle("Trocando o Titilo");

// Functions expression ou função anônima
const changeTitle2 = function(newTitle) {
  document.querySelector("h2").innerHTML = newTitle;
}

changeTitle2("Tocando o Subtitulo");

// arrow function (=>)
const clock = () => {
  const date = new Date();
  changeTitle2(date.toLocaleDateString());
}

setInterval(clock, 1000);
