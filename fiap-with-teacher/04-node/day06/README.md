# Decola Tech 3

## Aula 6(27/10/2022)

- [x] Links úteis:
  - [x] https://docs.google.com/presentation/d/1H7DOMUCUYidIVgq8x5phcSKZ0PpdeKYIn9d4_eP6G7Q/edit#slide=id.g10e8ae1d582_0_37
  - [x] https://docs.google.com/presentation/d/1pzzbJo7mOcT7KqD3PMNwYGwUGQ10o-W3T0gefeTF0DI/edit?pli=1#slide=id.gf5cbb1e043_0_1
  - [x] https://docs.google.com/presentation/d/1NBQOgpxV1GvoVktQeu3dTh5qTGRs2KRiu9H5B2-VR2o/edit#slide=id.gf5cbb1e043_0_1

- [x] `Nestjs` - framework de nodejs - framework elegante para o backend
  - [x] https://nestjs.com/
  - [x] Nest (NestJS) é uma estrutura para criar aplicativos Node.js eficientes e escaláveis ​​do lado do servidor. Ele usa JavaScript progressivo, é construído com e suporta totalmente TypeScript (ainda permite que os desenvolvedores codifiquem em JavaScript puro) e combina elementos de OOP (Programação Orientada a Objetos), FP (Programação Funcional) e FRP (Programação Reativa Funcional).

  Sob o capô, o Nest faz uso de estruturas robustas de servidor HTTP como o Express (o padrão) e, opcionalmente, pode ser configurado para usar o Fastify também!

  O Nest fornece um nível de abstração acima dessas estruturas comuns do Node.js (Express/Fastify), mas também expõe suas APIs diretamente ao desenvolvedor. Isso dá aos desenvolvedores a liberdade de usar a infinidade de módulos de terceiros que estão disponíveis para a plataforma subjacente.

  - [x] Instalação
    - [x] Para começar, você pode montar o projeto com a Nest CLI ou clonar um projeto inicial (ambos produzirão o mesmo resultado). Para estruturar o projeto com a Nest CLI, execute os comandos a seguir. Isso criará um novo diretório de projeto e preencherá o diretório com os arquivos Nest principais iniciais e módulos de suporte, criando uma estrutura base convencional para seu projeto.

    ```
    npm i -g @nestjs/cli
    ```

    - [x] **Obs.:** `cli` - Command Line Interface

  - [x] Criação de um projeto

    ```
    nest new project-name
    ```

    - [x] Obs.: Para criar um novo projeto com o modo estrito do TypeScript ativado, passe o sinalizador `--strict` para o comando `nest new`.

- [x] `Estrutura de uma aplicação Nest.js`

  - [x] `main.ts` - Dentro de uma aplicação nestJS esse é o arquivo que inicia aplicação; `bootstrap()`(tradução inicialização) é a função que é o ponto inicio da aplicação; dentro dessa função de inicialização armazenamos dentro da const `app` a criação da aplicação nest(`NestFactory.create`) com base no `AppModule`;

  - [x] `Módulo`
    - [x] É como se fosse uma pasta, ele que guarda os arquivos `controller` e `service/providers`. Ele agrupa os controles/`controllers` e serviços/`services`;
      - [x] Toda aplicação tem pelo menos um módulo - o módulo raiz. Este é o ponto inicial da aplicação.
      - [x] É uma boa prática separar cada módulo em uma pasta, agrupando os componentes específicos deste módulo.
      - [x] Módulos são singletons(é algo que é feito uma vez e compartilhado com toda aplicação), sendo assim um módulo pode ser importado por vários outros módulos.

    - [x] Definindo um módulo:
      - [x] Um módulo é definido anotando-se uma classe com o `decorator @Module`:

        ``` TS
        @Module
        class Email {

        }
        ```

      - [x] O `decorator` fornece metadados que o Nest usa para organizar a estrutura da aplicação; o decoretor muda o comportamento da classe.
        - [x] Propriedades do decorator:
          - [x] `imports`: lista de módulos exigidos por este módulo. Qualquer provider exportado por esses módulos estarão disponíveis em nosso módulo por meio de injeção de dependência.
          - [x] `exports`: array de providers a serem exportados para outros módulos.
          - [x] `controllers`: array de controllers que serão instanciados juntamente com o módulo.
          - [x] `services/providers`: array de providers que serão disponibilizados para o módulo por meio de injeção de dependência.

    - [x] `controller` - direciona uma requisição;
    - [x] `service/providers` - nele executamos aquilo que realmente precisamos;

  - [x] `módulo `-> `controller` -> `service/providers`

  - [x] `Criação de um módulo com nest`:

    - [x] O nome do módulo é sempre no plural exemplo: users, orders, products...

    ```
    nest g module auth
                  [module_name]
    ```

    - [x] Esse comando vai criar uma pasta chamada `auth` e dentro dela um arquivo `auth.module.ts`. E também é criada uma importação do arquivo `app.module.ts`.

      ``` TS
      import { AuthModule } from './auth/auth.module';
      ```

      - [x] todos os modules tem que estar importador no `app.module.ts`.

  - [x] `Criação de um controller com nest`:

    ```
    nest g controller auth
                     [module_name]
    ```

    - [x] Esse comando vai na pasta `auth`(ele verifica se já existe e como já existia ele somente altera) e dentro dela cria arquivo `auth.controller.ts`. E também é criada uma importação do arquivo `auth.module.ts`.

  - [x] `Criação de um service com nest`:

    ```
    nest g service auth
                  [module_name]
    ```

    - [x] Esse comando vai na pasta `auth`(ele verifica se já existe e como já existia ele somente altera) e dentro dela cria arquivo `auth.service.ts`. E também é criada uma importação do arquivo `auth.controller.ts`.

  - [x] Ao usuário acesar a rota `http://localhost:3000/auth` o nest vai chamar o `app.module.ts` e ele chama o `app.controller.ts` para redirecionar, se esse controller não entrar o responsável ele vai chamar os `imports`, dos imports ele vai chamar o `auth.module.ts` e ele irá chamar o `auth.controller.ts` e ele vai saber o que fazer, redirecionando para o service adequado.

  - [x] `Criação do module, controller e service de uma vez`:

    ```
    nest g resource logistics
                    [module_name]
    ```

  - [x] `DTO`: Data Transfer Object - Design Pattern - É uma garantia que a operação está protegida - Diferente do type que é por entidade(ex.: entidade users) o DTO é por operação
    - [x] Para criar um DTO, iremos criar uma pasta chamada `dto` dentro da pasta do módulo e dentro dessa pasta `dto` iremos criar os arquivos para cada operação no formato seguinte `operationName.dto.ts`, ex.: `createUser.dto.ts`.

    - [x] Para as validações serem respeitadas vamos baixar as dependências a seguir:

      ```
      npm i class-validator class-transformer
      ```

    - [x] Em seguida, feita a importação no arquivo `main.ts`:

      ``` TS
      import { ValidationPipe } from '@nestjs/common';
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';

      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        app.useGlobalPipes(new ValidationPipe()); // a aplicação vai usar as validões a partir daqui
        await app.listen(3000);
      }
      bootstrap();
      ```

    - [x] Feito isso, já conseguimos criar os DTO's, como exemplo vamos criar o `CreateUserDTO` no arquivo `users/dto/createUser.dto.ts`:

      ``` TS
      import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from "class-validator";

      export class CreateUserDTO {
        @IsString()
        @IsNotEmpty()
        name: string;

        @IsEmail()
        @IsNotEmpty()
        email: string;

        @IsNotEmpty()
        @MinLength(6)
        @MaxLength(20)
        password: string;
      }
      ```

    - [x] Em seguida, iremos usá-lo na operação create do controller `users.controller.ts`:

      ``` TS
      import { Body, Controller, Post } from '@nestjs/common';
      import { UsersService } from './users.service';
      import { CreateUserDTO } from './dto/createUser.dto';

      @Controller("users")
      export class UsersController {
        constructor(private readonly usersService: UsersService) {}

        @Post()
        create(@Body() req:CreateUserDTO) { // DTO - Data Transfer Object - Design Pattern - É uma garantia que a operação está protegida - Diferente do type que é por entidade(ex.: entidade users) o DTO é por operação
          return this.usersService.create();
        }
      }
      ```

  - [x] `Middleware`: vai mudar/interferir no comportamento das informações trafegadas. Aqui no nest ele fica antes do controller, para tratar os dados.
  Por exemplo, o usar `ParseIntPipe` para converter o `Param` recebido na URL de string para number, ou seja, ele vai tratar os dados antes de usar no controller:

    ``` TS
    import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
    import { UsersService } from './users.service';
    import { CreateUserDTO } from './dto/createUser.dto';

    @Controller("users")
    export class UsersController {
      constructor(private readonly usersService: UsersService) {}

      // criar
      // POST http://localhost:3000/users
      @Post()
      create(@Body() req:CreateUserDTO) {
        return this.usersService.create();
      }

      // listar todos
      // GET http://localhost:3000/users
      @Get()
      findAll() {
        return this.usersService.findAll();
      }

      // GET http://localhost:3000/users/1
      @Get(":id")
      findOne(@Param("id", ParseIntPipe) id: number) { // o middleware ParseIntPipe vai tratar os dados antes de chegar no controller
        return this.usersService.findOne(id);
      }
    }
    ```

- [x] Instruções sobre como criar uma VM no azure.

- [x] `Inversão` x `injeção` de dependência: Inversão de dependência é uma coisa Injeção de dependência é outra.

- [x] Endpoint: `get` e `post` nunca colocamos nada importante nessas rotas, pois são as mais acessíveis.

- [x] Quando estamos no `front-end` temos suas opções via form e via json, sempre devemos validar os dados em `JSON`.
- [x] Estrutura de dados mais usada ao pesistir dados no banco de dados
  - [x] `Form URL Encoded`: Não existe tipo, todo mundo é string
  - [x] `JSON` *Recomendado

- [x] Uma `REST API` trabalha com verbos HTTP, e cada verbo representa uma ação:
  - [x] GET - Todos
  - [x] GET - 1
  - [x] POST - Cadastro
  - [x] PUT/PATCH - alteração
  - [x] Delete - Exclusão

  - [x] Uma `REST API`:
    - [x] Valida as regras de negócio
    - [x] Protege os dados, recursos externos
      - [x] Logs
        - [x] Servidor web
        - [x] Application Logs
          - [x] Log - acesso do usuário
            - [x] Operação d missão crítica
      - [x] Relatórios
        - [x] Gráficos
        - [x] PDF
      - [x] E-mail
        - [x] Cadastro
        - [x] Esqueci a senha
        - [x] Notificação
      - [x] Segurança
        - [x] Rotas sem autenticação
        - [x] Duração da autenticação
        - [x] Renovação da autorização
        - [x] Autenticação e Autorização

- [x] `Status Code`
  - [x] 20x
    - [x] 200 - se tudo der certo, o retorno é sempre 200;
    - [x] 201 - cadastrado com sucesso
    - [x] 206 - acesso a conteúdos de stream, deu certo mais tem mais coisa

  - [x] 50x
    - [x] 500 - Internal Server Error - O servidor encontrou uma situação que não sabe como lidar.
    - [x] 503 - Service Unavailable - O servidor não está pronto para lidar com a solicitação. Causas comuns são um servidor que está inativo para manutenção ou que está sobrecarregado. Observe que, juntamente com esta resposta, uma página amigável explicando o problema deve ser enviada.

  - [x] 40x
    - [x] 400 - Bad request - O servidor não pode ou não processará a solicitação devido a algo que é percebido como um erro do cliente (por exemplo, sintaxe de solicitação malformada, estrutura de mensagem de solicitação inválida ou roteamento de solicitação enganoso).
    - [x] 401 - Unauthorized - Embora o padrão HTTP especifique "não autorizado", semanticamente essa resposta significa "não autenticado". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
    - [x] 403 - Forbidden - Cliente não tem direitos de acesso ao conteúdo; ou seja, não é autorizado, então o servidor está se recusando a fornecer o recurso solicitado. Ao contrário 401 Unauthorizedde , a identidade do cliente é conhecida pelo servidor.

- [x] `Banco de Dados`
  - [x] MySQL
    - [x] ORM - Object Relational Mapping
      - [x] Mapeia o Banco de Dados para uma aplicação orientada a objetos
      - [x] ORM faz uma abstração do Banco de Dados para a aplicação
        - [x] TypeORM - mais antigo
          - [x] Instalação:

            ```
            npm i typeorm mysql2
            ```

        - [x] Prisma - melhor

        - [x] Estratégia usando os dois:
          - [x] TypeORM (gerar as tabelas)
          - [x] Prisma (manipular os dados)

  - [x] SQL - Structured Quert Language
    - [x] DDL - Data Definition Language - create, alter, drop
    - [x] DCL - Data Control Language - grant, deny, revoke
    - [x] DML - Data Manipulation Language - insert, update e delete
    - [x] DQL - Data Query Language - select
      - [x] Claúsulas e Operados
        - [x] Where, order by, limit, group by
        - [x] in, not in, between, not between
        - [x] like, not like, soundex
          - [x] soundex
            - [x] michael, mychael, micael, maicol
            - [x] carlos, karlos, katia, catia

  - [x] TypeORM estudar mais
    - [x] Estratégia de roda migrations
    - [x] Histórico do banco de dados

  - [x] Banco de dados Comandos
    - [x] Linux
      - [x] Acesso ao banco de dados MySql

        ``` SQL
        mysql -u root -p
        ```

      - [x] Visualizando os bancos de dados existentes:

        ``` SQL
        show databases;
        ```

      - [x] Criando banco de dados:

        ``` SQL
        create database [database-name];
        ```

      - [x] "Usando" banco de dados:

        ``` SQL
        use [database-name]
        ```

      - [x] Visualizando as colunas da tabela em questão:

        ``` SQL
        show tables;
        ```

      - [x] Excluindo tabelas do banco de dados em questão:

        ``` SQL
        drop table [table-name]
        ```

      - [x] Visualizando os dados da tabela do banco de dados em questão, em ordem decrescente:

        ``` SQL
        desc [table-name]
        ```

## Próxima aula

- [ ]
