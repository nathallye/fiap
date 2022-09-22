"use strict";
// encapuslamento e get and set
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../Person"));
class Employee extends Person_1.default {
    static ipAddress = "127.0.0.1"; // atributo ou método estático. Não precisa instanciar a classe para acessar
    _salary = 0; // acessado só no mesmo ambiente
    ri;
    cpf;
    constructor(paramName, paramAge, paramRi, paramCpf, paramSalary) {
        super(paramName, paramAge); // chamando o construtor da class Person
        // getter & setter - get - pegar, quando alguém quiser alterar  o valor do atributo _salario
        this.salary = paramSalary;
        this.ri = paramRi;
        this.cpf = paramCpf;
        this.regisEmployee();
    }
    get salary(value) {
        return this._salary;
    }
    set salary(value) {
        if (value <= 1200) {
            this._salary = 1200;
        }
        else {
            this._salary = value;
        }
    }
    regisEmployee() {
        console.log(`O funcionário ${this.name} cadastrado com sucesso.`);
    }
}
exports.default = Employee;
