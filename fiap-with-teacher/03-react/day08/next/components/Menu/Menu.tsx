import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const MenuConteiner = styled.nav`
  background-color: #242424;
  
  display: flex;
  flex-direction: column;

  width: 100%;

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 280px;
    margin: 0;
    padding: 0; 

    overflow-y: auto;

    &::-webkit-scrollbar-thumb {
      background-color: #242424;
      outline: 1px solid #f8f8f8;
    }

    &::-webkit-scrollbar{
      width: 6px;
    }
  }
`

const Li = styled.li`
    display: flex;

    width: 100%;
    padding-left: 5%;

    list-style: none;
    line-height: 60px;
    border-left: 4px solid transparent;

    &:hover {
      background-color: #616161;
      border-left: 4px solid #ffef0d;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      cursor:pointer;
    }

    a {
      font-family: sans-serif;
      color: #f8f8f8;
    }
`

export default function Menu() {
  return (
    <MenuConteiner>
      <ul>
        <Li>
          <Link href="#">
            <a>Início</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Extrato</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Transferências</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Pagamentos</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Cartões</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Crédito</a>
          </Link>
        </Li>
      </ul>
    </MenuConteiner>
  )
}
