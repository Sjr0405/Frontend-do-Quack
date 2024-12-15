import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
  max-width: 800px;
  border-radius: 16px;
`;

export const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #ff9800; /* Laranja */
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchBarSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(106, 27, 154, 0.5); /* Roxo */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 16px;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: ${({ active }) => (active ? '#6a1b9a' : '#ff9800')}; /* Roxo e Laranja */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6a1b9a; /* Roxo */
  }
`;

export const LanguageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
`;

export const RoadmapCard = styled.div`
  background-color: #fff;
  border: 2px solid rgba(255, 152, 0, 0.7); /* Laranja com opacidade de 70% */
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const RoadmapImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 16px;
`;

export const RoadmapName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

export const RoadmapDescription = styled.p`
  font-size: 14px;
  color: #555;
  border-radius: 16px;
`;

export const NoResults = styled.div`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;

export const SadIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export const PopupTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

export const PopupDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

export const PopupButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #ff9800; /* Laranja */
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e65100; /* Laranja mais escuro */
  }
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #999;
  }
`;
