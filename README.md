# ⭐ Boas-Vindas ao Repositório Soccer Championship ⚽️
> *Clique nas setas para ver mais* 
<details>
<summary><strong>👩‍💻 O que foi desenvolvido</strong></summary>
<br />
  
  O projeto consistiu em desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.
  
  Foi construído **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. O desenvolvimento **respeitou as regras de negócio** providas no projeto e **a API foi capaz de ser consumida por um front-end já provido pela Trybe**.

  O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

![front-example](https://github.com/leilaMoraes/Project-Soccer-Championship-Back-End/assets/109045940/07643c7e-2ecb-4744-b67c-564e2b3c7579)
</details>

<details>
<summary><strong>👀 Para rodar localmente</strong></summary>
<br />

> ⚠️ Configurações mínimas para execução do projeto
> 
> - Preferencialmente Sistema Operacional Distribuição Unix  
> - Node versão 16  
> - Docker  
> - Docker-compose versão >=1.29.2  

1. Clone o repositório   
  `git clone git@github.com:leilaMoraes/Project-Soccer-Championship-Back-End.git`
2. Navegue até a pasta do repositório clonado  
    `cd Project-Soccer-Championship-Back-End`
3. Instale as dependências no diretório raiz  
  `npm install`

### **Docker**
1. Na raíz do projeto rode o comando:  
  `npm run compose:up`  
2. Em seguida abra o terminal interativo do container:  
  `docker exec -it app_backend sh`  
3. Instale as dependências dentro do container:  
  `npm install`

### **Rodando os testes**
Para rodar os testes de integração desenvolvidos por mim, entre na pasta backend e rode o comando:  
- `npm test`
</details>

<details>
<summary><strong>⌨️ Diagramas e Tabelas</strong></summary> <br />

  - MySQL 
  1. #### **Diagrama ER**
![diagrama-er](https://github.com/leilaMoraes/Project-Soccer-Championship-Back-End/assets/109045940/8c047ad5-23b3-49e5-9d94-a5fca93d158a)
  
  2. #### **Seeders**  
  O banco de dados contém:
  - tabela `users` com usuários válidos com hash das senhas e alguns inválidos, estes útimos utilizados para os testes avaliativos.
  - tabela `teams` com a lista de todos os times que estão participando do campeonato.
  - tabela `matches` com algumas partidadas finalizadas e outras em andamento.
</details>

<details>
<summary><strong>📦 Documentação da API</strong></summary> <br />
  
  | Endpoint     | Método HTTP | Descrição               | 
| :----------- | :---------- | :---------------------- |
| [`/login`](#endpoint-login)   | POST        | Faz o login com usuários do banco de dados 
| [`/login/role`](#endpoint-loginrole)| GET         | :closed_lock_with_key: Retorna o *role* do usuário logado (user ou adm)  |
| [`/teams`](#endpoint-teams)     | GET         | Retorna todos os times do campeonato
| [`/teams/:id`](#parâmetro-id-teamsid) | GET         | Retorna o time especificado no id
| [`/matches`](#endpoint-matches)   | GET         | Retorna todas as partidas 
| [`/matches`](#endpoint-matches)           | POST         | :closed_lock_with_key: Insere uma nova partida em andamento.
| [`/matches?inProgress=true`](#parâmetro-inprogress-matchesinprogress) | GET         | Retorna as partidas em andamento.
| [`/matches?inProgress=false`](#parâmetro-inprogress-matchesinprogress)| GET         | Retorna as partidas finalizadas.
| [`/matches/:id`](#parâmetro-id-matchesid)    | PATCH       | :closed_lock_with_key: Atualiza a partida de acordo com seu id.
| [`/matches/:id/finish`](#endpoint-matchesidfinish) | PATCH       | :closed_lock_with_key: Finaliza uma partida em andamento.
| [`/leaderboard`](#endpoint-leaderboard)       | GET          | Retorna a classificação geral do campeonato.
| [`/leaderboar/home`](#endpoint-leaderboardhome)   | GET          | Retorna a classificação dos times mandantes.
| [`/leaderboard/away`](#endpoint-leaderboardaway)  | GET          | Retorna a classificação dos times visitantes.

:closed_lock_with_key: : Necessário que o `token` gerado no login seja enviado no headers como _"Authorization"_.
</details>

<details>
<summary><strong>💻 Tecnologias Utilizadas</strong></summary> <br />

- TypeScript
- Node.js
- Express.js
- Sequelize
- JSON Web Token (JWT)
- Bcrypt.js 
  ### **Testes**
    - Mocha
    - Chai
    - Sinon
</details>

## Requisitos do projeto

<details><summary><strong>Docker</strong></summary> 

Configuração dos `dockerfiles` referente ao front e back-end, para integrar as aplicações através do docker-compose, para que elas funcionem consumido o banco de dados.
</details>

<details><summary><strong>Fluxo Teams</strong></summary> 

1. Desenvolva uma migration e um model para a tabela de times, utilizando Sequelize.  
2. `(TDD)` Desenvolva testes de integração do back-end referente a implementação do requisito seguinte.  
3. Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar a lista com **todos os times** corretamente.  
4. `(TDD)` Evolua os testes de integração da sua rota /teams, agora considerando o contrato do próximo requisito.  
5. Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de **um time específico**.  
</details>

<details><summary><strong>Fluxo User e Login</strong></summary> 

6. Desenvolva uma migration e um model para a tabela de pessoas usuárias, utilizando Sequelize.
7. `(TDD)` Desenvolva testes baseando-se no contrato do endpoint `/login` do próximo requisito.
8. Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com preenchimento obrigatório de `email` e `password` no front-end e retorne um **`token`**.  
9. `(TDD)` Evolua os testes de integração da sua rota` /login`, agora considerando o contrato do próximo requisito.
10. Desenvolva o endpoint` /login` no back-end de maneira que ele **não permita o acesso** com dados inválidos ou não cadastrados no banco de dados, considerando:
    - As senhas que existem no banco de dados estão encriptadas.
11. `(TDD)` Desenvolva testes baseando-se no contrato do endpoint `/login/role` do próximo requisito.
12. Desenvolva um middleware de **validação para o `token`**, verificando se ele é válido, e desenvolva o endpoint `/login/role` no back-end de maneira que ele retorne os dados corretamente no front-end.
    - :warning: A rota deve recebe um header com parâmetro authorization, onde ficará armazenado o `token` gerado no login; 
</details>

<details><summary><strong>Fluxo Matches</strong></summary> 

13. Desenvolva uma migration e um model para a tabela de partidas, utilizando Sequelize.
14. `(TDD)` Desenvolva teste de integração, agora da sua rota `/matches`, considerando os contratos dos próximos requisitos.
15. Desenvolva o endpoint `/matches` de forma retorna uma lista de partidas e que todos os dados de partidas sem nenhum filtro apareçam corretamente na tela de partidas no front-end.
16. Desenvolva o endpoint `/matches` de forma que seja possível **filtrar** somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end.
    - Essa requisição deverá usar `query string` para definir o parâmetro.
17. Desenvolva o endpoint `/matches/:id/finish` de modo que seja possível **finalizar** uma partida no banco de dados.
    - :warning: Não é possível alterar uma partida sem um `token`;
18. Desenvolva o endpoint `/matches/:id` de forma que seja possível **atualizar** partidas em andamento.
    - :warning: Não é possível atualizar uma partida sem um `token`;
19. `(TDD)` Desenvolva testes de integração, agora da sua rota `/matches`, considerando os contratos dos próximos requisitos.
20. Desenvolva o endpoint `/matches` de modo que seja possível **cadastrar** uma nova partida em andamento no banco de dados e retornar os dados inserida no banco de dados.
    - :warning: Não é possível atualizar uma partida sem um `token`;
21. Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times.
</details>

<details><summary><strong>Fluxo Leaderboards</strong></summary> 

  - <details><summary>Regras de negócio para classificação dos times</summary>

    > Todas as regras de negócio e cálculos necessários deverão ser realizados no back-end. A aplicação front-end apenas renderizará essas informações.

    - A tabela deverá renderizar **somente** as partidas que já foram FINALIZADAS.
    
    ```
    Classificação: Posição na classificação;  
    Time: Nome do time;  
    P: Total de Pontos;  
    J: Total de Jogos;  
    V: Total de Vitórias;  
    E: Total de Empates;  
    D: Total de Derrotas;  
    GP: Gols marcados a favor;  
    GC: Gols sofridos;  
    SG: Saldo total de gols;  
    %: Aproveitamento do time.  
    ```
    O resultado deverá ser ordenado sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou.   
    Em caso de **empate** no `Total de Pontos`, você deve levar em consideração os seguintes **critérios para desempate**:
      - 1º Total de Vitórias;
      - 2º Saldo de gols;
      - 3º Gols a favor;

    </details>

22. `(Bônus TDD)` Desenvolva testes de integração para a rota `/leaderboard`, considerando o contrato dos próximos requisitos.

  - <details><summary><strong>Leaderboard Home</strong></summary> 

    23. Desenvolva o endpoint `/leaderboard/home` de forma que retorne as informações do desempenho dos **times da casa** com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`.
    24. Desenvolva o endpoint `/leaderboard/home` de forma que seja possível **filtrar** as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior.
    25. Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional.
    </details>

  - <details><summary><strong>Leaderboard away</strong></summary> 

    26. Desenvolva o endpoint `/leaderboard/away` de forma que retorne as informações do desempenho dos **times visitantes** com as mesmas propriedades do req. 23.
    27. Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível **filtrar** as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior.
    28. Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional.
    </details>

  - <details><summary><strong>Leaderboard</strong></summary> 

    29. Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a **classificação geral** dos times na tela de classificação do front-end com os dados iniciais do banco de dados.
    30. (Bônus) Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC.
    </details>

</details>


