import styled from 'styled-components';
import Estatistica1 from '../../../Assets/Iconesperfil/fire.png';
import Estatistica3 from '../../../Assets/Iconesperfil/quest.png';
import Estatistica4 from '../../../Assets/Iconesperfil/lissão.png';

const ColunaEstatisticasStyled = styled.div`
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

const SecaoEstatisticas = styled.div`
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

const TituloEstatisticas = styled.h2`
  font-size: 24px;
  color: #ff7f00;
  text-align: center;
  margin-bottom: 20px;
`;

const GradeEstatisticas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ItemEstatistica = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const IconeEstatistica = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const RotuloEstatistica = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ValorEstatistica = styled.p`
  font-size: 18px;
  color: #555;
`;



const ColunaEstatisticas = () => (
  <ColunaEstatisticasStyled>
    <SecaoEstatisticas>
      <TituloEstatisticas>Estatísticas:</TituloEstatisticas>
      <GradeEstatisticas>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica1} alt="Dias de investida" />
          <div>
            <RotuloEstatistica>Dias de investida</RotuloEstatistica>
            <ValorEstatistica>0</ValorEstatistica> {/* Zerar valor */}
          </div>
        </ItemEstatistica>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica3} alt="Missões diárias" /> {/* Mudar rótulo */}
          <div>
            <RotuloEstatistica>Missões diárias</RotuloEstatistica> {/* Mudar rótulo */}
            <ValorEstatistica>0</ValorEstatistica>
          </div>
        </ItemEstatistica>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica4} alt="Tarefas completadas" /> {/* Mudar rótulo */}
          <div>
            <RotuloEstatistica>Tarefas completadas</RotuloEstatistica> {/* Mudar rótulo */}
            <ValorEstatistica>0</ValorEstatistica>
          </div>
        </ItemEstatistica>
      </GradeEstatisticas>
    </SecaoEstatisticas>
  </ColunaEstatisticasStyled>
);

export default ColunaEstatisticas;
