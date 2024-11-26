import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContainerPerfil,
  ContainerCabecalho,
  BotaoLoja,
  BolhaImagem,
  ColunasPerfil,
  ColunaPerfil,
  ContainerImagemPerfil,
  BolhaImagemPerfil,
  ImagemPerfil,
  InformacoesPerfil,
  IconeEditar,
  ColunaAba,
  ContainerAbas,
  NavegacaoAbas,
  BotaoAba,
  ConteudoAba,
  Titulo,
  TextoSecundario,
  Conteudo,
  ColunaEmblemas,
  ContainerColecaoEmblemas,
  TituloEmblemas,
  GradeEmblemas,
  ItemEmblema,
  ImagemEmblema,
  TextoEmblema,
  ColunaEstatisticas,
  SecaoEstatisticas,
  TituloEstatisticas,
  GradeEstatisticas,
  ItemEstatistica,
  IconeEstatistica,
  RotuloEstatistica,
  ValorEstatistica,
  BarraProgresso,
  Progresso,
} from './PerfilStyles';
import { useAuth } from '../../../AuthContext';

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const { user, fetchUserProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('NaAsa');

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.id);
    }
  }, [user, fetchUserProfile]);

  return (
    <ContainerPerfil>
      <ContainerCabecalho>
        <h2 style={{ fontSize: '30px', fontWeight: '500', fontFamily: 'Montserrat Alternates', textAlign: 'center', color: 'purple' }}>Seu perfil</h2>
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
              <ImagemPerfil src={user?.imagePath || 'https://randomuser.me/api/portraits/men/1.jpg'} alt="Foto do perfil" />
            </BolhaImagemPerfil>
          </ContainerImagemPerfil>
            <InformacoesPerfil>
            <div className="name">{user?.name}</div>
            <div className="handle">@{user?.username}</div>
            <div className="description">
              Por aqui desde {user?.registerAt ? new Date(user.registerAt).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) : 'Data desconhecida'}
            </div>
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