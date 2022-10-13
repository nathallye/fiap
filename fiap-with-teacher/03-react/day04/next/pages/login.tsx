import React from "react";
import Link from "next/link";

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type CopyProps = {
  site: string;
  sx?: object;
}

function Copyright(props: CopyProps) {
  console.log("props", props);
  console.log(props.site);

  return (
    <Typography>
      {"Copyright ©️ "}
      {/*inherit - hende a cor do elemento pai*/}
      <Link color="inherit" href="https://www.avanade.com.br/">
        {props.site}
      </Link>{" "}
      {new Date().getFullYear()} {/*Função para pegar o ano atual*/}
      {"."}
    </Typography>
  )
}

const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}> {/*ThemeProvider - faz o dark automáticamente*/}
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <Box sx={{mt: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography component="h1" variant="h5"> {/*Para texto*/}
              Login
            </Typography>
            <Box component="form" onSubmit={() => {console.log("enviado")}}>
              <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email"
                autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password"
                autoComplete="current-password" autoFocus />
            </Box>
          </Box>
        </CssBaseline>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
      </Container>
    </ThemeProvider>
  )
}
