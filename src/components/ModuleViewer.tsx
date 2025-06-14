import React from 'react';
import { introducaoSubtopics } from '../data/introducaoSubtopics';
import { promptEngineeringSubtopics } from '../data/promptEngineeringSubtopics';
import { exerciciosSubtopics } from '../data/exerciciosSubtopics';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ModuleViewer.css';

const BASE_URL = import.meta.env.VITE_BASE_URL || '';

interface ModuleViewerProps {
  activeModule: string;
  activeSubtopic: string;
  onSubtopicChange: (subtopic: string) => void;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ activeModule, activeSubtopic, onSubtopicChange }) => {
  // Determinar qual array de subtópicos usar com base no módulo ativo
  const getSubtopics = () => {
    switch (activeModule) {
      case 'introducao':
        return introducaoSubtopics;
      case 'prompt-engineering':
        return promptEngineeringSubtopics;
      case 'exercicios':
        return exerciciosSubtopics;
      default:
        return [];
    }
  };

  const subtopics = getSubtopics();
  
  // Encontrar o subtópico atual
  const currentSubtopicIndex = subtopics.findIndex(subtopic => subtopic.id === activeSubtopic);
  const currentSubtopic = subtopics[currentSubtopicIndex] || subtopics[0];
  
  // Determinar subtópicos anterior e próximo para navegação
  const prevSubtopic = currentSubtopicIndex > 0 ? subtopics[currentSubtopicIndex - 1] : null;
  const nextSubtopic = currentSubtopicIndex < subtopics.length - 1 ? subtopics[currentSubtopicIndex + 1] : null;

  // Função para adicionar números aos títulos no conteúdo markdown
  const addNumbersToHeadings = (content: string) => {
    return content;
  };

  return (
    <div className="module-viewer">
      <div className="sidebar">
        <h2>Tópicos</h2>
        <ul>
          {subtopics.map((subtopic, index) => (
            <li 
              key={subtopic.id} 
              className={subtopic.id === activeSubtopic ? 'active' : ''}
              onClick={() => onSubtopicChange(subtopic.id)}
            >
              <span className="topic-number">{index + 1}</span>
              {subtopic.title}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="content-container">
        <div className="module-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => {
                const { properties } = node || {};
                const dataNumber = properties?.['data-number'] || '';
                return <h1 data-number={dataNumber} {...props} />;
              },
              h2: ({node, ...props}) => {
                const { properties } = node || {};
                const dataNumber = properties?.['data-number'] || '';
                return <h2 data-number={dataNumber} {...props} />;
              },
              h3: ({node, ...props}) => {
                const { properties } = node || {};
                const dataNumber = properties?.['data-number'] || '';
                return <h3 data-number={dataNumber} {...props} />;
              },
              img: ({...props}) => <img {...props} src={props.src?.replace('__BASE_URL__', BASE_URL)} />
            }}
          >
            {addNumbersToHeadings(currentSubtopic.content)}
          </ReactMarkdown>
        </div>
        
        <div className="floating-navigation-wrapper">
          <div className="navigation-buttons">
            {prevSubtopic && (
              <button 
                className="prev-button"
                onClick={() => onSubtopicChange(prevSubtopic.id)}
              >
                ← Anterior: {prevSubtopic.title}
              </button>
            )}
            
            {nextSubtopic && (
              <button 
                className="next-button"
                onClick={() => onSubtopicChange(nextSubtopic.id)}
              >
                Próximo: {nextSubtopic.title} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleViewer;
