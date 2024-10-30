import styled from 'styled-components';
interface MissionWrapperProps {
  isCompleted: boolean;
  disabled?: boolean;
}

export const MissionWrapper = styled.div<MissionWrapperProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${props => props.disabled ? '#d3d3d3' : 'white'};
  border-radius: 20px;
  border: 1px solid #BFB9B9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 10px; /* Espaçamento igual entre os cards */
  color: ${props => props.isCompleted ? 'rgba(0, 0, 0, 0.6)' : '#000000'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.1);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${props => props.disabled ? '#d3d3d3' : '#f0f0f0'};
    transform: ${props => props.disabled ? 'none' : 'scale(1.05)'};
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const MissionIcon = styled.img`
  width: 77.66px;
  height: 70px;  
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const MissionDescription = styled.div`
  color: black;
  font-size: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  flex-grow: 1;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 8px;
  }
`;