import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// Styled Components
const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItemBase = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  img {
    margin-right: 5px;
    padding: 5px;
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
    border: 1px solid #FB7901;
    background-color: rgba(251, 123, 5, 0.05);
  }
`;

const SairSidebarItem = styled(SidebarItemBase)`
  color: #ff4a4a;

  &:hover {
    border: 1px solid #ff4a4a;
    background-color: rgba(255, 62, 65, 0.05);
  }
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  img {
    height: 60px;
    margin-right: 15px;
    cursor: pointer;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  
    &:hover {
      color: #4834d4;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }

    span {
      font-size: 24px;
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
      <Logo onClick={() => navigate('/Home')}>
        <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
        <span>Quack()</span>
      </Logo>

      {/* Verifica se o item selecionado é o 'Aprender' */}
      {selectedItem === 'Aprender' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Aprender')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/Books.svg" alt="Aprender" />
          Aprender
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Aprender')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/Books.svg" alt="Aprender" />
          Aprender
        </SidebarItem>
      )}

      {/* Verifica se o item selecionado é o 'Rankings' */}
      {selectedItem === 'Rankings' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Rankings')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/Ranking.svg" alt="Ranking" />
          Rankings
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Rankings')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/Ranking.svg" alt="Ranking" />
          Rankings
        </SidebarItem>
      )}

      {/* Repetir lógica para outros itens */}
      {selectedItem === 'Perfil' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Perfil')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/User.svg" alt="Perfil" />
          Perfil
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Perfil')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/User.svg" alt="Perfil" />
          Perfil
        </SidebarItem>
      )}

      {/* Continue para os demais itens */}
      {selectedItem === 'Missoes' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Missoes')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/Alvo.svg" alt="Missões" />
          Missões
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Missoes')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/Alvo.svg" alt="Missões" />
          Missões
        </SidebarItem>
      )}

      {selectedItem === 'Loja' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Loja')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/Loja.svg" alt="Loja" />
          Loja
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Loja')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/Loja.svg" alt="Loja" />
          Loja
        </SidebarItem>
      )}

      {selectedItem === 'Opcoes' ? (
        <SelectedSidebarItem onClick={() => handleItemClick('Opcoes')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Laranja/Configuracao.svg" alt="Opções" />
          Opções
        </SelectedSidebarItem>
      ) : (
        <SidebarItem onClick={() => handleItemClick('Opcoes')}>
          <img src="/src/svgs/Home-svgs/Selected-Colors/Preto/Configuracao.svg" alt="Opções" />
          Opções
        </SidebarItem>
      )}

      <SairSidebarItem onClick={handleLogout}>
        <img src="/src/svgs/Home-svgs/Selected-Colors/Vermelho/Logout.svg" alt="Sair" />
        Sair
      </SairSidebarItem>
    </Sidebar>
  );
};

export default SideBar;