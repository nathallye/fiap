# Decola Tech 3

## Aula 1(20/10/2022)
- [x] `Node.js` -  Hoje saiu o Node.js 19;
  - [x] Node.js é o JS no lado do servidor;
  - [x] Node.js é baseado em dependências;
  - [x] Coleção de ferramentas que cria um ambiente para executar o JS no lado do servidor;
  - [x] JS Runtime built on Chrome's V8

    - [x] Caminho de conhecimento do Node.js:
      - [x] Conhecer a extrutura interna

        ![image](https://user-images.githubusercontent.com/86172286/196953179-07daae4a-8717-4fef-830f-5bb545870550.png)

        - [x] `V8`
          - [x] Responsável pela `análise léxica`: também conhecida como scanner ou leitura é a primeira fase de um processo de compilação e sua função é fazer a leitura do programa fonte, caractere a caractere, agrupar os caracteres em lexemas e produzir uma sequência de símbolos léxicos conhecidos como tokens.
          - [x] Responsável pela `análise sintática`: verfica se não há erro de sintaxe.
          - [x] Responsável pela `tokenização`: formato ex.: depois do `const` ele espera um `=`.

        - [x] `LibUV`
          - [x] Faz o JS funcionar do lado do servidor
          - [x] Event Loop: single thread - tudo acontece em uma única thread/único caminho
            - [x] thread - caminho, forma que o processador vai executar uma tarefa
            - [x] O node em si é single thread, mas se ele precisar de operações externas ele pode usar o mult thread
          - [x] Gerencia requisições, coloca em fila, em um Event Loop

          ![image](https://user-images.githubusercontent.com/86172286/196953236-b76a3f9b-a3f3-4aa3-9544-bf4ecd27c3ee.png)

      - [x] Conhecer a API Nativas do Nodejs
      - [x] Conhecer a API Externa

  - [x] `Sync` - odas as funções Sync são bloqueantes - ou seja, toda vez que ele encontrar uma função Sync ele irá parar a execução da aplicação para executar a função
  - [x] Prefira utilizar as funções `Async` - ele vai delegar a execução e rodar em segundo plano

- [x] Toda tecnologia tem a versão LTS e Current;
  - [x] `LTS` - Latest Stable Version(Última versão estável).
  - [x] `Current` - Versão atual que contém os recursos mais recentes.

## Próxima aula

- [ ]
