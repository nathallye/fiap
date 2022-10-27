import React, { useState } from "react";
import { AlertColor, Snackbar as Container} from "@mui/material";

import Alert from "./Alert";

type SnackbarProps = {
  open: boolean;
  hide: number;
  message: string;
  severity?: AlertColor;
}

export default function Snackbar(props: SnackbarProps) {

  const [open, setOpen] = useState<boolean>(props.open); // props.open - porque na hora que formos chamar o Snackbar no componente login vamos passar via props o valor de open, portanto o state de open recebe esse valor definido lá como valor inicial

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.severity ? props.severity : "success"} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
  </Container>
  )
}