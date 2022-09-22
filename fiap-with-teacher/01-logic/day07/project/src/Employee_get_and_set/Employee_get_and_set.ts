// encapuslamento e get and set

import Person from "../Person";

class Employee extends Person{
  static ipAddress: string = "127.0.0.1"; // atributo ou método estático. Não precisa instanciar a classe para acessar
  private _salary: number = 0; // acessado só no mesmo ambiente
  ri: string;
  cpf: string;

  constructor(
    paramName: string, 
    paramAge: number, 
    paramRi: string, 
    paramCpf: string,
    paramSalary: number
    ) {
    super(paramName, paramAge); // chamando o construtor da class Person
    this.salary = paramSalary;
    this.ri = paramRi;
    this.cpf = paramCpf;

    // this.regisEmployee(); 
  }

  // getter & setter 
    // get - pegar, retorna a informação 
    // set - setar,quando alguém quiser alterar  o valor do atributo _salario

  get salary(){
    return this._salary;
  }

  set salary(value: number){
    if(value <= 1200){
      this._salary = 1200;
    }else{
      this._salary = value;
    }
  }

  public regisEmployee(){
    console.log(`Funcionário ${this.name} cadastrado com sucesso! Ganha ${this.salary}`);
  }
}

export default Employee;
