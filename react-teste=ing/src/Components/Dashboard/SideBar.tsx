import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Logoimg from '../../Assets/Logo.svg';
import SelectedBooks from '../../Assets/svgs//Home-svgs/Selected-Colors/Laranja/Books.svg';
import Books from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/Books.svg';
import SelectedRoadmap from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/roadmap.svg';
import Roadmap from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/roadmap.svg';
import SelectedPraticar from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/praticar.svg';
import Praticar from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/praticar.svg';
import SelectedRankings from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/Ranking.svg';
import Rankings from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/Ranking.svg';
import SelectedUser from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/User.svg';
import User from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/User.svg';
import SelectedAlvo from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/Alvo.svg';
import Alvo from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/Alvo.svg';
import SelectedLoja from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/Loja.svg';
import Loja from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/Loja.svg';
import SelectedConfiguracao from '../../Assets/svgs/Home-svgs/Selected-Colors/Laranja/Configuracao.svg';
import Configuracao from '../../Assets/svgs/Home-svgs/Selected-Colors/Preto/Configuracao.svg';
import Logout from '../../Assets/svgs/Home-svgs/Selected-Colors/Vermelho/Logout.svg';

// Styled Components
const Sidebar = styled.div`
  width: 220px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 15px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 60px;
    padding: 10px;
  }
`;

const SidebarItemBase = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  img {
    margin-right: 8px;
    padding: 4px;
    height: 20px;
    width: 20px;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 0;
    img {
      margin-right: 0;
    }
  }

  &:hover {
    box-shadow: inset 0 0 0 2px #FB7901;
    img {
      transform: scale(1.1);
    }
  }
`;

const SelectedSidebarItem = styled(SidebarItemBase)`
  background-color: rgba(251, 123, 5, 0.05);
  color: #FB7901;
  border: 1px solid #FB7901;
`;

const SidebarItem = styled(SidebarItemBase)`
  color: #000;

  &:hover {
    color: #FB7901;
    box-shadow: inset 0 0 0 2px #FB7901;
    background-color: rgba(251, 123, 5, 0.05);
  }
`;

const SairSidebarItem = styled(SidebarItemBase)`
  color: #ff4a4a;

  &:hover {
    box-shadow: inset 0 0 0 2px #ff4a4a;
    background-color: rgba(255, 62, 65, 0.05);
  }
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s, transform 0.3s;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  
    &:hover {
      color: #4834d4;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      height: 40px;
      margin-right: 0;
    }

    span {
      display: none;
    }
  }
`;

const SideBar = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string>('Aprender'); // Estado para rastrear o item selecionado

  const handleItemClick = (section: string) => {
    setSelectedItem(section); // Atualiza o item selecionado
    changeSection(section);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Tem certeza que deseja sair?',
      text: 'Você será redirecionado para a página de login.',
      icon: 'warning', 
      iconColor: '#d33',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#7A5FF5',
      confirmButtonText: 'Sim, sair!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/Login');
      }
    });
  };

  return (
    <Sidebar>
      <Logo onClick={() => handleItemClick('Aprender')}>
        <img src={Logoimg} alt="Logo Quack()" />
        <span>Quack()</span>
      </Logo>


      {selectedItem === 'Aprender' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Aprender')}>
          <img src={SelectedBooks} alt="Aprender" />
          Aprender
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Aprender')}>
          <img src={Books} alt="Aprender" />
          Aprender
        </SidebarItem>
      )}


      {selectedItem === 'Roadmap' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Roadmap')}>
          <img src={SelectedRoadmap} alt="Roadmap" />
          Roadmap
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Roadmap')}>
          <img src={Roadmap} alt="Roadmap" />
          Roadmap
        </SidebarItem>
      )}



      {selectedItem === 'Praticar' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Praticar')}>
          <img src={SelectedPraticar} alt="Praticar" />
          Praticar
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Praticar')}>
          <img src={Praticar} alt="Praticar" />
          Praticar
        </SidebarItem>
      )}



      {selectedItem === 'Rankings' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Rankings')}>
          <img src={SelectedRankings} alt="Ranking" />
          Rankings
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Rankings')}>
          <img src={Rankings} alt="Ranking" />
          Rankings
        </SidebarItem>
      )}

      {selectedItem === 'Perfil' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Perfil')}>
          <img src={SelectedUser} alt="Perfil" />
          Perfil
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Perfil')}>
          <img src={User} alt="Perfil" />
          Perfil
        </SidebarItem>
      )}

      {selectedItem === 'Missoes' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Missoes')}>
          <img src={SelectedAlvo} alt="Missões" />
          Missões
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Missoes')}>
          <img src={Alvo} alt="Missões" />
          Missões
        </SidebarItem>
      )}

      {selectedItem === 'Loja' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Loja')}>
          <img src={SelectedLoja} alt="Loja" />
          Loja
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Loja')}>
          <img src={Loja} alt="Loja" />
          Loja
        </SidebarItem>
      )}

      {selectedItem === 'Configuracoes' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Configuracoes')}>
          <img src={SelectedConfiguracao} alt="Configurações" />
          Configurações
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Configuracoes')}>
          <img src={Configuracao} alt="Configurações" />
          Configurações
        </SidebarItem>
      )}

      <SairSidebarItem onClick={handleLogout}>
        <img src={Logout} alt="Sair" />
        Sair
      </SairSidebarItem>
    </Sidebar>
  );
};

export default SideBar;
