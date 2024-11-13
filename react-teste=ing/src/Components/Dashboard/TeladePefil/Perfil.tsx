import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';
import { useAuth } from '../../../AuthContext';
import {
  ProfileContainer,
  Header,
  ProfileSection,
  ProfileImageContainer,
  ProfileImageBuble,
  ProfileImage,
  EditIcon,
  ProfileInfo,
  Content,
  BadgeCollectionContainer,
  BadgeTitle,
  BadgeGrid,
  BadgeItem,
  BadgeImage,
  BadgeText,
  StatsSection,
  StatsTitle,
  StatsGrid,
  StatItem,
  StatIcon,
  StatLabel,
  StatValue,
  ProgressBar,
  Progress,
  ImgBuble,
  StoreButton,
  TabContainer,
  TabNav,
  TabButton,
  TabContent,
  Heading,
  SubText,
  SearchBar
} from './PerfilStyles';

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const { user, achievements, statistics, fetchUserAchievementsById, fetchUserStatisticsById, fetchUserTasksById } = useAuth(); 
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('NaAsa');

//***************************************************************************
  useEffect(() => {
    if (user) {
      fetchUserAchievementsById(user.id);
      fetchUserStatisticsById(user.id);
      fetchUserTasksById(user.id);
    }
  }, [user, fetchUserAchievementsById, fetchUserStatisticsById, fetchUserTasksById]);

//***************************************************************************
  if (!user) {
    return <div>Carregando...</div>; 
  }

  return (
    <ProfileContainer>
      <Header>
        <h2 style={{ fontSize: '30px', fontWeight: '500', fontFamily: 'Montserrat Alternates' }}>Seu perfil</h2>
        <SearchBar>
          <Input
            type="search"
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        <StoreButton onClick={() => changeSection('Loja')}>
          <ImgBuble>
            <img src="/src/svgs/Home-svgs/Perfil/Loja.svg" alt="Ícone de loja" />
          </ImgBuble>
          Acesse nossa loja!
        </StoreButton>
      </Header>
     
      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImageBuble>
            <ProfileImage src={user.imagePath || "https://randomuser.me/api/portraits/men/1.jpg"} alt="Foto do perfil" />
          </ProfileImageBuble>
        </ProfileImageContainer>
        <ProfileInfo>
          <h2>{user.name}</h2>
          <p><span>Username:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          <p>Aluno desde {new Date(user.registerAt).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}</p>
          <p><span>Ranking:</span> <span className="ranking">#30</span></p> 
        </ProfileInfo>

        <EditIcon onClick={() => navigate('/EditarPerfil')}>
          <img src="/src/svgs/Home-svgs/Perfil/Pencil.svg" alt="Ícone de editar" />
        </EditIcon>

        <TabContainer>
          <TabNav>
            <TabButton active={activeTab === 'NaAsa'} onClick={() => setActiveTab('NaAsa')}>Na Asa</TabButton>
            <TabButton active={activeTab === 'NoLago'} onClick={() => setActiveTab('NoLago')}>No Lago</TabButton>
          </TabNav>

          <TabContent>
            {activeTab === 'NaAsa' && (
              <>
                <Heading>Todo grande pato começa sozinho!</Heading>
                <SubText>Explore o lago, siga outros patos e deixe seu voo ser acompanhado. Cada jornada começa com o primeiro quack!</SubText>
              </>
            )}
            {activeTab === 'NoLago' && (
              <>
                <Heading>Explore com os outros patos!</Heading>
                <SubText>No lago, você pode seguir patos, aprender novas habilidades e compartilhar suas jornadas com amigos.</SubText>
              </>
            )}
          </TabContent>
        </TabContainer>
      </ProfileSection>

      <Content>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5%' }}>
          <BadgeTitle>Coleção de emblemas:</BadgeTitle>
          <BadgeCollectionContainer>
            <BadgeGrid>
              {achievements && achievements.length > 0 ? (
                achievements.map((achievement) => (
                  <BadgeItem key={achievement.id}>
                    <BadgeImage src={achievement.imagePath} alt={achievement.name} />
                    <BadgeText>{achievement.name}</BadgeText>
                    <p>{achievement.description}</p>
                  </BadgeItem>
                ))
              ) : (
                <p>Você não tem conquistas</p>
              )}
            </BadgeGrid>
          </BadgeCollectionContainer>
        </div>

        <StatsSection>
          <StatsTitle>Estatísticas:</StatsTitle>
          <StatsGrid>
            {statistics && Object.keys(statistics).length > 0 ? (
              Object.keys(statistics).map((statistic) => (
                <StatItem key={statistic}>
                  <StatIcon src="/src/Icons/fire.svg" alt="Foginho" />
                  <StatLabel>{statistics.user}</StatLabel>
                  <StatValue>{statistics.streakDays}</StatValue>
                </StatItem>
              ))
            ) : (
              <p>Nenhuma estatística encontrada</p>
            )}
            {statistics && Object.keys(statistics).length > 0 ? (
              Object.keys(statistics).map((statistic) => (
                <StatItem key={statistic}>
                  <StatIcon src="/src/Icons/fire.svg" alt="Foginho" />
                  <StatLabel>{statistics.user}</StatLabel>
                  <StatValue>{statistics.userLevel}</StatValue>
                  <ProgressBar>
                    <Progress/>
                  </ProgressBar>
                  <StatValue>{statistics.userExperience}</StatValue>
                </StatItem>
              ))
            ) : (
              <p>Nenhuma estatística encontrada</p>
            )}
            {statistics && Object.keys(statistics).length > 0 ? (
              Object.keys(statistics).map((statistic) => (
                <StatItem key={statistic}>
                  <StatIcon src="/src/Icons/fire.svg" alt="Foginho" />
                  <StatLabel>{statistics.user}</StatLabel>
                  <StatValue>{statistics.challengesCompletedCount}</StatValue>
                </StatItem>
              ))
            ) : (
              <p>Nenhuma estatística encontrada</p>
            )}
            {statistics && Object.keys(statistics).length > 0 ? (
              Object.keys(statistics).map((statistic) => (
                <StatItem key={statistic}>
                  <StatIcon src="/src/Icons/fire.svg" alt="Foginho" />
                  <StatLabel>{statistics.user}</StatLabel>
                  <StatValue>{statistics.roadmapsCompletedCount}</StatValue>
                </StatItem>
              ))
            ) : (
              <p>Nenhuma estatística encontrada</p>
            )}
          </StatsGrid>
        </StatsSection>
      </Content>
    </ProfileContainer>
  );
};

export default Perfil;