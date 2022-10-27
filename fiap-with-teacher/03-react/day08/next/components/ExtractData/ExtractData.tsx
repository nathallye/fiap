import React from "react";
import styled from "@emotion/styled";

import TypeDb from "../../types/TypeDb";

type ExtractDataProps = {
  db: Array<TypeDb> // db é um array de objetos que contém dados do tipo TypeDb
}

const ExtractDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 25px;

  table > thead > tr > th {
    font-weight: 100;
    color: #868383;
  }
`

export default function ExtractData(props: ExtractDataProps) {  
  return (
    <ExtractDataContainer>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {props.db.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>R$ {item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      
    </ExtractDataContainer>
  )
}
