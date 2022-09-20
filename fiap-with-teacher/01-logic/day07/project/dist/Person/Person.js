"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    // atributos ou propriedades
    name;
    age;
    // métodos
    /*
    walk(paramName: string, paramAge: number):void{
      this.name = paramName; // atributo name recebe o que foi passado para o paramName do método
      this.age = paramAge; // atributo age recebe o que foi passado para o paramAge do método
      console.log(`A pessoa ${this.name} de idade ${this.age} está andando.`);
    }
    */
    constructor(paramName, paramAge) {
        this.name = paramName;
        this.age = paramAge;
        console.log(`A pessoa ${this.name} de ${this.age} anos de idade está andando.`);
    }
}
exports.default = Person;
