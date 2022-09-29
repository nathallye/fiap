# Decola Tech 3

## Aula 1(21/09/2022)

- [x] Linguagem de Marcação é `HTML`;
- [x] Linguagem de Estilo é `CSS`;
- [x] Linguagem de Programação é `JavaScript`;
- [x] Código Semântico
  - [x] `h1` - título da página
  - [x] `h2` - subtítulo
  - [x] Só podemos ter um `h6` no código se tivermos os elementos `h3`, `h4` e `h5`. Isso é código semântico.
- [x] Tags Básicas
- [ ]  Tabelas e listas

- [x] Extensões
  - [x] Live Server: Inicie um servidor local de desenvolvimento com recurso de recarga ao vivo para páginas estáticas e dinâmicas.

- [x] Estrutura de pastas de um sistema WEB
  - [x] assets
    - [x] /scss
    - [x] /css
    - [x] /js
    - [x] /images
    - [x] /fonts
  - [x] index.html
  - [x] A pasta `css` pode ficar dentro de uma pasta chamada `styles`
  - [x] A pasta `js` pode ficar dentro de uma pasta chamada `script`

- [x] emmet extension in vscode
  - [x] html:5 - atalho para iniciar uma estrutura html

    ``` HTML
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    </body>
    </html>
    ```

  - [x] Todo comando HTML chamamos de `tag` ou `elemento`, toda tag que abre tem que fechar.
    - [x] O que está entre as tags de abertura e fechamento é o `conteúdo`:

      ``` HTML
      <h1>
        Conteúdo
      </h1>
      ```

    - [x] O que está dentro da tag de abertura é os `atributos`:

      ``` HTML
      <h1 style="margin: 0; font-size: 5em; font-weight: 300; font-family: 'Robot';">
        Conteúdo
      </h1>
      ```

  - [x] `DOCTYPE`
    - [x] Não é uma tag do HTML, e sim `para o navegador`. Irá informar para o navegador o `tipo de documento` que ele deve carregar:
    - [x] <!DOCTYPE html>

  - [x] Tag `html`
    - [x] Atributos globais:
      - [x] O `lang` é um atributo global:

        ``` HTML
        <html lang="pt-br">

        </html>
        ```

      - [x] Outros atributos globais: `class`, `id`, `style`.

    - [x] Dentro do HTML5 tudo funciona por hierarquia
      - [x] A tag `html` é um elemento ancestral e tem apenas dois filhos(`head` e `body`):

        ``` HTML
        <html lang="pt-br">
          <head></head>
          <body></body>
        </html>
        ```

        - [x] `head` - Carrega tudo que deve existir antes da página ser exibida.
          - [x] Dentro do `head` temos as tags `meta`(informações de configuração - tag de auto fechamento), `title` e `link`(para carregar os arquivos css).

            ``` HTML
            <html lang="pt-br">
              <head>
                <meta charset="UTF-8" /> <!--tag de auto fechamento-->
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!--tag de auto fechamento-->
                <title>Curso de HTML5, CSS3 & JS</title> <!--titulo da página na aba do navegador-->
              </head>
            </html>
            ```

        - [x] `body` - É o que é exibido quando a página é carregada.
          - [x] Dentro dele teremos `div`(divisão/container) e dentro das `div`s teremos as tags `h1`, `h2`...

            ``` HTML
            <html lang="pt-br">
              <head>
                <meta charset="UTF-8" /> <!--tag de auto fechamento-->
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!--tag de auto fechamento-->
                <title>Curso de HTML5, CSS3 & JS</title> <!--titulo da página na aba do navegador-->
              </head>
              <body>
                <div>
                  <h1>Seja bem vindo(a) ao curso de HTML5, CSS3 & JavaScript!</h1> <!--somente um h1 por página ou por section-->
                  <h2>No momento o assunto é <i>HTML5</i></h2> <!--tag  h2 - subtítulo; i - itálico-->
                </div>
              </body>
            </html>
            ```

- [x] Dicas de boas práticas para criar um site profissional:
  - [x] Use fontes diferentes do padrão do navegador
    - [x] Padrão do navegador "Times new roman"
  - [x] Evite a cor preta
    - [x] Preferencia um tom de cinza
  - [x] Quando usar imagens, use imagens de alta definição bem pensadas
    - [x] Vetores - ícones - .svg
    - [x] Fundo transparente - .webp(qualidade de um png, com peso de um jpg compactado)
    - [x] Imagens - .jpg em último caso, se não tiver como usar as demias acima... usa PNG se tiver fundo transparente.

## Próxima aula

- [ ] get & set

## Grupo da semana

- Isabel Souza
- Isabella Sanchis
- Isadora Araujo
- José Fagundes
- Nathallye Tavares
- Tifane Sousa
