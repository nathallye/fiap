import React from "react";
import styled from "@emotion/styled";
import SideBar from "../components/SideBar";
import ExtractContent from "../components/ExtractContent";

const ExtractContainer = styled.div`
  display: flex;

  width: 100%;
  min-height: 100vh;

  section {
    width: 100%;
    
    h1 {
      padding-left: 25px;
    }
  }
`

export default function ExtractPage() {

  return (
    <ExtractContainer>
      <SideBar />
      <section>
        <h1>Extrato</h1>
        <ExtractContent />
      </section>
    </ExtractContainer>
  )
}
