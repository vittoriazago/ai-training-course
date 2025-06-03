import React, { useState } from 'react';
import './QuizComponent.css';

interface QuizProps {
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

const QuizComponent: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: string, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(Math.round((correctCount / questions.length) * 100));
    setShowResults(true);
  };

  const getFeedbackClass = (score: number) => {
    if (score >= 90) return 'excellent-score';
    if (score >= 70) return 'good-score';
    if (score >= 50) return 'average-score';
    return 'needs-improvement';
  };

  const getFeedbackText = (score: number) => {
    if (score >= 90) return 'Excelente! Você dominou os conceitos de IA e engenharia de prompt!';
    if (score >= 70) return 'Bom trabalho! Você tem um bom entendimento dos conceitos, mas ainda há espaço para aprimoramento.';
    if (score >= 50) return 'Você está no caminho certo, mas recomendamos revisar os módulos para fortalecer seu conhecimento.';
    return 'Recomendamos fortemente revisar os módulos do curso para melhorar sua compreensão dos conceitos fundamentais.';
  };

  return (
    <div className="quiz-container">
      <h2>Questionário de Avaliação</h2>
      <div className="quiz-form">
        {questions.map((question, index) => (
          <div key={question.id} className="question">
            <p><strong>{index + 1}. {question.question}</strong></p>
            <div className="options">
              {question.options.map(option => (
                <label key={option.id} className="option-label">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.id}
                    checked={answers[question.id] === option.id}
                    onChange={() => handleAnswerChange(question.id, option.id)}
                    disabled={showResults}
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
            {showResults && (
              <div className={`feedback ${answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                {answers[question.id] === question.correctAnswer 
                  ? '✓ Correto!' 
                  : `✗ Incorreto. A resposta correta era: ${
                      question.options.find(o => o.id === question.correctAnswer)?.text
                    }`
                }
              </div>
            )}
          </div>
        ))}

        {!showResults ? (
          <button 
            type="button" 
            onClick={handleSubmit}
            className="submit-button"
            disabled={Object.keys(answers).length < questions.length}
          >
            Enviar Respostas
          </button>
        ) : (
          <div className="results">
            <h3>Resultados da Avaliação</h3>
            <p>Você acertou <strong>{Math.round((score / 100) * questions.length)}</strong> de {questions.length} questões.</p>
            <p>Sua nota: <strong>{score}%</strong></p>
            <p className={getFeedbackClass(score)}>{getFeedbackText(score)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
