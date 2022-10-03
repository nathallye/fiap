# Decola Tech 3

## Aula 9(03/10/2022)

- [x] **Resolução desafio aula passada:** a cada 4s trocar o h1 para uma frase do array frases.
  - [x] Minha resolução:

    ``` JS
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
    ```

  - [x] Resolução do professor:

    ``` JS
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
    ```

- [x] Array
  - [x] forEach - para cada item do meu array. Laço de iteração para array.
    - [x] Sempre que queremos manipular o próprio array usamos o forEach.

## Próxima aula

- [ ]

