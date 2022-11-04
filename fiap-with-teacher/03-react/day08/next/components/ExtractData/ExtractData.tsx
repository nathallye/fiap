import React from "react";
import styled from "@emotion/styled";

import TypeDb from "../../types/TypeDb";

type ExtractDataProps = {
  db: Array<TypeDb> // db é um array de objetos que contém dados do tipo TypeDb
}

const Table = styled.table`
  width: 100%;
  border-collapse: 0;
  border-spacing: 0;
  color: #333;
  thead th {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
  }
  tbody tr{
    line-height: 3.5rem;
  }
  tbody tr:nth-child(odd) {
    /* background-color: #f2f2f2; */
  }
`

export default function ExtractData(props: ExtractDataProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th colSpan={2}>Operação</th>
        </tr>
      </thead>
      <tbody>
        {props.db.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{new Intl.NumberFormat("pt-br",{style:"currency", currency:"BRL"}).format(item.amount)}</td>
              <td>{item.type}</td>
              <td>{item.operation}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  )
}
