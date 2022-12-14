// Desafio: a cada 4s trocar o h1 para uma frase do array frases
// rebeca, camilla, george, daphyne

// sintaxe: setINterval(() => {}, tempo)
// changeFrase("h1", frases, 4);

const phrases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva", "Camarão que dorme a onda leva"];

let counter = 0;

const changePhrase = () => {
  const phrase = phrases[counter];
  document.querySelector("h1").innerHTML = phrase;
  counter +=1;
  if (counter >= phrases.length) counter = 0;
  // console.log("trocando frase...");
}

setInterval(changePhrase, 4000);

// resolução do professor
const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];

const mudaFrase = (alvo, texto, tempo) => {
  //const frase = frases[Math.floor(Math.random() * frases.length)];
  //mudaTitulo2("h3", frase);
  let total = 2;
  setInterval(() => {
    document.querySelector(alvo).innerHTML =
      texto[total >= texto.length - 1 ? (total = 0) : (total += 1)];
  }, tempo * 1000);
};

mudaFrase("h1", frases, 4);
