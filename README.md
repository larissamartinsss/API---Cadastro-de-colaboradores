#  API - Cadastro de colaboradores

Essa API é utilizada para cadastro de colaboradores, fornecendo 4 funcionalidades:
#### 1. inserir colaborador
#### 2. remover colaborador
#### 3. buscar um colaborador
#### 4. listar colaboradores agrupados por setor. 

## Endpoints
### GET /colaboradores
Esse endpoint é responsável por retornar uma listagem com todos os colaboradores encontrados no banco de dados.
#### Parametros
Nada
#### Respostas
##### OK! 200
Se for essa resposta, você receberá a listagem de todos os colaboradores.

Exemplo: 
```
[
    {
        "id": 1,
        "nome": "Larissa Martins",
        "email": "lari@mobicare.com",
        "setor": 1
    },
    {
        "id": 2,
        "nome": "Gabriella Jesus",
        "email": "gabi@mobicare.com",
        "setor": 1
    }
]
```

## 
### GET /colaborador/{id}
Esse endpoint é responsável por retornar uma listagem de um determinado colaborador no banco de dados, a partir do seu id.
#### Parametros
id
#### Respostas
##### OK! 200
Se for essa resposta, retornará o colaborador correspondente ao id buscado.

## 
### POST /colaborador/
Esse endpoint é responsável por inserir/cadastrar um novo colaborador ao sistema.
#### Parametros
Nada
#### Respostas
##### OK! 200
Se for essa resposta, o colaborador foi cadastrado com sucesso.

### PUT /colaborador/{id}
Esse endpoint é responsável por alterar o cadastro.
#### Parametros
id, nome, email, setor;
#### Respostas
##### OK! 200
Se for essa resposta, retornará o colaborador será alterado.

### DELETE /colaborador/{id}
Esse endpoint é responsável por excluir colaboradores do sistema.
#### Parametros
id
#### Respostas
##### OK! 200
Se for essa resposta, retornará o colaborador será alterado.
