import styled from 'styled-components';

export const Container = styled.div`
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

export const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e0e0e0;
`;

export const ActivityDetails = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 100%;
`;

export const ActivityName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

export const ActivityDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

export const EditorContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  border-radius: 16px;
  background-color: #F4F4F9;
  justify-content: center;
`;

export const PatoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #6a1b9a;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a148c;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const NavigationButton = styled(Button)<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#6a1b9a')};
  color: ${({ disabled }) => (disabled ? '#999' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4a148c')};
  }
`;

export const QuizOption = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #6a1b9a;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a148c;
  }
`;

export const RestartButton = styled(Button)`
  background-color: #d32f2f;
  &:hover {
    background-color: #b71c1c;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 16px;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`;

export const GabaritoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  position: relative;
  width: 200px;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e0e0;
`;

export const GabaritoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
`;

export interface Activity {
  name: string;
  description: string;
  code?: string;
  correctAnswer: string;
  options?: string[];
}