import React, { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

const InputData = styled.input`
  backgroun-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
  border: none;
  outline-color: orange;

  width: 200px;
  height: 25px;
  padding-left: 10px;
  line-height: 30px;
`

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) { // encontramos o tipo passando o cursor encima do InputData
  return (
    <InputData {...props}/>
  )
}
