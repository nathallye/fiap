import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

const ProfileContainer = styled.div`
  background-color: #242424;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-bottom: 20px;

  font-family: sans-serif;
  color: #f8f8f8;
`

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
  padding: 20px;

  h2, h3 {
    margin: 0;
    font-weight: 500;
  }

  h2 {
    margin-top: 10%;
  }
`

export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt="Nathallye Bacelar" src="https://avatars.githubusercontent.com/u/86172286" sx={{ width: 200, height: 200 }} />
          <h2>Nathallye Bacelar</h2>
          <h3>FullStack Developer</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}
