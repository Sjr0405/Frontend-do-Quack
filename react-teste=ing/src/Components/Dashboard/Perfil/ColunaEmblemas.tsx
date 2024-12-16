import styled from 'styled-components';
// Remover importação não utilizada
// import ItemEmblema from './ItemEmblema';

const ColunaEmblemasStyled = styled.div`
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

const ContainerColecaoEmblemas = styled.div`
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

const TituloEmblemas = styled.h2`
  text-align: left;
  font-size: 24px;
  color: #ff7f00;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GradeEmblemas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

const MensagemAnimadora = styled.p`
  font-size: 16px;
  text-align: center;
  color: #555;
  margin-top: 20px;
`;

const ColunaEmblemas = () => (
  <ColunaEmblemasStyled>
    <ContainerColecaoEmblemas>
      <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
      <GradeEmblemas>
        {/* Zerar os componentes de emblemas */}
      </GradeEmblemas>
      <MensagemAnimadora>
        Você não tem nenhum emblema ainda, mas não se preocupe! Com o tempo, você vai fazendo as atividades e conseguindo vários emblemas.
      </MensagemAnimadora>
    </ContainerColecaoEmblemas>
  </ColunaEmblemasStyled>
);

export default ColunaEmblemas;
