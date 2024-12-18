import React from 'react';
import styled from 'styled-components';

// Estilos para WelcomeText
const WelcomeTextContainer = styled.p`
  margin-top: 1em; /* Espaçamento para a descrição */
  font-size: 1em;
  color: #333;
  text-align: left;
`;

// Estilos para Title
const TitleContainer = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #000; /* Título na cor preta */
  margin-bottom: 0.5em;
  text-align: left;
`;

// Estilos para Subtitle
const SubtitleContainer = styled.h2`
  font-size: 1.5em;
  color: #FFA500; /* Subtítulo na cor laranja */
  margin-bottom: 0.5em;
  text-align: left;
`;

// Componente WelcomeText
interface WelcomeTextProps {
  children: React.ReactNode;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({ children }) => {
  return <WelcomeTextContainer>{children}</WelcomeTextContainer>;
};

// Componente Title
interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

// Componente Subtitle
interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <SubtitleContainer>{children}</SubtitleContainer>;
};

export { WelcomeText, Title, Subtitle };
