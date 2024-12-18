import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Montserrat', sans-serif;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
`;

export const TopBar = styled.div`
  display: flex;
  gap: 15px;
`;

export const TopBarItem = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #7a5ff5;
    }
  }

  &:hover {
    background-color: #f0f0f5;
  }
`;

export const SelectedTopBarItem = styled(TopBarItem)`
  color: #ffffff;
  background-color: #7a5ff5;

  &:hover {
    background-color: #684bd4;
  }
`;

export const EditorContainer = styled.div`
  display: flex;
  height: 75%;
  padding: 20px;
  background-color: #F4F4F9;
  justify-content: center;
`;

export const LanguageSelector = styled.select`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Montserrat alternates', sans-serif;
  font-weight: bold;
  background-color: #F4F4F9;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #BFB9B9;

  &:hover {
    background-color: #BFB9B9;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: #7A5FF5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0 15px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;