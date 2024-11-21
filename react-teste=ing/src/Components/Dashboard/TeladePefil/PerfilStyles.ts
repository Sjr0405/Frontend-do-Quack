import styled from 'styled-components';

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerImagemPerfil = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BolhaImagemPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #ff6f00;
`;

export const ImagemPerfil = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const IconeEditar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  border: #E9E8E8FF 2px solid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  margin-top: -20px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }

  &:active {
    background-color: #e0e0e0;
    transform: scale(0.9);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const InformacoesPerfil = styled.div`
  text-align: left;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  margin-left: 2%;

  .achievement-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .achievement-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .achievement-icon {
    width: 50px;
    height: 50px;
  }

  .achievement-text {
    font-size: 40px;
    font-weight: bold;
    color: #fdb913;
    font-family: Arial, sans-serif;
  }

  .name {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  .handle {
    font-size: 16px;
    color: #aaaaaa;
    margin-top: 4px;
  }

  .description {
    font-size: 15px;
    color: #444444;
    margin-top: 6px;
  }

  .links {
    margin-top: 30px;
    font-weight: bold;

    a {
      color: #007bff;
      text-decoration: none;
      margin-right: 16px;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColunaEmblemas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 20px;
    align-items: center;
  }
`;

export const ColunaEstatisticas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 20px;
    margin-left: 0;
    align-items: center;
  }
`;

export const ContainerColecaoEmblemas = styled.div`
  padding: 20px;
  border: 2px solid #e9e8e8;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const TituloEmblemas = styled.h2`
  text-align: left;
  font-size: 24px;
  color: #ff7f00;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const GradeEmblemas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemEmblema = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 15px;
  width: 120px;
  height: 120px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
`;

export const ImagemEmblema = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const TextoEmblema = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

export const SecaoEstatisticas = styled.div`
  padding: 20px;
  border: 2px solid #e9e8e8;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TituloEstatisticas = styled.h2`
  font-size: 24px;
  color: #ff7f00;
  text-align: center;
  margin-bottom: 20px;
`;

export const GradeEstatisticas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemEstatistica = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const IconeEstatistica = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const RotuloEstatistica = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ValorEstatistica = styled.p`
  font-size: 18px;
  color: #555;
`;

export const BarraProgresso = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
`;

export const Progresso = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffcc00;
`;

export const BolhaImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const BotaoLoja = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  right: 4%;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  color: #fff;
  padding: 10px 20px;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e62e33;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const ContainerAbas = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #e9e8e8;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavegacaoAbas = styled.div`
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
`;

export const BotaoAba = styled.div<{ active?: boolean }>`
  flex: 1;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#6e52fa' : '#bcbcbc')};
  border-bottom: 3px solid ${({ active }) => (active ? '#6e52fa' : '#e0e0e0')};
  padding-bottom: 5px;
  font-size: 20px;
`;

export const ConteudoAba = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

export const Titulo = styled.h3`
  color: #6e6e6e;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const TextoSecundario = styled.span`
  color: #bcbcbc;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

export const ColunasPerfil = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColunaPerfil = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export const ColunaAba = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
  }
`;