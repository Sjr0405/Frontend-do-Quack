import styled from 'styled-components';
import medalha1 from '../../../Assets/Iconesperfil/medalha1.png';
import medalha2 from '../../../Assets/Iconesperfil/medalha2.png';
import medalha3 from '../../../Assets/Iconesperfil/medalha3.png';
import medalha4 from '../../../Assets/Iconesperfil/troveu.png';
import medalha5 from '../../../Assets/Iconesperfil/experiencia.png';
import medalha6 from '../../../Assets/Iconesperfil/api.png';
import medalha7 from '../../../Assets/Iconesperfil/devops.png';
import medalha8 from '../../../Assets/Iconesperfil/database.png';

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

const ItemEmblema = styled.div`
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

const ImagemEmblema = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const TextoEmblema = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

const ColunaEmblemas = ({ achievements }: { achievements: { id: number; name: string; description: string; imagePath: string }[] }) => (
  <ColunaEmblemasStyled>
    <ContainerColecaoEmblemas>
      <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
      <GradeEmblemas>
        {achievements.map((achievement) => (
          <ItemEmblema key={achievement.id}>
            <ImagemEmblema src={achievement.imagePath} alt={achievement.name} />
            <TextoEmblema>{achievement.name}</TextoEmblema>
          </ItemEmblema>
        ))}
        <ItemEmblema>
          <ImagemEmblema src={medalha1} alt="Introdução à Programação" />
          <TextoEmblema>Introdução à Programação</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha2} alt="Programação Estruturada" />
          <TextoEmblema>Programação Estruturada</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha3} alt="Estruturas de Dados" />
          <TextoEmblema>Estruturas de Dados</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha4} alt="Desenvolvimento Web" />
          <TextoEmblema>Desenvolvimento Web</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha5} alt="Experiência" />
          <TextoEmblema>Experiência</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha6} alt="API" />
          <TextoEmblema>API</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha7} alt="DevOps" />
          <TextoEmblema>DevOps</TextoEmblema>
        </ItemEmblema>
        <ItemEmblema>
          <ImagemEmblema src={medalha8} alt="Banco de Dados" />
          <TextoEmblema>Banco de Dados</TextoEmblema>
        </ItemEmblema>
      </GradeEmblemas>
    </ContainerColecaoEmblemas>
  </ColunaEmblemasStyled>
);

export default ColunaEmblemas;
