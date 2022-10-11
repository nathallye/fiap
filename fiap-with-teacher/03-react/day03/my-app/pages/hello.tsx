import { NextPageContext } from "next";
import React, { useEffect, useState } from "react";

type HelloProps = {
  pharse: string;
  author?: string;
}

async function getPharse() {
  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json();
  const position = Math.floor(Math.random() * data.length);
  const pharse = data[position].text;
  const author = data[position].author;

  return {
    pharse,
    author
  }
}

export default function Hello(props: HelloProps) {

  const [pharse, setPharse] = useState<string | undefined>(props.pharse);
  const [author, setAuthor] = useState<string | undefined>(props.author);

  let counter = 0;
  useEffect(() => {
    getPharse().then((data) => console.log(`Excecutou ${counter} vez`, data));
    counter++;
  }, [counter])

  return (
    <>
      <h1>{pharse ? pharse : "Seja muito bem vindo!"}</h1>
      {author &&<h2>{author}</h2>}

      <button onClick={(e) => setAuthor("Nathallye Bacelar")}>Mudar Autor</button>
      <button onClick={(e) => setPharse("Parabéns Paulinho!")}>Mudar Frase</button>
    </>
  )
}

Hello.getInitialProps = async (ctx: NextPageContext) => {

  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json();
  const position = Math.floor(Math.random() * data.length);
  const pharse = data[position].text;
  const author = data[position].author;

  return {
    pharse,
    author
  }
}
