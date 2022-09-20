class Employee{
  name: string;
  ri: string;
  cpf: string;

  constructor(paramName: string, paramRi: string, paramCpf: string){
    this.name = paramName;
    this.ri = paramRi;
    this.cpf = paramCpf;
  }

  regisEmployee(){
    console.log(`O funcionário ${this.name} cadastrado com sucesso.`)
  }
}

export default Employee;