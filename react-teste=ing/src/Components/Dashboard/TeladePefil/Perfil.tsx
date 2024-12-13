import { useState, useEffect, useMemo } from 'react';
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
  Seguindo,
  Seguidores,
  VerTodosLink,
  Detalhes
} from './PerfilStyles';
import Modal from './Modal.tsx';
import { useAuth } from '../../../AuthContext';
import Loja from '../../../Assets/svgs/Home-svgs/Perfil/Loja.svg';
import podium from '../../../Assets/Iconesperfil/podium.svg';
import lapis from '../../../Assets/svgs/Home-svgs/Perfil/Pencil.svg';

// imports temporarios
import medalha1 from '../../../Assets/Iconesperfil/medalha1.png';
import medalha2 from '../../../Assets/Iconesperfil/medalha2.png';
import medalha3 from '../../../Assets/Iconesperfil/medalha3.png';
import medalha4 from '../../../Assets/Iconesperfil/troveu.png';
import medalha5 from '../../../Assets/Iconesperfil/experiencia.png';
import medalha6 from '../../../Assets/Iconesperfil/api.png';
import medalha7 from '../../../Assets/Iconesperfil/devops.png';
import medalha8 from '../../../Assets/Iconesperfil/database.png';
import Estatistica1 from '../../../Assets/Iconesperfil/fire.png';
import Estatistica2 from '../../../Assets/Iconesperfil/experiencia.png';
import Estatistica3 from '../../../Assets/Iconesperfil/quest.png';
import Estatistica4 from '../../../Assets/Iconesperfil/lissão.png';


type Achievement = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  const { user, fetchUserProfile, fetchUserAchievementsById } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [activeTab, setActiveTab] = useState('Seguindo');

  // Dados seguros do usuário
  const safeUser = useMemo(() => {
    if (user) {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        imagePath: user.imagePath,
        registerOn: user.registerOn
      };
    }
    return null;
  }, [user]);

  useEffect(() => {
    if (safeUser) {
      fetchUserProfile(safeUser.id);
      fetchUserAchievementsById(safeUser.id);
    } else {
      setAchievements([]);
    }
  }, [safeUser, fetchUserProfile, fetchUserAchievementsById]);

  const followingData = [
    { name: 'Raphaela Solia', xp: 38783, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Samuel dos Santos Silva', xp: 26262, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'João Gabriel', xp: 25195, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Maria Josefina', xp: 20000, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Ana Rosa', xp: 15000, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Pedro Pascal', xp: 10000, avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Jão Silva', xp: 5000, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  return (
    <ContainerPerfil>
      <ContainerCabecalho>
        <h2 style={{ fontSize: '30px', fontWeight: '500', fontFamily: 'Montserrat Alternates', textAlign: 'center', color: 'purple' }}>
          Seu perfil
        </h2>
        <BotaoLoja onClick={() => changeSection('Loja')}>
          <BolhaImagem>
            <img src={Loja} alt="Icône de loja" />
          </BolhaImagem>
          Acesse nossa loja!
        </BotaoLoja>
      </ContainerCabecalho>

      <ColunasPerfil>
        <ColunaPerfil>
          <ContainerImagemPerfil>
            <BolhaImagemPerfil>
              <ImagemPerfil
                src={safeUser?.imagePath || 'https://randomuser.me/api/portraits/men/1.jpg'}
                alt="Foto do perfil"
              />
            </BolhaImagemPerfil>
          </ContainerImagemPerfil>
          <InformacoesPerfil>
            <div className="name">{safeUser?.name}</div>
            <div className="handle">@{safeUser?.username}</div>
            <div className="description">
            </div>
            <div className="achievement-container">
              <div className="achievement-item">
                <img className="achievement-icon" src={podium} alt="Ícone de conquista" />
              <div className="achievement-item">
                <span className="achievement-text">#30</span>
                </div>
              </div>
            </div>
            
          </InformacoesPerfil>
          <IconeEditar onClick={() => navigate('/Home', { state: { section: 'EditarPerfil' } })}>
            <img src={lapis} alt="Ícone de editar" />
          </IconeEditar>
        </ColunaPerfil>

        <ColunaAba>
        <ContainerAbas>
            <NavegacaoAbas>
              <BotaoAba style={{ fontFamily: 'Montserrat Alternates' }} active={activeTab === 'Seguindo'} onClick={() => setActiveTab('Seguindo')}>
                Seguindo
              </BotaoAba>
              <BotaoAba style={{ fontFamily: 'Montserrat Alternates' }} active={activeTab === 'Seguidores'} onClick={() => setActiveTab('Seguidores')}>
                Seguidores
              </BotaoAba>
            </NavegacaoAbas>

            <ConteudoAba>
              {activeTab === 'Seguindo' && (
                <>
                  <Seguindo>
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Random user" />
                    <Titulo>Raphaela Solia</Titulo>
                    <TextoSecundario>38783 XP</TextoSecundario>
                  </Seguindo>
                  <Seguindo>
                    <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="Random user" />
                    <Detalhes>
                      <Titulo>Elisson Nadson </Titulo>
                      <TextoSecundario>27131 XP</TextoSecundario>
                    </Detalhes>
                  </Seguindo>
                </>
              )}
              {activeTab === 'Seguidores' && (
              <>
                <Seguidores>
                  <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="Random user" />
                  <Titulo>Samuel dos Santos Silva</Titulo>
                  <TextoSecundario>27131 XP</TextoSecundario>
                </Seguidores>
              </>
              )}
            </ConteudoAba>
            <VerTodosLink >
              <a onClick={() => setModalOpen(true)}>Ver todos</a>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} data={followingData} />
            </VerTodosLink>
          </ContainerAbas>
            <div style={{ 
              fontFamily: 'Montserrat Alternates', 
              fontSize: '16px', 
              marginTop: '20px', 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: '700' 
            }}>
              <a style={{ marginRight: '10px' }} href="#">Seguindo 10</a>
              <a style={{ marginLeft: '10px' }} href="#">Seguidores 10</a>
            </div>
        </ColunaAba>
      </ColunasPerfil>

      <Conteudo>
        <ColunaEmblemas>
          <ContainerColecaoEmblemas>
            <TituloEmblemas>Coleção de emblemas:</TituloEmblemas>
            <GradeEmblemas>
              <ItemEmblema>
                {achievements.map((achievement) => (
                  <div key={achievement.id}>{achievement.name}</div>
                ))}
                <ImagemEmblema src={medalha1} alt="Introdução à Programação" />
                <TextoEmblema>Introdução à Programação</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src={medalha2} alt={fetchUserAchievementsById.name} />
                <TextoEmblema>{fetchUserAchievementsById.name}</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src={medalha3} alt="Programação Estruturada" />
                <TextoEmblema>Programação Estruturada</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src={medalha4} alt="Estruturas de Dados" />
                <TextoEmblema>Estruturas de Dados</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src={medalha5} alt="Desenvolvimento Web" />
                <TextoEmblema>Desenvolvimento Web</TextoEmblema>
              </ItemEmblema>
              <ItemEmblema>
                <ImagemEmblema src={medalha6} alt="Desenvolvimento de APIs" />
                <TextoEmblema>Desenvolvimento de APIs</TextoEmblema>
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
        </ColunaEmblemas>

        <ColunaEstatisticas>
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
        </ColunaEstatisticas>
      </Conteudo>
    </ContainerPerfil>
  );
};

export default Perfil;
