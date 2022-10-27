import React from "react";
import Link from "next/link";

import { Typography } from "@mui/material";

type CopyProps = {
  site: string;
  sx?: object;
}

function Copyright(props: CopyProps) {
  // console.log("props", props);
  // console.log(props.site);

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

export default Copyright;