# Decola Tech 3

## Aula 2(13/09/2022):

- [x] **Paradigmas de Programação** 
  - [x] "Mesmo que você não saiba de onde vem, você reconhece o padrão." Jeito ou estilo de programar.
  
    - [x] **Programação Procedural** 
      - [x] Linguagem C é procedural e as linguagens PHP, JavaScript derivam dela e por consequência são procedurais tambem. - Visual Basic 6, ASP 3.0
        - [x] Programação Imperativa
        - [x] Programação Linear
        - [x] Programação estruturada

    - [x] **Programação Orientada a Objetos (O.O.P - P.O.O)**
      - [x] Linguagens de Programação Orientadas a Objeto: 
        - [x] C++, Java, C#, Python, PHP, JavaScript, Ruby - Motor Unit programado em C++
      - [x] Classes
      - [x] Atributos e Métodos (Variáveis e funções com recursos avançados)
      - [x] Encapsulamento
      - [x] Herança
      - [x] Polimorfismo
      - [x] Interface
      - [x] Pacotes

      ``` TS
      class Pessoa {
        // aqui dentro da classe essa função é um método público
        public function criaPessoa(nome: string, idade: number): string{
          return ``Bem vindo(a) nova Pessoa ${nome} com idade: ${idade}` `;
        }
      }
      ```
      
    - [x] **Programação Funcional** 
      - [x] Linguagens de Programação Funcionais:
        - [x] JavaScript, Elixir, Haskell, Lisp, Clojure
      - [x] Programação Funcional Reativa
        - [x] Imutabilidade - Dados não mudam, eles evoluem.
          - [x] empresas = [’Latam’,’Gol’,’Azul’, ‘Qatar’, ‘Emirates’, ’Delta’, ’United AA’]
          - [x] empresasBrasileiras = empresas.filter([’Latam’,’Gol’,’Azul’]);
        - [x]  Funções de Primeira Ordem
        - [x]  Lambda Functions
        - [x]  Funções puras: mesmos parâmetros de entrada geram o mesmo resultado. Ex.: 2 + 2 sempre será igaul a 4.
        - [x]  Funções Impuras: mesmos parâmetros de entrada geram resultados diferentes. Ex.: Segundo da hora atual.

- [x] **Sub vs Function**
  - [x] Subrotina: trecho de código que executa algo. Ex. Abrir um banco de dados
  - [x] Function: trecho de código que executa algo e retorna um valor.
    - [x] Validação (isEmail, isNumber, isString)
    - [x] Conversão (cInt, cDbl, cString, cDate)
    - [x] UDF - User Defined Function (Aumentar salario)

- [x] **Tipos de Dados - DataType**
  - [x] **Primitivos**
    - [x] `Date`: 2022-09-13 
      - [x] new Date() - TimeStamp
      - [x]  Evite abreviações e configurações regionais - 01-02-02
    - [x] `Boolean`: false, true - verdadeiro ou falso.
      - [x] False - 0, ‘0’, false, [], {}, null, undefined e tudo que for diferente de verdadeiro.
      - [x] -10 = conversão implicita é verdadeiro, se ela for fortemente tipada é falso.
    - [x] `Number`: 30000.00 - Int, Double ou Float ou Real 
    - [x] `String`: ‘Glaucio Daniel’
    - [x] `null` - JavaScript - existe mas não tem valor. Inválido.
    - [x] `undefined` - JavaScript, C - Não existe

  - [x] **Compostos**
    - [x] Array - Variável do mesmo tipo, que possui mais de um valor.
      - [x] empresa = [’Avanade’, ‘Accenture’, ‘Microsoft’]
        - [x] Todo array começa em zero.
        - [x] empresa[2] → ‘Microsoft’
        - [x] Quantos elementos tem em empresa? 3
      - [x] [’abacaxi’, ‘laranja’, ‘maçã’]
    
- [x] **Especiais**
  - [x]  Objeto Literal - JavaScript Object Notation - JSON  
    ``` JSON
    {
      ”empresa”: ”Avanade”,  
      “site”: ”www.avanade.com.br”,
      “email”: ”contato@avanade.com.br”
    }  
    ```

- [x] **Tipos de Dados - No Banco de Dados**
  - [x] `Date`: smalldate, smalldatetime, date, datetime, time, timestamp
  - [x] `Number`: Int, decimal(10,2)
    - [x]  signed - Permite valor negativo
    - [x]  unsigned - Não permite
  - [x] `String`: char(8), varchar(255), text, nchar, nvarchar e ntext - n é para Unicode. Aceita qualquer tipo de caracter mesmo sendo outra codificação.
  - [x] `null`: Null nunca foi usado. 
  - [x] `Empty`: é vazio, já possuiu valor um dia, no momento não possui.

- [x]  Instalar o TypeScript

## Próxima aula

- [ ]  Variáveis de memória.
- [ ]  Computador
- [ ]  NodeJS, NPM, Yarn
- [ ]  configurar .tsconfig o TypeScript
- [ ]  Estrutura de Dados 
