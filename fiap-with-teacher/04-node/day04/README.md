# Decola Tech 3

## Aula 4(25/10/2022)

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

  - `Criação do module, controller e service de uma vez`:

    ```
    nest g resource logistics
                    [module_name]
    ```

- [x] Instruções sobre como criar uma VM no azure.

- [x] Inversão de `dependência` x `injeção`: Inversão de dependência é uma coisa Injeção é outra.

- [x] Endpoint: `get` e `post` nunca colocamos nada importante nessas rotas, pois são as mais acessíveis.

## Próxima aula

- [ ]
