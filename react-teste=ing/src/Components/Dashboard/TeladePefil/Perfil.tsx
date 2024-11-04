import { useState } from 'react';
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('NaAsa');

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
            <img src="/src/svgs/Home-svgs/Perfil/Loja.svg" alt="Icône de loja" />
          </ImgBuble>
          Acesse nossa loja!
        </StoreButton>
      </Header>

      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImageBuble>
            <ProfileImage src={user?.imagePath || "https://randomuser.me/api/portraits/men/1.jpg"} alt="Foto do perfil" />
          </ProfileImageBuble>
        </ProfileImageContainer>
        <ProfileInfo>
          <h2>{user?.name}</h2>
          <p>
            Título: <span>Quacktólico()</span>
          </p>
          <p>{user?.email}</p>
          <p>
            Aluno desde {new Date(user?.registerAt || '').toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}
          </p>
          <p>
            Ranking: <span className="ranking">#30</span>
          </p>
        </ProfileInfo>

        <EditIcon onClick={() => navigate('/EditarPerfil')}>
          <img src="/src/svgs/Home-svgs/Perfil/Pencil.svg" alt="Icône de editar" />
        </EditIcon>

        <TabContainer>
          <TabNav>
            <TabButton active={activeTab === 'NaAsa'} onClick={() => setActiveTab('NaAsa')}>
              Na Asa
            </TabButton>
            <TabButton active={activeTab === 'NoLago'} onClick={() => setActiveTab('NoLago')}>
              No Lago
            </TabButton>
          </TabNav>

          <TabContent>
            {activeTab === 'NaAsa' && (
              <>
                <Heading>Todo grande pato começa sozinho!</Heading>
                <SubText>
                  Explore o lago, siga outros patos e deixe seu voo ser acompanhado.
                  Cada jornada começa com o primeiro quack!
                </SubText>
              </>
            )}
            {activeTab === 'NoLago' && (
              <>
                <Heading>Explore com os outros patos!</Heading>
                <SubText>
                  No lago, você pode seguir patos, aprender novas habilidades e
                  compartilhar suas jornadas com amigos.
                </SubText>
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
              <BadgeItem>
                <BadgeImage src="/path/to/badge1.svg" alt="Introdução à Programação" />
                <BadgeText>Introdução à Programação</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge2.svg" alt="Fundamentos de Algoritmos" />
                <BadgeText>Fundamentos de Algoritmos</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge3.svg" alt="Programação Estruturada" />
                <BadgeText>Programação Estruturada</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge4.svg" alt="Estruturas de Dados" />
                <BadgeText>Estruturas de Dados</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge5.svg" alt="Desenvolvimento Web" />
                <BadgeText>Desenvolvimento Web</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge6.svg" alt="Desenvolvimento de APIs" />
                <BadgeText>Desenvolvimento de APIs</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge7.svg" alt="DevOps" />
                <BadgeText>DevOps</BadgeText>
              </BadgeItem>
              <BadgeItem>
                <BadgeImage src="/path/to/badge8.svg" alt="Banco de Dados" />
                <BadgeText>Banco de Dados</BadgeText>
              </BadgeItem>
            </BadgeGrid>
          </BadgeCollectionContainer>
        </div>

        <StatsSection>
          <StatsTitle>Estatísticas:</StatsTitle>
          <StatsGrid>
            <StatItem>
              <StatIcon src="/path/to/icon1.svg" alt="Dias de investida" />
              <StatLabel>Dias de investida</StatLabel>
              <StatValue>24</StatValue>
            </StatItem>
            <StatItem>
              <StatIcon src="/path/to/icon2.svg" alt="Nível" />
              <StatLabel style={{ textAlign: 'center' }}>20<br />Nível</StatLabel>
              <ProgressBar>
                <Progress />
              </ProgressBar>
            </StatItem>
            <StatItem>
              <StatIcon src="/path/to/icon3.svg" alt="Desafios concluídos" />
              <StatLabel>Desafios concluídos</StatLabel>
              <StatValue>24</StatValue>
            </StatItem>
            <StatItem>
              <StatIcon src="/path/to/icon4.svg" alt="Lições completadas" />
              <StatLabel>Lições completadas</StatLabel>
              <StatValue>42</StatValue>
            </StatItem>
          </StatsGrid>
        </StatsSection>
      </Content>
    </ProfileContainer>
  );
};

export default Perfil;