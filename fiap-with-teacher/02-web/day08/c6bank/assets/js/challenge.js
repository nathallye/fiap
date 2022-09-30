// Desafio: a cada 4s trocar o h1 para uma frase do array frases
// rebeca, camilla, george, daphyne

// sintaxe: setINterval(() => {}, tempo)
// changeFrase("h1", frases, 4);

const phrases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva", "Camarão que dorme a onda leva"];

const changePhrase = (phrase) => {
  document.querySelector("h1").innerHTML = phrase;
}

let counter = 0;

const clock = () => {
  const phrase = phrases[counter];
  changePhrase(phrase);
  counter +=1;
  if (counter >= phrases.length) counter = 0;
  // console.log("trocando frase...");
}

setInterval(clock, 4000);
