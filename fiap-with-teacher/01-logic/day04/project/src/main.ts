const nameUser: string = "Nathallye Bacelar";

console.log(`Bem vindo(a) ao TypeScript ${nameUser}`);

// condicionais
//  if/else if/else
const ageUser: number = 23;

if (ageUser <= 2) {
  console.log("Bebê");
} else if (ageUser > 2 && ageUser <= 11) {
  console.log("Criança");
} else if (ageUser > 11 && ageUser <= 19) {
  console.log("Adolescente");
} else if (ageUser > 19 && ageUser <= 50) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// switch case
const statusUser: number = 1;

switch (statusUser) {
  case 1:
    console.log("Você é um usuário.");
    break;
  case 2:
    console.log("Você é admin.");
    break;
  default:
    console.log("Desculpe, opção inválida.")
}

// laços de repetição
// for
const yearFactory: number = 1920;

// irá exibir todos os anos de fabricação partir de 1920(yearFactory) até o ano atual(2022)
// método para pegar o ano corrente: new Date().getFullYear()
for (let x: number = yearFactory; x <= new Date().getFullYear(); x++) {
  console.log(x, " ");
}

console.log("-----------------------------------------------------")

// irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory)
// método para pegar o ano corrente: new Date().getFullYear()
for (let x: number = new Date().getFullYear(); x >= yearFactory; x--) {
  console.log(x, " ");
}

console.log("-----------------------------------------------------")

// irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory) de 10 em 10 
for (let x: number = new Date().getFullYear(); x >= yearFactory; x-=10) {
  console.log(x, " ");
}

console.log("-----------------------------------------------------")

// irá exibir todos os anos de fabricação partir de 1920(yearFactory) até o ano atual(2022) de 10 em 10
for (let x: number = yearFactory; x <= new Date().getFullYear(); x+=10) {
  console.log(x, " ");
}

console.log("-----------------------------------------------------")

// irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory) de 10 em 10 
for (let x: number = new Date().getFullYear(); x >= yearFactory; x-=10) {
  if (x >= 1990 && x < 2000) { // se x for igual ou maior que 1990 e menor de 2000
    continue; // apenas continue, não faça nada(ou seja, iremos pular esses anos)
  }
  console.log(x, " ");
}

console.log("-----------------------------------------------------")

for (let x: number = 0; x <= 10; x++) {
  if (x >= 3 && x < 10) {
    console.log(".")
    continue;
  }
  console.log(`2 X ${x} = ${2*x}`)
}

// operadores incrementais e decrementais
// x++ - Operador incremental - pós incremento
// ++x - Operador incremental - pré incremento
// x-- - Operador decremental - pós decremento
// --x - Operador decremental - pré decremento

console.log("-----------------------------------------------------")

for (let a: number = 10; a <=20; a++) {
  if (a >= 12 && a < 18) {
    continue;
  }
  console.log(a);
}