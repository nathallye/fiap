// Desafio 2: 

// Monte as expressões regulares para os documentos:

// CEP: 01311-100;
/^[0-9]{5}\-[0-9]{3}$/;

// EMAIL: email@fiap.com.br
/^[a-z0-9._]+@[a-z0-9._]\.([a-z]+)?$/i;

// CPF: 333.111.222-00
/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;

// RG: 22.455.213-2
/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/;


// Crie uma expressão regular onde o formato 123.456.abc.def seja válido, porém 2123.456.abc.def também pode ser válido.

// 123.456.abc.def
// or
// 2123.456.abc.def 
/^[0-9]{3,4}\.[0-9]{3}\.[a-z]{3}\.[a-z]{3}$/;