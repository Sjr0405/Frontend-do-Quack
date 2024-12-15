import styled from 'styled-components';
import lapis from '../../../Assets/svgs/Home-svgs/Perfil/Pencil.svg';
import experiencia from '../../../Assets/Iconesperfil/experiencia.png';
import profileIcon from '../../../Assets/Icons/profile.svg';

const ColunaPerfilStyled = styled.div`
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

const BolhaImagemPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative; // Removido o contorno laranja
`;

const ImagemPerfil = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const InformacoesPerfil = styled.div`

  text-align: left;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  margin-left: 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .titulo-classificacao {
    font-size: 22px; // Aumentado
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
  }

  .perfil-info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .nivel-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 20px;
  }

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

  .achievement-text {
    font-size: 40px;
    font-weight: bold;
    color: #fdb913;
    font-family: Arial, sans-serif;
    margin-left: 10px; // Adicionado espaçamento
  }

  .name {
    margin-top: 30px;
    font-size: 24px; // Aumentado
    font-weight: bold;
    color: #000;
  }

  .handle {
    font-size: 20px; // Aumentado
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

  .register-date {
    font-size: 20px;
    color: #666666; // Cor cinza mais escura
    font-family: Arial, sans-serif; // Mesma fonte dos outros textos
    margin-top: 6px;
  }
`;

const IconeEditar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  border: #E9E8E8FF 2px solid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  position: absolute; // Adicionado para posicionamento absoluto
  bottom: -10px; // Posiciona no lado inferior
  right: -10px; // Posiciona no lado direito

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

const NivelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NivelTexto = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
`;

const BarraProgressoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const BarraProgresso = styled.div`
  flex: 1;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Progresso = styled.div<{ porcentagem: number }>`
  width: ${({ porcentagem }) => porcentagem}%;
  height: 100%;
  background-color: #ffcc00;
  border-radius: 15px;
  transition: width 0.5s ease-in-out;
`;

const TextoProgresso = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  top: 50%;
  transform: translateY(-50%);
`;

const IconeExperiencia = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ColunaNivel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ColunaPerfil = ({ safeUser, navigate }: { safeUser: any, navigate: any }) => {
  const nivelAtual = 5; // Exemplo de nível atual
  const pontosAtuais = 1200; // Exemplo de pontos atuais
  const pontosParaProximoNivel = 2000; // Exemplo de pontos necessários para o próximo nível
  const porcentagem = (pontosAtuais / pontosParaProximoNivel) * 100;

  return (
    <ColunaPerfilStyled>
      <BolhaImagemPerfil>
        <ImagemPerfil
          src={safeUser?.imagePath || profileIcon}
          alt="Foto do perfil"
        />
        <IconeEditar onClick={() => navigate('/Home', { state: { section: 'EditarPerfil' } })}>
          <img src={lapis} alt="Ícone de editar" />
        </IconeEditar>
      </BolhaImagemPerfil>
      <InformacoesPerfil>
        <div className="perfil-info">
          <div className="name">{safeUser?.name}</div>
          <div className="handle">@{safeUser?.username}</div>
          <div className="description">
          </div>
          <div className="titulo-classificacao">
            Classificação: 
            <span className="achievement-text">#30</span>
          </div>
          <div className="register-date">
            Por aqui desde {new Date(safeUser?.registerOn).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </div>
        </div>
        <div className="nivel-container">
          <NivelContainer>
            <NivelTexto>Nível {nivelAtual}</NivelTexto>
            <ColunaNivel>
              <IconeExperiencia src={experiencia} alt="Ícone de experiência" />
              <BarraProgressoContainer>
                <BarraProgresso>
                  <Progresso porcentagem={porcentagem} />
                  <TextoProgresso>{pontosAtuais}/{pontosParaProximoNivel} XP</TextoProgresso>
                </BarraProgresso>
              </BarraProgressoContainer>
            </ColunaNivel>
          </NivelContainer>
        </div>
      </InformacoesPerfil>
    </ColunaPerfilStyled>
  );
};

export default ColunaPerfil;
