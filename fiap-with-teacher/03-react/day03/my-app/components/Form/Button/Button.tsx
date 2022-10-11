import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

const ButtonData: React.FC<ButtonUnion> = styled.button`
  border: none;
  border-radius: 10px;

  margin-left: 10px;
  // font-size: 16px;
  font-weight: bold;
  line-height: 30px;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`

type ButtonProps = {
  children: React.ReactNode;
}

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) { // encontramos o tipo passando o cursor encima do InputData
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
