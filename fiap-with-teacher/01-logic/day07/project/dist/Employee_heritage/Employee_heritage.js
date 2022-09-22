"use strict";
// herança
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../Person"));
class Employee extends Person_1.default {
    ri;
    cpf;
    constructor(paramName, paramAge, paramRi, paramCpf) {
        super(paramName, paramAge); // chamando o construtor da class Person
        this.ri = paramRi;
        this.cpf = paramCpf;
    }
    regisEmployee() {
        console.log(`O funcionário ${this.name} cadastrado com sucesso.`);
    }
}
exports.default = Employee;
