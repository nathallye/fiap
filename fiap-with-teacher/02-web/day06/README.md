# Decola Tech 3

## Aula 6(28/09/2022)

- [x] **Criando um NPM script para automação do GIT**
  - [x] No arquivo `package.json` no compo `scripts`
    - [x] Vamos criar um script com o nome `git`

      ``` JSON
      // [...]
      "scripts": {
        "dev": "sass --watch ./assets/scss/:./assets/css --style compressed --no-source-map",
        "git": "git add . && git commit -m\"web - day06\" && git push origin master && echo \"Concluid\" && npm run dev"
      },
      ```

      - [x] Esse comando vai adicionar todos os arquivos a área de espera(`git add .`) e(&&) comitar com a mensagem "web - day06"(`git commit -m\"web - day06\"`) e(&&) em seguida empurrar esses arquivos para o repositório remoto github(`git push origin master`) e(&&) terminando será lançada uma mensagem no terminal de "Concluid".

      - [x] Para rodarmos vamos usar o comando `npm run git`
        - [x] No entanto, esse comando não vai rodar nesse caso atual, onde possuo uma pasta geral chamada fiap e nela que inicializei o git e o arquivo package consta somente nas partas das aulas. Consigo rodar o git add . && git commit nas pastas de aulas, mas o push deve ser feito na pasta raiz.

- [x] **HTML5 semântico**
  - [x] **Elemento de linha:** Não possuem largura, altura, posicionamento
    - [x] Formata Fonte e cor
      - [x] <span> e <a> outros elementos de linha: <strong><i><s>
      - [x] É possível alterar isso via CSS
        - [x] display:block
        - [x] display: inline-block
        - [x] display: flex
        - [x] display: inline-flex

    - [x] **Elemento de bloco:** Define o layout, possui largura e altura e posicionamento
      - [x] <div> <p> <h1> <h6> - Div não tem significadon semântico, pode ser usado para formatação sem interferir na semântica da página
      - [x] HTML5 possui novos elementos com significado semântico
        - [x] SEO - Search Engine Optmization - Otimização para os motores de busca
          - [x] Não é somente tags, conjunto de ações: Ex. Título da página, semelhante ao <h1> da página, semelhante ao conteúdo da página <p>. Ex. Página fala sobre a Ferrari. O que tem no título da página? tem haver com o conteúdo da página? o conteúdo justifica o título, ou é click bait.bait.

        - [x] <header> - cabeçalho da página ou de uma seção. Só pode haver um no mesmo nível hierárquico. ou seja, ou uma tag <header> na página, ou em cada seção.
          - [x] 1 tag header na página ou por seção
        
        - [x] <section> - cria uma seção isolada na página.
          - [x] Ex. Site da Apple para iPhone 14 cada parte da landing page é uma section
        
        - [x] <footer> - rodapé da página ou de uma seção. Só pode haver um no mesmo nível hierárquico. ou seja, ou uma tag <footer> na página, ou em cada seção.
          - [x] 1 tag <footer> na página ou por seção
          - [x] Em que situação podemos ter três tags footer?
            - [x] Uma página principal e os outros dois em duas sections
            - [x] Se houver 3 sections, um footer para cada section

        - [x] <nav> - Menu de navegação. Dentro dele haverá hiperlinks (<a>)

        - [x] <main> - Conteúdo principal da página. 1 por página
        
        - [x] <article> - Conteúdo jornalístico ou científico.
        
        - [x] <div> - Quando não importância semântica.

        - [x] <aside> - Tag semântica opcional. Publicidade.
  
  - [x] `Google lighthouse` para verificarmos como está a semântica, responsividade da página

- [x] **Validação da tela de Login** 
  - [x] Validação dos formulários com JS

  - [x] Arquitetura Cliente/Servidor
    - [x] `Resquest` - O servidor está solicitando uma informação
    - [x] `Response` - Quando enviamos um formulário para o servidor com informações o servidor recupera essas informações e devolve uma resposta
  
  - [x] A tag `form` serve para agrupar os inputs e enviar junto para o servidor.
    - [x] Tem duas propriedades `method` e `action`:
      - [x] `method` - por padrão é `get`
        - [x] `get` - para envio de dados sigilosos não devemos usar
        - [x] `post` - recomendado para envio de dados sigilosos
      - [x] `action` - a action que seremos redirecionados para autenticação, action não é mais usado, ao invés disso é usado uma função JS para quando alguém envia o formulário é feita a validão na mesma página
  
  - [x] Validão senha com REGEX:
    
    ``` HTML
    <input type="password" name="password" id="password" required placeholder="Digite a senha" 
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="A senha deve conter ao menos uma letra minúscula, uma letra maiúscula, um número e pelo menos 8 caracteres" />
    ```

  - [x] Validação do CPF:
    
    ``` HTML
    <input type="text" name="login" id="login" required placeholder="Digite o CPF" 
      pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}" 
        title="O CPF deve conter o formato 123-456-789-00" />
    ```

- [x] Trabalhando com JS em um arquivo externo
  - [x] Dicas
    - [x] Existem 7 tipos de erros diferentes no JS, 3 deles são os principais
      - [x] 1. `SyntaxError`: Erro de escrita
      - [x] 2. `ReferenceError`: Chamou alguém que não existe. Exemplo, chamou uma variável que não foi declarada.
      - [x] 3. `TypeError`: Violou alguma regra. Por exemplo, atribuir um novo valor para uma constante.
      - [x] 4. RangeError:
      - [x] 5. EvalError:
      - [x] 6. InternalError:
      - [x] 7. URIError

      - [x]
      - [x]
      - [x]


## Próxima aula

- [ ] 

## Conteúdo prova

[ ] Elementos Semânticos do HRML5 - SEO
[ ] Principais propriedades do CSS3
[ ] Funções JavaScript

