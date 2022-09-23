# Decola Tech 3

## Conteúdos do dia(23/09/2022)

- [x] **Iniciando um projeto JS**

  - [x] Vamos criar o arquivo descritor do node `package.json` que armazena a declaração das dependências do projeto que evita a instalação novamente de todas as dependências/módulos manualmente se por ventura trocarmos de máquina ou enviarmos esse projeto para outra pessoa, podendo serem instaladas através desse arquivo usando o comando `npm install`. E para criarmos esse arquivo vamos rodar o comando seguinte no terminal:

    ```
    npm init -y
    ```

    -[x] **Obs.:** -y - É para responder todas as perguntas dessa inicialização de forma padrão.

- [x] Tags HTML
  - [x] `Link:css`
    - [x] `rel` - relação folha de estilo/`stylesheet`
    - [x] `href` - referência ao arquivo de folha de estilo 
      
      ``` HTML
      <link rel="stylesheet" href="assets/css/main.css">
      ```
  
  - [x] `header` - cabeçalho - tag dentro do `body`
    - [x] `nav` - tag para menu de navegação
      - [x] Toda vez que queremos fazer uma sequência de itens iguais é uma listam, como por exemplo um menu de navegação
        - [x] `ol` - Ordened List
          - [x] `li` - List Item/Item da lista
        - [x] `ul` - Unordened List
          - [x] `li` - List Item/Item da lista

            ``` HTML
            <nav>
              <ul>
                <li><a href="#">Pessoa Física</a></li>
                <li><a href="#">Pessoa Jurídica</a></li>
                <li><a href="#">C6 MEI</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tire suas dúvidas</a></li>
              </ul>
            </nav>
            ```

    - [x] `button` - tag para butão 

- [x] `section`- 

- [x] `emmet`
  - [x] header>div+nav>ul>li*5

    ``` HTML
    <header>
      <div></div>
      <nav>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </nav>
    </header>
    ```

- [x] `sass`
  - [x] Sass é a linguagem de extensão CSS de nível profissional mais madura, estável e poderosa  do mundo.
    - [x] Instalação - no terminal vamos rodar o comando seguinte: 
    
      ```
      npm install -g sass
      ```
  - [x] Arquivo `main.scss` é só importação dos outros arquivos scss;

  - [x] `&` de dentro do elemento atual(tag), pegue o:
    
    ``` SCSS
    header {
      background-color: #fff;
      
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      z-index: 100; 
      top: 0;
      width: 100%; 

      & > nav { // de dentro do header pegue o elemento nav
        width: 70%;

        > ul { // e dentro do nav pegue o elemento ul
          display: flex;

          margin: 0;
        }
      }
    }
    ``` 

- [x] **Criando scripts de automação**
  - [x] No arquivo `package.json` no campo `scripts`
    - [x] Automação para o sass "vigiar"(watch) os arquivos `scss`(sass) na pasta ./assets/scss/ e criar os arquivos `css` na pasta ./assets/css:
      
      ``` JSON
      "scripts": {
        "dev": "sass --watch ./assets/scss/:./assets/css --style compressed --no-source-map"
      }
      ```
    
      - [x] Agora, conseguimos rodar esse script com o comando `npm run dev`;

## Próxima aula

- [ ] 
