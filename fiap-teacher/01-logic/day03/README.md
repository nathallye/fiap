# Decola Tech 3

## Aula 3(14/09/2022):

- [x] **Variáveis de memória**
  - [x] Espaço na memória do computador, onde armazenamos valores, temporariamente.
    - [x] Number, String, Array, Object, Date, Boolean
  - [x] `var` nível global. - sofre hoisting
  - [x] `const` e `let` - respeitam o escopo.
    - [x] constante - Não muda de valor. `const`
      - [x] `const` nome = document.querySelector(”#nome”);
    - [x] variável - pode mudar de valor. `let`
      - [x] `let` empresa = ‘Avanade’
      - [x] empresa = ‘Microsoft’
  
- [x] **Expressões regulares - regular expression - regex**
  - [x] Facilitam a identificação de um padrão.
  - [x] 01311-100
  - [x] isCep, isEmail
  - [x] a@a.br
  - [x] a@a.gov.br
  - [x] regex
  - [x] “copo d\’água”
  - [x] email
    - [x] /^[a-z0-9._]+@[a-z0-9._]\.([a-z]+)?$/i;
    - [x] / / - representa o início e o fim ou seja, delimitadores.
    - [x] / /i; - i representa case insensitive. Ponto e virgula para finalizar(;) 
    - [x] /^ $/i; - dentro dos delimitadores comece com ^ e termine com $
    - [x] /^[a-z0-9._]$/i; - entre colchetes[] informamos que o préfixo/inicio do e-mail tem que ter ao menos uma letra de a à z, e/ou um número de 0 à 9, e/ou um caracter _ e . 
    - [x] /^[a-z0-9._]+@$/i; - +@ obrigatóriamente tem que ter um arroba(o + informa que estamos juntando, ou seja, o prefixo com o @)
    - [x] /^[a-z0-9._]+@[a-z0-9._]$/i; - depois do arroba entre colchetes[] informamos que deve ter ao menos uma letra de a à z, e/ou um número de 0 à 9, e/ou um caracter _ e . 
    - [x] /^[a-z0-9._]+@[a-z0-9._]\.$/i; - \. a contra barra é o escape para que o elemento (.) seja lido de forma literal(com o uso do \ não precisamos do +, ele já faz esse trabalho de juntar)
    - [x] /^[a-z0-9._]+@[a-z0-9._]\.([a-z]+)?$/i; - [a-z] depois do (.) pode ao menos uma letra de a à z e depois deles pode ter mais(+) elementos, no entanto é opcional(?)

  - [x] CEP
    - [x] /^[0-9]{5}\-[0-9]{3}$/;
    - [x] Ex. 01311-100

  - [x] CPF
    - [x] Ex. 123.123.123-30
    - [x] /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;

  - [x] ? - opcional
  - [x] / representa o início e o fim ou seja. delimitadores.
  - [x] caseInsensitive. tanto faz maiúsculas ou minúsculas. representado pela letra i
  - [x] ^ - comece com
  - [x] $ - termine com
  - [x] /i; - insensitive

- [x] **Computador**
  - [x] Hardware
    - [x] Armazenamento - HD Hard Disk - SSD - Solid Disk Drive nvme - finito.
      - [x] 1 Byte - 8 bytes - 1 caracter - 1024 KB - 1024 MB - 1024 GB - 1024 TB - 1024 PB petabyte - 1024 ZB zettabyte - 1024 - yottabyte YB

    - [x] Processamento
      - [x] Cérebro do computador.
      - [x] Intel - i5 …
      - [x] AMD - Rayzen 5.
      - [x] Apple - M1 M1 Pro

    - [x] Memória
      - [x] 4GB - sofrer no mundo do desenvolvimento
      - [x] 8GB
      - [x] 16GB
      - [x] 32GB

    - [x] periféricos
      - [x] Placa de vídeo.
      
    - [x] Software
      - [x] VSCode
      - [x] Insomnia, PostMan, (VSCode extension REST API)
      - [x] Banco de Dados - MySQL, MongoDB, MS SQL Server, Oracle Database, PostgreSQL, Firebase
      - [x] Servidor Web - Apache, Nginx, IIS
      - [x] Linguagem de programação Back-End- PHP, NodeJS, C#, C++, Java
      - [x] Framework - .NET Framework, JVM, Django
      - [x] NodeJS - Ferramental.

- [x] **Organização de pastas e diretórios**
  - [x] c:\tools
    - [x] c:\tools\apache
    - [x] c:\tools\php
    - [x] c:\tools\nodejs
    - [x] c:\tools\python

- [x] c:\fiap\
  - [x] c:\fiap\logica
  - [x] c:\fiap\node
  - [x] c:\fiap\react
  - [x] c:\fiap\web
    
- [x] **TypeScript**

  -[x] Vamos criar o arquivo descritor do node `package.json` que armazena a declaração das dependências do projeto que evita a instalação novamente de todas as dependências/módulos manualmente se por ventura trocarmos de máquina ou enviarmos esse projeto para outra pessoa, podendo serem instaladas através desse arquivo usando o comando `npm install`. E para criarmos esse arquivo vamos rodar o comando seguinte no terminal:

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

  - [x] Convertendo um arquivo TS para JS
    - [x] Rodamos o comando seguinte:

      ``` 
        tsc src/main.ts
            [diretorio/file_name]
      ```

  - [x] Executando o arquivo JS gerado no servidor node
    - [x] Rodamos o comando seguinte:

      ``` 
        node src/main.js
             [diretorio/file_name]
      ```

  - [x] Configurar `.tsconfig` o TypeScript
    - [x] Rodamos o comando seguinte:

      ``` 
        tsc --init
      ```

## Próxima aula

- [ ]  NodeJS, NPM, Yarn
- [ ]  Estrutura de Dados
- [ ]  Estruturas de controle
- [ ]  Laços de repetição
- [ ]  Funções    