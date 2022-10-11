import React, { useState } from "react";
// import styles from "../../styles/Header.module.css";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import Input from "../Form/Input";
import Button from "../Form/Button";

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
  name?: string;
}

export default function Header(props: HeaderProps) {

  const [userAuth, setUserAuth] = useState<boolean>(true); // o tipo de valor vai ser booleano e o valor inicial é false
  const [nameUser, setNameUser] = useState<string | undefined>(props.name);  // o tipo de valor vai ser booleano ou undefined(quando não for passado) e o valor inicial é o valor passado via props para name

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

      {userAuth && (<div>
        <span>Seja bem vindo {nameUser ? nameUser : "Visitante"}</span>
      </div>)}

      <div>
        <Input type="text" placeholder="Digite aqui" />
        <Button>{props.pesquisar? props.pesquisar : "Search"}</Button>
      </div>
    </HeaderPage>
    // </header>
  )
};
