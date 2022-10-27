import React from "react";
import styled from "@emotion/styled";

import Balance from "../Balance";
import Profile from "../Profile";
import Menu from "../Menu";

const ContainerSideBar = styled.div`
  background-color: #242424;

  display: flex;
  flex-direction: column;

  width: 360px;
`

export default function SideBar() {
  return (
    <ContainerSideBar>
      <Profile />
      <Balance />
      <Menu />
    </ContainerSideBar>
  )
}
