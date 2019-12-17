# # {reprograma} Projeto Final - API Contrate uma Refugiada! :computer:
Projeto Final elaborado para conclusão do Bootcamp de Desenvolvimento Back End da {reprograma}

## Objetivo

Construir uma **API** com banco de dados de mulheres refugiadas desempregadas que possibilite que essas mulheres se cadastrem para ficarem visíveis aos empregadores e, do outro lado, permita ao recrutador buscar candidatas que se adequem ao perfil esperado para vagas abertas em suas empresas.

#### Requisitos obrigatórios:

- [x] O schema das candidatas deve possuir os seguintes campos: id (autogerado), nome, contato (telefone), contato (e-mail), data de nascimento, local de nascimento, idiomas, profissão, objetivo e resumo profissional;
- [x] **C** - a API deve permitir o cadastro do currículo da candidata;
- [x] **R** - a API deve permitir a visualização dos currículos cadastrados;
- [x] **U** - a API deve permitir alterações nos currículos;
- [x] **D** - a API deve permitir a exclusão de currículos das candidatas do banco de dados.

### Requisitos desejáveis (não implementados):

- [ ] Criação de usuário e login para admin e usuária com acesso sem restrição;
- [ ] Criação de usuário e login para recrutador, com restrição de acesso (somente visualização e seleção).

### Ferramentas utilizadas

**Linguagem**: JavaScript

**Framework**: Express.js

**Banco de Dados**: MongoDB

**IDE**: Visual Studio Code

**O que é o**: Postman

### Instalação

**git clone:**

```git clone https://github.com/jessicacj/projeto-api_contrate-refugiada.git```

Caso utilize o NPM, após clonar o repositório para o seu diretório, dê o seguinte comando:

```npm install```

Se você está utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

### Endpoints

- GET "/" => rota inicial da API.
- GET "candidatas/listar" => retorna todos os currículos cadastrados no banco de dados.
- GET "candidatas/buscar/:id" => retorna um currículo pelo ID.
- POST "candidatas/adicionar" => adiciona um currículo ao banco de dados
- PATCH "candidatas/alterar/:id" => busca um currículo pelo ID e atualiza.
- DELETE "candidatas/deletar/:id" => busca um currículo pelo ID e exclui do banco de dados.