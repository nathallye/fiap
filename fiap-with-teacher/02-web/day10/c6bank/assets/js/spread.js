// Operador Spread
const nationalAirlines = ["Azul", "Gol", "Latam"];

const airCompanies = [
  ...nationalAirlines,
  "Delta",
  "United Airlines",
  "Emirates",
  "Qatar",
  "Tap"
];

console.log(airCompanies);

// Atribuição por desestruturação
  // 0 - Azul
  // 1 - Gol
  // 2- Latam
  // 3 - Delta

const [azul, voeGol, latam, delta, ...international] = airCompanies;

console.log("verificando a variável delta:", delta);
console.log("verificando a variável internacionais:", international);

// Object RElation Map - ORM: Tabela SQL ou documento NoSQL - Transforma em objeto
// hibernate - JAVA
// NodeJS - typeORM (Definição de estruturas de tabelas - DDL) - Prisma (Manipular os dados)

const user = {
  name: "Nathallye Bacelar",
  email: "nathallye.bacelar@gmail.com",
  password: "123123"
}

// vamos supor que queremos mandar os dados do usuário para o front-end, mas não queremos enviar os dados sensíveis como a senha, podemos fazer assim;

const { password, ...data } = user; // ignora a variável password e o restante das informações colocamos na variável data

console.log("Retornando dados da API:", data);

// Eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
  // Eventos de tempo - setTimeout, setInterval
  // Eventos de DOM - onClick, onChange, onSubmit
  // Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
  // Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
  // Eventos de formulário - onFocus, onBlur, onChange
  // Eventos de mídia - onPlay, onPause, onEnded
  // Eventos de rede - onLoad, onError, onAbort

// sintáxe de um evento: quem.addEventListener("evento", funçãoCallback);

const elBody = document.querySelector("body");
elBody.style.width = "100%";
elBody.style.height = "100%";

elBody.addEventListener("mouseover", (event) => {
  elBody.style.backgroundColor = "#d4d4d4";
  // console.log("Executou o evento");
});
