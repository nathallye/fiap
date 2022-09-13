# FIAP ON

## Sistema de Controle de Versão

Serve para criar um histórico de um projeto em produção com uma equipe de vários desenvolvedore trabalhando ao mesmo tempo.

Os sistemas de controle de versão existem desde os anos 1990, mas foi em 2005 que Linus Torvalds, sim o criador do Linux, desenvolveu um novo sistema chamado GIT.

Hoje em dia, saber como usar o GIT virou uma habilidade fundamental para todo desenvolvedor.

## GIT e GitHub, são a mesma coisa?

Não, o GitHub é uma famosa rede social de compartilhamentos de código, é um repositório de códigos fontes que podem ser privados ou abertos, de desenvolvedores iniciantes até grandes empresas. 
O GitHub foi criado em 2008 e comprado pela Microsoft 10 anos mais tarde.

## GIT

- Repositório distribuido: Não depende do servidor para salvar uma alteração. Por exemplo, se cair a internet, podemos salvar "comitar" as alterações e quando a internet voltar aí sim enviamos para o repositório central(GitHub ou GitLab) onde todos da equipe tem acesso  e podem baixar essas atualizações.

### Configurando o Git

- Dentro de um repositório vamos clicar com o botão direito do mouse e ir na opção `Git Bash Here`. Ou podemos buscar por `Git Bash` nos aplicativos do windows e abrir;

- Feito isso, iremos configurar as credências globalmente(--global) para não precisarmos configurar novamente depois em outros repositórios. Já ficará salvo:

``` 
git config --global user.name "Nathallye Bacelar"
git config --global user.email ""
```

- Para verificarmos se o nome e o e-mail foram setados corretamente:

```
git config user.name
git config user.email
```

- Para iniciar o controle de versão no repositório, basta usarmos o comando a seguir:

```
git init
```

### Estado dos arquivos e commits

- E para verificarmos o estado dos arquivos e commits do repositório em questão, basta rodarmos o comando a seguir:

``` 
git status
```

- Tipos de estados de arquivos:
  1. **Untracked:** é um arquivo desconhecido para o GIT. O GIT entende que existe um arquivo, mas não identifica nenhum estado. Ou seja, ele não esta sendo rastreado, por ser uma arquivo novo.
  2. **New file:** arquivo novo sendo monitorado pelo GIT.
  3. **Modified:** arquivo rastreado que teve alterações que ainda não forão adicionadas(git add) na área temporária do GIT para depois ser comitado/versionado.

- Para informar para o GIT que um arquivo deve ser rastreado(adicionar o arquivo na área temporária do GIT), vamos executar o comando seguinte:

```
git add . // irá adicionar todos os arquivos
git add [name_file] // irá adicionar somente o arquivo especificado
```

- E para informar para o GIT que um arquivo deve ser versionado(criar um ponto na linha do tempo de alterações no projeto), vamos executar o comando seguinte:

```
git commit -m "First commit"
              [description]
```

- Depois que o arquivo esta sendo rastreado pelo GIT podemos visualizar as alterações feitas antes de adicionar a área temporária e commitar. Para visualizarmos esta mudança, usamos o comando:

```
git diff
```

Podemos notar que após executarmos este comando o GIT nos informa qual foi a alteração (textos em verde para inclusões e vermelho para exclusões) e quantas alterações foram realizadas (texto em azul).

### Navegação entre as versões

- Para verificar todo histórico de mudanças em nosso repositório, utilizamos o
seguinte comando:

```
git log
```

O git log nos retorna um ID, o autor, data e a própria alteração realizada.

- E para voltarmos uma versão e navegarmos entre branches podemos usar o comando:

```
git checkout [hash_commit] // para navegar entre commits
or
git checkout [branch_name] // para navegar entre branches
```

### Desfazendo alterações

Durante o desenvolvimento de um projeto, erros podem acontecer e a necessidade de voltar para uma versão anterior do seu código se torna necessária.

- Para excluir arquivos que ainda não estão sendo rastreados(com o estado untracked) podemos usar o comando a seguir:

```
git clean -f
```

- Para remover linhas em arquivos ainda não comitados, voltando para a ultima versão do arquivo(HEAD~0) ou para qualquer outra desejada, usando o comando a seguir :

```
git reset --hard HEAD~O
```

- Outra opção é usar o git checkout:

```
git checkout [name_file] // para remover as alterações de um ou mais arquivos específicos
git checkout . // para remover as alterações de todos os arquivos 
```

- Podemos usar o comando revert para desfazer alterações e cadastrar um novo commit para marcar que em determinado ponto foi feito uma restauração para um commit atrás:

```
git revert HEAD~1 // HEAD~1 vai voltar para um commit atrás 
```

### Trabalhando com Branches e Tags

#### Tags

- Podemos usar Tags para nomear as hashs dos commits. 
Para isso, na branch que queremos nomar vamos usar o comando seguinte:

```
git tag [tag_name]
```

- E para visualizarmos as tags existentes usamos o comando:

```
git tag
```

#### Branches

- Considerando que o nosso projeto é como se fosse uma linha do tempo e cada commit é um ponto dessa linha do tempo, quando trabalhamos com branches a ideia é que estamos criando um "universo paralelo", uma outra linha do tempo onde teremos as alterações somente dessa linha do tempo.

- Para criarmos uma branch iremos usar o comando seguinte:

```
git branch [branch_name]
```

- E para visualizarmos as branches existentes usamos o comando:

```
git branch
```

- E para navegarmos entre branches usamos o comando seguinte:

```
git checkout [branch_name]
```

#### Merge

- Uma vez que trabalhamos com branches temos várias linhas de desenvolvimento. Quando trabalhamos em equipe cada um pode seguir a sua branche, e para integrar todas estas mudanças e alterações podemos usar o comando seguinte:

```
git marge [branch_name] // nome da branch que queremos trazer as mudanças
```

- Criado o merge automáticamente é criado um commit.

### Resolução de conflitos

- Conflitos são inevitáveis, principalmente quando estamos trabalhando em equipe. Vamos imaginar a seguinte situação: Trabalho remoto com 2 programadores alterando partes diferentes do código. O GIT fica confuso e não sabe como proceder, ele vai informar os arquivos conflitantes e mostrar as alterações feitas por cada uma das partes. 
Primeiro ele mostrar a minha versão e as modificação e com uma divisória(========) mostra a versão que veio do repositório e as alterações feita também. Agora, cabe a mim organizar o código com as alterações que queremos manter.

- Depois de resolvermos os conflitos devemos comitar o arquivo com o merge das alterações.

### Ignorando arquivos do repositório

- Podemos ignorar os aquivos iremos criar um arquivo `.gitignore` e nele especificamos os diretórios e arquivos que não queremos que sejam rastreados.

- Exite um site chamado `gitignore.io` o qual gera o arquivo automáticamente de acordo com IDE que estamos usando.

- Dica: começar o projeto e no primeiro commit já criar o `.gitignore`.

## GitHub

O Github é a maior rede social de código aberto utilizando o sistema de controle de versão GIT. Em 2018 a Microsoft comprou o site Github por US$ 7,5 bilhões.

### git pull

- Existem situações em que temos arquivos atualizados em nosso repositório remoto e arquivos que não estão atualizados no repositório local. O `git pull` é responsável pela atualização de todas as versões, ideal para quando você está trabalhando off-line e seus arquivos locais ainda não estão sincronizados com o repositório remoto.

### git push

- O comando `git push` é o inverso do git pull, é através dele que você envia seus arquivos atualizados para o seu repositório remoto, no caso o Git hub.