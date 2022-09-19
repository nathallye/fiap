# Decola Tech 3

## Aula 5(16/09/2022):

- [x] **Funções**
  - [x] DRY: Don't repeat yourself
  - [x] Não repita o mesmo código em dois lugares, crie uma função
  - [x] Função é um trecho de código que executa algo e retorna um valor. O valor só será retornado quando ela for chamada. 
  - [x] Dois passo para uma função: criar e chamar.

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
                    [file_folder/file_name]
            ```

      - [x] Agora, dentro da pasta `src` vamos criar o arquivo `function.ts`.
        
        - [x] Nesse arquivo iremos criar uma função escrever/`write` e chamá-la em seguida:

          ``` TS
          // function - está livre - dirigido à abstração(não estamos informando como o retorno será usado, então isso é abstrato)
          function write(): string{ // função
            return "Hello!" // retorna um valor, diferente de uma subrotina
          }

          write(); // chamada da função; o console só será exibido no terminal quando ela for chamada
          ```
        
      - [x] **void** Não tem retorno. Funções `void` não tem retorno. Elas são `subrotinas`:

        ``` TS
        // sub - está engessada
        // depois dos dois pontos(:) especificamos o que a função/subrotina retornará, nesse caso é `void`/nada, então é uma 
        function write(): void{ // subrotina(trecho de código que executa algo)
          console.log("Hello!")
        }

        write();
        ```

      - [x] Normalmente, em um projeto temos uma pasta de funções chamada `utils` com todos arquivos de funções utilitárias;

      - [x] **Categorias de funções:**
        - [x] **Built-in Functions:** Funções nativas do JS 
          - [x] `toUpperCase`: retorna o valor da string que foi chamada convertido para maiusculo;
          - [x] `toLowerCase`: retorna o valor da string que foi chamada convertido para minúsculo.
          - [x] `toLocaleDateString()`: retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos `locales` e `options` deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função. 
          
          ``` TS
          // Built-in Functions: Funções nativas do JS
          const company = "Avanade";
          console.log(
            company.toUpperCase(),
            company.toLowerCase()
          );

          // RETORNO => 
          // AVANADE avanade
          ```

          ``` TS
          const locale: Intl.LocalesArgument = "pt-br"; // Intl.LocalesArgument é o tipo do parâmetro esperado em locale pelo toLocaleDateString 

          const options: Intl.DateTimeFormatOptions = { // Intl.DateTimeFormatOptions é o tipo do parâmetro esperado em options pelo toLocaleDateString 
            year: "numeric",
            // month: "long",
            month: "short",
            day: "numeric",
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short"
          };

          console.log(new Date().toLocaleDateString(locale, options)); // (method) Date.toLocaleDateString(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined)

          // RETORNO => 
          // segunda-feira, 19 de set. de 2022 17:40:13 BRT
          ```

        - [x] **User-defined Functions:** Funções definidas pelo usuário;

        - [x] Criando uma interface para definir os tipos obrigatórios de um elemento:
          
          ``` TS
          // criando uma interface para definir os tipos obrigatórios de um elemento
          type addressType = {
            city: string;
            state: string;
            cep: string
            number: number;
            complement?: string; // ? parâmetro opcional
          };

          type userType = {
            name: string;
            age: number;
            email: string; 
            address: addressType;
            cpf?: string; // ? parâmetro opcional
          };

          const user: userType = {
            name: "João",
            age: 25,
            email: "joao@gmail.com",
            address: { city: "Santo André", state: "SP", cep: "09190-125", number: 150 }
          };
          ```

## Projeto curso

- [ ] Cópia C6 Bank

## Assuntos prova 

- [x] Paradigmas, variaveis e tipode de dados, estrutura de repeticao, estrutura condicional, e operados logicos e relacionais;
