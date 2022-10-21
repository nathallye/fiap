// commonJS
// "type": "commonJS", - package.json depois do description
const fs = require("fs");

// "type": "module", - package.json depois do description
// import fs from "fs";

/*
const dir = "./upload";
const file = "lakers.txt";
const path = `${dir}/${file}`;

if (!fs.existsSync(dir)) {
  fs.mkdir(dir, (err) => {
    // se der um erro, ele vai retornar um erro e parar o processo
    if(err) throw err;
    // se passar do throw ele vai executar o código abaixo
    console.log(`Diretório ${dir} criado com sucesso!`);
  });
} else {
  console.log(`Acessando o diretório: ${dir}`);
};
*/

/*
let msg = "O segundo melhor time de basquete do mundo é o Los Angeles Lakears.";
if (!fs.existsSync(path)) {
  fs.writeFile(path, msg, (err) => {
    if (err) throw err;
    console.log(`Arquivo ${file} criado com sucesso!`);
  });
};
*/

console.log(process.argv);

// node ex3.js html
// node ex3.js react
if (process.argv[2]) { // só vai cair no if se tiver um terceiro parâmetro
  const cmd = process.argv[2]; // captura o parâmetro passado
  let folders = [];
  let files = [];

// De acordo com o parâmetro passado no terminal irá montar a estrutura do projeto
  switch(cmd) {
    case "html":
      folders = [
        "assets",
        "assets/css",
        "assets/js",
        "assets/images",
        "assets/fonts",
      ];
      files = ["index.html", "assets/css/style.css", "assets/js/main.js"];
      break;
    case "react":
      folders = [
        "src",
        "src/components",
        "src/pages",
        "src/assets",
        "src/assets/css",
        "src/assets/js",
        "src/assets/images",
        "src/assets/fonts",
      ];
      files = [
        "src/index.js",
        "src/components/App.js",
        "src/pages/Home.js",
        "src/assets/css/style.css",
        "src/assets/js/main.js",
      ];
      break;
    default:
      console.log("Invalid command");
  }

  folders.forEach((folder) => { // percorre cada folder do array folders
    if (!fs.existsSync(folder)) { // se folder em questão não existir
      fs.mkdirSync(folder); // esse folder será criado
      console.log("Pasta:", folder, "criado.");
    } else {
      console.log("Pasta:", folder, "já existe.");
    }
  });
};

// podemos executar no terminal o comando:
// node ex3.js html

// Desafio de lógica: se passar o comando node ex3 html --complete deve criar os files do array files
