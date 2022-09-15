# Decola Tech 3

## Aula 4(15/09/2022):
    
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

  - [x] **Convertendo um arquivo TS para JS**
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

  - [x] **Configurar `.tsconfig` do TypeScript: Para não precisarmos rodar o comando para compilar o arquivo manualmente a cada alteração**
    - [x] Rodamos o comando seguinte:

      ``` 
      tsc --init
      ```

    - [x] No campo `target` vamos mudar a versão alvo de complilação do JS para `esNext`

    - [x] No campo `module` temos a versão do JS do `commanjs` para gerênciamento de modulos, como tratamos as referências de arquivos dentro de outro. 
    Existe também o `esmodule`, mas não é recomendado usá-lo, pois o `commanjs` sempre existiu, então ele funciona em todos os navegadores.

    - [x] No campo `rootDir` vamos colocar a pasta `./src`, estamos informando ao tsc config ficar "de olho" em tudo que tiver dentro da pasta src para compilar(pasta origem)

    - [x] No campo `outDir` vamos colocar a pasta `./dist`, estamos informando ao tsc config enviar os arquivos de complitação para a pasta dist depois de compilar(pasta destino)

    - [x] Agora, para verificarmos se está tudo funcionando vamos apagar o arquivo de compilação `main.js` que criamos com o comando `tsc src/main.ts`; em seguida vamos rodar o comando `tsc -w` para rodar o arquivo compilado de acordo com o que configuramos no `.tsconfig`
      - [x] Com o comando `tsc -w` rodando no terminal toda alteração feita é compilada automáticamente

      - [x] Executando o arquivo JS gerado no servidor node
        - [x] Para isso, vamos rodar o comando seguinte:

        ``` 
        node dist/main.js
             [diretorio/file_name]
        ```

  - [x] **Instalando o nodemon e excutando**
    - [x] O nodemon reinicia automaticamente o aplicativo quando são detectadas alterações de arquivo no diretório
    - [x] Vamos instalar o `nodemon` globalmente no nosso projeto, com o arquivo seguinte:
      
      ```
      sudo npm i -g nodemon
      ```
    - [x] Em seguida vamos startar o `nodemon` no terminal, com o comando seguinte:
    
      ```
      nodemon dist/main.js 
      ```

  - [x] **Usando condicionais**
    - [x] **if/else if/else**
      - [x] Usamos o if quando temos intervalos de valores.
      - [x] As instruções condicionais são usadas para executar diferentes ações com base em diferentes condições:
      
      ``` TS
      const ageUser: number = 23;

      if (ageUser <= 2) {
        console.log("Bebê");
      } else if (ageUser > 2 && ageUser <= 11) {
        console.log("Criança");
      } else if (ageUser > 11 && ageUser <= 19) {
        console.log("Adolescente");
      } else if (ageUser > 19 && ageUser <= 50) {
        console.log("Adulto");
      } else {
        console.log("Idoso");
      }
      ```
    
    - [x] **switch case** 
      - [x] Usamos o Switch sempre que soubermos os valores exatos(intervalos de valores) e tivermos poucas comparações.
      - [x] A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case:
        
        ``` TS
        const statusUser: number = 1;

        switch (statusUser) {
          case 1:
            console.log("Você é um usuário.");
            break;
          case 2:
            console.log("Você é admin.");
            break;
          default:
            console.log("Desculpe, opção inválida.")
        }
        ```

  - [x] **Laços de repetição** 
    - [x] **for**

    ``` TS
    // laços de repetição
    // for
    const yearFactory: number = 1920;

    // irá exibir todos os anos de fabricação partir de 1920(yearFactory) até o ano atual(2022)
    // método para pegar o ano corrente: new Date().getFullYear()
    for (let x: number = yearFactory; x <= new Date().getFullYear(); x++) {
      console.log(x, " ");
    }

    console.log("-----------------------------------------------------")

    // irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory)
    // método para pegar o ano corrente: new Date().getFullYear()
    for (let x: number = new Date().getFullYear(); x >= yearFactory; x--) {
      console.log(x, " ");
    }

    console.log("-----------------------------------------------------")

    // irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory) de 10 em 10 
    for (let x: number = new Date().getFullYear(); x >= yearFactory; x-=10) {
      console.log(x, " ");
    }

    console.log("-----------------------------------------------------")

    // irá exibir todos os anos de fabricação partir de 1920(yearFactory) até o ano atual(2022) de 10 em 10
    for (let x: number = yearFactory; x <= new Date().getFullYear(); x+=10) {
      console.log(x, " ");
    }

    console.log("-----------------------------------------------------")

    // irá exibir todos os anos de fabricação do ano atual(2022) até 1920(yearFactory) de 10 em 10 
    for (let x: number = new Date().getFullYear(); x >= yearFactory; x-=10) {
      if (x >= 1990 && x < 2000) { // se x for igual ou maior que 1990 e menor de 2000
        continue; // apenas continue, não faça nada(ou seja, iremos pular esses anos)
      }
      console.log(x, " ");
    }
    ```

## Assuntos prova 
  - [ ] Paradigmas, variaveis e tipode de dados, estrutura de repeticao, estrutura condicional, e operados logicos e relacionais;
