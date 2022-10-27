import React from "react";
import styled from "@emotion/styled";

const ExtractTotalContainer = styled.div`
  background-color: #eee;
  display: flex;
  align-items: center;

  width: 100%;
  padding-left: 25px;

  .entry, .withdraw {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 250px;

    p {
      margin-bottom: 0;
    }

    h3 {
      margin-top: 5px;
    }
  }
`

export default function ExtractTotal() {
  
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <ExtractTotalContainer>
      <h3>Hoje, {today.toDateString()}</h3>
      <div className="entry">
        <p>Entradas</p>
        <h3>R$ 21.528,00</h3>
      </div>
      <div className="withdraw">
        <p>Saídas</p>
        <h3>R$ 10.228,00</h3>
      </div>
    </ExtractTotalContainer>
  )
}

