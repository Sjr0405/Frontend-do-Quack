import styled from 'styled-components';

// Styled Components
export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
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

  h1:hover {
    cursor: pointer;
    position: relative;
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

  h1 {
    font-size: 36px;
    margin-right: 10px;
    font-weight: 300;
    font-family: 'Lilita One', sans-serif;
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
  padding: 20px;
  border-radius: 30%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  height: 280px;
  position: relative;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;

  ${({ isFirst }) => isFirst && `
    z-index: 2;
    transform: translateY(-20px) translateX(100%);
  `}
  
  ${({ isSecond }) => isSecond && `
    transform: translateY(10px) translateX(-125%);
  `}

  ${({ isThird }) => isThird && `
    transform: translateY(10px);
  `}
`;

export const LanguageImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center
  align-items: center;
  padding: 10px;
  width: fit-content;
  align-items: center;
  margin-left: 25px;
  border-radius: 20%;
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
  font-size: 18px;
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
  padding: 10px;
  margin: 2%;
  border: 4px solid #F6C761;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Novo componente para exibir ícone de ranking
export const RankingIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;