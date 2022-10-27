import React from "react";
import styled from "@emotion/styled";

const ExtractHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding-right: 25px;
`

export default function ExtractHeader() {
  return (
    <ExtractHeaderContainer>
      <h3>TRANSAÇÕES AGENDADAS</h3>
    </ExtractHeaderContainer>
  )
}
