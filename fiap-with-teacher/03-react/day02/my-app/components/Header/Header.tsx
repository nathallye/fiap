import React from "react";
// import styles from "../../styles/Header.module.css";
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

      <form>
        <Input placeholder="Digite aqui" />
        <Button>{props.pesquisar? props.pesquisar : "Search"}</Button>
      </form>
    </HeaderPage>
    // </header>
  )
};
