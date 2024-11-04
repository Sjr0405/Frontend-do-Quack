import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../AuthContext';

const HeaderContainer = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 24px;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const Header: React.FC = () => {
  const { user } = useAuth(); // Acessa o usuário do contexto de autenticação

  return (
    <HeaderContainer>
      {user ? `Bem-vindo, ${user.email}!` : 'Bem-vindo!'}
    </HeaderContainer>
  );
};

export default Header;
