const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const field in result) {
    if (document.querySelector("#" + field)) {
      document.querySelector("#" + field).value = result[field];
    }
  }
};

// só podemos pegar o que a pessoa digitou, depois de um evento
cep.addEventListener("blur", async (e) => { // blur quando "perder o foco"
  let search = cep.value.replace("-", "");

  if (search.length < 8 || Number(search.value) === NaN) { // se o tamanho de search é menor que 8 e se converter para number é o resultado for Not a Number(não é um número), então é inválido
    alert("CEP inválido!");
    cep.focus();
    return;
  };

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  // Recurso assíncrono, retorna uma promise porque eu não sei se vai funcionar.
  // Promise é um recurso que não temos certeza se deu certo ou não, é uma intenção.
  // Se der certo ele vai retornar o resolve, se der errado ele vai retornar o reject.
  // Resolver quer dizer que funcionou, aí usamos a função then, se der errado, usamos o catch.
  // https://viacep.com.br/ws/01311100/json/
  /*
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    })
    .catch((err) => {
      console.log(e.message);
    });
  */

  // onde tiver o await o assinc tem que estar
  try {
    const result = await fetch(
      `https://viacep.com.br/ws/${search}/json/`,
      options
    );
    const json = await result.json();
    // console.log(json);
    showData(json);
  } catch (error) {
    console.log("Temos um problema", error.message);
  }
});
