import { useState } from 'react';
import ModuleViewer from './components/ModuleViewer';
import './App.css';
import { introducaoSubtopics } from './data/introducaoSubtopics';
import { promptEngineeringSubtopics } from './data/promptEngineeringSubtopics';
import { exerciciosSubtopics } from './data/exerciciosSubtopics';
import AvaliacaoQuiz from './components/AvaliacaoQuiz';

function App() {
  const [activeModule, setActiveModule] = useState('introducao');
  const [activeSubtopic, setActiveSubtopic] = useState('bem-vindo');

  // Função para mudar de módulo e definir o primeiro subtópico como ativo
  const handleModuleChange = (module: string) => {
    setActiveModule(module);
    const subtopics = module === 'introducao' 
      ? introducaoSubtopics 
      : module === 'prompt-engineering' 
        ? promptEngineeringSubtopics 
        : exerciciosSubtopics;
    
    setActiveSubtopic(subtopics[0].id);
  };

  // Função para navegar entre subtópicos
  const handleSubtopicChange = (subtopicId: string) => {
    setActiveSubtopic(subtopicId);
  };

  // Renderizar conteúdo específico para o módulo de exercícios
  const renderExerciseContent = () => {
    if (activeModule === 'exercicios' && activeSubtopic === 'avaliacao-conhecimentos') {
      return <AvaliacaoQuiz />;
    }
    return null;
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Curso de IA para Desenvolvedores</h1>
        
        <nav className="main-nav">
          <button 
            className={activeModule === 'introducao' ? 'active' : ''}
            onClick={() => handleModuleChange('introducao')}
            data-number="1"
          >
            Introdução à IA
          </button>
          <button 
            className={activeModule === 'prompt-engineering' ? 'active' : ''}
            onClick={() => handleModuleChange('prompt-engineering')}
            data-number="2"
          >
            Engenharia de Prompt
          </button>
          <button 
            className={activeModule === 'exercicios' ? 'active' : ''}
            onClick={() => handleModuleChange('exercicios')}
            data-number="3"
          >
            Exercícios Práticos
          </button>
        </nav>
      </header>

      <main className="main-content">
         <ModuleViewer
          activeModule={activeModule}
          activeSubtopic={activeSubtopic}
          onSubtopicChange={handleSubtopicChange}
        />
        {renderExerciseContent()}
      </main>

      <footer className="footer">
        <p>© 2025 Curso de IA para Desenvolvedores</p>
      </footer>
    </div>
  );
}

export default App;
