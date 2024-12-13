import styled from 'styled-components';

// Styled Components
export const Container = styled.div`
  font-family: 'Montserrat Alternates', sans-serif;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  h1 {
    font-size: 36px;
    margin-right: 10px;
    font-weight: 300;
    font-family: 'Lilita One', sans-serif;
    position: relative;
    cursor: pointer;
    color: #333;
  }
  
  h1:hover::after {
    content: "";
    display: block;
    width: 145%; 
    height: 5px;
    background-color: #F6C761;
    position: absolute;
    bottom: -5px;
    left: -20%; 
  }
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinha todos os cards pela base */
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
`;

export const UserCard = styled.div<{ isFirst: boolean; isSecond: boolean; isThird: boolean }>`
  background-color: #fff;
  padding: 20px 15px; // Ajuste do padding para melhor espaçamento
  margin-bottom: 20px; // Adicionado margem inferior para espaçamento entre os cards
  border-radius: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); // Aumentando a sombra
  text-align: center;
  width: 200px;
  height: 280px;
  position: relative;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;

  ${({ isFirst }) => isFirst && `
    z-index: 2;
    transform: translateY(-20px) translateX(100%);
    border: 2px solid green; // Adicionando borda verde para o primeiro lugar
    box-shadow: 0px 8px 15px rgba(0, 128, 0, 0.5); // Adicionando sombra verde
    margin-top: -10px; // Ajuste do espaçamento superior para o primeiro lugar
  `}
  
  ${({ isSecond }) => isSecond && `
    transform: translateY(10px) translateX(-125%);
    border: 2px solid blue; // Adicionando borda azul para o segundo lugar
    box-shadow: 0px 8px 15px rgba(0, 0, 255, 0.5); // Adicionando sombra azul
    margin-top: 10px; // Ajuste do espaçamento superior para o segundo lugar
  `}

  ${({ isThird }) => isThird && `
    transform: translateY(10px);
    border: 2px solid red; // Adicionando borda vermelha para o terceiro lugar
    box-shadow: 0px 8px 15px rgba(255, 0, 0, 0.5); // Adicionando sombra vermelha
    margin-top: 10px; // Ajuste do espaçamento superior para o terceiro lugar
  `}
`;

export const LanguageImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: fit-content;
  margin-left: 25px;
  border-radius: 16px;
  border: 1px solid #f7f7f7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid #F6C761;
  margin: 0 auto 10px;
`;

export const UserName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const ListItem = styled.li`
  background-color: #fff;
  padding: 20px; // Ajuste do padding para melhor espaçamento
  margin: 2%;
  margin-bottom: 15px; // Ajuste do espaçamento inferior entre os itens
  border: 4px solid #F6C761;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  font-size: 18px; // Padronização do tamanho da fonte
  color: #333; // Padronização da cor da fonte
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); // Aumentando a sombra
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

// Novo componente para exibir ícone de ranking
export const RankingIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const Points = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  font-family: 'Montserrat Alternates', sans-serif;
`;