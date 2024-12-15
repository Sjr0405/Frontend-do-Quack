import styled from 'styled-components';
import Estatistica1 from '../../../Assets/Iconesperfil/fire.png';
import Estatistica2 from '../../../Assets/Iconesperfil/experiencia.png';
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

const BarraProgresso = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
`;

const Progresso = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffcc00;
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
            <ValorEstatistica>24</ValorEstatistica>
          </div>
        </ItemEstatistica>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica2} alt="Nível" />
          <div>
            <RotuloEstatistica>Nível</RotuloEstatistica>
            <BarraProgresso>
              <Progresso />
            </BarraProgresso>
          </div>
        </ItemEstatistica>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica3} alt="Desafios concluídos" />
          <div>
            <RotuloEstatistica>Desafios concluídos</RotuloEstatistica>
            <ValorEstatistica>24</ValorEstatistica>
          </div>
        </ItemEstatistica>
        <ItemEstatistica>
          <IconeEstatistica src={Estatistica4} alt="Lições completadas" />
          <div>
            <RotuloEstatistica>Lições completadas</RotuloEstatistica>
            <ValorEstatistica>42</ValorEstatistica>
          </div>
        </ItemEstatistica>
      </GradeEstatisticas>
    </SecaoEstatisticas>
  </ColunaEstatisticasStyled>
);

export default ColunaEstatisticas;
