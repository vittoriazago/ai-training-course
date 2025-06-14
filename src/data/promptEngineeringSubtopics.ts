// Novo submódulo sobre configurações de prompt
export const promptEngineeringSubtopics = [
  {
    id: "introducao-prompt",
    title: "O Que é Engenharia de Prompt?",
    content: `
# O Que é Engenharia de Prompt?

## Comunicando-se Efetivamente com a IA

Agora que compreendemos o potencial da IA Generativa, especialmente dos Grandes Modelos de Linguagem (LLMs), surge uma questão fundamental: **como podemos instruir esses modelos de forma eficaz para obter os resultados desejados?**

A resposta reside na **Engenharia de Prompt**.

> **DEFINIÇÃO CHAVE:** Engenharia de Prompt é o processo iterativo de projetar, refinar e otimizar as instruções (os "prompts") que fornecemos a um modelo de IA para guiá-lo na geração de uma resposta específica e de alta qualidade.

Pense nisso como **aprender a "falar a língua" da IA**, formulando perguntas e comandos de maneira clara, contextualizada e precisa.

## Por Que a Engenharia de Prompt é Crucial?

A qualidade da saída de um LLM está **diretamente correlacionada** com a qualidade do prompt de entrada:

* **Prompt vago ou mal formulado** → Resposta genérica, irrelevante ou incorreta
* **Prompt bem elaborado** → Código funcional, explicações claras, soluções criativas

## Uma Habilidade Multidisciplinar

A engenharia de prompt eficaz combina:

* **Clareza de comunicação**
* **Compreensão do domínio** (neste caso, desenvolvimento de software)
* **Entendimento das capacidades e limitações do modelo de IA**

**PARA DESENVOLVEDORES:** Dominar esta habilidade permite transformar modelos de IA generativa em verdadeiros assistentes de programação, multiplicando sua produtividade e capacidade criativa.
`,
  },
  {
    id: "tecnica-role-prompting",
    title: "Técnica: Atribuição de Papel (Role Prompting)",
    content: `
# Técnica: Atribuição de Papel (Role Prompting)

## O Poder de Definir um Papel para a IA

Uma das técnicas mais eficazes para direcionar o comportamento de um LLM é **atribuir-lhe um papel específico**. Ao iniciar o prompt definindo quem o modelo deve "ser", você:

* **Contextualiza** a resposta esperada
* **Incentiva** a adoção de um tom e estilo específicos
* **Ativa** uma base de conhecimento especializada

> **PRINCÍPIO FUNDAMENTAL:** Os LLMs foram treinados com textos que descrevem diferentes papéis profissionais e suas características. Ao invocar um papel, você acessa esse conhecimento implícito.

## Como Implementar Role Prompting

A estrutura básica segue o padrão:

\`\`\`
Você é um [papel/especialista]. [Descrição adicional do papel]. [Sua tarefa/pergunta específica].
\`\`\`

### Exemplos Práticos para Desenvolvedores

**Exemplo 1: Revisão de Código**

❌ **Prompt Básico:**
\`\`\`
Explique este código:
[código aqui]
\`\`\`

✅ **Prompt com Role:**
\`\`\`
Você é um engenheiro de software sênior especializado em Python e boas práticas de código limpo. 
Você está revisando o código de um colega júnior.
Explique este trecho de código Python, focando em clareza, eficiência e possíveis armadilhas:

[código aqui]
\`\`\`

**Exemplo 2: Arquitetura de Software**

❌ **Prompt Básico:**
\`\`\`
Como devo estruturar meu aplicativo de e-commerce?
\`\`\`

✅ **Prompt com Role:**
\`\`\`
Você é um arquiteto de software experiente que já projetou sistemas de e-commerce de alta escala.
Sugira uma arquitetura para um novo aplicativo de e-commerce, considerando:
- Escalabilidade para até 10.000 usuários simultâneos
- Necessidade de processamento de pagamentos
- Integração com sistemas de logística
- Conformidade com LGPD
\`\`\`

## Papéis Úteis para Desenvolvedores

| Papel | Quando Usar | Benefícios |
|-------|-------------|------------|
| **Engenheiro Sênior** | Revisão de código, boas práticas | Respostas mais críticas e detalhadas |
| **Especialista em Segurança** | Revisão de vulnerabilidades | Foco em aspectos de segurança frequentemente negligenciados |
| **Arquiteto de Software** | Design de sistemas | Visão mais abrangente e consideração de trade-offs |
| **DevOps Engineer** | CI/CD, infraestrutura | Práticas modernas de implantação e monitoramento |
| **Redator Técnico** | Documentação | Clareza, completude e foco no usuário |
| **QA Engineer** | Testes e qualidade | Abordagem sistemática para identificar casos de teste |

**DICA AVANÇADA:** Combine papéis para problemas complexos. Por exemplo: "Você é um engenheiro de software sênior com especialização em segurança de aplicações web..."
`,
  },
  {
    id: "tecnica-chain-of-thought",
    title: "Técnica: Cadeia de Pensamento (Chain-of-Thought)",
    content: `
# Técnica: Cadeia de Pensamento (Chain-of-Thought)

## Pensando Passo a Passo com a IA

Modelos de linguagem nem sempre chegam à resposta correta diretamente, especialmente para problemas que exigem **raciocínio passo a passo**. A técnica da **Cadeia de Pensamento (Chain-of-Thought ou CoT)** incentiva o modelo a "pensar alto", detalhando seu processo de raciocínio antes de fornecer a resposta final.

![Diagrama ilustrando as técnicas de engenharia de prompt](__BASE_URL__/images/prompt_engineering_techniques.png)
*<p class="image-caption">Técnicas como Role Prompting, Chain-of-Thought e Few-Shot Learning ajudam a guiar a IA.</p>*

> **CONCEITO CHAVE:** A Cadeia de Pensamento é particularmente valiosa para tarefas complexas como depuração, otimização de algoritmos e resolução de problemas lógicos.

## Como Implementar Chain-of-Thought

Existem duas abordagens principais:

### 1. Solicitação Explícita

Instrua diretamente o modelo a explicar seu raciocínio:

\`\`\`
[Problema]. Resolva este problema passo a passo, explicando seu raciocínio em cada etapa.
\`\`\`

### 2. Demonstração Implícita

Forneça um exemplo de raciocínio passo a passo e o modelo tenderá a seguir o mesmo padrão:

\`\`\`
Problema: [exemplo de problema]
Solução passo a passo:
1. Primeiro, considero...
2. Em seguida, analiso...
3. Portanto, a resposta é...

Agora, resolva este problema: [seu problema real]
\`\`\`

## Aplicações Práticas para Desenvolvedores

### Depuração de Código

**Exemplo: Depuração com CoT**

❌ **Prompt Básico:**
\`\`\`
Corrija este código JavaScript:
[código com bug]
\`\`\`

✅ **Prompt com CoT:**
\`\`\`
Analise o seguinte código JavaScript que deveria buscar dados de uma API e exibi-los, 
mas está lançando um erro 'TypeError: Cannot read property \'map\' of undefined'.

[código com bug]

Explique passo a passo:
1. O que o código está tentando fazer
2. Por que o erro provavelmente está ocorrendo
3. Como o problema pode ser corrigido
4. Forneça o código corrigido com comentários explicativos
\`\`\`

### Otimização de Algoritmos

**Exemplo: Otimização com CoT**

❌ **Prompt Básico:**
\`\`\`
Otimize este algoritmo:
[código ineficiente]
\`\`\`

✅ **Prompt com CoT:**
\`\`\`
Este algoritmo de ordenação tem complexidade O(n²) e está causando problemas de performance 
com conjuntos de dados grandes:

[código ineficiente]

Analise este algoritmo passo a passo:
1. Identifique os gargalos de performance
2. Explique por que esses gargalos ocorrem
3. Proponha uma abordagem mais eficiente
4. Implemente a solução otimizada
5. Compare a complexidade computacional antes e depois
\`\`\`

## Benefícios da Cadeia de Pensamento

* **Maior precisão:** Reduz erros de raciocínio ao decompor problemas complexos
* **Transparência:** Torna o processo de solução visível e verificável
* **Valor educacional:** Permite aprender com o raciocínio do modelo
* **Depuração facilitada:** Identifica onde o raciocínio pode ter divergido

**DICA PRÁTICA:** Combine CoT com Role Prompting para resultados ainda melhores: "Você é um especialista em otimização de algoritmos. Analise este código passo a passo..."
`,
  },
  {
    id: "tecnica-few-shot",
    title: "Técnica: Exemplos de Poucas Tentativas (Few-Shot)",
    content: `
# Técnica: Exemplos de Poucas Tentativas (Few-Shot)

## Aprendendo pelo Exemplo

Os LLMs têm uma capacidade notável de **aprender a partir de exemplos** fornecidos no próprio prompt. A técnica **Few-Shot** (poucos exemplos) aproveita essa capacidade, fornecendo de 1 a 5 exemplos do formato ou tipo de resposta desejada.

> **PRINCÍPIO FUNDAMENTAL:** Ao mostrar exemplos do que você espera, você "programa" o modelo para seguir o mesmo padrão, sem precisar explicar detalhadamente as regras.

## Como Implementar Few-Shot Learning

A estrutura básica segue o padrão:

\`\`\`
Exemplo 1:
[Entrada]
[Saída esperada]

Exemplo 2:
[Entrada]
[Saída esperada]

Agora, faça o mesmo para:
[Sua entrada real]
\`\`\`

## Aplicações Práticas para Desenvolvedores

### Geração de Testes Unitários

**Exemplo: Testes com Few-Shot**

✅ **Prompt com Few-Shot:**
\`\`\`
Gere um teste unitário em Python usando a biblioteca pytest para a seguinte função. 
Siga o formato dos exemplos abaixo:

Função: def adicionar(a, b): return a + b
Teste:
\`\`\`

\`\`\`python
def test_adicionar_positivos():
    assert adicionar(2, 3) == 5
    
def test_adicionar_negativos():
    assert adicionar(-1, -5) == -6
    
def test_adicionar_zero():
    assert adicionar(10, 0) == 10
\`\`\`

\`\`\`
Função: def multiplicar(a, b): return a * b
Teste:
\`\`\`

\`\`\`python
def test_multiplicar_positivos():
    assert multiplicar(2, 3) == 6
    
def test_multiplicar_negativos():
    assert multiplicar(-2, -3) == 6
    
def test_multiplicar_zero():
    assert multiplicar(5, 0) == 0
\`\`\`

\`\`\`
Agora, gere testes para esta função:
def subtrair(a, b): return a - b
\`\`\`

### Conversão entre Formatos de Dados

**Exemplo: Conversão JSON para CSV com Few-Shot**

✅ **Prompt com Few-Shot:**
\`\`\`
Converta os seguintes objetos JSON para formato CSV. Siga os exemplos:

JSON: {"nome": "João", "idade": 30, "cidade": "São Paulo"}
CSV: nome,idade,cidade
João,30,São Paulo

JSON: {"produto": "Laptop", "preço": 3500, "estoque": 10}
CSV: produto,preço,estoque
Laptop,3500,10

Agora, converta este JSON:
{"cliente": "Empresa ABC", "valor": 15000, "prazo": 30, "status": "Aprovado"}
\`\`\`

## Fatores que Influenciam a Eficácia do Few-Shot

| Fator | Impacto | Recomendação |
|-------|---------|--------------|
| **Número de exemplos** | Mais exemplos geralmente melhoram a precisão | Use 2-3 exemplos para equilíbrio entre precisão e tamanho do prompt |
| **Diversidade de exemplos** | Exemplos diversos ajudam a generalizar | Inclua variações que cubram diferentes casos |
| **Ordem dos exemplos** | O último exemplo tem maior influência | Coloque o exemplo mais similar ao seu caso por último |
| **Complexidade** | Tarefas complexas precisam de mais exemplos | Decomponha tarefas complexas em subtarefas com exemplos específicos |

## Combinando Few-Shot com Outras Técnicas

Esta técnica é extremamente poderosa quando combinada com:

* **Role Prompting:** "Você é um especialista em testes. Aqui estão alguns exemplos..."
* **Chain-of-Thought:** Inclua o raciocínio nos exemplos para induzir o mesmo padrão

**DICA AVANÇADA:** Para tarefas de formatação específica (como geração de código em um estilo particular), few-shot é frequentemente a técnica mais eficaz.
`,
  },
  {
    id: "boas-praticas",
    title: "Boas Práticas de Engenharia de Prompt",
    content: `
# Boas Práticas de Engenharia de Prompt

## O Que Fazer e O Que Não Fazer

Para consolidar nosso entendimento, vamos abordar algumas diretrizes práticas – os "Do\\'s" e "Don\\'ts" da engenharia de prompt eficaz.

## ✅ FAÇA

### **Seja Específico e Claro**

Evite ambiguidades. Quanto mais detalhes e contexto você fornecer, melhor será a resposta.

❌ **Vago:** "Escreva um código"  
✅ **Específico:** "Escreva uma função Python chamada \`calcular_fatorial\` que recebe um inteiro não negativo \`n\` e retorna seu fatorial. Inclua tratamento para o caso n=0 e validação de entrada."

### **Forneça Contexto Relevante**

Inclua informações essenciais que o modelo precisa saber:

* Linguagem de programação
* Bibliotecas/frameworks utilizados
* Versões específicas
* Objetivo do código
* Restrições específicas (performance, memória, etc.)

### **Defina o Formato da Saída**

Se você precisa da resposta em um formato específico, peça explicitamente:

✅ **Exemplo:** "Retorne a resposta em formato JSON com os campos \\'erro\\' (booleano), \\'mensagem\\' (string) e \\'dados\\' (array de objetos)."

### **Itere e Refine**

> **PRINCÍPIO CHAVE:** Raramente o primeiro prompt é perfeito. A engenharia de prompt é um processo iterativo.

* Experimente diferentes formulações
* Adicione detalhes conforme necessário
* Use técnicas variadas
* Refine com base nas respostas obtidas

### **Use Delimitadores Claros**

Para separar instruções de dados ou exemplos, use delimitadores como:

* Aspas triplas (\`"""\`)
* Tags XML (\`<contexto>...</contexto>\`)
* Marcadores claros (INÍCIO DO CÓDIGO, FIM DO CÓDIGO)

### **Divida Tarefas Complexas**

Se a tarefa for muito grande ou complexa, divida-a em prompts menores e mais gerenciáveis:

1. Primeiro, peça o design geral
2. Depois, gere cada componente separadamente
3. Finalmente, integre as partes

## ❌ NÃO FAÇA

### **Não Seja Vago ou Ambíguo**

"Me ajude com meu código" é muito genérico. Especifique o problema.

### **Não Assuma Conhecimento Prévio (Excessivo)**

Embora os LLMs sejam vastos, eles não conhecem:

* Os detalhes específicos do seu projeto
* Seu ambiente de desenvolvimento
* Código não fornecido no prompt
* Contexto organizacional

### **Não Faça Perguntas Capciosas ou Enganosas**

Isso geralmente leva a respostas confusas ou incorretas.

### **Não Confie Cegamente na Resposta**

**ALERTA DE SEGURANÇA:** Sempre revise e valide as saídas do modelo, especialmente código. LLMs podem:

* Cometer erros lógicos
* Gerar código inseguro
* "Alucinar" informações incorretas
* Usar APIs ou métodos obsoletos

### **Não Use Linguagem Excessivamente Complexa**

Mantenha a clareza, embora o jargão técnico relevante ao domínio seja aceitável e muitas vezes necessário.

### **Não Peça Informações Pessoais ou Sensíveis**

Evite incluir dados confidenciais em seus prompts.

## Checklist para Prompts Eficazes

Antes de enviar seu prompt, verifique se ele:

- [ ] Define claramente o objetivo
- [ ] Fornece contexto suficiente
- [ ] Especifica o formato desejado
- [ ] Usa linguagem clara e precisa
- [ ] Inclui exemplos relevantes (quando apropriado)
- [ ] Delimita claramente diferentes partes
- [ ] Não contém informações sensíveis
`,
  },
  {
    id: "configuracoes-prompt",
    title: "Configurações Técnicas de Prompt",
    content: `
# Configurações Técnicas de Prompt

## Ajustando o Comportamento do Modelo

Além do texto do prompt em si, muitas APIs e ferramentas de IA permitem ajustar **parâmetros de configuração** que influenciam como o modelo gera a resposta. Compreender e utilizar essas configurações é crucial para refinar os resultados.

![Diagrama ilustrando parâmetros de configuração de prompt](__BASE_URL__/images/prompt_config_parameters.png)
*<p class="image-caption">Parâmetros como Temperatura, Janela de Contexto e Tokens influenciam a saída da IA.</p>*

## Temperatura (Temperature)

> **CONCEITO CHAVE:** A temperatura controla a **aleatoriedade** ou **criatividade** da saída do modelo.

* **Valores Baixos (próximos a 0):** Respostas mais **determinísticas**, focadas e previsíveis. O modelo tende a escolher as palavras mais prováveis.
  * **Ideal para:** Geração de código preciso, respostas factuais, tarefas que exigem consistência.
* **Valores Altos (próximos a 1 ou mais):** Respostas mais **criativas**, diversas e inesperadas. O modelo explora opções menos prováveis.
  * **Ideal para:** Brainstorming, escrita criativa, geração de ideias, tarefas que exigem variedade.

**Analogia:** Pense na temperatura como um controle de "foco vs. exploração". Baixa temperatura foca no caminho mais óbvio; alta temperatura explora caminhos alternativos.

**Exemplo de Uso:**
* Para gerar uma função Python específica: \`temperature = 0.2\`
* Para gerar ideias de nomes para um projeto: \`temperature = 0.9\`

## Tamanho do Contexto (Context Window)

> **CONCEITO CHAVE:** O tamanho do contexto define a **quantidade máxima de informação** (medida em tokens) que o modelo pode considerar ao gerar uma resposta. Isso inclui o prompt de entrada e a resposta gerada.

* **Contexto Pequeno:** Pode levar a respostas que perdem informações anteriores ou não consideram todo o histórico da conversa.
* **Contexto Grande:** Permite que o modelo mantenha a coerência em conversas longas, considere mais informações do prompt e gere respostas mais detalhadas.

**Implicações:**
* Prompts muito longos podem exceder o limite de contexto.
* Conversas longas podem exigir modelos com janelas de contexto maiores.
* O tamanho do contexto influencia o custo e a latência.

**Exemplo:** Um modelo com contexto de 4096 tokens pode processar aproximadamente 3000 palavras (entre prompt e resposta).

## Tokens de Input e Output

> **CONCEITO CHAVE:** Os modelos processam texto como **tokens**, que podem ser palavras, partes de palavras ou caracteres. O custo e os limites são frequentemente baseados no número de tokens.

* **Tokens de Input:** Número de tokens no seu prompt.
* **Tokens de Output:** Número de tokens na resposta gerada pelo modelo.

**Por que isso importa?**
* **Custo:** Muitas APIs cobram por token (separadamente para input e output).
* **Limites:** Modelos têm limites máximos de tokens de input e output.
* **Eficiência:** Prompts mais curtos (menos tokens de input) são mais rápidos e baratos.

**DICA:** Ferramentas como o [Tokenizer da OpenAI](https://platform.openai.com/tokenizer) ajudam a estimar quantos tokens um texto possui.

## Outras Configurações Relevantes

* **Max Tokens / Max Length:** Limita o número máximo de tokens na resposta gerada. Útil para controlar o tamanho e o custo da saída.
* **Top-P (Nucleus Sampling):** Alternativa à temperatura. Seleciona a próxima palavra a partir de um conjunto cumulativo das palavras mais prováveis cuja probabilidade total atinge um valor \`p\`. Valores menores (ex: 0.1) geram respostas mais focadas; valores maiores (ex: 0.9) geram mais diversidade.
* **Top-K:** Seleciona a próxima palavra a partir das \`k\` palavras mais prováveis. Similar ao Top-P, mas baseado em contagem em vez de probabilidade cumulativa.
* **Frequency Penalty:** Penaliza tokens que já apareceram com frequência, reduzindo a repetição.
* **Presence Penalty:** Penaliza tokens que já apareceram pelo menos uma vez, incentivando a introdução de novos conceitos.
* **Stop Sequences:** Sequências de texto que, se geradas, interrompem a geração da resposta. Útil para controlar o formato da saída.

## Tabela Resumo de Configurações

| Parâmetro | O Que Controla | Quando Ajustar |
|-----------|-----------------|----------------|
| **Temperature** | Aleatoriedade / Criatividade | Para equilibrar previsibilidade e diversidade |
| **Context Window** | Quantidade de informação considerada | Para tarefas que exigem memória longa ou prompts extensos |
| **Max Tokens** | Tamanho máximo da resposta | Para controlar custo, latência e concisão |
| **Top-P / Top-K** | Diversidade (alternativa à Temperature) | Para controle fino sobre a seleção de palavras |
| **Frequency/Presence Penalty** | Repetição de tokens | Para evitar respostas repetitivas ou monótonas |
| **Stop Sequences** | Fim da geração | Para garantir formatos específicos ou evitar conteúdo indesejado |

**PARA DESENVOLVEDORES:** Experimentar com essas configurações é fundamental. Comece com os valores padrão e ajuste iterativamente com base nos resultados desejados para sua aplicação específica. A combinação certa de prompt e configurações pode melhorar drasticamente a qualidade e a eficiência das respostas da IA.
`,
  },
  {
    id: "exemplos-praticos",
    title: "Exemplos Práticos de Prompts para Desenvolvedores",
    content: `
# Exemplos Práticos de Prompts para Desenvolvedores

Vamos ver como aplicar as técnicas e diretrizes em cenários comuns de desenvolvimento.

## Cenário 1: Geração de Código com Requisitos Específicos

### ❌ Prompt Ruim
\`\`\`
Crie uma API Flask.
\`\`\`

### ✅ Prompt Bom (Usando Especificidade e Contexto)
\`\`\`
Você é um desenvolvedor Python experiente especializado em APIs RESTful.

Crie um endpoint simples de API usando Flask que receba uma requisição POST no caminho \`/usuarios\`. 

Requisitos:
- A requisição conterá um JSON com \'nome\' e \'email\'
- O endpoint deve validar se ambos os campos estão presentes e se o email tem formato válido
- Deve retornar um JSON de sucesso \`{\'status\': \'criado\', \'id\': 123}\` (use um ID fixo por enquanto) com status HTTP 201 se válido
- Ou um JSON de erro \`{\'erro\': \'Campos ausentes ou inválidos\'}\` com status 400 se inválido
- Inclua tratamento de exceções para JSON malformado
- Siga as melhores práticas de organização de código Flask

Forneça o código completo com comentários explicativos.
\`\`\`

## Cenário 2: Depuração de Código com Cadeia de Pensamento

### ❌ Prompt Ruim
\`\`\`
Meu código não funciona, conserte.
[código aqui]
\`\`\`

### ✅ Prompt Bom (Usando CoT e Contexto)
\`\`\`
Você é um especialista em JavaScript e aplicações assíncronas.

Analise o seguinte trecho de código JavaScript que deveria buscar dados de uma API e exibi-los, 
mas está lançando um erro \'TypeError: Cannot read property \'map\' of undefined\':

\`\`\`javascript
async function fetchUsers() {
  const response = await fetch(\'https://api.example.com/users\');
  const data = response.json();
  
  const userList = document.getElementById(\'user-list\');
  
  // Erro ocorre nesta linha
  userList.innerHTML = data.users.map(user => 
    \`<li>\${user.name} (\${user.email})</li>\`
  ).join(\'\');
}

fetchUsers();
\`\`\`

Por favor:

1. Explique passo a passo por que esse erro provavelmente está ocorrendo neste contexto de busca de dados assíncrona
2. Identifique todos os problemas potenciais no código
3. Forneça a versão corrigida do código com comentários explicativos
4. Sugira melhorias adicionais para tornar o código mais robusto (tratamento de erros, estados de carregamento, etc.)
\`\`\`

## Cenário 3: Geração de Documentação com Few-Shot

### ❌ Prompt Ruim
\`\`\`
Documente esta função.
[função aqui]
\`\`\`

### ✅ Prompt Bom (Usando Few-Shot e Definição de Formato)
\`\`\`
Você é um redator técnico criando documentação no formato JSDoc para uma biblioteca JavaScript.

Gere a documentação para a função JavaScript abaixo, seguindo o estilo dos exemplos:

Exemplo 1:
\`\`\`javascript
/**
 * Soma dois números.
 * 
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 * @throws {TypeError} Se os argumentos não forem números.
 * @example
 * // Retorna 5
 * somar(2, 3);
 */
function somar(a, b) { 
  if (typeof a !== \'number\' || typeof b !== \'number\') {
    throw new TypeError(\'Os argumentos devem ser números\');
  }
  return a + b; 
}
\`\`\`

Exemplo 2:
\`\`\`javascript
/**
 * Formata um nome completo a partir de nome e sobrenome.
 * 
 * @param {string} nome - O primeiro nome da pessoa.
 * @param {string} sobrenome - O sobrenome da pessoa.
 * @param {Object} [opcoes] - Opções de formatação.
 * @param {boolean} [opcoes.maiusculas=false] - Se verdadeiro, converte para maiúsculas.
 * @returns {string} O nome completo formatado.
 * @example
 * // Retorna "João Silva"
 * formatarNome("João", "Silva");
 * 
 * // Retorna "JOÃO SILVA"
 * formatarNome("João", "Silva", { maiusculas: true });
 */
function formatarNome(nome, sobrenome, opcoes = {}) {
  let nomeCompleto = \`\${nome} \${sobrenome}\`;
  if (opcoes.maiusculas) {
    nomeCompleto = nomeCompleto.toUpperCase();
  }
  return nomeCompleto;
}
\`\`\`

Agora, gere a documentação JSDoc para esta função:

\`\`\`javascript
async function getUserData(userId, fields = [\'name\', \'email\'], includeInactive = false) {
  const url = \`https://api.example.com/users/\${userId}\`;
  const params = new URLSearchParams();
  
  fields.forEach(field => params.append(\'fields\', field));
  if (includeInactive) params.append(\'includeInactive\', \'true\');
  
  const response = await fetch(\`\${url}?\${params.toString()}\`);
  
  if (!response.ok) {
    throw new Error(\`Failed to fetch user: \${response.status}\`);
  }
  
  return await response.json();
}
\`\`\`
\`\`\`

## Cenário 4: Refatoração de Código com Role + CoT

### ✅ Prompt Avançado (Combinando Técnicas)
\`\`\`
Você é um arquiteto de software sênior especializado em código limpo, padrões de design e melhores práticas de JavaScript moderno.

Analise o seguinte código JavaScript que implementa um carrinho de compras:

\`\`\`javascript
// Código do carrinho de compras aqui (com problemas de design, acoplamento, etc.)
\`\`\`

Por favor:

1. Analise a estrutura atual do código, identificando problemas de design, manutenibilidade e escalabilidade
2. Explique quais padrões de design seriam apropriados para melhorar este código
3. Refatore o código seguindo princípios SOLID e padrões de design modernos
4. Explique passo a passo suas decisões de refatoração
5. Destaque como a nova estrutura facilita futuras extensões (como adicionar novos tipos de produtos, promoções, etc.)

Forneça o código refatorado completo com comentários explicativos.
\`\`\`

**LEMBRE-SE:** A prática constante e a iteração são essenciais para dominar a engenharia de prompt. Experimente diferentes abordagens, combine técnicas e refine seus prompts com base nos resultados obtidos.
`,
  },
  {
    id: "padroes-avancados",
    title: "Padrões Avançados de Prompting",
    content: `
# Padrões Avançados de Prompting

## Elevando sua Engenharia de Prompt ao Próximo Nível

Além das técnicas fundamentais, existem padrões avançados que podem ajudar a resolver problemas complexos e obter resultados ainda melhores dos modelos de IA.

## Prompting Recursivo

> **CONCEITO AVANÇADO:** O prompting recursivo envolve dividir um problema complexo em etapas menores, onde cada etapa usa o resultado da anterior como entrada.

### Como Implementar:

1. Divida o problema em subtarefas sequenciais
2. Para cada subtarefa, use o resultado da anterior como contexto
3. Refine progressivamente até chegar ao resultado final

**Exemplo: Desenvolvimento de uma Feature Completa**

\`\`\`
Etapa 1: "Você é um arquiteto de software. Projete a estrutura de classes para um sistema de agendamento de consultas médicas com os seguintes requisitos: [requisitos]"

Etapa 2: "Agora, com base nesta arquitetura [resultado da etapa 1], implemente a classe Agendamento em Java, incluindo todos os métodos necessários."

Etapa 3: "Com base na implementação [resultado da etapa 2], crie testes unitários para a classe Agendamento, cobrindo todos os cenários importantes."
\`\`\`

## Prompting Adversarial

> **CONCEITO AVANÇADO:** Simula um debate interno onde diferentes perspectivas são consideradas, levando a resultados mais robustos.

### Como Implementar:

1. Peça ao modelo para gerar uma solução inicial
2. Solicite uma crítica dessa solução de uma perspectiva diferente
3. Peça uma síntese ou solução aprimorada com base no debate

**Exemplo: Revisão de Segurança de Código**

\`\`\`
"Você é um desenvolvedor full-stack. Implemente uma API de autenticação em Node.js com JWT.

Em seguida, assuma o papel de um especialista em segurança e critique a implementação, identificando possíveis vulnerabilidades.

Finalmente, como um arquiteto de segurança sênior, forneça uma implementação aprimorada que aborde todas as vulnerabilidades identificadas."
\`\`\`

## Prompting com Restrições

> **CONCEITO AVANÇADO:** Impõe limitações específicas que forçam o modelo a pensar de maneira mais criativa ou focada.

### Como Implementar:

Defina claramente as restrições, como:
* Limitações de tamanho/complexidade
* Requisitos de performance
* Restrições de tecnologia
* Público-alvo específico

**Exemplo: Otimização de Algoritmo**

\`\`\`
"Você é um especialista em algoritmos. Otimize a seguinte função de ordenação com estas restrições:

1. Deve usar no máximo O(log n) de espaço adicional
2. Deve manter a estabilidade da ordenação
3. Deve ser implementada sem bibliotecas externas
4. O código deve ser legível e bem comentado para desenvolvedores júnior

[código do algoritmo]"
\`\`\`

## Prompting com Auto-Avaliação

> **CONCEITO AVANÇADO:** Solicita que o modelo avalie sua própria resposta, identificando pontos fracos e melhorias.

### Como Implementar:

1. Peça a solução para um problema
2. Solicite que o modelo avalie sua própria resposta
3. Peça uma versão aprimorada com base na auto-avaliação

**Exemplo: Geração de API RESTful**

\`\`\`
"Crie uma API RESTful para um sistema de blog com endpoints para posts, comentários e usuários.

Após fornecer a solução, avalie criticamente sua própria implementação considerando:
- Aderência aos princípios REST
- Segurança e autenticação
- Escalabilidade
- Tratamento de erros
- Documentação

Com base nesta avaliação, forneça uma implementação aprimorada que aborde quaisquer deficiências identificadas."
\`\`\`

## Tabela Comparativa de Padrões Avançados

| Padrão | Melhor Para | Desafios | Dica de Implementação |
|--------|-------------|----------|------------------------|
| **Recursivo** | Problemas complexos com etapas sequenciais | Manter contexto entre etapas | Use numeração clara e referencie resultados anteriores |
| **Adversarial** | Soluções que precisam ser robustas a críticas | Pode gerar conflitos sem resolução | Defina claramente o papel final de "sintetizador" |
| **Restrições** | Forçar soluções criativas ou otimizadas | Restrições muito rígidas podem impedir soluções viáveis | Priorize as restrições mais importantes |
| **Auto-Avaliação** | Melhorar qualidade e identificar pontos cegos | Pode não identificar todos os problemas | Forneça critérios específicos de avaliação |

**DICA PARA ESPECIALISTAS:** Estes padrões podem ser combinados entre si e com as técnicas fundamentais para resolver problemas extremamente complexos. Por exemplo, um prompt recursivo onde cada etapa usa role prompting e inclui auto-avaliação.
`,
  },
  {
    id: "ferramentas-especificas",
    title: "Prompts para Ferramentas Específicas de IA",
    content: `
# Prompts para Ferramentas Específicas de IA

## Adaptando sua Abordagem para Diferentes Ferramentas

Diferentes ferramentas de IA têm características distintas que podem influenciar a forma como você estrutura seus prompts. Vamos explorar algumas das ferramentas mais relevantes para desenvolvedores.

![Exemplo de interface do VSCode com ferramentas de IA](__BASE_URL__/images/ai_tools_vscode.png)
*<p class="image-caption">Ferramentas como Copilot e Cline se integram diretamente ao VSCode.</p>*

## GitHub Copilot

O GitHub Copilot é uma ferramenta de IA integrada ao ambiente de desenvolvimento que ajuda a gerar código com base no contexto do seu projeto.

### Estratégias Eficazes para o Copilot

* **Comentários Detalhados:** O Copilot responde muito bem a comentários descritivos acima do código que você deseja gerar.

**Exemplo:**
\`\`\`javascript
// Função que valida um endereço de email usando expressão regular
// Deve verificar formato user@domain.tld
// Retorna true se válido, false caso contrário
function validateEmail(email) {
  // O Copilot sugerirá o código aqui
}
\`\`\`

* **Assinaturas de Função:** Defina a assinatura da função com nomes descritivos de parâmetros.

**Exemplo:**
\`\`\`python
def calculate_monthly_payment(principal_amount, annual_interest_rate, loan_term_years):
  # O Copilot sugerirá o código aqui
\`\`\`

* **Padrões de Código:** Comece um padrão e deixe o Copilot completar.

**Exemplo:**
\`\`\`javascript
// Implementando um padrão Observer
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback) {
    // O Copilot sugerirá o código aqui
  }
  
  emit(event, data) {
    // O Copilot sugerirá o código aqui
  }
}
\`\`\`

## Cline (Extensão VSCode)

O Cline é um **agente de codificação autônomo** para VSCode, open-source e focado em tarefas mais complexas e automação de fluxos de trabalho.

### Características Principais do Cline

* **Agente Autônomo:** Diferente do Copilot (que foca em autocompletar), o Cline pode executar tarefas mais complexas de forma autônoma.
* **Interação com Ambiente:** Pode interagir com seu terminal (CLI) e editor para executar comandos, ler/escrever arquivos, etc.
* **Extensibilidade:** Permite adicionar ferramentas e fluxos de trabalho personalizados.
* **Workflows:** Capacidade de automatizar sequências de tarefas repetitivas (ex: setup de projeto, pre-commit checks).

### Estratégias Eficazes para o Cline

* **Prompts Orientados a Tarefas:** Foque em descrever a tarefa completa que você deseja automatizar.

**Exemplo:**
\`\`\`
Configure um novo módulo React chamado 'UserProfile' neste projeto. 
Crie os arquivos básicos (componente, CSS) e adicione-o às rotas principais.
\`\`\`

* **Solicitação de Uso de Ferramentas:** Peça explicitamente para usar ferramentas do seu ambiente.

**Exemplo:**
\`\`\`
Execute os testes unitários para o arquivo atual usando 'npm test' e me mostre os resultados.
\`\`\`

* **Definição de Workflows:** Descreva sequências de passos para automação.

**Exemplo:**
\`\`\`
Crie um workflow chamado 'pre-commit' que execute o linter, formate o código com Prettier e rode os testes unitários.
\`\`\`

## ChatGPT e Claude

Estas ferramentas de chat baseadas em IA são excelentes para discussões mais amplas sobre código, arquitetura e solução de problemas.

### Estratégias Eficazes para Ferramentas de Chat

* **Contexto Inicial Completo:** Forneça o máximo de contexto relevante no início da conversa.

**Exemplo:**
\`\`\`
Estou trabalhando em uma aplicação React que usa Redux para gerenciamento de estado e se comunica com uma API REST. 
Estou enfrentando um problema com o ciclo de vida dos componentes e atualizações de estado. 
Vou compartilhar o código relevante e explicar o problema específico.
\`\`\`

* **Continuidade de Conversa:** Aproveite o histórico da conversa para construir sobre respostas anteriores.

**Exemplo:**
\`\`\`
Com base na solução de autenticação que você sugeriu, como eu poderia adicionar autorização baseada em funções (RBAC)?
\`\`\`

* **Solicitações de Refinamento:** Peça ajustes específicos para respostas anteriores.

**Exemplo:**
\`\`\`
A solução de paginação que você forneceu funciona bem, mas preciso adaptá-la para trabalhar com GraphQL em vez de REST. 
Como eu modificaria esse código?
\`\`\`

## Ferramentas de Geração de Imagem (DALL-E, Midjourney)

Embora menos óbvias para desenvolvimento, estas ferramentas podem ser úteis para criar assets, mockups de UI, ou diagramas.

### Estratégias Eficazes para Geração de Imagens

* **Especificidade Visual:** Seja detalhado sobre elementos visuais, estilo e composição.

**Exemplo:**
\`\`\`
Um diagrama de arquitetura de microserviços para uma aplicação e-commerce, 
com serviços representados como hexágonos conectados por linhas, 
em estilo minimalista com paleta de cores azul e cinza, 
incluindo serviços de usuário, produto, carrinho, pagamento e notificação.
\`\`\`

* **Referências a Estilos Conhecidos:** Use referências a estilos visuais estabelecidos.

**Exemplo:**
\`\`\`
Uma interface de usuário para um aplicativo de finanças pessoais no estilo do Material Design, 
mostrando um dashboard com gráficos de despesas, lista de transações recentes e um menu lateral, 
em tons de verde e branco, visualizado em um smartphone.
\`\`\`

## Tabela Comparativa de Abordagens por Ferramenta

| Ferramenta | Pontos Fortes | Estratégias Recomendadas | Limitações |
|------------|---------------|--------------------------|------------|
| **GitHub Copilot** | Geração de código em contexto, autocompletar | Comentários detalhados, assinaturas de função, exemplos parciais | Menos eficaz para explicações conceituais ou tarefas complexas |
| **Cline (VSCode)** | Automação de tarefas complexas, interação com ambiente (CLI/editor), workflows | Prompts orientados a tarefas, solicitação de uso de ferramentas, definição de workflows | Pode exigir mais configuração inicial, curva de aprendizado para workflows |
| **ChatGPT/Claude** | Discussões amplas, explicações, debugging, brainstorming | Contexto completo, conversas contínuas, iterações | Pode perder detalhes em códigos muito longos, não interage diretamente com o ambiente |
| **Ferramentas de Imagem** | Mockups, diagramas, assets | Descrições visuais detalhadas, referências a estilos | Precisão limitada para elementos textuais, não gera código |
| **Ferramentas Especializadas** (CodeWhisperer, Tabnine) | Otimizadas para linguagens/frameworks específicos | Adaptar ao estilo da ferramenta, usar documentação específica | Geralmente mais limitadas em escopo que ferramentas gerais |

**DICA PRÁTICA:** Muitas vezes, a abordagem mais eficaz é usar uma combinação de ferramentas. Por exemplo, discutir a arquitetura em uma ferramenta de chat, gerar diagramas com ferramentas de imagem, implementar o código com assistência do Copilot e automatizar tarefas repetitivas com o Cline.
`,
  },
];
