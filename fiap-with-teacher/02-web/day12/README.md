# Decola Tech 3

## Aula 12(06/10/2022)

- [x] Tabelas
  - [x] Coluna é o tipo de informação
  - [x] Linhas são os registros
  - [x] Tags
    - [x] `<table>` - Tag para `criar uma tabela`;
      - [x] `<thead>` - Tag para criar o `cabeçalho da tabela`;
        - [x] ` <tr>` - Tag para criar uma `linha para inserirmos as colunas`;
          - [x] `<th>` - Tag para criar uma `coluna do cabeçalho`, ela já deixa o texto em negrito;
      - [x] `<tbody>` - Tag para criar o `corpo da tabela`;
        - [x] `<tr>` - Tag para criar uma `linha para inserirmos as colunas`;
          - [x] `<td>` - Tag para criar uma `coluna`
      - [x] `<tfoot>` - Tag para criar o `rodapé da tabela`;
        - [x] ` <tr>` - Tag para criar uma `linha para inserirmos as colunas`;
          - [x] `<th>` - Tag para criar uma `coluna do rodapé`, ela já deixa o texto em negrito;

    - [x] Exemplo:

      ``` HTML
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Trabalhando com tabelas</title>
      </head>
      <body>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Components</th>
              <th>Price</th>
              <th></th>
              <th></th>
              <th>Day</th>
              <th>Year</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VALE3</td>
              <td>Vale S. a</td>
              <td>76.96</td>
              <td></td>
              <td>1.17</td>
              <td>1.54%</td>
              <td>-0.13%</td>
              <td>Oct/05</td>
            </tr>
            <tr>
              <td>VALE3</td>
              <td>Vale S. a</td>
              <td>76.96</td>
              <td></td>
              <td>1.17</td>
              <td>1.54%</td>
              <td>-0.13%</td>
              <td>Oct/05</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Components</th>
              <th>Price</th>
              <th></th>
              <th></th>
              <th>Day</th>
              <th>Year</th>
              <th>Date</th>
            </tr>
          </tfoot>
        </table>
      </body>
      </html>
      ```

- [x] Bootstrap
  - [x] Podemos instalar a dependência do bootstrap com o comando `npm install bootstrap`.
    - [x] O arquivo do bootstrap que contém todos as classes css é o `node_modules/bootstrap/dist/css/bootstrap.min.css`. E vamos importá-la no nosso arquivo HTML para ficar disponível no projeto.

      ``` HTML
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
      ```

    - [x] O arquivo do bootstrap que contém todos os scripts JS é o `node_modules/bootstrap/dist/css/bootstrap.min.js`. E vamos importá-la no nosso arquivo HTML para ficar disponível no projeto.

      ``` HTML
      <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      ```

- [x] Colocando nosso site no github pages https://pages.github.com/


## Próxima aula

- [ ]

## Revisão para a prova

- [x] Selecionar elemento HTML para usar no JS - `documento.querySelector("")`;
- [x] Para criar um elemento HTML dinâmicamento com JS - create;
- [x] Função `pop` - remove o item do final do Array;
- [x] Função `shift` - remove o item do inicio do Array;
- [x] Função `split` - divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita de acordo com o delimitador informado. Por exemplo, pode ser espaço (" ");
- [x] Função `slice` - de até, não incluindo o último elemento do até, exemplo (0, 3) vai pegar os indices 0, 1, 2. O 3 não é incluído;
- [x] Função `splice` - início e quantidade(mais simples);
- [x] `forEach` - percorre todas as posições do próprio array
- [x] `map` - - percorre todas as posições é gera um novo array
