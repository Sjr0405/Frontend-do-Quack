import { useState } from 'react';
import { useAuth } from '../../../AuthContext';
import foguinho from '../../../Assets/barra de status/foquinho.svg';
import sem_fogo from '../../../Assets/Icons/no-fire.svg';
import pontos from '../../../Assets/Cristal.svg';
import { StatusBar as StatusBarContainer, StatusItem, Tooltip, DaysList } from './AprenderStyles';

const StatusBar = () => {
  const { statistics } = useAuth();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Função para lidar com o evento de mouse entrar em um item
  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  // Função para lidar com o evento de mouse sair de um item
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <StatusBarContainer>
      <StatusItem
        onMouseEnter={() => handleMouseEnter('investidas')}
        onMouseLeave={handleMouseLeave}
      >
        <img src={foguinho} alt="Investidas" />
        <span>{statistics?.streakDays || 0}</span>
        <Tooltip visible={hoveredItem === 'investidas'}>
          <h3>Dias de investida</h3>
          <div>
            <DaysList>
              <li>Seg <img src={sem_fogo} alt="Foguinho" /></li>
              <li>Ter <img src={sem_fogo} alt="Foguinho" /></li>
              <li>Qua <img src={sem_fogo} alt="Foguinho" /></li>
              <li>Qui <img src={sem_fogo} alt="Sem Foguinho" /></li>
              <li>Sex <img src={sem_fogo} alt="Sem Foguinho" /></li>
              <li>Sáb <img src={sem_fogo} alt="Sem Foguinho" /></li>
              <li>Dom <img src={sem_fogo} alt="Sem Foguinho" /></li>
            </DaysList>
          </div>
        </Tooltip>
      </StatusItem>
      <StatusItem
        onMouseEnter={() => handleMouseEnter('pontos')}
        onMouseLeave={handleMouseLeave}
      >
        <img src={pontos} alt="Pontos" />
        <span>{statistics?.userExperience || 0}</span>
        <Tooltip visible={hoveredItem === 'pontos'}>
          <img src={pontos} alt="Pontos" />
          Você tem {statistics?.userExperience || 0} pontos acumulados.
        </Tooltip>
      </StatusItem>
    </StatusBarContainer>
  );
};

export default StatusBar;
