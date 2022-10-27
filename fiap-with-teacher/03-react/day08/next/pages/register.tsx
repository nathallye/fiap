import React, { FormEvent, useEffect, useState } from "react";

import { 
  Typography, 
  Container, 
  CssBaseline, 
  Box, 
  TextField, 
  Button
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "../components/utils/Copyright";
import Snackbar from "../components/utils/Snackbar";

const theme = createTheme();

export default function RegisterPage() {

  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>("");
  const [password, setPassword] = useState<undefined | undefined | null | FormDataEntryValue>("");

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("A senha deve ter no mínimo 6 caracteres.");
    } else if (password) {
      setError(false);
      setErrorMessage("");
      setOpen(true);
    }
  }, [password]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log(data.get("email"));
    console.log(data.get("password"));

    setEmail(data.get("email"));
    setPassword(data.get("password"));
  };

  return (
    <ThemeProvider theme={theme}> {/*ThemeProvider - faz o dark automáticamente*/}
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{mt: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography component="h1" variant="h5"> {/*Para texto*/}
            Cadastro
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField margin="normal" required fullWidth id="name" label="Digite o nome" name="name" 
              autoComplete="name" autoFocus />
            <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" 
              autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth type="password" id="password" label="Digite a senha" name="password" 
              autoComplete="current-password" autoFocus />
            <TextField margin="normal" required fullWidth id="password" type="password" label="Confirme a senha" name="password" 
              autoComplete="current-password" autoFocus />              
            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Cadastrar</Button>
            {error && 
              <Typography color="error">{errorMessage}</Typography>
            }
          </Box>
        </Box>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />

        {open && <Snackbar open={open} hide={6} message="Usuário cadastrado com sucesso... aguarde." />}
      </Container>
    </ThemeProvider>
  )
}
