# Decola Tech 3

## Aula 2(10/10/2022)

- [x] React
  - [x] Antigamente tinhamos somente componentes estáticos - Usados para construir uma tela
    - [x] `Componente baseado em Classe/Programação Orientada a Objetos`
      - [x] Antes da versão 16.8
        // imagem
        - [x] `componentDidMount` é executado na primeira vez que entrou na página
        - [x] `componentDidUpdate` quando aplicamos um filtro, por exemplo, na amazon quando buscamos por nome de um produto
        - [x] `componentWillUnmount` antes de fecharmos a página podemos executar algo, exemplo um pop-up com uma pergunta tem certeza?

  - [x] Hoje em dia podemos trabalhar com com componentes que gerenciam estado - Para armazenar informação e gerar conteúdo com estado
    - [x] `Componente Funcional`
      - [x] Hooks - Versão 16.8 do React
        // imagem
        - [x] Componente de Classe X Componente Funcional
          - [x] state + setState(...) => `useState(...)`
          - [x] componentDidMount() => `useEffect(...)`s
          - [x] componentDidUpdate() => `useEffect(...)`
          - [x] componentWillUnMount() => `useEffect(...)`

  - [x] CSS no React
    - [x] 5 Maneiras diferentes de utilizar CSS

      - [x] 1. Importar o `CSS` no arquivo .tsx

        ```
        import './Header.css'
        ```

      - [x] 2. Utilizando `CSS module`

        ```
        import styles from './Header.module.css'
        ```

        - [x] Como exemplo vamos criar o arquivo `styles/Header.module.css` e importá-lo dentro do arquivo `Header.tsx` assim: `import styles from "../../styles/Header.module.css";` desse modo podemos usar os estilos:

          ``` TSX
          import React from "react";
          import styles from "../../styles/Header.module.css";

          export default function Header() {
            return (
              <header className={styles.menuSite}>
                <div>Logotipo</div>
                <nav>
                  Menu
                </nav>
                <div>
                  Busca
                </div>
              </header>
            )
          };
          ```

      - [x] 3. Utilizando o `Sass`

      - [x] 4. `Styled Component` - Utilizando estilização direto no componente - Ultizando o CSS-in-JS

      - [x] 5. Utilizando alguma biblioeca de estilização - Ex. Material-UI, ele usa o `Emotion CSS`
        - [x] Preferencialmente vamos trabalhar com o Emotion e o Material-UI, para isso vamos instalar esses pacotes com o comando seguinte:

          ```
          npm i @emotion/react @emotion/css @emotion/styled @mui/material
          ```

          - [x] Agora podemos importar e aplicar os estilos usando a função `css` e o `styled component` do `emotion`
            - [x] Usando a função `css`:

              ``` TSX
              import React from "react";
              // import styles from "../../styles/Header.module.css";
              import { css } from "@emotion/css";

              export default function Header() {
                return (
                  // <header className={styles.menuSite}> // - utilizando CSS modules
                  <HeaderPage>
                    <div>Logotipo</div>

                    <nav>
                      <ul className={ css`
                        display: inline-flex;
                        width: 90%;
                        margin: 0px;
                        padding: 0;
                        > li {
                          text-align: center;
                          list-style: none;
                          min-width: 120px;
                        }
                      `}>
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Serviços</li>
                        <li>Contato</li>
                      </ul>
                    </nav>

                    <div>
                      Pesquisar
                    </div>
                  </HeaderPage>
                  // </header>
                )
              };
              ```

          - [x] Usando o `styled component`:

            ``` TSX
            import React from "react";
            import { css } from "@emotion/css";
            import styled from "@emotion/styled";

            // criando um componente estilizado com styled component
            const HeaderPage = styled.header`
              background-color: #e1e1e1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              height: 3rem;
              padding: 0 10%;
            `

            type HeaderProps = {
              menu?: Array<string>;
              pesquisar?: string;
            }

            export default function Header(props: HeaderProps) {
              return (
                <HeaderPage>
                  <div>Logotipo</div>

                  <nav>
                    <ul>
                      <li>Home</li>
                      <li>Produtos</li>
                      <li>Serviços</li>
                      <li>Contato</li>
                    </ul>
                  </nav>

                  <div>
                    Pesquisar
                  </div>
                </HeaderPage>
              )
            };
            ```

  - [x] `Props`
    - [x] Agora, queremos passar para o componente `Button` o texto a ser renderizado, para isso nossa função vai receber esses parâmetros, que por padrão no React são chamados de `props`:

      ``` TSX
      import React from "react";
      import { css } from "@emotion/css";
      import styled from "@emotion/styled";

      const HeaderPage = styled.header`
        background-color: #e1e1e1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        padding: 0 10%;
      `

      const Input = styled.input`
        backgroun-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

        border-radius: 10px;
        border: none;
        outline-color: orange;

        width: 200px;
        height: 25px;
        padding-left: 10px;
        line-height: 30px;
      `

      const Button = styled.button`
        background-color: transparent;

        border: none;

        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;

        &:hover {
          background-color: #ddd;
          cursor: pointer;
        }
      `

      export default function Header(props) {
        return (
          <HeaderPage>
            <div>Logotipo</div>

            <nav>
              <ul className={ css`
                display: inline-flex;
                width: 90%;
                margin: 0px;
                padding: 0;
                > li {
                  text-align: center;
                  list-style: none;
                  min-width: 120px;
                }
              `}>
                <li>Home</li>
                <li>Produtos</li>
                <li>Serviços</li>
                <li>Contato</li>
              </ul>
            </nav>

            <form>
              <Input placeholder="Digite aqui" />
              <Button>Pesquisar</Button>
            </form>
          </HeaderPage>
        )
      };
      ```

    - [x] Para garantir que os dados sejam passados de acordo com o esperado vamos criar um `type`:

      ``` TSX
      import React from "react";
      import { css } from "@emotion/css";
      import styled from "@emotion/styled";

      const HeaderPage = styled.header`
        background-color: #e1e1e1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        padding: 0 10%;
      `

      const Input = styled.input`
        backgroun-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

        border-radius: 10px;
        border: none;
        outline-color: orange;

        width: 200px;
        height: 25px;
        padding-left: 10px;
        line-height: 30px;
      `

      const Button = styled.button`
        background-color: transparent;

        border: none;

        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;

        &:hover {
          background-color: #ddd;
          cursor: pointer;
        }
      `

      type HeaderProps = {
        menu?: Array<string>;
        pesquisar?: string;
      }

      export default function Header(props: HeaderProps) {
        return (
          <HeaderPage>
            <div>Logotipo</div>

            <nav>
              <ul className={ css`
                display: inline-flex;
                width: 90%;
                margin: 0px;
                padding: 0;
                > li {
                  text-align: center;
                  list-style: none;
                  min-width: 120px;
                }
              `}>
                <li>Home</li>
                <li>Produtos</li>
                <li>Serviços</li>
                <li>Contato</li>
              </ul>
            </nav>

            <form>
              <Input placeholder="Digite aqui" />
              <Button>Pesquisar</Button>
            </form>
          </HeaderPage>
        )
      };
      ```

    - [x] Feito isso, podemos receber os dados e usando um operador ternário podemos controlar, se `props.pesquisar` existe(?) se verdadeiro exibimos o `props.pesquisar` senão(:) exibimos um texto padrão:

      ``` TSX
      import React from "react";
      import { css } from "@emotion/css";
      import styled from "@emotion/styled";

      const HeaderPage = styled.header`
        background-color: #e1e1e1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        padding: 0 10%;
      `

      const Input = styled.input`
        backgroun-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

        border-radius: 10px;
        border: none;
        outline-color: orange;

        width: 200px;
        height: 25px;
        padding-left: 10px;
        line-height: 30px;
      `

      const Button = styled.button`
        background-color: transparent;

        border: none;

        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;

        &:hover {
          background-color: #ddd;
          cursor: pointer;
        }
      `

      type HeaderProps = {
        menu?: Array<string>;
        pesquisar?: string;
      }

      export default function Header(props: HeaderProps) {
        return (
          <HeaderPage>
            <div>Logotipo</div>

            <nav>
              <ul className={ css`
                display: inline-flex;
                width: 90%;
                margin: 0px;
                padding: 0;
                > li {
                  text-align: center;
                  list-style: none;
                  min-width: 120px;
                }
              `}>
                <li>Home</li>
                <li>Produtos</li>
                <li>Serviços</li>
                <li>Contato</li>
              </ul>
            </nav>

            <form>
              <Input placeholder="Digite aqui" />
              <Button>{props.pesquisar? props.pesquisar : "Search"}</Button>
            </form>
          </HeaderPage>
        )
      };
      ```

    - [x] Agora, o que for passado por essas propriedades no componente pai pode ser recuperado no componente filho:

      ``` JSX
      import React from "react";
      import Header from "../components/Header";

      export default function LoginPage() {
        return (
          <>
            <Header pesquisar="Buscar" />
            <h1>Bem vindo ao Banco Digital</h1>
          </>
        )
      };
      ```
## Próxima aula

- [ ]
