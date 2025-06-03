export const exerciciosContent = `
# Módulo 3: Exercícios Práticos Interativos

Este módulo permite aplicar os conceitos de engenharia de prompt em cenários realistas de desenvolvimento. Cada exercício simula a interação com uma ferramenta de IA.

## Exercício 1: Geração de Código Python

**Objetivo:** Gerar uma função Python para validar um formato de email simples usando expressões regulares.

**Tarefa:** No campo abaixo, escreva um prompt para uma IA solicitando a criação de uma função Python chamada \`validar_email\`. Esta função deve receber uma string \`email\` como argumento e retornar \`True\` se a string parece ser um email válido (contendo um \`@\` e um \`.\` após o \`@\`), e \`False\` caso contrário. Utilize as técnicas de engenharia de prompt que aprendeu (especificidade, clareza).

## Exercício 2: Depuração de Código JavaScript

**Objetivo:** Identificar e corrigir um erro lógico em um trecho de código JavaScript usando a técnica de Cadeia de Pensamento (Chain-of-Thought).

**Código com Bug:**

\`\`\`javascript
// Função para calcular o preço total com desconto progressivo
function calcularPrecoTotal(quantidade, precoUnitario) {
    let desconto = 0;
    if (quantidade >= 10) {
        desconto = 0.1; // 10% de desconto para 10 ou mais
    } else if (quantidade >= 5) {
        desconto = 0.05; // 5% de desconto para 5 ou mais
    }
    // Erro lógico aqui: desconto está sendo somado, não subtraído
    const precoFinal = (quantidade * precoUnitario) * (1 + desconto);
    return precoFinal;
}

// Teste
console.log(calcularPrecoTotal(10, 100)); // Esperado: 900, Atual: 1100
\`\`\`

**Tarefa:** O código acima deveria aplicar um desconto, mas está aumentando o preço final. Escreva um prompt para uma IA, instruindo-a a analisar o código, explicar passo a passo (Cadeia de Pensamento) onde está o erro lógico e por quê, e então fornecer o código corrigido.

## Exercício 3: Geração de Documentação Java (Javadoc)

**Objetivo:** Gerar documentação no formato Javadoc para uma função Java simples.

**Função Java:**

\`\`\`java
public class StringUtils {

    /**
     * TODO: Adicionar Javadoc
     */
    public static String reverterString(String texto) {
        if (texto == null) {
            return null;
        }
        return new StringBuilder(texto).reverse().toString();
    }
}
\`\`\`

**Tarefa:** Escreva um prompt para uma IA gerar a documentação Javadoc completa para o método \`reverterString\`. Especifique claramente o formato desejado (Javadoc) e peça para incluir descrições para o método, o parâmetro \`@param\` e o valor de retorno \`@return\`, incluindo o tratamento do caso nulo.
`;
