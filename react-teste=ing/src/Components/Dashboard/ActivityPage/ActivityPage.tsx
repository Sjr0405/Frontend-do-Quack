import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import felizPato from '../../../Assets/Svg_thigas/FELIZ.svg';
import tristePato from '../../../Assets/Svg_thigas/TRISTE.svg';
import turnDownPato from '../../../Assets/Svg_thigas/TURN DOWN FOR WHAT.svg';
import {
  Container,
  Title,
  Description,
  ActivityCard,
  ActivityDetails,
  ActivityName,
  ActivityDescription,
  EditorContainer,
  PatoImage,
  Button,
  NavigationContainer,
  NavigationButton,
  QuizOption,
  RestartButton,
  Select,
  GabaritoContainer,
  GabaritoItem,
} from './ActivityPageStyles';
import Editor from '@monaco-editor/react';
import { activities } from './activitiesData';

const ActivityPage: React.FC<{ activityType: string }> = ({ activityType = 'nada' }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [theme, setTheme] = useState('vs-light');
  const [userCode, setUserCode] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('editorTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('editorTheme', selectedTheme);
  };

  const activityList = activities[activityType];

  if (!activityList) {
    return (
      <Container>
        <Title>Atividades de {activityType}</Title>
        <Description>Tipo de atividade inválido.</Description>
      </Container>
    );
  }

  const handleAnswer = (answer: string) => {
    const currentActivity = activityList[currentActivityIndex];
    const isCorrect = answer.trim() === currentActivity.correctAnswer;

    Swal.fire({
      title: isCorrect ? 'Correto!' : 'Incorreto!',
      text: isCorrect ? 'Você acertou a questão.' : 'Você errou a questão.',
      icon: isCorrect ? 'success' : 'error',
      confirmButtonText: 'OK',
      imageUrl: isCorrect ? felizPato : tristePato,
      imageWidth: 100,
      imageHeight: 100,
    });

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setWrongQuestions(wrongQuestions.filter((index) => index !== currentActivityIndex));
    } else {
      if (!wrongQuestions.includes(currentActivityIndex)) {
        setWrongQuestions([...wrongQuestions, currentActivityIndex]);
      }
    }

    if (currentActivityIndex < activityList.length - 1) {
      setCurrentActivityIndex(currentActivityIndex + 1);
      setUserCode('');
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentActivityIndex > 0) {
      setCurrentActivityIndex(currentActivityIndex - 1);
      setUserCode('');
    }
  };

  const handleNext = () => {
    if (currentActivityIndex < activityList.length - 1) {
      setCurrentActivityIndex(currentActivityIndex + 1);
      setUserCode('');
    }
  };

  const handleRestart = () => {
    setCurrentActivityIndex(0);
    setCorrectAnswers(0);
    setShowResult(false);
    setUserCode('');
  };

  const currentActivity = activityList[currentActivityIndex];
  const totalCompleted = currentActivityIndex;

  return (
    <Container>
      <Title>Atividades de {activityType}</Title>
      <Description>Aqui você pode praticar {activityType} baseadas nas trilhas que você estudou.</Description>
      {!showResult ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <GabaritoContainer>
            <GabaritoItem>
              <p>Feitas</p>
              <p>{totalCompleted}</p>
            </GabaritoItem>
            <GabaritoItem>
              <p>Pendentes</p>
              <p>{activityList.length - totalCompleted}</p>
            </GabaritoItem>
            <GabaritoItem>
              <p>Certas</p>
              <p>{correctAnswers}</p>
            </GabaritoItem>
            <GabaritoItem>
              <p>Erradas</p>
              <p>{wrongQuestions.length}</p>
            </GabaritoItem>
          </GabaritoContainer>
          <ActivityCard style={{ width: '100%' }}>
            <ActivityDetails>
              <ActivityName>{currentActivity.name}</ActivityName>
              <ActivityDescription>{currentActivity.description}</ActivityDescription>
              {activityType === 'preenchimento-codigo' && (
                <>
                  <pre>{currentActivity.code}</pre>
                  <p style={{ marginTop: '10px' }}>Selecione o tema:</p>
                  <Select value={theme} onChange={handleThemeChange}>
                    <option value="vs-light">Claro</option>
                    <option value="vs-dark">Escuro</option>
                    <option value="hc-black">Alto Contrasto</option>
                    <option value="hc-light">Alto Contrasto Claro</option>
                  </Select>
                  <EditorContainer>
                    <Editor
                      height="100%"
                      width="100%"
                      language="java"
                      theme={theme}
                      value={userCode}
                      onChange={(value) => setUserCode(value || '')}
                    />
                  </EditorContainer>
                  <div id='contador'>
                    <p style={{ marginTop: '10px' }}>{currentActivityIndex + 1} de {activityList.length}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => handleAnswer(userCode)}>Verificar</Button>
                  </div>
                </>
              )}
              {activityType === 'quizzes' && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={() => handleAnswer(currentActivity.correctAnswer)}>Verificar</Button>
                </div>
              )}
              {activityType === 'multipla-escolha' && currentActivity.options && (
                <>
                  {currentActivity.options.map((option, index) => (
                    <QuizOption key={index} onClick={() => handleAnswer(option)}>
                      {String.fromCharCode(97 + index)}) {option}
                    </QuizOption>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => handleAnswer(currentActivity.correctAnswer)}>Verificar</Button>
                  </div>
                </>
              )}
              {activityType === 'verdadeiro-falso' && currentActivity.options && (
                <>
                  {currentActivity.options.map((option, index) => (
                    <QuizOption key={index} onClick={() => handleAnswer(option)}>
                      {option}
                    </QuizOption>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => handleAnswer(currentActivity.correctAnswer)}>Verificar</Button>
                  </div>
                </>
              )}
              <NavigationContainer>
                <NavigationButton onClick={handlePrevious} disabled={currentActivityIndex === 0}>Anterior</NavigationButton>
                <NavigationButton onClick={handleNext} disabled={currentActivityIndex === activityList.length - 1}>Próximo</NavigationButton>
              </NavigationContainer>
            </ActivityDetails>
          </ActivityCard>
        </div>
      ) : (
        <>
          {correctAnswers === activityList.length ? (
            <PatoImage src={turnDownPato} alt="Pato turn down for what" />
          ) : correctAnswers > 0 && wrongQuestions.every((index) => index < activityList.length / 2) ? (
            <PatoImage src={felizPato} alt="Pato feliz" />
          ) : (
            <PatoImage src={tristePato} alt="Pato triste" />
          )}
          <Description>Você acertou {correctAnswers} de {activityList.length} questões.</Description>
          <RestartButton onClick={handleRestart}>Reiniciar</RestartButton>
        </>
      )}
    </Container>
  );
};

export default ActivityPage;