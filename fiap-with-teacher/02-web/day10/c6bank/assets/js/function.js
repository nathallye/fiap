// diferenças entre arrow function e funções nominais

const result = document.querySelector("#result");

let myFunc1 = {
  showArguments() {
    result.innerHTML = arguments;
    console.log(arguments);
  },
};

myFunc1.showArguments(
  "Nathallye",
  "Paulo",
  "Coco"
);


let myFunc2 = {
  // arrow funcrion não acessa arguments
  showArguments: () => {
    // result.innerHTML = arguments;
    // console.log(...arguments);
  },
};

myFunc2.showArguments(
  "Nathallye",
  "Paulo",
  "Coco"
);

let user = {
  name: "Nathallye Bacelar",
  usingArrow: () => {
    console.log("Meu nome é ", this.name, " - Arrow Function");
  },
  usingNominal() {
    console.log("Meu nome é ", this.name, " - Nominal Function");
  }
}

user.usingArrow();
user.usingNominal();
