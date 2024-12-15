import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerPerfil, ContainerCabecalho, ColunasPerfil, Conteudo } from './PerfilStyles.ts';
import { useAuth } from '../../../AuthContext.tsx';
import BotaoLoja from './BotaoLoja';
import ColunaPerfil from './ColunaPerfil.tsx';
import ColunaAba from './ColunaAba.tsx';
import ColunaEmblemas from './ColunaEmblemas.tsx';
import ColunaEstatisticas from './ColunaEstatisticas.tsx';

type Achievement = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const { user, fetchUserProfile, fetchUserAchievementsById } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [activeTab, setActiveTab] = useState('Seguindo');

  // Dados seguros do usuário
  const safeUser = useMemo(() => {
    if (user) {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        imagePath: user.imagePath,
        registerOn: user.registerOn
      };
    }
    return null;
  }, [user]);

  useEffect(() => {
    if (safeUser) {
      fetchUserProfile(safeUser.id);
      fetchUserAchievementsById(safeUser.id);
    } else {
      setAchievements([]);
    }
  }, [safeUser, fetchUserProfile, fetchUserAchievementsById]);

  const followingData = [
    { name: 'Raphaela Solia', xp: 38783, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Samuel dos Santos Silva', xp: 26262, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'João Gabriel', xp: 25195, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Maria Josefina', xp: 20000, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Ana Rosa', xp: 15000, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Pedro Pascal', xp: 10000, avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Jão Silva', xp: 5000, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  const followersData = [
    { name: 'Samuel dos Santos Silva', xp: 26262, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'João Gabriel', xp: 25195, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Maria Josefina', xp: 20000, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Ana Rosa', xp: 15000, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Pedro Pascal', xp: 10000, avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Jão Silva', xp: 5000, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  return (
    <ContainerPerfil>
      <ContainerCabecalho>
        <h2 style={{ fontSize: '30px', fontWeight: '500', fontFamily: 'Montserrat Alternates', textAlign: 'center', color: 'purple' }}>
          Seu perfil
        </h2>
        <BotaoLoja changeSection={changeSection} />
      </ContainerCabecalho>

      <ColunasPerfil>
        <ColunaPerfil safeUser={safeUser} navigate={navigate} />
        <ColunaAba activeTab={activeTab} setActiveTab={setActiveTab} isModalOpen={isModalOpen} setModalOpen={setModalOpen} followingData={followingData} followersData={followersData} />
      </ColunasPerfil>

      <Conteudo>
        <ColunaEmblemas achievements={achievements} />
        <ColunaEstatisticas />
      </Conteudo>
    </ContainerPerfil>
  );
};

export default Perfil;
