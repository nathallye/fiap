// commonJS
// "type": "commonJS", - package.json depois do description
const fs = require("fs");

// "type": "module", - package.json depois do description
// import fs from "fs";

const dir = "upload";

// todas as funções Sync são bloqueantes - ou seja, toda vez que ele encontrar uma função Sync ele irá parar a execução da aplicação para executar a função
// Prefira utilizar as funções Async
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log(`Criando diretório: ${dir}...`);
} else {
  console.log(`Acessando o diretório: ${dir}...`)
};

let msg = "O melhor time de basquete do mundo é o Golden State Warriors.";
let file = "golden-state-warriors.txt";
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, msg);
  console.log(`Arquivo ${file} criado com sucesso!`);
};
