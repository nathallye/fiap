# FIAP ON

## Histórias da Internet

Podemos definir a internet como um conjunto de redes de computadores interligadas pelo mundo, que utilizam um conjunto de protocolos e serviços em comum para permitir uma comunicação plena.

A `internet surgiu na Guerra Fria na década de 1960`. A disputa pela hegemonia política, econômica e militar era liderada pelas duas potênciasmundiaisda época: União Soviética e Estados Unidos.

Esses dois países exerciam uma enorme influência no mundo e precisavam de tecnologia, inovação ou ferramentas para vencer a disputa.

Dessa forma, os `Estados Unidos desenvolveram a rede mundial de computadores` com objetivos militares. O `objetivo foi descentralizar as informações` e criar uma rede `redundante`,  assim, se houvesse um ataque da União Soviética a um centro de informações dos EUA, as informações não seriam perdidas e a comunicação entre  os centros de informações seriam mantidas.

Dessa  forma, a agência de projetos de pesquisas avançadas(ARPA) desenvolveu uma `rede de comunicações` chamada `ARPANET`.

Nas `décadas de 1970 e 1980`, essa rede mundial de computadores foi `utilizada também para comunicação no meio acadêmico`,  entre `universidades americanas`. Pesquisadores, estudantes e professores universitários trocavam informações e descobertas através da rede.

Mas foi na `década de 1990 que a Internet foi disponibilizada para a população em geral`. Nesse ano, o físico  britânico `Timothy John Berners-Lee desenvolveu a World Wide Web(www)` que possibilita a utilização de interface gráfica e a criação de sites com a linguagem HTML e a sua transferência com o protocolo  HTTP `permitindo navegar de um site a outro, ou de uma página a outra`.

## Servidores Web

### TCP/IP

`A comunicação entre as redes espalhadas por todo o mundo é possível` através do uso do conjunto de protocolos conhecido como `TPC/IP Protocol Suite`, ou simplesmente TCP/IP. TCP é o `Protocolo de Controle de Transmissão e o IP` é o `Protocolo de Internet`.

A `arquitetura TCP/IP surgiu em 1975 na rede Arpanet`. A arquitetura TCP/IP é `formada por quatro camadas`, e cada camada possui as suas `responsabilidades bem definidas`, `fornecendo serviços para as camadas superiores`.

  1. **Camada de Aplicacão:** Esta camada é utilizada pelos programas para `enviar e receber informações de custos` programas através da rede, nela, você encontra protocolos como `SMTP(para email)`, `FTP(transferência de arquivos)` e o famoso `HTTP(para navegar na internet)`.

  2. **Camada de transporte:** A camada de transporte é responsável por `receber os dados enviados pelo grupo acima`, `verificar a integriudade deles` e `dividi-los em padroes`.

  3. **Camada de Rede:** Na rede, os dados empacotados são rebidos e anexados ao endereço virtual(IP) do computador remetente e do destinatario.

  4. **Camada de interface:** A tarefa da interface é receber e enviar pacotes pela rede.

Em uma rede TCP/IP `cada equipamento conectado à rede deve possuir um endereço único, capaz de identificá-lo`. Esses endereços, chamados de endereços `IP`, permitema entrega das informações aos seus destinos de forma correta e eficiente. Formado por quatro números que vão de 0 a 255.

Exemplo de um endereço IP: 128.32.99.5.

Cada equipamento conectado à internet deve possuir um endereço IP para ser encontrado na rede.

### Domínios

Quando um usuário acessa um site através do browser, normalmente ele digita um endereço diferente do endereço de IP.
Por exemplo: para acessar o site da FIAP, digitamos o endereço www.fiap.com.br e não o IP do servidor web.

Para facilitar a memorização dos endereços de equipamentos conectados à internet utilizamos os nomes de domínios, que permite a tradução para um endereço IP.

A associação de nomes de domínio para um endereço IP é feita por um conjunto de servidoresde DNS – Domain Name Services ou Sistema de Nomes de Domínio. O DNS está estruturado em dois pontos básicos:

  - Organização da Internet em Domínios.
  - Distribuição dos Servidores DNS na Internet.

A organização da internet em domínio tem como objetivo evitar a reutilização de um mesmo nome por mais de um  equipamento conectado à internet e descentralizar o cadastramento dos mesmos. Assim, cada país possui uma entidade responsável por atribuir endereços de IP e fazer a sua associação com um nome.

DNS traduz os endereços(domínios) para os números de IP do servidor.

### World Wide Web(WWW)

Serviço de acesso a informações por hipertexto. A busca e obtenção de informações utiliza um mecanismo de navegação conhecido por hipertexto, que cria a imagem de uma teia que interliga documentos pela Internet. Vem  daí o nome world wide web, que traduzido fica teia de alcance mundial.

Esses documentos podem conter imagens, textos e recursos multimídia, sendo denominados documentos hipermídia. A estrutura desses documentos é desenvolvida através da linguagem HTML(HyperText Markup Language), que permite a ligação com outros documentos (hyperlinks),que é um dos assuntos abordadosnoestudo dessa disciplina.

Um documento HTML é localizado na WWW por um identificador conhecido como Universal Resource Location(URL). A URL identifica o tipo de serviço, o endereço do servidor e onde o documento está, dentro desse servidor.

Por exemplo: para  acessar uma página chamada home.html que pertence ao site da FIAP e está em algum servidor disponível na internet, a URL poderia ser: http://www.fiap.com.br/home.html:

  - **http(HyperText Transfer  Protocol)** é um protocolo de comunicação para a transmissão de documentos de hipertexto (HTML) na World Wide Web. Ela está presente na camada de aplicação da arquitetura TCP/IP.

  - **www.fiap.com.br** é o nome de domínio, que será traduzido por um servidor de DNS para o endereço de IP  do servidor onde está instalado o site da FIAP.

  - **home.html** é o nome do documento html que queremos visualizar.

  Serviço `WWWW` é baseado no protocolo `HTTP` que permite a transmissão de documentos de hipertexto que estão interligados entre si.
  O protocolo `HTTP` funciona assim: quando abrimos o `navegador web` e digitamos o `endereço de domínio` ele é traduzido para o `endereço IP` que dá no `servidor web`. Esse servidor web é responsável por responder essa requisição devolvendo arquivos HTML, JS, CSS, images esses arquivos devolvidos pelo servidor web são rodados no cliente(no navegador - responsável por interpretar o código).
