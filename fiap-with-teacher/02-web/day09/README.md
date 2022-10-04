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

- [x] **Array**

  -[x] Criando um Array:

    ``` JS
    const vehicles = ["Chevrolet", "Hyundai"];
    ```

    - [x] Acessando o tamanho do array:

      ``` JS
      console.log(vehicles.length);

      // RETORNO =>
      // 2
      ```

    - [x] Acessando um item (index) do Array:

      ``` JS
      const first = vehicles[0]; // atribuindo o primeiro elemento do array a uma const

      // RETORNO =>
      // Chevrolet
      ```

      ``` JS
      const last = vehicles[vehicles.length - 1]; // atribuindo o ultimo elemento do array a uma const

      // RETORNO =>
      // Chevrolet
      ```

    - [x] Adicionando um item ao final do Array:

      ``` JS
      vehicles.push("BMW", "Mercedes");
      ```

    - [x] Adicionando um item ao início do Array:

      ``` JS
      vehicles.unshift("Audi");
      ```

    - [x] Removendo o item do final do Array:

      ``` JS
      const last = vehicles.pop();
      console.log("Removendo o último elemento do array ", last);
      ```

    - [x] Removendo o item do início do Array:

      ``` JS
      const first = vehicles.shift();
      console.log("Removendo o first elemento do array ", first);
      ```

    - [x] Removendo um item pela posição do índice:

      ``` JS
      // Array antes de remover o item
      console.log(vehicles);
      // RETORNO =>
      // (3) ['Chevrolet', 'Hyundai', 'BMW']

      const position = 2;
      const removed = vehicles.splice(position, 1);
      console.log("Item removido do array vehicles", removed);
      // RETORNO =>
      // Item removido do array vehicles ['BMW']

      // Array depois de remover o item
      console.log(vehicles);
      // RETORNO =>
      // (2) ['Chevrolet', 'Hyundai']
      ```

    - [x] `splice` - remove e adiciona elementos.

    - [x] Removendo mais de um elemento do array:

      ``` JS
      // Array antes de remover os itens
      console.log(vehicles);
      // RETORNO =>
      // (2) ['Chevrolet', 'Hyundai']

      const removed2 = vehicles.splice(1, 2); // irá remover os elementos com indice 1, 2 - como só temos elementos na posição 1 só Hyundai será removido
      console.log("Itens removidos do array vehicles", removed2);
      // RETORNO =>
      // Itens removidos do array vehicles ['Hyundai']

      // Array depois de remover os itens
      console.log(vehicles);
      // RETORNO =>
      // ['Chevrolet']
      ```

    - [x] Removendo e adicionando itens:

      ``` JS
      // Array antes de remover e adicionar os itens
      console.log(vehicles);
      // RETORNO =>
      // ['Chevrolet']

      const removed3 = vehicles.splice(1, 2, "Ferrari", "Lamborghini"); // irá remover os elementos com indice 1, 2 - como não temos elementos nessas posições nada será removido, somente adicionado
      console.log("Itens removidos do array vehicles", removed3);
      // RETORNO =>
      // Itens removidos do array vehicles []

      // Array depois de remover e adicionar os itens
      console.log(vehicles);
      // RETORNO =>
      // (3) ['Chevrolet', 'Ferrari', 'Lamborghini']
      ```

    - [x] `slice` - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
      - [x] O último parâmetro determina até onde deve ser filtrado, porém excluíndo este último elemento.
      - [x] Retorna um novo array.

        ``` JS
        const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
        const newNba = nbaTeams.slice(-1);

        console.log(nbaTeams.slice(3, 5));
        // RETORNO =>
        // (2) ['Celtics', 'Bucks']

        console.log(newNba, "último");
        // RETORNO =>
        // ['76ers'] 'último'
        ```

    - [x] forEach - para cada item do meu array. Laço de iteração para array.
      - [x] Sempre que queremos manipular o próprio array usamos o forEach.

        ``` JS
        vehicles.forEach((value, key) => {
          carsDOM.innerHTML += `<option value="${key}">${value}</option>`;
        });
      ```

    - [x] map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

      - [x] O método `map()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
      - [x] O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
      - [x] O método `find()` retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

        ``` JS
        const name = "Nathallye Bacelar";
        const nameArray = name.split(" ");
        const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
        console.log(nameComplete);

        const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

        const procuraCeltic = (nomeTime) => {
          return nomeTime == "Celtics" || nomeTime == "Raptors";
        };

        const celticsMap = nbaTeams.map(procuraCeltic); // map - percorre todos os elementos verificando se a condição é verdadeira ou falsa e retorna um novo array
        const celticsFilter = nbaTeams.filter(procuraCeltic); // filter - filtra os elementos que a condição é verdadeira e retorna um novo array
        const celticsFind = nbaTeams.find(procuraCeltic); // find - retorna o valor do primeiro elemento do array que satisfaz a condição

        console.log(celticsMap, "map");
        // RETORNO =>
        // (6) [false, true, false, true, false, false] 'map'

        console.log(celticsFilter, "filter");
        // RETORNO =>
        // (2) ['Raptors', 'Celtics'] 'filter'

        console.log(celticsFind, "Find");
        // RETORNO =>
        // Raptors 'Find'
        ```

## Próxima aula

- [ ]

