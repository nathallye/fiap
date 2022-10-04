const carsDOM = document.querySelector("#cars");

// Criando um array
const vehicles = ["Chevrolet", "Hyundai"];

// Adicionando um item no final do array
vehicles.push("BMW", "Mercedes");

// Adicionando um item no início do array
vehicles.unshift("Audi");

// --------------------------------------------------------------------------
// Removendo o item do início do array
const first = vehicles.shift();
console.log("Removendo o first elemento do array ", first);
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Removendo o item do final do array
const last = vehicles.pop();
console.log("Removendo o último elemento do array ", last);
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Removendo um elemento do array

// Array antes de remover o item
console.log(vehicles);
// Retorno =>
// (3) ['Chevrolet', 'Hyundai', 'BMW']

const position = 2;
const removed = vehicles.splice(position, 1);
console.log("Item removido do array vehicles", removed);
// Retorno =>
// Item removido do array vehicles ['BMW']

// Array depois de remover o item
console.log(vehicles);
// Retorno =>
// (2) ['Chevrolet', 'Hyundai']
// --------------------------------------------------------------------------

// splice - remove e adiciona elementos
// --------------------------------------------------------------------------
// Removendo mais de um elemento do array

// Array antes de remover os itens
console.log(vehicles);
// Retorno =>
// (2) ['Chevrolet', 'Hyundai']

const removed2 = vehicles.splice(1, 2);
console.log("Itens removidos do array vehicles", removed2);
// Retorno =>
// Itens removidos do array vehicles ['Hyundai']

// Array depois de remover os itens
console.log(vehicles);
// Retorno =>
// ['Chevrolet']
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Removendo e adicionando elementos

// Array antes de remover e adicionar os itens
console.log(vehicles);
// Retorno =>
// ['Chevrolet']

const removed3 = vehicles.splice(1, 2, "Ferrari", "Lamborghini");
console.log("Itens removidos do array vehicles", removed3);
// Retorno =>
// Itens removidos do array vehicles []

// Array depois de remover e adicionar os itens
console.log(vehicles);
// Retorno =>
// (3) ['Chevrolet', 'Ferrari', 'Lamborghini']
// --------------------------------------------------------------------------

vehicles.forEach((value, key) => {
  carsDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

/*------------------------------------------------------------------------------------------*/

// slice - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
// o último parâmetro determina até onde deve ser filtrado, porém excluíndo este último elemento.
const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3, 5));
// RETORNO =>
// (2) ['Celtics', 'Bucks']
console.log(newNba, "último");
// RETORNO =>
// ['76ers'] 'último'

// slice - retorna um novo array

/*------------------------------------------------------------------------------------------*/

// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Nathallye Bacelar";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);
// RETORNO =>
// Nathallye Bacelar

// const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
const procuraCeltic = (nomeTime) => {
  return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic); // percorre todos os elementos verificando se a condição é verdadeira ou falsa e retorna um novo array
const celticsFilter = nbaTeams.filter(procuraCeltic); // filtra os elementos que a condição é verdadeira e retorna um novo array
const celticsFind = nbaTeams.find(procuraCeltic); // retorna o valor do primeiro elemento do array que satisfaz a condição

console.log(celticsMap, "map");
// RETORNO =>
// (6) [false, true, false, true, false, false] 'map'

console.log(celticsFilter, "filter");
// RETORNO =>
// (2) ['Raptors', 'Celtics'] 'filter'

console.log(celticsFind, "Find");
// RETORNO =>
// Raptors 'Find'

