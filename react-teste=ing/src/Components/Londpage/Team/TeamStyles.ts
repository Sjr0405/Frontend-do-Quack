import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px; /* Define uma largura máxima para o contêiner */
  margin: 0 auto; /* Centraliza o contêiner horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MembersContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    justify-content: center;
  }
  @media (max-width: 48em) {
    justify-content: center;
  }
`;

export const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid lightgrey;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-1rem);
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${props => props.theme.carouselColor};
  border: 2px solid lightgrey;
  border-radius: 20px;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

export const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }
`;

export const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }
`;