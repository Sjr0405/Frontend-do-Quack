# Payload para Criação ou Register de Novo Usuário

### Classe `UserDTO`

```java
public class UserDTO {
    private int id;
    private String name;
    private String username;
    private String phone;
    private String email;
    private String password;
    private String cpf;
    private String bornAt;
    private Double points;
    private String registerAt;
    private String imagePath;
    private int status;
}
```

### Exemplo de Payload em JSON

```json
{
  "name": "João Silva",
  "username": "joao2",
  "email": "joao2@gmail.com",
  "password": "senha12345",
  "cpf": "12345678901",
  "phone": "991114020",
  "bornAt": "1990-01-01",
  "points": 0,
  "registerAt": "2024-10-02T10:00:00Z",
  "imagePath": "/images/user/joao2.jpg",
  "status": 1
}
```

### Descrição dos Campos

- **name** (`String`): Nome completo do usuário.
- **username** (`String`): Nome de usuário único.
- **email** (`String`): E-mail do usuário.
- **password** (`String`): Senha do usuário (criptografar antes de armazenar).
- **cpf** (`String`): CPF do usuário (formato: `"12345678901"`).
- **phone** (`String`): Número de telefone do usuário.
- **bornAt** (`String`): Data de nascimento no formato `"YYYY-MM-DD"`.
- **points** (`Double`): Pontos acumulados pelo usuário (começa com `0`).
- **registerAt** (`String`): Data e hora de registro no formato ISO 8601 (`"YYYY-MM-DDTHH:MM:SSZ"`).
- **imagePath** (`String`): Caminho da imagem de perfil do usuário.
- **status** (`int`): Status do usuário (ex: `1` para ativo, `0` para inativo).

### Observações

- O campo `id` não deve ser enviado no payload de criação, pois ele será gerado automaticamente pelo sistema.
- Certifique-se de que a senha seja armazenada de forma segura (preferencialmente, criptografada).
- O formato ISO 8601 é utilizado para a data de registro (`registerAt`) para garantir a compatibilidade com fuso horário.


# Payload para fazer Login

### Classe `LoginRequestDTO`

``` java
public record LoginRequestDTO(String email, String password) {
}
```

### Exemplo de Payload em JSON

```json
{
  "email": "joao2@gmail.com",
  "password": "senha12345"
}
```

Descrição dos Campos
- **email** (String): E-mail do usuário que está tentando fazer login.
- **password** (String): Senha do usuário para autenticação.

# Payload para Criação de UserRoadmap

### Classe `UserRoadmapDTO`

``` java
public class UserRoadmapDTO {
    private int id;
    private int user;
    private int roadmap;
    private Double progress;
    private String startedAt;
    private String finishedAt;
    private int status;
}
```

### Exemplo de Payload em JSON

```json
{
  "user": 28,
  "roadmap": 1,
  "progress": 75.5,
  "startedAt": "2024-10-01",
  "status": 1
}
```

### Descrição dos Campos

- **id** (`int`): ID do UserRoadmap. Esse campo é geralmente gerado automaticamente no backend e não deve ser enviado no payload de criação.
- **user** (`int`): ID do usuário associado a este roadmap.
- **roadmap** (`int`): ID do roadmap que o usuário está seguindo.
- **progress** (`Double`): Progresso do usuário no roadmap, representado em percentual (ex: `100` significa 100% completo).
- **startedAt** (`String`): Data de início do roadmap no formato `"YYYY-MM-DD"`.
- **finishedAt** (`String`): Data de finalização do roadmap no formato `"YYYY-MM-DD"`. Se o roadmap ainda não estiver concluído, este campo pode ser omitido ou preenchido com `null`.
- **status** (`int`): Status do roadmap, por exemplo, `1` para ativo, `0` para inativo ou pausado.

### Observações

- O campo `finishedAt` pode ser omitido caso o roadmap ainda não tenha sido concluído.
- O progresso deve ser um número de ponto flutuante entre 0 e 100, indicando o percentual de conclusão.
- O formato de data utilizado para `startedAt` e `finishedAt` deve seguir o padrão `"YYYY-MM-DD"` para garantir consistência.



##  Payload para Criação de UserTask

### Classe `UserTaskDTO`


``` java
public class UserTaskDTO {
    private int id;
    private int user;
    private int task;
    private Boolean status;
    private String imagePath;
} 

```

```json
{
  "user": 28,
  "task": 15,
  "status": true,
  "imagePath": "/images/task/task1.jpg"
}
```

### Descrição dos Campos

Descrição dos Campos
- **id** (`int`): ID do UserTask (gerado automaticamente no backend).
- **user** (`int`): ID do usuário associado à tarefa.
- **task** (`int`: ID da tarefa atribuída ao usuário.
- **status** (`Boolean`): Status de conclusão da tarefa (true para concluída, false para pendente).
- **imagePath** (`String`): Caminho da imagem relacionada à tarefa.

## Payload para Criação de UserAchievement

### Classe `UserAchievementDTO`
``` java
public class UserAchievementDTO {
private int id;
private int user;
private String imagePath;
private int achievement;
private String obtainedDate;
}
```

```json
{
"user": 28,
"achievement": 3,
"imagePath": "/images/achievement/achievement3.jpg",
"obtainedDate": "2024-10-10"
}
```

Descrição dos Campos
- **id** (int): ID do UserAchievement (gerado automaticamente no backend).
- **user** (int): ID do usuário associado à conquista.
- **achievement** (int): ID da conquista.
- **imagePath** (String): Caminho da imagem relacionada à conquista.
- **obtainedDate** (String): Data em que a conquista foi obtida ("YYYY-MM-DD").


# Payload para Criação de Task

### Classe `TaskDTO`

```java
public class TaskDTO {
    private int id;
    private Set<Integer> steps;
    private TaskText tasktext;
    private String imagePath;
}
```

```json
{
  "steps": [1, 2, 3],
  "tasktext": {
    "title": "Tarefa 1",
    "description": "Esta é a descrição da tarefa 1.",
    "text": "Conteúdo detalhado da tarefa 1."
  },
  "imagePath": "/images/tasks/task1.jpg"
}
```

Descrição dos Campos

- **id** (int): ID da tarefa. Não deve ser enviado no payload de criação, pois será gerado automaticamente.
- **steps** (Set<Integer>): Conjunto de IDs dos passos associados a esta tarefa.
- **tasktext** (TaskText): Objeto contendo detalhes da tarefa, incluindo:
- **title** (String): Título da tarefa.
- **description** (String): Descrição da tarefa.
- **text** (String): Conteúdo detalhado da tarefa.
- **imagePath** (String): Caminho da imagem associada à tarefa.

## Payload para Criação de Step

### Classe `StepDTO `
``` java
public class StepDTO {
    private int id;
    private Set<Integer> roadmaps;
    private Set<Integer> lessons;
    private Set<Integer> tasks;
    private String description;
    private String imagePath;
    private int status;
}
```
```json
{
"roadmaps": [1, 2],
"lessons": [1, 3],
"tasks": [5, 8],
"description": "Descrição do passo",
"imagePath": "/images/step/step1.jpg",
"status": 1
}
```

Descrição dos Campos
- **id** (int): ID do passo (gerado automaticamente no backend).
- **roadmaps** (Set<Integer>): Conjunto de IDs dos roadmaps associados.
- **lessons** (Set<Integer>): Conjunto de IDs das lições associadas.
- **tasks** (Set<Integer>): Conjunto de IDs das tarefas associadas.
- **description** (String): Descrição do passo.
- **imagePath** (String): Caminho da imagem relacionada ao passo.
- **status** (int): Status do passo (ex: 1 para ativo).

## Payload para Criação de Statistics

### Classe `StatisticsDTO  `

``` java
public class StatisticsDTO {
    private int id;
    private int user;
    private int streakDays;
    private int bestStreak;
    private int userLevel;
    private Double userExperience;
    private int challengesCompletedCount;
    private int roadmapsCompletedCount;
}
```
```json
{
"user": 28,
"streakDays": 5,
"bestStreak": 10,
"userLevel": 3,
"userExperience": 150.0,
"challengesCompletedCount": 8,
"roadmapsCompletedCount": 2
}
```
Descrição dos Campos
- **id** (int): ID das estatísticas (gerado automaticamente no backend).
- **user** (int): ID do usuário.
- **streakDays** (int): Número de dias consecutivos em que o usuário completou atividades.
- **bestStreak** (int): Maior sequência de dias consecutivos de atividades completadas.
- **userLevel** (int): Nível do usuário.
- **userExperience** (Double): Experiência total acumulada pelo usuário.
- **challengesCompletedCount** (int): Número de desafios concluídos.
- **roadmapsCompletedCount** (int): Número de roadmaps concluídos.


## Payload para Criação de Roadmap

### Classe `RoadmapDTO  `

``` java
public class RoadmapDTO {
    private int id;
    private String title;
    private String description;
    private String imagePath;
    private int status;
    private Set<Integer> steps;
}
```

```json
{
  "title": "Roadmap de Programação",
  "description": "Este roadmap ensina programação do básico ao avançado",
  "imagePath": "/images/roadmap/roadmap1.jpg",
  "status": 1
}
```

Descrição dos Campos
- **id** (int): ID do roadmap (gerado automaticamente no backend).
- **title** (String): Título do roadmap.
- **description** (String): Descrição do roadmap.
- **imagePath** (String): Caminho da imagem relacionada ao roadmap.
- **status** (int): Status do roadmap (1 para ativo, 0 para inativo).
- **steps** (Set<Integer>): Conjunto de IDs dos passos associados ao roadmap.


## Payload para Criação de Lesson

### Classe `LessonDTO  `

``` java
public class LessonDTO {
    private int id;
    private String title;
    private String description;
    private String language;
    private String imagePath;
    private Set<Integer> steps;
}
```

```json
{
  "title": "Introdução à Programação",
  "description": "Uma lição sobre os conceitos básicos de programação",
  "language": "Python",
  "imagePath": "/images/lesson/lesson1.jpg",
  "steps": [1]
}
```

Descrição dos Campos
- **id** (int): ID da lição (gerado automaticamente no backend).
- **title** (String): Título da lição.
- **description** (String): Descrição da lição.
- **language** (String): Linguagem de programação utilizada.
- **imagePath** (String): Caminho da imagem relacionada à lição.
- **steps** (Set<Integer>): Conjunto de IDs dos passos associados à lição.


## Payload para Criação de Address

### Classe `AddressDTO  `

``` java
public class AddressDTO {
    private int id;
    private int user;
    private String street;
    private String city;
    private String state;
    private String country;
    private String zipCode;
    private String number;
    private int status;
}
```

```json
{
  "user": 28,
  "street": "Rua ABC",
  "city": "São Paulo",
  "state": "SP",
  "country": "Brasil",
  "zipCode": "01000-000",
  "number": "123",
  "status": 1
}
```

Descrição dos Campos
- **id** (int): ID do endereço (gerado automaticamente no backend).
- **user** (int): ID do usuário associado ao endereço.
- **street** (String): Rua do endereço.
- **city** (String): Cidade do endereço.
- **state** (String): Estado do endereço.
- **country** (String): País do endereço.
- **zipCode** (String): CEP do endereço.
- **number** (String): Número do endereço.
- **status** (int): Status do endereço (1 para ativo, 0 para inativo).

## Payload para Criação de Achievement

### Classe `AchievementDTO  `

``` java
public class AchievementDTO {
    private int id;
    private String name;
    private String title;
    private String description;
    private String imagePath;
}
```

```json
{
  "name": "Python", 
  "title": "Conquista de Python",
  "description": "Conquista ao finalizar um curso de Python",
  "imagePath": "/images/achievement/achievement1.jpg"
}
```

Descrição dos Campos
- **id** (int): ID da conquista (gerado automaticamente no backend).
- **title** (String): Título da conquista.
- **description** (String): Descrição da conquista.
- **imagePath** (String): Caminho da imagem relacionada à conquista.



