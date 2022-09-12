# Decola Tech 3

## FIAP ON(12/09/2022)

### Sistema de Controle de Versão

Serve para criar um histórico de um projeto em produção com uma equipe de vários desenvolvedore trabalhando ao mesmo tempo.

Os sistemas de controle de versão existem desde os anos 1990, mas foi em 2005 que Linus Torvalds, sim o criador do Linux, desenvolveu um novo sistema chamado GIT.

Hoje em dia, saber como usar o GIT virou uma habilidade fundamental para todo desenvolvedor.

### GIT e GitHub, são a mesma coisa?

Não, o GitHub é uma famosa rede social de compartilhamentos de código, é um repositório de códigos fontes que podem ser privados ou abertos, de desenvolvedores iniciantes até grandes empresas. 
O GitHub foi criado em 2008 e comprado pela Microsoft 10 anos mais tarde.


### GIT

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