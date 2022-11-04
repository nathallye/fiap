# Decola Tech 3

## Aula 11(04/11/2022)

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
    - [x] Instalação:

      ```
      npm i typeorm mysql2
      ```

  - [x] Prisma
    - [x] Documentação https://docs.nestjs.com/recipes/prisma
    - [x] Instalação:

      ```
      npm i prisma --save-dev
      ```

    - [x] Executando o primas:

      ```
      npx prisma init
      ```

      - [x] Na raiz do projeto ele cria uma uma pasta chamada `prisma` e um arquivo `schema.prisma`.

      - [x] E exibe alguns avisos e os próximos passos:

        ```
        warn Prisma would have added DATABASE_URL but it already exists in .env
        warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

        1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
        2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
        3. Run prisma db pull to turn your database schema into a Prisma schema.
        4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
        ```

      - [x] 1. Criamos as variáveis de ambiente

      - [x] Instalamos o primas/client com o comando seguinte:

        ```
        npm install @prisma/client
        ```

      - [x] 2. Atualizamos o arquivo `schema.prisma` para o dababase que iremos usar(mysql):

        ``` prisma
        generator client {
          provider = "prisma-client-js"
        }

        datasource db {
          provider = "mysql"
          url      = env("DATABASE_URL")
        }
        ```

      - [x] 3. Atualizamos banco de dados prisma com o comando seguinte:

        ```
        npx prisma db pull
        ```

      - [x] 4. Em seguida rodamos o comando prisma generate:

        ```
        npx prisma generate
        ```

      - [x] Criamos o arquivo `prisma.service.ts` dentro da pasta `src`, com o conteúdo seguinte:

        ``` TS
        // esse conteúdo foi copiado da documentação https://docs.nestjs.com/recipes/prisma, da seção "Install and generate Prisma Client"

        import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
        import { PrismaClient } from "@prisma/client";

        @Injectable()
        export class PrismaService extends PrismaClient implements OnModuleInit {
          async onModuleInit() {
            await this.$connect();
          }

          async enableShutdownHooks(app: INestApplication) {
            this.$on("beforeExit", async () => {
              await app.close();
            });
          }
        }
        ```

      - [x] Feito isso, conseguimos ir no `UsersService` e mudar o construtor para apontar para o `PrismaService` para ele ser usado como injeção de dependência:

        ``` JS
        import { Injectable } from "@nestjs/common";
        import { PrismaService } from "../prisma.service";
        import { UpdateUserDTO } from "./dto/uptadeUser.dto";

        @Injectable()
        export class UsersService {
          constructor(private prisma: PrismaService) {} // avisando ao UserService que iremos usar o PrismaService(banco de dados)
        }
        ```

      - [x] Em seguida, ao criar um usuário vamos recebermos dados na requisão(`req`) que será uma promise do tipo `users`, vamos armazenar cada dado desse objeto `data` na sua própria const com `destructuring assignment`:

        ``` JS
        import { Injectable } from "@nestjs/common";
        import { PrismaService } from "../prisma.service";
        import { UpdateUserDTO } from "./dto/uptadeUser.dto";

        @Injectable()
        export class UsersService {
          constructor(private prisma: PrismaService) {}

          const { name, email, password } = data;
        }
        ```

      - [x] Feito isso, vamos armazenar na const `user` o retorno dessa promesa/promise que irá chamar o `create` passando os dados recebidos(para seus respectivos campos) para persistir esses dados no BD; e se/`if` o objeto `user` estiver `undefined` então será retornado um erro, se der tudo certo será retornado o objeto `user`:

        ``` TS
        import { Injectable } from "@nestjs/common";
        import { PrismaService } from "../prisma.service";
        import { UpdateUserDTO } from "./dto/uptadeUser.dto";

        @Injectable()
        export class UsersService {
          constructor(private prisma: PrismaService) {}

          async create(data): Promise<users> {
            const { name, email, password } = data;
            const user = await this.prisma.users.create({
              data: {
                name, // abreviação de name: name
                email,
                password
              }
            });

            if (!user) {
              throw new Error("Erro ao criar usuário!")
            }
            return user;
          }
        // [...]
        }
        ```

      - [x] Vamos voltar no `user.module` importar o `PrismaService` e informar que esse é o service ele deve "ficar de olho":

        ``` TS
        import { Module } from "@nestjs/common";
        import { UsersController } from "./users.controller";
        import { UsersService } from "./users.service";
        import { PrismaService } from "../prisma.service";

        @Module({
          controllers: [UsersController],
          providers: [UsersService, PrismaService]
        })
        export class UsersModule {}
        ```

  - [x] Arquivo `package.json`
    - [x] `"dependencies"` é em produção.
      - [x] Quando usamos a flag `--save`(mesma não colocando o `--save` salva em "dependencies")
    - [x] `"devDependencies"` é em desenvolvimento
      - [x] Quando usamos a flag `--save-dev`

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

  - [x] Erros no arquivo `users.service`:

    ``` TS
    import { Injectable } from "@nestjs/common";
    import { PrismaService } from "../prisma.service";
    import { CreateUserDTO } from "./dto/createUser.dto";
    import { UpdateUserDTO } from "./dto/uptadeUser.dto";

    @Injectable()
    export class UsersService {
      constructor(private prisma: PrismaService) {}

      async create(data: CreateUserDTO): Promise<users> {
        // temos dois problemas aqui
        // 1º o email não está sendo verificado se já existe no banco de dados
        // 2° a senha está em formato clear text

        // as restrições em banco de dados impedem redundâncias e anomailias (constaints - restrições)
        // chave primária - impede duplicidade, e obriga o preenchimento, além de ser um índice físico(clustered index)

        // busca para saber se o usuário já existe
        // findUnique é um método do prisma que busca um usuário pelo campo único por exemplo email
        // findFirst é um método do prisma que busca o primeiro registro que encontrar - quando não temos chave primária - mais pesado - porque ele carrega a tabela toda
        const { name, email, password } = data;
        const user = await this.prisma.users.create({
          data: {
            name, // abreviação de name: name
            email,
            password
          }
        });

        if (!user) {
          throw new Error("Erro ao criar usuário!")
        }
        return user;
      }
    // [...]
    }
    ```

    - [x] Ajustes no arquivo `users.service`:

      ``` TS
      import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
      import { users } from "@prisma/client";
      import { PrismaService } from "../prisma.service";
      import { CreateUserDTO } from "./dto/createUser.dto";
      import { UpdateUserDTO } from "./dto/uptadeUser.dto";

      @Injectable()
      export class UsersService {
        constructor(private prisma: PrismaService) {}

        async verifyUserExists(email: string): Promise<boolean> { // método para verificar se o usuário existe
          const user = await this.prisma.users.findUnique({
            where: {
              email: email
            }
          });
          return user ? true : false;
        }

        async create(data: CreateUserDTO): Promise<users> {
          const { name, email, password } = data;
          const checkUser = await this.verifyUserExists(email);
          let user = undefined;

          if (!checkUser) {
            user = await this.prisma.users.create({
              data: {
                name,
                email,
                password
              }
            });
          }

          if (!user) {
            throw new HttpException(
              {
                status: HttpStatus.FORBIDDEN,
                message: "Erro ao criar usuário!",
              },
              HttpStatus.FORBIDDEN,
            );
          }
          return user;
        }

        // [...]
      }
      ```

- [x] Configuração da VM OS Ubuntu
  - [x] Comandos no Linux
    - [x] Buscar últimos comandos executados

      ```
      $ history | grey ssh
                        [command]
      ```

    - [x] Verificar o que esta rodando na máquina:

      ```
      netstat
      ```

  - [x] Seguindo o tutorial da Digital Ocean para configurar um aplicativo Node.js para produção no Ubuntu
    - [x] https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04

    - [x] Instalando o NodeJS

      ```
      $ curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
      sudo apt-get install -y nodejs
      ```

    - [x] Para que alguns pacotes `npm` funcionem (aqueles que exigem compilar código do código-fonte, por exemplo), precisamos instalar o pacote `build-essential`:

      ```
      $ sudo apt install build-essential
      ```

    - [x] Criar a pasta do servidor web

      ```
      /var/www
      ```

    - [x] Instalar o PM2

      ```
      $ sudo npm install pm2@latest -g
      ```

    - [x] Instalar o nginx e configurar como um servidor proxy reverso

      - [x] Instalação:

        ```
        $ sudo apt update
        $ sudo apt install nginx
        $ sudo ufw app list
        $ sudo ufw allow 'Nginx HTTP'
        $ sudo ufw status
        ```

      - [x] Configuração:

        Acessando o diretório e abrindo com o editor nano:

          ```
          $ cd /etc/nginx/sites-available
          $ sudo nano default
          ```

        Abrindo e substituindo o conteúdo desse bloco pela configuração a seguir:

          ```
          server {
          ...
            location / {
              proxy_pass http://localhost:3000;
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection 'upgrade';
              proxy_set_header Host $host;
              proxy_cache_bypass $http_upgrade;
            }
          ...
          }
          ```

        Quando terminarmos de adicionar os blocos de localização para os aplicativos, devemos salvar o arquivo e sair do editor:

          ```
          $ sudo nginx -t
          ```

        Reiniciando o Nginx:

          ```
          sudo systemctl restart nginx
          ```

  - [x] Testes unitários
    - [x] Links para estudos:
      - [x] https://jestjs.io/pt-BR/docs/using-matchers
      - [x] https://www.youtube.com/c/TraversyMedia
    - [x] São testes escritos para testar funções, ou módulos, ou controllers, services. O NextJS já vem com uma estrutura excelente para testes.
    	- [x] NestJS cria automaticamente os teste para controllers e services.
      - [x] *.spec.ts *.spec.js *.test.ts *.test.js
	    - [x] Suíte de testes, é um agrupamento de todos os testes que tem a ver com o mesmo assunto.
		    - [x] describe. você determina o que será feito. sempre em inglês.

      - [x] it ou test - agora vamos escrever um teste.
			  - [x] descrição do teste
			  - [x] arrow function que é o teste em si.
				  - [x] Expect - eu espero que aconteça. parâmetro do teste.
				  - [x] Em volta do expect, nós podemos utilizar os matchers, que são as funções de teste, .toBe('Usuário cadastrado com sucesso!').toEqual().notUndefined

    - [x] Comando para rodar os testes: `npm test` ou `npm test [caminho-do-arquivo]`.

  - [x] Integração do back-end com front-end
    - [x] Vamos habilitar o cors
    - [x] E rodar aplicação back-end
    - [x] No front-end vamos baixar a depência axios e usar para acessar a porta que está rodando a aplicação back-end.


## Próxima aula

- [ ]
