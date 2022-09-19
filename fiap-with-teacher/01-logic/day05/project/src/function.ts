
// sub - está engessada
// depois dos dois pontos(:) especificamos o que a função/subrotina retornará, nesse caso é `void`/nada, então é uma subrotina
function writeConsole(): void{ // subrotina
  console.log("Hello!")
}

// function - está livre - dirigido à abstração(não estamos informando como o retorno será usado, então isso é abstrato)
function write(): string{ // subrotina
  return "Hello!"
}

write();

// Built-in Functions: Funções nativas do JS
const company = "Avanade";
console.log(
  company.length,
  company.toUpperCase(),
  company.toLowerCase()
);

const locale: Intl.LocalesArgument = "pt-br"; // Intl.LocalesArgument é o tipo do parâmetro esperado em locale pelo toLocaleDateString 

const options: Intl.DateTimeFormatOptions = { // Intl.DateTimeFormatOptions é o tipo do parâmetro esperado em options pelo toLocaleDateString 
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

// criando uma interface para definir os tipos obrigatórios de um elemento
type addressType = {
  city: string;
  state: string;
  cep: string
  number: number;
  complement?: string; // ? parâmetro opcional
};

type userType = {
  name: string;
  age: number;
  email: string; 
  address: addressType;
  cpf?: string; // ? parâmetro opcional
};

const user: userType = {
  name: "João",
  age: 25,
  email: "joao@gmail.com",
  address: { city: "Santo André", state: "SP", cep: "09190-125", number: 150 }
};