const elTooltip = document.querySelector("#tooltip");
const elBody = document.querySelector("body");
const elHeader = document.querySelector(".top-site");

// evento
//      [criando uma escuta no alvo]
// alvo.addEventListener("evento", function);
//                      [quando esse evento acontecer a função vai ser executada]

elBody.addEventListener("mouseover", (event) => {
  elBody.style.background = "#555";
});

elBody.addEventListener("mouseout", (event) => {
  elBody.style.background = "unset";
});

elTooltip.addEventListener("mouseover", (event) => {

  console.log("Altura da Página", elBody.clientHeight);
  console.log("Largura da Página", elBody.clientWidth);
  console.log("Altura do Tooltip", elTooltip.clientHeight);
  console.log("Largura do Tooltip", elTooltip.clientWidth);
  console.log("Altura do Mouse", event.clientY);
  console.log("Largura do Mouse", event.clientX);

  if(document.querySelector(".tooltip")){
    document.querySelector(".tooltip").remove();
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("tooltip");
  newDiv.innerHTML = "Minions ipsum bappleees chasy tulaliloo la bodaaa ti aamoo! Daa daa belloo! Aaaaaah gelatooo daa tatata bala tu tank yuuu! Poulet tikka masala hahaha potatoooo poulet tikka masala para tú la bodaaa potatoooo chasy jeje gelatooo. Ti aamoo!";

  const widthTooltip = 200;
  newDiv.style.position = "fixed";
  newDiv.style.width = widthTooltip;
  newDiv.style.top = event.clientY + "px";
  newDiv.style.left =
    (event.clientX + widthTooltip > elBody.clientWidth
      ? event.clientX - widthTooltip
      : event.clientX + widthTooltip) + "px";

  newDiv.style.display = "flex";
  elHeader.appendChild(newDiv);

  console.log(newDiv.style.width);
});

elTooltip.addEventListener("mouseout", (event) => {
  if (document.querySelector(".tooltip")) {
    document.querySelector(".tooltip").remove();
  }
});


// Desafio, criar o tooltip em uma função
// ex.: tooltip("alvo", "texto do tooltip")
// ex.: tooltip("#tooltip", "texto do tooltip")

