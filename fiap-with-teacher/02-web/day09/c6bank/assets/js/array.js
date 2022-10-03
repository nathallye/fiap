const carrosDOM = document.querySelector("#carros");

const veiculos = ["Chevrolet", "Hyundai"];

//adicione ao final do array
veiculos.push("BMW", "Mercedes");

//adicione no início do array
veiculos.unshift("Audi");

//removendo do início do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array ", primeiro);

//removendo do final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array ", ultimo);

//removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2);

//removendo e adicionando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
  carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

//////////////////////////////////////////////
// splice - remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
// slice - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
// o último parâmetro determina até onde deve ser filtrado, porém excluíndo este último elemento.
const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3, 5));
console.log(newNba, "último");

// slice - retorna um novo array
///////////////////////////////////////////////
// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Glaucio Daniel Souza Santos";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
  return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic);
const celticsFilter = nbaTeams.filter(procuraCeltic);
const celticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");
