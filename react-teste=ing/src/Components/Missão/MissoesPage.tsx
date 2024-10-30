import React from 'react';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import MainContentContainer from './MainContentContainer/MainContentContainer';
import { PageContainer } from './MissoesPageStyles';

const MissoesPage: React.FC = () => {
  const userName = "Usuário";
  const quoteText = "Cada linha de código é um passo para o sucesso!";
  const quoteAuthor = "Thigas, o Pato";
  const imageSrc = "/src/assets/Fulbody-logo.svg";

  return (
    <PageContainer>
      <HeaderContainer 
        userName={userName} 
        quoteText={quoteText} 
        quoteAuthor={quoteAuthor} 
        imageSrc={imageSrc} 
      />
      <MainContentContainer />
    </PageContainer>
  );
};

export default MissoesPage;