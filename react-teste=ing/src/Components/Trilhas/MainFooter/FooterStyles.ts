import styled from "styled-components";

export const Container = styled.div`
  grid-area: MF; 
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 0.8em;
  padding: 10px;
  text-align: center; 
  background-color: ${(props) => props.theme.colors.primary}; 
  border-top: 1px solid ${(props) => props.theme.colors.gray}; 

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
    padding: 15px;
  }

  @media (max-width: 320px) {
    font-size: 0.5em;
    padding: 10px;
  }
`;