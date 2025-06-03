import React from 'react';
import QuizComponent from './QuizComponent';

interface QuizData {
  questions: {
    id: string;
    question: string;
    options: {
      id: string;
      text: string;
    }[];
    correctAnswer: string;
  }[];
}

const quizData: QuizData = {
  questions: [
    {
      id: 'q1',
      question: 'Qual das seguintes técnicas de prompt é mais adequada quando você precisa que o modelo explique seu raciocínio passo a passo?',
      options: [
        { id: 'a', text: 'Role Prompting' },
        { id: 'b', text: 'Chain-of-Thought' },
        { id: 'c', text: 'Few-Shot Learning' },
        { id: 'd', text: 'Prompting Recursivo' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q2',
      question: 'O que significa o parâmetro "temperature" em configurações de prompt?',
      options: [
        { id: 'a', text: 'A velocidade de processamento do modelo' },
        { id: 'b', text: 'O tamanho máximo da resposta em tokens' },
        { id: 'c', text: 'O nível de aleatoriedade/criatividade nas respostas' },
        { id: 'd', text: 'A temperatura do servidor onde o modelo está rodando' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q3',
      question: 'Qual é o principal benefício da técnica Few-Shot Learning?',
      options: [
        { id: 'a', text: 'Reduz o custo de processamento do modelo' },
        { id: 'b', text: 'Permite que o modelo aprenda o padrão desejado através de exemplos' },
        { id: 'c', text: 'Aumenta a velocidade de resposta do modelo' },
        { id: 'd', text: 'Força o modelo a ignorar seu treinamento prévio' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q4',
      question: 'O que é RAG (Retrieval-Augmented Generation) no contexto de IA?',
      options: [
        { id: 'a', text: 'Um tipo de modelo de linguagem específico para programação' },
        { id: 'b', text: 'Uma técnica que combina geração de texto com recuperação de informações de uma base de conhecimento' },
        { id: 'c', text: 'Um framework para treinar modelos de IA personalizados' },
        { id: 'd', text: 'Um algoritmo para reduzir alucinações em modelos de IA' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q5',
      question: 'Qual das seguintes NÃO é uma boa prática de engenharia de prompt?',
      options: [
        { id: 'a', text: 'Fornecer contexto detalhado sobre o problema' },
        { id: 'b', text: 'Confiar cegamente na resposta do modelo sem verificação' },
        { id: 'c', text: 'Iterar e refinar prompts com base nos resultados' },
        { id: 'd', text: 'Usar delimitadores claros para separar instruções de dados' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q6',
      question: 'Qual ferramenta de IA é um agente autônomo para VSCode que pode interagir com o terminal e editor?',
      options: [
        { id: 'a', text: 'GitHub Copilot' },
        { id: 'b', text: 'Tabnine' },
        { id: 'c', text: 'Cline' },
        { id: 'd', text: 'CodeWhisperer' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q7',
      question: 'O que é MCP (Mixture of Conditional Pathways) no contexto de modelos de IA?',
      options: [
        { id: 'a', text: 'Um método para combinar múltiplos modelos de IA em um único sistema' },
        { id: 'b', text: 'Uma técnica para criar caminhos especializados dentro de uma rede neural' },
        { id: 'c', text: 'Um protocolo de comunicação entre diferentes ferramentas de IA' },
        { id: 'd', text: 'Um formato de arquivo para modelos de IA pré-treinados' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q8',
      question: 'Qual técnica de prompt é mais adequada quando você precisa que o modelo adote um papel específico, como "especialista em segurança"?',
      options: [
        { id: 'a', text: 'Role Prompting' },
        { id: 'b', text: 'Chain-of-Thought' },
        { id: 'c', text: 'Few-Shot Learning' },
        { id: 'd', text: 'Prompting Adversarial' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q9',
      question: 'Qual é a principal diferença entre o GitHub Copilot e o Cline como ferramentas de IA para desenvolvimento?',
      options: [
        { id: 'a', text: 'O Copilot é gratuito, enquanto o Cline é pago' },
        { id: 'b', text: 'O Copilot foca em autocompletar código, enquanto o Cline pode executar tarefas autônomas mais complexas' },
        { id: 'c', text: 'O Cline funciona apenas offline, enquanto o Copilot requer conexão com a internet' },
        { id: 'd', text: 'O Copilot suporta mais linguagens de programação que o Cline' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q10',
      question: 'Qual configuração você ajustaria para obter respostas mais determinísticas e previsíveis de um modelo de IA?',
      options: [
        { id: 'a', text: 'Aumentar a temperatura para próximo de 1.0' },
        { id: 'b', text: 'Diminuir a temperatura para próximo de 0' },
        { id: 'c', text: 'Aumentar o tamanho do contexto' },
        { id: 'd', text: 'Aumentar o número máximo de tokens' }
      ],
      correctAnswer: 'b'
    }
  ]
};

const AvaliacaoQuiz: React.FC = () => {
  return (
    <div>
      <h1>Avaliação de Conhecimentos</h1>
      <p>Teste seus conhecimentos sobre IA e Engenharia de Prompt com este questionário interativo.</p>
      <QuizComponent questions={quizData.questions} />
      
      <div className="next-steps">
        <h2>Próximos Passos</h2>
        <p>Agora que você concluiu o curso e testou seus conhecimentos, está pronto para aplicar essas técnicas em seus próprios projetos. Recomendamos:</p>
        <ol>
          <li><strong>Pratique regularmente</strong> com diferentes ferramentas de IA</li>
          <li><strong>Experimente combinar técnicas</strong> de prompt para resolver problemas complexos</li>
          <li><strong>Mantenha-se atualizado</strong> sobre novos modelos e ferramentas de IA</li>
          <li><strong>Compartilhe conhecimento</strong> com sua equipe para estabelecer melhores práticas</li>
        </ol>
        <p>Lembre-se de que a engenharia de prompt é tanto uma ciência quanto uma arte - a prática constante é fundamental para o domínio.</p>
        <p className="congratulations"><strong>Parabéns por concluir o curso!</strong></p>
      </div>
    </div>
  );
};

export default AvaliacaoQuiz;
