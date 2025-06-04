// Módulo de Exercícios Práticos com Formulário de Avaliação
export const exerciciosSubtopics = [
  {
    id: 'exercicios-geracao-codigo',
    title: 'Exercícios: Geração de Código',
    content: `
# Exercícios: Geração de Código

## Aplicando Técnicas de Prompt para Geração de Código

Nesta seção, vamos praticar a aplicação das técnicas de engenharia de prompt especificamente para a geração de código. Vamos explorar exemplos práticos e exercícios interativos.

## Exemplo 1: Geração de uma Função de Validação

### Problema:
Precisamos criar uma função que valide um formulário de cadastro de usuário.

### Prompt Básico (Menos Eficaz):
\`\`\`
Escreva uma função de validação de formulário.
\`\`\`

### Prompt Avançado (Mais Eficaz):
\`\`\`
Você é um desenvolvedor front-end sênior especializado em validação de formulários e experiência do usuário.

Crie uma função JavaScript chamada 'validateUserForm' que valide um formulário de cadastro de usuário com os seguintes campos:
- nome (string, obrigatório, 3-50 caracteres)
- email (string, obrigatório, formato válido de email)
- senha (string, obrigatória, mínimo 8 caracteres, deve conter pelo menos uma letra maiúscula, uma minúscula e um número)
- confirmacaoSenha (deve ser idêntica ao campo senha)
- idade (número, opcional, mas se fornecido deve ser >= 18)

A função deve:
1. Receber um objeto com esses campos como parâmetro
2. Retornar um objeto com a estrutura { valido: boolean, erros: { campo: mensagemDeErro } }
3. Incluir mensagens de erro específicas e amigáveis para cada tipo de validação
4. Usar apenas JavaScript puro (sem bibliotecas externas)
5. Seguir boas práticas de código limpo e legibilidade

Inclua comentários explicando a lógica de validação e forneça um exemplo de uso da função.
\`\`\`

### Análise:
O prompt avançado é mais eficaz porque:
- Define um papel específico (desenvolvedor front-end sênior)
- Especifica claramente o nome e propósito da função
- Detalha os requisitos de validação para cada campo
- Define a estrutura de retorno esperada
- Inclui restrições e expectativas adicionais (sem bibliotecas, código limpo)
- Solicita comentários e exemplos

## Exercício Prático 1:

Agora é sua vez! Escreva um prompt para gerar uma função que calcule o preço total de um carrinho de compras, considerando:
- Lista de produtos (cada um com nome, preço unitário e quantidade)
- Aplicação de descontos por cupom
- Cálculo de frete baseado no CEP
- Impostos variáveis por estado

Lembre-se de aplicar as técnicas que aprendemos:
- Atribuição de papel (Role Prompting)
- Especificidade e contexto
- Estrutura clara de entrada/saída
- Restrições e expectativas

## Exemplo 2: Depuração de Código

### Problema:
Temos um código com um bug que precisa ser identificado e corrigido.

### Código com Bug:
\`\`\`javascript
function processarDados(dados) {
  const resultados = [];
  
  for (let i = 0; i < dados.length; i++) {
    const item = dados[i];
    const processado = item.valor * 2;
    
    if (processado > 10) {
      resultados.push({
        id: item.id,
        processado: processado,
        status: 'aprovado'
      });
    }
  }
  
  return resultados.filter(item => item.status = 'aprovado');
}

// Exemplo de uso
const dadosTeste = [
  { id: 1, valor: 7 },
  { id: 2, valor: 3 },
  { id: 3, valor: 8 }
];

console.log(processarDados(dadosTeste)); // Deveria retornar apenas itens com valor processado > 10
\`\`\`

### Prompt Avançado (Usando Chain-of-Thought):
\`\`\`
Você é um engenheiro de software especializado em debugging de JavaScript.

Analise o seguinte código JavaScript que deveria processar uma lista de dados, 
duplicar seus valores e retornar apenas os itens cujo valor processado seja maior que 10.
No entanto, o código não está funcionando como esperado.

[código acima]

Por favor:
1. Execute uma análise linha por linha do código
2. Identifique o(s) bug(s) presente(s)
3. Explique por que o bug está ocorrendo e seu impacto
4. Forneça a versão corrigida do código
5. Sugira melhorias adicionais para tornar o código mais robusto e legível

Mostre seu raciocínio passo a passo.
\`\`\`

### Análise:
Este prompt é eficaz para debugging porque:
- Atribui um papel especializado em debugging
- Explica claramente o comportamento esperado do código
- Solicita uma análise passo a passo (Chain-of-Thought)
- Pede não apenas a correção, mas também a explicação do bug
- Solicita melhorias adicionais além da simples correção

## Exercício Prático 2:

Encontre o bug no seguinte código Python e escreva um prompt eficaz para corrigi-lo, usando a técnica Chain-of-Thought:

\`\`\`python
def calcular_media(notas):
    total = 0
    for nota in notas:
        total += nota
    return total / len(notas)

def classificar_aluno(notas):
    media = calcular_media(notas)
    
    if media >= 9.0:
        return "A"
    elif media >= 7.0:
        return "B"
    elif media >= 5.0:
        return "C"
    else:
        return "D"

# Teste
notas_aluno = []
resultado = classificar_aluno(notas_aluno)
print(f"Classificação: {resultado}")  # Deveria lidar com lista vazia adequadamente
\`\`\`

## Dicas para Prompts de Código Eficazes:

1. **Seja específico sobre a linguagem e versão**
   - "Usando Python 3.9+" em vez de apenas "em Python"

2. **Mencione convenções de código relevantes**
   - "Seguindo PEP 8" para Python
   - "Usando convenções do Airbnb Style Guide" para JavaScript

3. **Especifique o nível de comentários desejado**
   - "Inclua comentários explicativos para partes complexas"
   - "Documente a função usando JSDoc"

4. **Defina o tratamento de erros esperado**
   - "Inclua tratamento de exceções para entradas inválidas"
   - "Valide os parâmetros antes de processá-los"

5. **Solicite testes quando apropriado**
   - "Inclua testes unitários para os casos principais"
   - "Demonstre o uso da função com exemplos"
`
  },
  {
    id: 'exercicios-documentacao',
    title: 'Exercícios: Documentação e Explicação',
    content: `
# Exercícios: Documentação e Explicação

## Utilizando IA para Documentar e Explicar Código

Uma das aplicações mais úteis da IA para desenvolvedores é a geração de documentação e explicação de código existente. Vamos praticar como criar prompts eficazes para estas tarefas.

## Exemplo 1: Documentação de API

### Código a ser Documentado:
\`\`\`javascript
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/auth');

router.post('/users', UserController.create);
router.get('/users', authMiddleware, UserController.list);
router.get('/users/:id', authMiddleware, UserController.getById);
router.put('/users/:id', authMiddleware, UserController.update);
router.delete('/users/:id', authMiddleware, UserController.delete);

module.exports = router;
\`\`\`

### Prompt Eficaz (Usando Few-Shot Learning):
\`\`\`
Você é um redator técnico especializado em documentação de APIs RESTful.

Crie uma documentação completa para os endpoints de API definidos no seguinte código de rotas Express.js, seguindo o formato dos exemplos abaixo:

Exemplo de documentação para um endpoint:

## Criar Produto
**Endpoint:** POST /api/products
**Autenticação:** Não requerida
**Descrição:** Cria um novo produto no sistema.
**Corpo da Requisição:**
\`\`\`json
{
  "name": "string",
  "price": "number",
  "description": "string",
  "category": "string"
}
\`\`\`
**Respostas:**
- 201 Created: Produto criado com sucesso
  \`\`\`json
  {
    "id": "string",
    "name": "string",
    "price": "number",
    "description": "string",
    "category": "string",
    "createdAt": "string"
  }
  \`\`\`
- 400 Bad Request: Dados inválidos
- 500 Internal Server Error: Erro no servidor

Agora, documente todos os endpoints definidos neste código de rotas:

[código das rotas acima]

Para cada endpoint, inclua:
1. Título descritivo
2. Método HTTP e caminho
3. Requisitos de autenticação
4. Descrição da funcionalidade
5. Parâmetros de URL (se houver)
6. Corpo da requisição esperado (quando aplicável)
7. Possíveis respostas com códigos HTTP e exemplos de payload
\`\`\`

### Análise:
Este prompt é eficaz porque:
- Define um papel especializado em documentação de API
- Fornece um exemplo claro do formato de documentação desejado (Few-Shot)
- Especifica exatamente quais elementos incluir para cada endpoint
- Contextualiza o código como rotas Express.js

## Exercício Prático 1:

Escreva um prompt para documentar o seguinte trecho de código Python que implementa uma classe para gerenciamento de tarefas:

\`\`\`python
class TaskManager:
    def __init__(self):
        self.tasks = {}
        self.last_id = 0
    
    def add_task(self, title, description, due_date=None, priority=1):
        self.last_id += 1
        task_id = self.last_id
        self.tasks[task_id] = {
            'id': task_id,
            'title': title,
            'description': description,
            'due_date': due_date,
            'priority': priority,
            'completed': False
        }
        return task_id
    
    def complete_task(self, task_id):
        if task_id in self.tasks:
            self.tasks[task_id]['completed'] = True
            return True
        return False
    
    def delete_task(self, task_id):
        if task_id in self.tasks:
            del self.tasks[task_id]
            return True
        return False
    
    def get_all_tasks(self, include_completed=True):
        if include_completed:
            return list(self.tasks.values())
        return [task for task in self.tasks.values() if not task['completed']]
    
    def get_task(self, task_id):
        return self.tasks.get(task_id)
\`\`\`

## Exemplo 2: Explicação de Algoritmo Complexo

### Código a ser Explicado:
\`\`\`python
def process_data(data, threshold=0.5):
    result = []
    temp = {}
    
    # Fase 1: Agrupamento
    for item in data:
        key = item['category']
        if key not in temp:
            temp[key] = []
        temp[key].append(item['value'])
    
    # Fase 2: Processamento
    for category, values in temp.items():
        avg = sum(values) / len(values)
        variance = sum((x - avg) ** 2 for x in values) / len(values)
        std_dev = variance ** 0.5
        
        # Fase 3: Filtragem
        filtered = [x for x in values if abs(x - avg) <= threshold * std_dev]
        
        if filtered:
            result.append({
                'category': category,
                'average': sum(filtered) / len(filtered),
                'count': len(filtered),
                'outliers': len(values) - len(filtered)
            })
    
    return sorted(result, key=lambda x: x['average'], reverse=True)
\`\`\`

### Prompt Eficaz (Usando Role + Chain-of-Thought):
\`\`\`
Você é um professor de ciência de dados especializado em explicar algoritmos complexos para desenvolvedores de nível intermediário.

Explique o seguinte algoritmo Python que processa dados, identificando seu propósito, funcionamento e aplicações potenciais. 
Use uma abordagem passo a passo, explicando cada fase do algoritmo separadamente e depois integrando-as em uma visão completa.

[código do algoritmo acima]

Sua explicação deve incluir:

1. Uma visão geral do propósito do algoritmo em linguagem simples
2. Uma análise detalhada de cada fase do processamento
3. O significado dos parâmetros e variáveis principais
4. A lógica matemática/estatística por trás do algoritmo
5. Possíveis casos de uso reais para este algoritmo
6. Considerações de performance e complexidade
7. Potenciais melhorias ou alternativas

Use analogias e visualizações conceituais quando apropriado para facilitar o entendimento.
\`\`\`

### Análise:
Este prompt é eficaz porque:
- Define um papel educacional específico
- Solicita uma explicação estruturada e passo a passo
- Especifica exatamente quais aspectos do algoritmo devem ser abordados
- Pede analogias e visualizações para facilitar o entendimento
- Solicita considerações adicionais como performance e melhorias

## Exercício Prático 2:

Escreva um prompt para explicar o seguinte algoritmo de busca binária para um desenvolvedor júnior que está aprendendo algoritmos:

\`\`\`javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
\`\`\`

## Dicas para Prompts de Documentação e Explicação:

1. **Especifique o nível técnico do público-alvo**
   - "Explique para um desenvolvedor júnior"
   - "Documente para usuários técnicos familiarizados com a API"

2. **Defina o estilo e tom da documentação**
   - "Use um tom conversacional e acessível"
   - "Mantenha um estilo técnico e conciso"

3. **Especifique o formato desejado**
   - "Siga o formato Markdown"
   - "Use o estilo de documentação do Google"

4. **Solicite exemplos quando apropriado**
   - "Inclua exemplos de código para cada método"
   - "Forneça casos de uso comuns"

5. **Peça visualizações conceituais**
   - "Inclua analogias para explicar conceitos complexos"
   - "Descreva o fluxo de dados como um diagrama conceitual"
`
  },
  {
    id: 'avaliacao-conhecimentos',
    title: 'Avaliação de Conhecimentos',
    content: `
# Avaliação de Conhecimentos

## Teste seus conhecimentos sobre IA e Engenharia de Prompt

Agora que você estudou os conceitos fundamentais de IA e as técnicas de engenharia de prompt, vamos avaliar seu aprendizado com um questionário interativo.

Responda às perguntas abaixo para testar seu conhecimento e receber feedback imediato sobre seu desempenho.

`
  }
]
