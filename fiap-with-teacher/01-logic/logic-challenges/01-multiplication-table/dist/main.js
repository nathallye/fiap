"use strict";
// Desafio 1: Construção da Tabuada de 1 a 10. O resultado deve ser exibido no console do terminal do VSCode.
for (let x = 1; x <= 10; x++) {
    console.log(`Tabuada do ${x}:`);
    for (let y = 1; y <= 10; y++) {
        console.log(`${x} x ${y} = ${x * y}`);
    }
    console.log("----------------");
}
