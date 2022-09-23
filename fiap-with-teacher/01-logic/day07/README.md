# Decola Tech 3

## Aula 7(20/09/2022):

- [x] **Ferramentas Web**
  - [x] NodeJS - Usado como ambiente para Back-End
    - [x] Usado como Ferramenta para front-end e back-end
    - [x] NodeJS + NestJS ou React ou React + NextJS: `npm run dev` ou `npm start`
    - [x] Sequelize: O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.
      - [x] Ele possui um mecanismo de migração muito poderoso que pode transformar um esquema existente de banco de dados em uma nova versão e também fornece mecanismos de sincronização de banco de dados que podem criar estrutura de banco de dados especificando a estrutura do modelo.
      - [x] O Sequelize esta disponível via NPM e sua instalação pode ser feita executando o comando no Node.js:  `npm install --save sequelize`.
      - [x] A seguir devemos instalar instalar o conector para o banco de dados que você deseja acessar usando o Sequelize, e, isso pode ser feito executando os comandos abaixo: 

        ```
        $ npm install --save pg pg-hstore
        $ npm install --save mysql                // para os dialetos mysql e mariadb
        $ npm install --save sqlite3
        $ npm install --save tedious             // para o SQL Server
        ```

  - [x] TypeScript
    - [x] Na prática não precisamos rodar o comando `tsc -w` para compilar os arquivos para typescript, no React temos o  webpack que se encarrega disso
    
  - [x] Deploy: subir a aplicação para produção
  - [x] Pipeline: documento yml de automatização para subir a aplicação para produção

  - [x] Front-end:
    - [x] HTML, CSS, JS, TS
    - [x] NodeJS para rodar o NPM
      - [x] NodeJS: É ferramental para rodar o NPM
    - [x] Git/Github      
    - [x] ReactJS(união de HTML, CSS, JS, TS) e NextJS(framework para ReactJS)
    - [x] Importante ter um conhecimento em nuvem

  - [x] Back-end  
    - [x] HTML, CSS, JS, TS
    - [x] Servidor
      - [x] NodeJS: é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que `permite a execução de códigos JavaScript fora de um navegador web`.
        - [x] NestJS: `framework para NodeJS` destinado ao desenvolvimento de aplicativos do lado do servidor
      - [x] Nginx: `é um servidor leve de HTTP`, proxy reverso, proxy de e-mail IMAP/POP3, feito por Igor Sysoev em 2005, sob licença BSD-like 2-clause. `O Nginx consome menos memória que o Apache`, pois lida com requisições Web do tipo “event-based web server”; e o Apache é baseado no “process-based server”, podendo trabalhar juntos.
        - [x] Apache: O `Servidor HTTP Apache` ou Servidor Apache ou HTTP Daemon Apache ou somente Apache, é o servidor web livre criado em 1995 por um grupo de desenvolvedores da NCSA.
    - [x] Git/Github  
    - [x] Ferramenta de REST API
      - [x] Postman
    - [x] Banco de Dados
      - [x] MongoDB
      - [x] MySQL
    - [x] Conhecimento em nuvem     

- [x] **Boas práticas de Programação**
  - [x] DRY
    - [x] Don´t Repeat Yourself/Não repita a si mesmo

  - [x] YAGNI
    - [x] You aren't gonna need it/Você não vai precisar disso - XP - Extremme Programming
    - [x] Sempre implemente uma nova funcionalidade quando precisar dela, e não quando achar que vai precisar

  - [x] KISS
    - [x] Keep it Simple, Stupid - Crie ou projete seu software o mais simples possívek. Estupidamente simples.

  - [x] SOLID - é um conjunto de princípios que juntos garantem um software de qualidade
    - [x] S - Single Responsibility Principle(SRP)/Princípio da Responsabilidade Única
      - [x] Classes, funções ou métodos e trechos de códigos, precisam ter uma única responsabilidade
        - [x] Classe que faz muita coisa, este princípio foi violado. God Class.

    - [x] O - Open Closed Principle - Princípio Aberto/Fechado
      - [x] Seu código precisa ser fechado para modificação e aberto para extensão.
        - [x] Ex.: Uber - Início transportava só pessoas e somente carros.
          - [x] Agora transporta mercadoria, moto, bicicleta,...
          - [x] **Regras de negócio** mudam o tempo todo. Lógica. 
      - [x] Seu código deve ser inteligente e abstrato.

    - [x] L - Liskov Substitution Principle/Princípio da Substituição de Liskov
      - [x] Se precisar substituir um trecho do seu código por outro. Interface. O código não vai quebrar.

    - [x] I - Interface Segregation/Segregação de Interfaces
      - [x] Interface genérica
        - [x] iPessoa - Clientes, Funcionários, Contatos do Fornecedor
        - [x] Cliente e Funcionário
          - [x] Cliente - Renda
            - [x] iCliente, uma inferface mais específica
          - [x] Funcionário - Salário
            - [x] iFuncionario
        - [x] Class Funcionario implements iPessoa, iFuncionario

    - [x] D - Dependency Inversion
      - [x] Inversão de Dependência
        - [x] Classe deve ser programada dirigida a abstração
          - [x] Stakeholders - mentem e não sabem de tudo
      - [x] Em programação sempre pense na pior hipótese, porque ela vai acontecer  

  - [x] Design Patterns/Padrões de projetos
    - [x] Design Patterns: Elements of Reusable Object-Oriented Software
    - [x] Vários TIPOS de padrões de projetos
      - [x] Vários padrões de projetos
    - [x] MVC é um Design Patterns que não foi criado pelo Gof(Gang of Four - a guange dos 4)
      - [x] Model, View, Controller e é uma forma de separar dados, exibição e regras de négocio
    - [x] Gof - Gang of Four - A guange dos 4
      - [x] 23 Design Patterns
      - [x] Design Patterns: Elements of Reusable Object-Oriented Software
      - [x] 

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
                 [file_folder/file_name]
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
                    [file_folder/file_name]
            ```

      - [x] **Herança**
        - [x] Continuando com as classes da aula passada Pessoa/`Person` e Funcionario/`Employee`, podemos notar que temos o parâmetro `name` e `age` em `Person` e todo `Employee` é uma pessoa. Portanto, podemos usar o sistema de herança para não haver duplicação de código:

          ``` TS
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
          ```

          - [x] Agora, no arquivo `poo_employee` podemos criar a instância passando os parâmetros:

            ``` TS
            import Employee from "./Employee";

            const employee = new Employee("Nathallye", 23, "123456", "039.000.111-22");
            employee.regisEmployee();
            ```

- [x] **Encapsulamento** 
  - [x] **Modificador de acesso:**
    - [x] Os acessos são das classes filhas para a pai.
      - [x] **public** - todo mundo tem acesso;
        - [x] Por padrão é **public** quando não determinamos nenhum modificador de acesso.
        - [x] Quem são "todo mundo"? Atributos e métodos da mesma classe, ou de classes filhas. Mesma classe(this.atributo), classe extendida/`extends`(chamando o super - construtor da classe pai/extendida) e objeto.

          ``` TS
          class Employee extends Person{
            public ri: string; // atributo público, todo mundo tem acesso;
            cpf: string; // quando não determinamos nenhum modificador de acesso, por padrão é público, ou seja, todo mundo tem acesso; 

          // [...]
          }

          export default Employee;
          ```

      - [x] **protected** - todos do mesmo ambiente, e alguns que tem acesso a esse ambiente;
      - [x] **private** - só no mesmo ambiente;

        ``` TS
        class Employee extends Person{
          private _salary: number = 0; // atributo privado, acessado só no mesmo ambiente; deve o _(underline) na frente do nome;
        
        // [...]
        }

        export default Employee;
        ```

      - [x] **static** - atributo ou método estático. Não precisa instanciar a classe para acessar.

        ``` TS
        import Person from "../Person";

        class Employee extends Person{
          static ipAddress: string = "127.0.0.1"; // atributo estático, não precisa instanciar a classe para acessar;

          // [...]
        }

        export default Employee;

        console.log("Acessando informação estática", Employee.ipAddress);
        ```

  - [x] **getter and setter:**
    - [x] **get**(pegar) - vai retornar a informação;
    - [x] **set**(setar) - quando alguém quiser alterar  o valor do atributo `_salario`(private).

      ``` TS
      import Person from "../Person";

      class Employee extends Person{
        static ipAddress: string = "127.0.0.1";
        private _salary: number = 0; 
        ri: string; 
        cpf: string;

        constructor(
          paramName: string, 
          paramAge: number, 
          paramRi: string, 
          paramCpf: string,
          paramSalary: number
          ) {
          super(paramName, paramAge); // acessando o construtor da classe pai/classe extendida
          this.salary = paramSalary;
          this.ri = paramRi;
          this.cpf = paramCpf;

          this.regisEmployee();
        }

        // getter & setter 
        get salary(){ // pegar, retorna a informação 
          return this._salary;
        }

        set salary(value: number){ // setar quando alguém quiser alterar  o valor do atributo _salario
          if(value <= 1200){
            this._salary = 1200;
          }else{
            this._salary = value;
          }
        }

        public regisEmployee(){ // método público, todo mundo tem acesso;
          console.log(`Funcionário ${this.name} cadastrado com sucesso! Ganha ${this.salary}`);
        }
      }

      export default Employee;
      ```
## Próxima aula

- [ ] Estrutura de Dados
- [ ] Algoritmos que formam a base da programação.
  - [x] Tree
  - [ ] Stack
  - [ ] Queue

## Revisão prova

- [x] Herança
  - [x] class B extends de A
- [x] Instanciar uma class
  - [x] new Pessoa()
- [x] Iniciar o TypeScript
  - [x] tsc -w(watching/assistindo)
- [x] Responsável por iniciar a classe
  - [x] constructor
- [x] Comando para iniciar um projeto JS(package.json)
  - [x] npm init -y