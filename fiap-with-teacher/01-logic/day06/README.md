# Decola Tech 3

## Aula 6(19/09/2022):
    
- [x] **Programação Orientada a Objetos**

  - [x] Conceito importante de orientação a objetos: é criar e depois chamar.

  - [x] **Inicialização do projeto**
    - [x] **package.json:**
      - [x] Vamos criar o arquivo descritor do node `package.json` que armazena a declaração das dependências do projeto que evita a instalação novamente de todas as dependências/módulos manualmente se por ventura trocarmos de máquina ou enviarmos esse projeto para outra pessoa, podendo serem instaladas através desse arquivo usando o comando `npm install`. E para criarmos esse arquivo vamos rodar o comando seguinte no terminal:

        ```
        npm init -y
        ```
        -[x] **Obs.:** -y - É para responder todas as perguntas dessa inicialização de forma padrão.
    
        - [x] Observações sobre o `packge.json`:
          - [x] É o arquivo de configuração do nosso projeto
            - [x] name: o nome do projeto não pode ser muito comum
            - [x] version: 
              - [x] versão Maior(`MAJOR`): quando fizer mudanças incompatíveis na API,
              - [x] versão Menor(`MINOR`): quando adicionar funcionalidades mantendo compatibilidade, e
              - [x] versão de Correção(`PATCH`): quando corrigir falhas mantendo compatibilidade. Rótulos adicionais para pré-lançamento(pre-release) e metadados de construção(build) estão disponíveis como extensão ao formato MAJOR.MINOR.PATCH.  

      - [x] **Configurar `.tsconfig` do TypeScript(para não precisarmos rodar o comando para compilar o arquivo manualmente a cada alteração):**
        - [x] Rodamos o comando seguinte:

          ``` 
          tsc --init
          ```

        - [x] No campo `target` vamos mudar a versão alvo de complilação do JS para `esNext`;

        - [x] No campo `module` temos a versão do JS do `commanjs` para gerênciamento de modulos, como tratamos as referências de arquivos dentro de outro. 
        Existe também o `esmodule`, mas não é recomendado usá-lo, pois o `commanjs` sempre existiu, então ele funciona em todos os navegadores;

        - [x] No campo `rootDir` vamos colocar a pasta `./src`, estamos informando ao tsc config ficar "de olho" em tudo que tiver dentro da pasta src para compilar(pasta origem);

        - [x] No campo `outDir` vamos colocar a pasta `./dist`, estamos informando ao tsc config enviar os arquivos de complitação para a pasta dist depois de compilar(pasta destino);

        - [x] Agora, para verificarmos se está tudo funcionando vamos rodar o comando `tsc -w` para rodar o arquivo compilado de acordo com o que configuramos no `.tsconfig`;
          - [x] Com o comando `tsc -w` rodando no terminal toda alteração feita é compilada automáticamente;

          - [x] Executando o arquivo JS gerado no servidor node
            - [x] Para isso, vamos rodar o comando seguinte:

            ``` 
            node dist/main.js
                [diretorio/file_name]
            ```

      - [x] **Instalando o nodemon e excutando**
        - [x] O nodemon reinicia automaticamente o aplicativo quando são detectadas alterações de arquivo no diretório;
          - [x] Vamos instalar o `nodemon` globalmente no nosso projeto, com o arquivo seguinte:
        
            ```
            sudo npm i -g nodemon
            ```
          - [x] Em seguida vamos startar o `nodemon` no terminal, com o comando seguinte:
      
            ```
            nodemon dist/main.js 
            ```
          
    - [x] **Classe**
      - [x] Uma classe é um conjunto de atributos e métodos;
      - [x] Passos para criar uma classe:
        - [x] 1. Criar uma pasta com o nome da classe(com a primeira letra maiúscula);
        - [x] 2. Criar um arquivo com o nome da classe(com a primeira letra maiúscula);
        - [x] 3. Criar um arquivo index dentro da pasta da classe para ser carregado automáticamente.
      - [x] Vamos criar dentro de `src` e dentro dela a pasta Pessoa/`Person` e dentro dela o arquivo para a classe Pessoa/`Person.ts`; e para não precisarmos importar diretamente `Person/Person` vamos criar um arquivo `index.ts` dentro da pasta Person, para ele ser carregado automáticamente, vamos trabalhar no `Person.ts` e o `index.ts` irá carregar as informações.
        - [x] Para isso, dentro de `index.ts` vamos importar `Person` do arquivo `Person.ts` que se encontra dentro da pasta `Person`:
          
          ``` TS
          import Person from "./Person"; // importado do Pessoa.ts
          ``` 
        - [x] Em seguida, vamos exportar por padrão/`export default` para que esse arquivo fique acessível externamente:
          
          ``` TS
          import Person from "./Person"; // importado de Person/Person.ts

          export default Person; // este arquivo passa a ser um redirect
          ``` 

        - [x] Agora podemos começar a trabalhar com o arquivo `Person.ts`. Primeiramente vamos criar a classe/`class` e exportá-la por padrão/`export default`:

          ``` TS
          class Person{
            
          }

          export default Person;
          ```

        - [x] **Atributos:**
          - [x] São as características de um objeto, essas características também são conhecidas como variáveis, utilizando o exemplo das pessoas, temos alguns atributos, tais como: nome, idade, altura.
          - [x] Criamos atributos em uma classe no formato a seguir(`nome_atributo`: `tipo`):

            ``` TS
            class Person{
              // atributos ou propriedades
              name: string;
              age: number;
            }

            export default Person;
            ```

        - [x] **Métodos:**
          - [x] São as ações que os objetos podem exercer quando solicitados, onde podem interagir e se comunicarem com outros objetos, utilizando o exemplo das pessoas, temos alguns exemplos: andar, correr, falar.
          - [x] Criamos métodos em uma classe no formato a seguir:

            ``` TS
            class Person{
              // atributos ou propriedades
              name: string;
              age: number;

              // métodos
              walk(paramName: string, paramAge: number):void{
                this.name = paramName; // atributo name recebe o que foi passado para o paramName do método
                this.age = paramAge; // atributo age recebe o que foi passado para o paramAge do método
                console.log(`A pessoa ${this.name} de idade ${this.age} está andando.`);
              }
            }

            export default Person;
            ```

        - [x] **Construtor:**
          O método `constructor` é um método como outro, no entanto, ele é chamado toda vez que a instância é criada(com o `new`);
          - [x] Criamos método construtor em uma classe no formato a seguir:

            ``` TS
            class Person{
              // atributos ou propriedades
              name: string;
              age: number;

              constructor(paramName: string, paramAge: number){
                this.name = paramName;
                this.age = paramAge;
                console.log(`A pessoa ${this.name} de idade ${this.age} está andando.`);
              }
            }

            export default Person;

            // quando criamos um objeto com o comando new, estamos criando uma instância 
            const employee = new Person("Nathallye", 20);
            ```

          - [x] Quando temos uma variável com o comando `new` significa que estamos criando um objeto que representa ou instancia uma classe.

        - [x] **POO:**
          - [x] Vamos criar um arquivo dentro de `src` um arquivo chamado `poo.js` e nele iremos importar `Person` de dentro da pasta `Person`(nesse caso vai ser carregado automáticamente o arquivo `index.ts`). Em seguida, vamos extrair do arquivo `Person.ts` a instância criada:

            ``` TS
            import Person from "./Person";

            // quando criamos um objeto com o comando new, estamos criando uma instância 
            const employee = new Person("Nathallye", 22);
            ```

    - [x] **Framework x Biblioteca**
      - [x] Framework - Conjunto de padrões, precisa ser respeitado. Seu código segue o Framework
      - [x] Biblioteca - É um conjunto de códigos progressivo e extensível, pode ser aplicado ao seu projeto ou não.
      - [x] React é uma biblioteca ou framework? Sim Biblioteca, porém quando usamos o nome React, também refere-se a o inteiro ecossistema React (React Router, Jest, Redux(Context API), React Native, Electron, NextJS, Gatsby)

  - [x] **Desafio da aula:**
    - [x] /src/Funcionario
      - [x] nome:string, ri:string, cpf:string

        ``` TS
        class Employee{
          name: string;
          ri: string;
          cpf: string;
        }

        export default Employee;
        ```

    - [x] constructor
      - [x] inicializar os atributos

        ``` TS
        class Employee{
          name: string;
          ri: string;
          cpf: string;

          constructor(paramName: string, paramRi: string, paramCpf: string){
            this.name = paramName;
            this.ri = paramRi;
            this.cpf = paramCpf;
          }
        }

        export default Employee;
        ```

    - [x] cadFuncionario
      - [x] console.log('Funcionário Fulano cadastrado com sucesso!');

        ``` TS
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
        ```

    - [x] src/poo_func.ts

      ``` TS
      import Employee from "./Employee";

      const employee = new Employee("Nathallye", "123456", "039.000.111-22");
      employee.regisEmployee();
      ```
      
## Próxima aula

  - [ ] encapsulamento
  - [ ] herança
  - [ ] get & set