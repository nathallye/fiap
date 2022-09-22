// herança

import Person from "../Person";

class Employee extends Person{
  ri: string;
  cpf: string;

  constructor(paramName: string, paramAge: number, paramRi: string, paramCpf: string){
    super(paramName, paramAge); // chamando o construtor da class Person
    this.ri = paramRi;
    this.cpf = paramCpf;
  }

  regisEmployee(){
    console.log(`O funcionário ${this.name} cadastrado com sucesso.`)
  }
}

export default Employee;