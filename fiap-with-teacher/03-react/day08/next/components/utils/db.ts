import TypeDb from "../../types/TypeDb";

const db:Array<TypeDb> = [ // db é um array de objetos que contém dados do tipo TypeDb
  {
    id: 1,
    type: "pix",
    amount: 100,
    date: "2020-10-19",
    description: "Pizza galera",
    operation: "credit"
  },
  {
    id: 2,
    type: "debit",
    amount: 50,
    date: "2020-10-19",
    description: "Gasolina",
    operation: "debit"
  },
  {
    id: 3,
    type: "ted",
    amount: 730,
    date: "2020-10-15",
    description: "Salário",
    operation: "credit"
  },
  {
    id: 4,
    type: "ted",
    amount: 1100,
    date: "2020-09-30",
    description: "Salário",
    operation: "credit"
  },
  {
    id: 5,
    type: "card",
    amount: 1500,
    date: "2020-10-20",
    description: "Cartão de crédito",
    operation: "debit"
  }
]

export default db;