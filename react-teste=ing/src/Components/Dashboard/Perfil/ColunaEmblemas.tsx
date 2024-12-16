import styled from 'styled-components';
import medalha1 from '../../../Assets/Iconesperfil/medalha1.png';
import medalha2 from '../../../Assets/Iconesperfil/medalha2.png';
import medalha3 from '../../../Assets/Iconesperfil/medalha3.png';
import medalha4 from '../../../Assets/Iconesperfil/troveu.png';
import medalha5 from '../../../Assets/Iconesperfil/experiencia.png';
import medalha6 from '../../../Assets/Iconesperfil/api.png';
import medalha7 from '../../../Assets/Iconesperfil/devops.png';
import medalha8 from '../../../Assets/Iconesperfil/database.png';
import ItemEmblema from './ItemEmblema';

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

const ColunaEmblemas = ({ achievements }: { achievements: { id: number; name: string; description: string; imagePath: string }[] }) => (
  <ColunaEmblemasStyled>
    <ContainerColecaoEmblemas>
      <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
      <GradeEmblemas>
        {achievements.map((achievement) => (
          <ItemEmblema key={achievement.id} imagePath={achievement.imagePath} name={achievement.name} />
        ))}
        <ItemEmblema imagePath={medalha1} name="Introdução à Programação" />
        <ItemEmblema imagePath={medalha2} name="Programação Estruturada" />
        <ItemEmblema imagePath={medalha3} name="Estruturas de Dados" />
        <ItemEmblema imagePath={medalha4} name="Desenvolvimento Web" />
        <ItemEmblema imagePath={medalha5} name="Experiência" />
        <ItemEmblema imagePath={medalha6} name="API" />
        <ItemEmblema imagePath={medalha7} name="DevOps" />
        <ItemEmblema imagePath={medalha8} name="Banco de Dados" />
      </GradeEmblemas>
    </ContainerColecaoEmblemas>
  </ColunaEmblemasStyled>
);

export default ColunaEmblemas;
