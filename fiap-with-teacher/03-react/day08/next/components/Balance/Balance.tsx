import React,  { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const BalanceContainer = styled.div`
  background-color: #242424;
  
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100px;
  padding-left: 20px;

  font-family: sans-serif;
  color: #f8f8f8;

  & > div > strong {
    font-size: 1.3rem;
    margin-right: 10%;
  }
`

export default function Balance() {

  const [show, setShow] = useState<boolean>(false);

  return (
    <BalanceContainer>
      <div>Saldo</div>
      <div>
        {show ?
          <strong>{ new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(190000)}</strong>
        : 
          <strong>R$ ******,**</strong>
        }
        
        <button onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>
      </div>
    </BalanceContainer>
  )
}
