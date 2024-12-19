import styled from 'styled-components';
import apiIcon from '../../../Assets/Iconesperfil/api.png';
import databaseIcon from '../../../Assets/Iconesperfil/database.png';
import deviconIcon from '../../../Assets/Iconesperfil/devicon.png';
import medalha1Icon from '../../../Assets/Iconesperfil/medalha1.png';
import medalha2Icon from '../../../Assets/Iconesperfil/medalha2.png';
import medalha3Icon from '../../../Assets/Iconesperfil/medalha3.png';
import trofeuIcon from '../../../Assets/Iconesperfil/troveu.png';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

const EmblemaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Emblema = styled.img`
  width: 50px; /* Tamanho padrão */
  height: 50px; /* Tamanho padrão */
  border-radius: 10px;
`;

const EmblemaNome = styled.span`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Posiciona acima do emblema */
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;

  ${EmblemaContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const MensagemAnimadora = styled.p`
  font-size: 16px;
  text-align: center;
  color: #555;
  margin-top: 20px;
  grid-column: span 4; /* Ocupa todas as colunas */
`;

interface Achievement {
  id: number;
  name: string;
  description: string;
  imagePath: string;
}

interface ColunaEmblemasProps {
  achievements: Achievement[];
}

const imageMap: { [key: string]: string } = {
  "Perceveranca": medalha1Icon,
  "Dedicação": medalha2Icon,
  "Especialista em APIs": apiIcon,
  "Mestre em DB": databaseIcon,
  "Dev Pro": deviconIcon,
  "Desafiante Pro": medalha3Icon,
  "Colaborador Top": trofeuIcon,
};

const ColunaEmblemas = ({ achievements }: ColunaEmblemasProps) => (
  <ColunaEmblemasStyled>
    <ContainerColecaoEmblemas>
      <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
      <GradeEmblemas>
        {achievements.length > 0 ? (
          achievements.map((achievement) => (
            <EmblemaContainer key={achievement.id}>
              <Emblema src={imageMap[achievement.name] || apiIcon} alt={achievement.description} />
              <EmblemaNome>{achievement.description}</EmblemaNome>
              <Tooltip>{achievement.name}</Tooltip>
            </EmblemaContainer>
          ))
        ) : (
          <MensagemAnimadora>
            Você não tem nenhum emblema ainda, mas não se preocupe! Com o tempo, você vai fazendo as atividades e conseguindo vários emblemas.
          </MensagemAnimadora>
        )}
      </GradeEmblemas>
    </ContainerColecaoEmblemas>
  </ColunaEmblemasStyled>
);

export default ColunaEmblemas;
