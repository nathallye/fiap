"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    ri;
    cpf;
    constructor(paramName, paramRi, paramCpf) {
        this.name = paramName;
        this.ri = paramRi;
        this.cpf = paramCpf;
    }
    regisEmployee() {
        console.log(`O funcionário ${this.name} cadastrado com sucesso.`);
    }
}
exports.default = Employee;
