import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #ff7300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  position: relative;
  z-index: 0;
  overflow: visible;

  @media (max-width: 991px) {
    flex-direction: column; 
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const ImageRight = styled.div`
  position: absolute;
  bottom: -50px; /* Ajuste conforme necessário para ultrapassar a seção */
  right: -50px; /* Ajuste conforme necessário para ultrapassar a seção */
  z-index: 5; /* Maior que o z-index dos outros elementos */
  overflow: visible;

  img {
    width: 100%;
    max-width: 400px; /* Ajuste conforme necessário */
    height: auto;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #6c5ce7;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  padding: 12px 35px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: #4834d4;
    color: white;
  }
`;