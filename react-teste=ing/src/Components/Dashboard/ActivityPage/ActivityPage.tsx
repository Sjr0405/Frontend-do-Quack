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
  Activity
} from './ActivityPageStyles';
import Editor from '@monaco-editor/react';

const activities: { [key: string]: Activity[] } = {
  'preenchimento-codigo': [
    { name: 'Questão 1', description: 'Faça um programa que calcule a área de um retângulo, esse retângulo possui 5 de comprimento e 3 de largura. Calcule a área e exiba o resultado.', code: 'function areaRetangulo(comprimento, largura) { return comprimento * largura; }', correctAnswer: '5 * 3' },
    { name: 'Questão 2', description: 'Complete o código para encontrar o maior número em uma lista.', code: 'function maiorNumero(lista) { return Math.max(...lista); }', correctAnswer: 'Math.max(...lista)' },
    { name: 'Questão 3', description: 'Complete o código para inverter uma string.', code: 'function inverterString(str) { return str.split("").reverse().join(""); }', correctAnswer: 'str.split("").reverse().join("")' },
    { name: 'Questão 4', description: 'Faça um programa que calcule o fatorial de um número.', code: 'function fatorial(n) { let resultado = 1; for (let i = 1; i <= n; i++) { resultado *= i; } return resultado; }', correctAnswer: 'resultado *= i' },
    { name: 'Questão 5', description: 'Complete o código para somar os elementos de um array.', code: 'function somarArray(arr) { return arr.reduce((acc, val) => acc + val, 0); }', correctAnswer: 'arr.reduce((acc, val) => acc + val, 0)' },
    { name: 'Questão 6', description: 'Complete o código para encontrar o número de palavras em uma string.', code: 'function contarPalavras(str) { return str.split(" ").length; }', correctAnswer: 'str.split(" ").length' },
    { name: 'Questão 7', description: 'Crie uma função para verificar se um número é primo.', code: 'function verificarPrimo(n) { for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return n > 1; }', correctAnswer: 'return n > 1' },
    { name: 'Questão 8', description: 'Complete o código para fazer a soma de todos os números ímpares entre 1 e 100.', code: 'function somaImpares() { let soma = 0; for (let i = 1; i <= 100; i++) { if (i % 2 !== 0) soma += i; } return soma; }', correctAnswer: 'soma += i' },
    { name: 'Questão 9', description: 'Faça um código que verifique se uma string é um palíndromo.', code: 'function verificarPalindromo(str) { return str === str.split("").reverse().join(""); }', correctAnswer: 'str === str.split("").reverse().join("")' },
    { name: 'Questão 10', description: 'Complete o código para converter um número binário para decimal.', code: 'function binarioParaDecimal(binario) { return parseInt(binario, 2); }', correctAnswer: 'parseInt(binario, 2)' },
  ],
  'quizzes': [
    { name: 'Quiz 1', description: 'Perguntas sobre programação em C.', correctAnswer: 'printf("Hello, World!");' },
    { name: 'Quiz 2', description: 'Perguntas sobre estruturas de dados em C.', correctAnswer: 'struct' },
    { name: 'Quiz 3', description: 'Perguntas sobre algoritmos em C.', correctAnswer: 'for loop' },
    { name: 'Quiz 4', description: 'Perguntas sobre ponteiros em C.', correctAnswer: '&p' },
    { name: 'Quiz 5', description: 'Perguntas sobre arrays em C.', correctAnswer: 'int arr[10]' },
    { name: 'Quiz 6', description: 'Perguntas sobre funções recursivas em C.', correctAnswer: 'factorial(n)' },
    { name: 'Quiz 7', description: 'Perguntas sobre memória dinâmica em C.', correctAnswer: 'malloc' },
    { name: 'Quiz 8', description: 'Perguntas sobre strings em C.', correctAnswer: 'char str[]' },
    { name: 'Quiz 9', description: 'Perguntas sobre a biblioteca padrão em C.', correctAnswer: '#include <stdio.h>' },
    { name: 'Quiz 10', description: 'Perguntas sobre o uso de variáveis em C.', correctAnswer: 'int x = 10;' },
  ],
  'multipla-escolha': [
    { name: 'Questão 1', description: 'Escolha a resposta correta sobre loops.', correctAnswer: 'for loop', options: ['while loop', 'do-while loop', 'for loop', 'foreach loop'] },
    { name: 'Questão 2', description: 'Escolha a resposta correta sobre funções.', correctAnswer: 'function', options: ['method', 'function', 'procedure', 'routine'] },
    { name: 'Questão 3', description: 'Escolha a resposta correta sobre arrays.', correctAnswer: 'array', options: ['list', 'array', 'set', 'map'] },
    { name: 'Questão 4', description: 'Escolha a resposta correta sobre herança.', correctAnswer: 'extends', options: ['implements', 'extends', 'inherits', 'super'] },
    { name: 'Questão 5', description: 'Escolha a resposta correta sobre o escopo de variáveis.', correctAnswer: 'local', options: ['global', 'local', 'static', 'dynamic'] },
    { name: 'Questão 6', description: 'Escolha a resposta correta sobre a declaração de funções.', correctAnswer: 'function', options: ['def', 'function', 'func', 'declare'] },
    { name: 'Questão 7', description: 'Escolha a resposta correta sobre operadores lógicos.', correctAnswer: '&&', options: ['&', '&&', '|', '||'] },
    { name: 'Questão 8', description: 'Escolha a resposta correta sobre variáveis mutáveis em JavaScript.', correctAnswer: 'let', options: ['var', 'let', 'const', 'mutable'] },
    { name: 'Questão 9', description: 'Escolha a resposta correta sobre as classes em JavaScript.', correctAnswer: 'class', options: ['class', 'interface', 'constructor', 'module'] },
    { name: 'Questão 10', description: 'Escolha a resposta correta sobre o tipo de dado nulo.', correctAnswer: 'null', options: ['null', 'undefined', 'none', 'NaN'] },
  ],
};

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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <ActivityCard>
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