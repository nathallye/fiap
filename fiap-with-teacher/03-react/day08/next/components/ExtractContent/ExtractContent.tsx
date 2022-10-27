import React from "react";
import styled from "@emotion/styled";

import db from "../utils/db";

import ExtractHeader from "../ExtractHeader";
import ExtractTotal from "../ExtractTotal";
import ExtractData from "../ExtractData";

const ExtractContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
      <ExtractHeader />
      <ExtractTotal />
      <ExtractData db={db} />
      <ExtractTotal />
    </ExtractContentContainer>
  )
}
