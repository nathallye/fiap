"use strict";
// sub - está engessada
// depois dos dois pontos(:) especificamos o que a função/subrotina retornará, nesse caso é `void`/nada, então é uma subrotina
function writeConsole() {
    console.log("Hello!");
}
// function - está livre - dirigido à abstração(não estamos informando como o retorno será usado, então isso é abstrato)
function write() {
    return "Hello!";
}
write();
// Built-in Functions: Funções nativas do JS
const company = "Avanade";
console.log(company.length, company.toUpperCase(), company.toLowerCase());
const locale = "pt-br"; // Intl.LocalesArgument é o tipo do parâmetro esperado em locale pelo toLocaleDateString 
const options = {
    year: "numeric",
    // month: "long",
    month: "short",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
};
console.log(new Date().toLocaleDateString(locale, options)); // (method) Date.toLocaleDateString(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined)
const user = {
    name: "João",
    age: 25,
    email: "joao@gmail.com",
    address: { city: "Santo André", state: "SP", cep: "09190-125", number: 150 }
};
