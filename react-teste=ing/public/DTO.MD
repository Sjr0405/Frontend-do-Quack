# DTOs e Entidades de Domínio

## 1. DTOs para Comunicação com a API

**Objetivo**: DTOs (Data Transfer Objects) são utilizados para transportar dados entre a API e o cliente (como navegadores e aplicativos móveis).

**Quando usar**: Use DTOs para enviar ou receber dados através da API, como na criação, atualização e busca de recursos. Eles ajudam a controlar e formatar os dados expostos pela API, garantindo que apenas as informações necessárias sejam transmitidas.

## 2. Entidades de Domínio para Lógica de Negócio

**Objetivo**: Entidades de domínio representam os modelos de dados do sistema e encapsulam a lógica de negócio.

**Quando usar**: Use entidades de domínio ao manipular ou processar dados internamente, como na aplicação da lógica de negócio ou na interação com o banco de dados.

## Fluxo Geral

### Recebendo Dados:

1. **API Recebe um DTO**: Quando uma requisição é feita para criar ou atualizar um recurso, os dados são recebidos como um DTO.
2. **Converter DTO para Entidade**: O controlador converte o DTO para a entidade de domínio correspondente. Isso permite que a lógica de negócio seja aplicada utilizando o modelo de domínio.

### Processando Dados:

1. **Lógica de Negócio**: O serviço ou repositório utiliza a entidade de domínio para processar dados e interagir com o banco de dados. A entidade pode ter métodos que encapsulam a lógica de negócio.

### Enviando Dados:

1. **Converter Entidade para DTO**: Quando uma resposta é enviada, o controlador converte a entidade de domínio de volta para um DTO.
2. **Retornar DTO**: O DTO é então retornado ao cliente, contendo apenas as informações necessárias.

## Exemplo Prático

Vamos supor que você tenha um endpoint para criar um endereço:

### Recebendo Dados:

1. O cliente envia um POST para `/addresses` com um `AddressDTO`.

### Processando Dados:

1. O controlador converte o `AddressDTO` para um `Address` (entidade de domínio).
2. O serviço aplica a lógica de negócio e salva o `Address` no banco de dados.

### Enviando Dados:

1. O serviço retorna a entidade `Address` (ou `AddressDTO`).
2. O controlador converte a entidade de volta para um `AddressDTO`.
3. O `AddressDTO` é retornado como resposta ao cliente.

## Benefícios

- **Segurança**: Controle sobre quais dados são expostos ao cliente.
- **Flexibilidade**: Facilidade para modificar a estrutura dos dados sem impactar a API diretamente.
- **Desempenho**: Otimização na quantidade de dados enviados e recebidos, reduzindo o tráfego desnecessário.

## Dicas Adicionais

- **Validação**: Valide os dados nos DTOs antes de convertê-los para entidades.
- **Documentação**: Mantenha a documentação da API e dos DTOs atualizada para refletir as mudanças no modelo de dados.
- **Conversão**: Utilize bibliotecas de mapeamento (como MapStruct) para facilitar a conversão entre DTOs e entidades.

A separação entre DTOs e entidades ajuda a manter o código organizado e facilita a manutenção do sistema.

---

# Fluxo de Processamento de Dados

## 1. Controller

A primeira camada, o **Controller**, recebe as requisições em formato de DTO (Data Transfer Object). O DTO transporta dados entre o frontend e o backend, simplificando o processo de comunicação.

## 2. Service

O DTO é então enviado para o **Service**, que realiza a conversão do DTO em uma Entidade de Domínio. A Entidade de Domínio é projetada para processar e trabalhar com dados, mas não para realizar operações diretas de inserção ou remoção no banco de dados.

## 3. Repository Implementation

Após o processamento, os dados são encaminhados para a **Repository Implementation**. Esta camada transforma a Entidade de Domínio em um **Model** e realiza a operação de salvamento no banco de dados PostgreSQL.

## Resumo do Fluxo

1. **Controller** recebe o DTO.
2. **Service** converte o DTO em Entidade de Domínio.
3. **Repository Implementation** converte a Entidade de Domínio em Model e salva no banco de dados PostgreSQL.
