import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { styled as muiStyled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

// Estilos
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin bottom
  
  /* Adicionar padding para o conteúdo não ficar colado nas bordas */`;

const Container = styled.main`
  border-radius: 0;
  padding: 20px;
  margin-bottom: 20px; /* Adicionar margem inferior */
  /* Remover a cor de fundo */
`;

const MissionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between; /* Adiciona espaçamento igual entre os itens */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const MissionsColumn = styled.div`
  flex: 1; /* Ajuste para ocupar metade do espaço */
  margin-right: 10px; /* Adiciona margem à direita */
`;

const MissionsContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: '1px #BFB9B9 solid';
`;

const MissionsTitle = styled.h2`
  color: #FC7A02;
  font-size: 25px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const NextMissionInfo = styled.p`
  color: #FF3E41;
  font-size: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 8px;
  }
`;

const ChallengeColumn = styled.div`
  flex: 1; 
  margin-left: 10px; /* Adiciona margem à esquerda */
  @media (max-width: 991px) {
    margin-top: 20px;
    margin-left: 0; /* Remove margem à esquerda em telas menores */
  }
`;

interface MissionWrapperProps {
  isCompleted: boolean;
  disabled?: boolean;
}

const MissionWrapper = styled.div<MissionWrapperProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${props => props.disabled ? '#d3d3d3' : 'white'};
  border-radius: 20px;
  border: 1px solid #BFB9B9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 10px; /* Espaçamento igual entre os cards */
  color: ${props => props.isCompleted ? 'rgba(0, 0, 0, 0.6)' : '#000000'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.1);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${props => props.disabled ? '#d3d3d3' : '#f0f0f0'};
    transform: ${props => props.disabled ? 'none' : 'scale(1.05)'};
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const MissionIcon = styled.img`
  width: 77.66px;
  height: 70px;  
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const MissionDescription = styled.div`
  color: black;
  font-size: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  flex-grow: 1;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 8px;
  }
`;

const CardWrapper = styled.article`
  border-radius: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-right: -4px;
  padding: 22px 38px 50px;
  border: 1px solid #bfb9b9;
  background-color: white; /* Fundo branco */
  height: 100%; /* Ajustar para ter o mesmo tamanho do MissionsWrapper */
  justify-content: center; /* Centralizar o conteúdo verticalmente */
  align-items: center; /* Centralizar o conteúdo horizontalmente */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 39px;
    padding: 0 20px;
  }
`;

const ChallengeTitle = styled.h2`
  color: #fb7901;
  text-align: center;
  font: 400 38px Lilita One, sans-serif;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const StartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px; /* Aumentar a margem superior */
`;

const CustomIconButton = muiStyled(IconButton)({
  backgroundColor: '#fb7901',
  borderRadius: '50%',
  width: '160px',
  height: '160px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: 'Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif',
  '&:hover': {
    backgroundColor: '#C56003',
  },
  '@media (max-width: 991px)': {
    width: '120px',
    height: '120px',
    fontSize: '18px',
  },
});

const StartText = styled.span`
  margin-top: 10px;
  font: 700 24px Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const IconImage = styled.img`
  width: 100%;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 25px;
  background-color: #7a5ff5;
  width: 100%;
  padding: 13px 54px 13px 0;
  box-sizing: border-box; /* Garantir que o padding seja incluído na largura total */
  @media (max-width: 991px) {
    padding: 13px 20px; /* Ajustar o padding para telas menores */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50%; /* Garantir que a coluna esquerda não ultrapasse 50% */
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%; /* Ajustar para telas menores */
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end; /* Ajustar a imagem para a direita */
  align-items: center;
  flex: 1;
  max-width: 50%; /* Garantir que a coluna direita não ultrapasse 50% */
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%; /* Ajustar para telas menores */
  }
`;

const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  margin-right: 20px; /* Adicionar margem à direita */
`;

const StyledHeader = styled.h1`
  color: #ffffff;
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 600;
  margin-left: 46px;
  width: 936px;
  @media (max-width: 991px) {
    margin-left: 10px;
    font-size: 30px;
    width: auto;
  }
`;

const StyledQuoteBox = styled.blockquote`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 20px 20px 0;
  background-color: #daf55f;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat Alternates', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px; /* Diminuir o tamanho da fonte */
  font-weight: 600;
  color: #000000;
  margin: 11px 0 20px; /* Aumentar a margem inferior */
  padding: 20px 30px 10px; /* Ajustar o padding */
  width: 100%; /* Garantir que o QuoteBox ocupe toda a largura disponível */
  max-width: 100%; /* Garantir que o QuoteBox não ultrapasse os limites */
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px;
    font-size: 18px;
  }
`;

const Author = styled.span`
  display: block;
  font-size: 0.8em;
  margin-top: 10px;
  text-align: right;
  color: #7a5ff5; /* Adicionar cor roxa ao nome do autor */
`;

const Highlight = styled.span`
  color: #7a5ff5; /* Cor roxa */
`;

// Componentes
const WelcomeHeader: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <StyledHeader>Bom ver você novamente, {userName}!</StyledHeader>
  );
};

const QuoteBox: React.FC<{ text: string, author: string }> = ({ text, author }) => {
  const highlightedText = text.split(' ').map((word, index) => {
    if (word.toLowerCase() === 'sucesso' || word.toLowerCase() === 'thigaso pato') {
      return <Highlight key={index}>{word}</Highlight>;
    }
    return word + ' ';
  });

  const highlightedAuthor = author.split(' ').map((word, index) => {
    if (word.toLowerCase() === 'thigaso pato') {
      return <Highlight key={index}>{word}</Highlight>;
    }
    return word + ' ';
  });

  return (
    <StyledQuoteBox>
      "{highlightedText}" <br />
      <Author>{highlightedAuthor}</Author>
    </StyledQuoteBox>
  );
};

const HeaderContainer: React.FC<{ userName: string, quoteText: string, quoteAuthor: string, imageSrc: string }> = ({ userName, quoteText, quoteAuthor, imageSrc }) => {
  return (
    <StyledSection>
      <ContentWrapper>
        <LeftColumn>
          <WelcomeHeader userName={userName} />
          <QuoteBox text={quoteText} author={quoteAuthor} />
        </LeftColumn>
        <RightColumn>
          <ProfileImage src={imageSrc} alt="Profile" loading="lazy" />
        </RightColumn>
      </ContentWrapper>
    </StyledSection>
  );
};

interface MissionItemProps {
  icon: string;
  description: string;
  isCompleted: boolean;
  disabled?: boolean;
}
const MissionItem: React.FC<MissionItemProps> = ({ icon, description, isCompleted, disabled = false }) => {
  return (
    <MissionWrapper isCompleted={isCompleted} disabled={disabled}>
      <MissionIcon src={icon} alt="Mission Icon" />
      <MissionDescription>{description}</MissionDescription>
    </MissionWrapper>
  );
};

const AdditionalText = styled.p`
  margin-top: 30px; /* Aumentar a margem superior */
  font-size: 18px; /* Aumentar o tamanho da fonte */
  color: #000; /* Aumentar a cor do texto */
  text-align: center;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const ChallengeCard: React.FC<{ changeSection: (section: string) => void }> = ({ changeSection }) => {
  const handleStartClick = () => {
    changeSection('Desafio');
  };

  return (
    <CardWrapper>
      <ChallengeTitle>Vamos colocar suas habilidades à prova!</ChallengeTitle>
      <StartButtonWrapper>
        <CustomIconButton onClick={handleStartClick}>
          <Icon style={{ width: '80px', height: '80px' }}>
            <IconImage src="/src/Assets/iconprogramming.svg" alt="Programming Icon" />
          </Icon>
          <StartText>Iniciar!</StartText>
        </CustomIconButton>
      </StartButtonWrapper>
      <AdditionalText>Prepare-se para desafios emocionantes e aprenda algo novo a cada dia!</AdditionalText>
    </CardWrapper>
  );
};

const MainContentContainer: React.FC<{ changeSection: (section: string) => void }> = ({ changeSection }) => {
  const missions: MissionItemProps[] = [
    { icon: "/src/Assets/iconnew.svg", description: "Complete uma nova missão", isCompleted: false },
    { icon: "/src/Assets/icongoal.svg", description: "Conclua duas etapas de uma trilha", isCompleted: false },
    { icon: "/src/Assets/iconexperience.svg", description: "Ganhe 30 pontos de experiência", isCompleted: false },
    { icon: "/src/Assets/iconlock.svg", description: "Volte amanhã para uma nova missão", isCompleted: true, disabled: true },
  ];

  return (
    <Container>
      <MissionsWrapper>
        <MissionsColumn>
          <MissionsContent>
            <MissionsTitle>Missões do dia:</MissionsTitle>
            <NextMissionInfo>Uma nova missão diária será adicionada em 3 horas</NextMissionInfo>
            {missions.map((mission, index) => (
              <MissionItem key={index} {...mission} />
            ))}
          </MissionsContent>
        </MissionsColumn>
        <ChallengeColumn>
          <ChallengeCard changeSection={changeSection} />
        </ChallengeColumn>
      </MissionsWrapper>
    </Container>
  );
};

const PageTitle = styled.h1`
  color: #7a5ff5;
  font-size: 30px;
  font-family: 'Montserrat Alternates';
            fontWeight: "bold";

  text-align: center;
  margin: 20px 0;
`;

const MissoesPage: React.FC<{ changeSection: (section: string) => void }> = ({ changeSection }) => {
  const userName = "Usuário";
  const quoteText = "Cada linha de código é um passo para o sucesso!";
  const quoteAuthor = "Thigas, o Pato";
  const imageSrc = "/src/assets/Fulbody-logo.svg";

  return (
    <PageContainer>
      <PageTitle>Missões Diárias</PageTitle>
      <HeaderContainer 
        userName={userName} 
        quoteText={quoteText} 
        quoteAuthor={quoteAuthor} 
        imageSrc={imageSrc} 
      />
      <MainContentContainer changeSection={changeSection} />
    </PageContainer>
  );
};

export default MissoesPage;