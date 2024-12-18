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
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 20px;
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

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 20px;
`;

export const CodeEditorContainer = styled.div`
  height: calc(100vh - 150px); /* Ajusta o tamanho conforme o conteúdo do header e espaçamentos */
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

export const rightCode = `
class Lasagna:
    def expected_minutes_in_oven(self):
        return 40

    def remaining_minutes_in_oven(self, minutes_in_oven):
        return self.expected_minutes_in_oven() - minutes_in_oven

    def preparation_time_in_minutes(self, layers):
        return layers * 2

    def total_time_in_minutes(self, layers, minutes_in_oven):
        return self.preparation_time_in_minutes(layers) + minutes_in_oven


lasagna = Lasagna()
print(lasagna.expected_minutes_in_oven())  # 40
print(lasagna.remaining_minutes_in_oven(30))  # 10
print(lasagna.preparation_time_in_minutes(2))  # 4
print(lasagna.total_time_in_minutes(3, 30))  # 36
`;