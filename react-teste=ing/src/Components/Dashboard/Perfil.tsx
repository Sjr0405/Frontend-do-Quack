import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Container principal
const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 100%;
  min-height: 100vh; /* Ajusta a altura mínima para ocupar a tela inteira */
  padding: 20px; /* Adiciona padding */
  box-sizing: border-box; /* Inclui padding e border no cálculo da altura */
  overflow: hidden; /* Remove rolagem */
  @media (max-width: 768px) {
    padding: 10px; /* Ajusta padding para telas pequenas */
  }
`;

//*****************************************//

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

//*****************************************//

const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column; /* Ajusta para coluna em telas pequenas */
    align-items: flex-start;
  }
`;

//*****************************************//

const SecaoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin-bottom: 2%;
`;

//*****************************************//

const ContainerImagemPerfil = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//*****************************************//

const BolhaImagemPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #ff6f00;
`;

//*****************************************//

const ImagemPerfil = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

//*****************************************//

const IconeEditar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  border: #E9E8E8FF 2px solid;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Torna o fundo redondo */
  cursor: pointer;
  margin-left: 10px; /* Ajusta a margem para ficar mais próximo do ProfileInfo */
  margin-top: -20px; /* Posiciona no topo */
  transition: background-color 0.3s, transform 0.3s; /* Adiciona transição para animação */

  &:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
    transform: scale(1.1); /* Aumenta o tamanho ao passar o mouse */
  }

  &:active {
    background-color: #e0e0e0; /* Cor de fundo ao clicar */
    transform: scale(0.9); /* Diminui o tamanho ao clicar */
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

//*****************************************//

// Informações do perfil
const InformacoesPerfil = styled.div`
  text-align: left;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  margin-left: 2%;

  .achievement-container {
    display: flex;
    align-items: center;
    gap: 10px; /* Espaço entre os elementos */
  }

  .achievement-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .achievement-icon {
    width: 50px; /* Ajuste o tamanho conforme necessário */
    height: 50px;
  }

  .achievement-text {
    font-size: 40px; /* Tamanho grande para destacar */
    font-weight: bold;
    color: #fdb913; /* Amarelo semelhante ao da imagem */
    font-family: Arial, sans-serif;
  }

  .name {
    margin-top: 30px;

    font-size: 20px; /* Diminuído para um tamanho menor */
    font-weight: bold;
    color: #000;
  }

  .handle {
    font-size: 16px; /* Diminuído para um tamanho menor */
    color: #aaaaaa;
    margin-top: 4px; /* Pequeno espaçamento para separação */
  }

  .description {
    font-size: 15px; /* Diminuído para um tamanho menor */
    color: #444444; /* Cinza mais escuro */
    margin-top: 6px;
  }

  .links {
    margin-top: 30px;
    font-weight: bold;

    a {
      color: #007bff;
      text-decoration: none; /* Removendo o sublinhado */
      margin-right: 16px;
      font-size: 16px; /* Diminuído para um tamanho menor */

      &:hover {
        text-decoration: underline; /* Apenas sublinha no hover */
      }
    }
  }

  .achievement-icon {
    width: 50px; /* Ajuste o tamanho conforme necessário */
    height: 50px;
  }

  .achievement-text {
    font-size: 40px;
    font-weight: bold;
    color: #fdb913;
    font-family: Arial, sans-serif;
  }
`;

//*****************************************//

const Conteudo = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1; /* Permite que o conteúdo cresça para preencher o espaço disponível */
  @media (max-width: 768px) {
    flex-direction: column; /* Ajusta para coluna em telas pequenas */
  }
`;

//*****************************************//

const ColunaEmblemas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ajusta os itens para ficarem espaçados */
  margin-top: 20px; /* Adiciona margem superior */
  margin-bottom: 20px; /* Adiciona margem inferior */
  @media (max-width: 768px) {
    padding: 10px; /* Ajusta padding para telas pequenas */
    margin-top: 20px; /* Adiciona margem superior em telas pequenas */
    align-items: center; /* Centraliza ao centro em telas pequenas */
    
    }
`;

//*****************************************//

const ColunaEstatisticas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Adiciona margem superior */
  margin-bottom: 20px; /* Adiciona margem inferior */
  margin-left: 20px; /* Adiciona espaçamento entre as colunas */

  @media (max-width: 768px) {
    padding: 10px; /* Ajusta padding para telas pequenas */
    margin-top: 20px; /* Adiciona margem superior em telas pequenas */
    margin-left: 0; /* Remove espaçamento entre as colunas em telas pequenas */
    align-items: center; /* Centraliza ao centro em telas pequenas */

    }
`;

//*****************************************//

const ContainerColecaoEmblemas = styled.div`
  padding: 20px;
  border: 2px solid #e9e8e8;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%; /* Ajusta a altura para 100% */
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

const SecaoEstatisticas = styled.div`
  padding: 20px;
  border: 2px solid #e9e8e8;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%; /* Ajusta a altura para 100% */
  @media (max-width: 768px) {
    padding: 10px; /* Ajusta padding para telas pequenas */
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
  width: 60%; /* Progresso atual */
  height: 100%;
  background-color: #ffcc00;
`;


//*****************************************//

const BolhaImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

//*****************************************//

// Botão "Acesse nossa loja!"
const BotaoLoja = styled.button`
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

//*****************************************//

const ContainerAbas = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

//*****************************************//

const NavegacaoAbas = styled.div`
  display: flex;
  //sombras
  border-radius: 15px;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
`;

//*****************************************//

const BotaoAba = styled.div<{ active?: boolean }>`
  flex: 1;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#6e52fa' : '#bcbcbc')};
  border-bottom: 3px solid ${({ active }) => (active ? '#6e52fa' : '#e0e0e0')};
  padding-bottom: 5px;
  font-size: 20px;
`;

//*****************************************//

const ConteudoAba = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

//*****************************************//

const Titulo = styled.h3`
  color: #6e6e6e;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

//*****************************************//

const TextoSecundario = styled.span`
  color: #bcbcbc;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

//*****************************************//


const ColunasPerfil = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  flex-wrap: wrap; /* Permite que os itens quebrem linha em telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column; /* Ajusta para coluna em telas pequenas */
  }
`;

const ColunaPerfil = styled.div`
  flex: 1;
  display: flex;
  
  align-items: center;
  padding: 20px;
  justify-content: space-between; /* Ajusta os itens para ficarem espaçados */
  @media (max-width: 768px) {
    flex-direction: column; /* Ajusta para coluna em telas pequenas */
    align-items: flex-start;
    padding: 10px; /* Ajusta padding para telas pequenas */
  }
`;

const ColunaAba = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 20px; /* Adiciona margem superior em telas pequenas */
    padding: 10px; /* Ajusta padding para telas pequenas */
  }
`;

//*****************************************//

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('NaAsa');

  return (
    <ContainerPerfil>
      <ContainerCabecalho>
        <h2 style={{ fontSize: '30px', fontWeight: '500', fontFamily: 'Montserrat Alternates' }}>Seu perfil</h2>
        <BotaoLoja onClick={() => changeSection('Loja')}>
          <BolhaImagem>
            <img src="/src/svgs/Home-svgs/Perfil/Loja.svg" alt="Icône de loja" />
          </BolhaImagem>
          Acesse nossa loja!
        </BotaoLoja>
      </ContainerCabecalho>

      <ColunasPerfil>
        <ColunaPerfil>
          <ContainerImagemPerfil>
            <BolhaImagemPerfil>
              <ImagemPerfil src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do perfil" />
            </BolhaImagemPerfil>
          </ContainerImagemPerfil>
          <InformacoesPerfil>
            <div className="name">Elisson Nadson</div>
            <div className="handle">@ElissonNad1</div>
            <div className="description">Por aqui desde dezembro de 2022</div>
            <div className="achievement-container">
              <div className="achievement-item">
              <img className="achievement-icon" src="/src/Assets/Iconesperfil/potion.svg" alt="Ícone de conquista" />
              </div>
              <div className="achievement-item">
              <span className="achievement-text">#30</span>
              </div>
            </div>
            <div className="links">
              <a href="#">Segue: 7</a>
              <a href="#">Tem 8 seguidores</a>
            </div>
          </InformacoesPerfil>
          <IconeEditar onClick={() => navigate('/Home', { state: { section: 'EditarPerfil' } })}>
            <img src="/src/svgs/Home-svgs/Perfil/Pencil.svg" alt="Icône de editar" />
          </IconeEditar>
        </ColunaPerfil>

        <ColunaAba>
          <ContainerAbas>
            <NavegacaoAbas>
              <BotaoAba active={activeTab === 'NaAsa'} onClick={() => setActiveTab('NaAsa')}>
                Na Asa
              </BotaoAba>
              <BotaoAba active={activeTab === 'NoLago'} onClick={() => setActiveTab('NoLago')}>
                No Lago
              </BotaoAba>
            </NavegacaoAbas>

            <ConteudoAba>
              {activeTab === 'NaAsa' && (
                <>
                  <Titulo>Todo grande pato começa sozinho!</Titulo>
                  <TextoSecundario>
                    Explore o lago, siga outros patos e deixe seu voo ser acompanhado.
                    Cada jornada começa com o primeiro quack!
                  </TextoSecundario>
                </>
              )}
              {activeTab === 'NoLago' && (
                <>
                  <Titulo>Explore com os outros patos!</Titulo>
                  <TextoSecundario>
                    No lago, você pode seguir patos, aprender novas habilidades e
                    compartilhar suas jornadas com amigos.
                  </TextoSecundario>
                </>
              )}
            </ConteudoAba>
          </ContainerAbas>
        </ColunaAba>
      </ColunasPerfil>

      <Conteudo>
        <ColunaEmblemas>
          <ContainerColecaoEmblemas>
            <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
            <GradeEmblemas>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/medalha1.png" alt="Introdução à Programação" />
                <TextoEmblema>Introdução à Programação</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/medalha2.png" alt="Fundamentos de Algoritmos" />
                <TextoEmblema>Fundamentos de Algoritmos</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/medalha3.png" alt="Programação Estruturada" />
                <TextoEmblema>Programação Estruturada</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/troveu.png" alt="Estruturas de Dados" />
                <TextoEmblema>Estruturas de Dados</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/experiencia.png" alt="Desenvolvimento Web" />
                <TextoEmblema>Desenvolvimento Web</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/api.png" alt="Desenvolvimento de APIs" />
                <TextoEmblema>Desenvolvimento de APIs</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/devops.png" alt="DevOps" />
                <TextoEmblema>DevOps</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src="/src/Assets/Iconesperfil/database.png" alt="Banco de Dados" />
                <TextoEmblema>Banco de Dados</TextoEmblema>
              </ItemEmblema>
            </GradeEmblemas>
          </ContainerColecaoEmblemas>
        </ColunaEmblemas>

        <ColunaEstatisticas>
          <SecaoEstatisticas>
            <TituloEstatisticas>Estatísticas:</TituloEstatisticas>
            <GradeEstatisticas>
              <ItemEstatistica>
                <IconeEstatistica src="/src/Assets/Iconesperfil/fire.png" alt="Dias de investida" />
                <div>
                  <RotuloEstatistica>Dias de investida</RotuloEstatistica>
                  <ValorEstatistica>24</ValorEstatistica>
                </div>
              </ItemEstatistica>
              <ItemEstatistica>
                <IconeEstatistica src="/src/Assets/Iconesperfil/experiencia.png" alt="Nível" />
                <div>
                  <RotuloEstatistica>Nível</RotuloEstatistica>
                  <BarraProgresso>
                    <Progresso />
                  </BarraProgresso>
                </div>
              </ItemEstatistica>
              <ItemEstatistica>
                <IconeEstatistica src="/src/Assets/Iconesperfil/quest.png" alt="Desafios concluídos" />
                <div>
                  <RotuloEstatistica>Desafios concluídos</RotuloEstatistica>
                  <ValorEstatistica>24</ValorEstatistica>
                </div>
              </ItemEstatistica>
              <ItemEstatistica>
                <IconeEstatistica src="/src/Assets/Iconesperfil/lissão.png" alt="Lições completadas" />
                <div>
                  <RotuloEstatistica>Lições completadas</RotuloEstatistica>
                  <ValorEstatistica>42</ValorEstatistica>
                </div>
              </ItemEstatistica>
            </GradeEstatisticas>
          </SecaoEstatisticas>
        </ColunaEstatisticas>
      </Conteudo>
    </ContainerPerfil>
  );
};

export default Perfil;