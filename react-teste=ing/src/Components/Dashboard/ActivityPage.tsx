import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import falandoPato from '../../Assets/Svg_thigas/FALANDO.svg';
import felizPato from '../../Assets/Svg_thigas/FELIZ.svg';
import tristePato from '../../Assets/Svg_thigas/TRISTE.svg';
import turnDownPato from '../../Assets/Svg_thigas/TURN DOWN FOR WHAT.svg';
import vetorPato from '../../Assets/Svg_thigas/VETOR PATO.svg';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
  max-width: 800px;
  border-radius: 16px;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 16px;
`;

const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityIcon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
  color: #6a1b9a;
`;

const ActivityDetails = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 100%;
`;

const ActivityName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const ActivityDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

const CodeInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const PatoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #6a1b9a;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a148c;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const NavigationButton = styled(Button)<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#6a1b9a')};
  color: ${({ disabled }) => (disabled ? '#999' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4a148c')};
  }
`;

const QuizOption = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #6a1b9a;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a148c;
  }
`;

interface Activity {
  name: string;
  description: string;
  code?: string;
  correctAnswer: string;
  options?: string[];
}

const activities: { [key: string]: Activity[] } = {
  'preenchimento-codigo': [
    { name: 'Questão 1', description: 'Complete o código para somar dois números.', code: 'function soma(a, b) { return a + b; }', correctAnswer: 'a + b' },
    { name: 'Questão 2', description: 'Complete o código para encontrar o maior número em uma lista.', code: 'function maiorNumero(lista) { return Math.max(...lista); }', correctAnswer: 'Math.max(...lista)' },
    { name: 'Questão 3', description: 'Complete o código para inverter uma string.', code: 'function inverterString(str) { return str.split("").reverse().join(""); }', correctAnswer: 'str.split("").reverse().join("")' },
  ],
  'quizzes': [
    { name: 'Quiz 1', description: 'Perguntas sobre programação em C.', correctAnswer: 'printf("Hello, World!");' },
    { name: 'Quiz 2', description: 'Perguntas sobre estruturas de dados em C.', correctAnswer: 'struct' },
    { name: 'Quiz 3', description: 'Perguntas sobre algoritmos em C.', correctAnswer: 'for loop' },
  ],
  'multipla-escolha': [
    { name: 'Questão 1', description: 'Escolha a resposta correta sobre loops.', correctAnswer: 'for loop', options: ['while loop', 'do-while loop', 'for loop', 'foreach loop'] },
    { name: 'Questão 2', description: 'Escolha a resposta correta sobre funções.', correctAnswer: 'function', options: ['method', 'function', 'procedure', 'routine'] },
    { name: 'Questão 3', description: 'Escolha a resposta correta sobre arrays.', correctAnswer: 'array', options: ['list', 'array', 'set', 'map'] },
  ],
};

const ActivityPage: React.FC<{ activityType: string }> = ({ activityType }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userCode, setUserCode] = useState('');

  console.log('activityType:', activityType); // Adicione este log para verificar o valor de activityType

  const activityList = activities[activityType];

  if (!activityList) {
    return (
      <Container>
        <Title>Atividades de {activityType}</Title>
        <Description>
          Tipo de atividade inválido.
        </Description>
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

  const currentActivity = activityList[currentActivityIndex];

  return (
    <Container>
      <Title>Atividades de {activityType}</Title>
      <Description>
        Aqui você pode praticar {activityType} baseadas nas roadmaps que você estudou.
      </Description>
      {!showResult ? (
        <ActivityCard>
          <ActivityDetails>
            <ActivityName>{currentActivity.name}</ActivityName>
            <ActivityDescription>{currentActivity.description}</ActivityDescription>
            {activityType === 'preenchimento-codigo' && (
              <>
                <pre>{currentActivity.code}</pre>
                <CodeInput
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  placeholder="Complete o código aqui..."
                />
                <Button onClick={() => handleAnswer(userCode)}>Verificar</Button>
              </>
            )}
            {activityType === 'quizzes' && (
              <Button onClick={() => handleAnswer(currentActivity.correctAnswer)}>Verificar</Button>
            )}
            {activityType === 'multipla-escolha' && currentActivity.options && (
              currentActivity.options.map((option, index) => (
                <QuizOption key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </QuizOption>
              ))
            )}
            <NavigationContainer>
              <NavigationButton onClick={handlePrevious} disabled={currentActivityIndex === 0}>Anterior</NavigationButton>
              <NavigationButton onClick={handleNext} disabled={currentActivityIndex === activityList.length - 1}>Próximo</NavigationButton>
            </NavigationContainer>
          </ActivityDetails>
        </ActivityCard>
      ) : (
        <>
          {correctAnswers === activityList.length ? (
            <PatoImage src={turnDownPato} alt="Pato turn down for what" />
          ) : correctAnswers > 0 ? (
            <PatoImage src={felizPato} alt="Pato feliz" />
          ) : (
            <PatoImage src={tristePato} alt="Pato triste" />
          )}
        </>
      )}
    </Container>
  );
};

export default ActivityPage;