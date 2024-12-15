import styled from 'styled-components';

// Styled Components
export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  box-sizing: border-box; /* Inclui padding e border no tamanho total */
  background-color: #f7f7f7; /* Adiciona fundo cinza claro */
  overflow-y: auto; /* Adiciona scroll vertical */
  overflow-x: hidden; /* Oculta scroll horizontal */
  width: 100%; /* Garante que o Container ocupe toda a largura disponível */
  max-width: 1200px; /* Define uma largura máxima */
  padding: 20px; /* Adiciona padding interno */
  margin: 0 auto; /* Centraliza o Container horizontalmente */

  @media (max-width: 768px) {
    padding: 20px; /* Adiciona padding interno */
  }
`;

export const QuackContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  margin: 10px auto; /* Diminui o espaçamento */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: #2d3748;
`;

export const ProfileSubtitle = styled.span`
  font-size: 16px;
  color: #718096;
`;

export const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 20px;
`;

export const WelcomeImage = styled.img`
  width: 30%;
  max-width: 100px;
  margin-right: 20px;
  transform: scaleX(-1); /* Inverte a imagem horizontalmente */
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)); /* Adiciona sombra */
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WelcomeTextContainer = styled.div`
  flex: 1;
`;

export const WelcomeTitle = styled.h2`
  font-size: 28px;
  color: #2d3748;
  margin: 0;
  font-weight: bold;
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin-top: 12px;
  line-height: 1.6;

  strong {
    color: #2b6cb0;
    font-weight: bold;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column; /* Alinha itens em coluna */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  width: 100%; /* Garante que o MainContent ocupe toda a largura disponível */
  max-width: 1200px; /* Define uma largura máxima */
  padding: 20px; /* Adiciona padding interno */
  box-sizing: border-box; /* Inclui padding e border no tamanho total */
  border-radius: 8px; /* Adiciona bordas arredondadas */
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite que os itens quebrem linha */
  width: 100%; /* Garante que o header ocupe toda a largura disponível */
  max-width: 1200px; /* Define uma largura máxima */
  box-sizing: border-box; /* Inclui padding e border no tamanho total */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  padding: 20px; /* Adiciona padding interno */
  background-color: #fff; /* Adiciona fundo branco */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
  border-radius: 8px; /* Adiciona bordas arredondadas */
  margin-bottom: 20px; /* Adiciona margem inferior */
  
  
  @media (max-width: 768px) {
    flex-direction: column; /* Alinha itens em coluna em telas menores */
    align-items: center; /* Centraliza o conteúdo horizontalmente em telas menores */
  }
`;

export const NotificationIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;  
  transition: color 0.3s ease, transform 0.3s ease; 
  margin-right: 40px;

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho do ícone */
  }
`;

export const NotificationDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  
`;

export const Titulo = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-top: 20px;
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const VerTodosLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-family: 'Lilita One', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

export const ModuloCard = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  

  img {
    margin-right: 15px;
    background-color: #fff;
    padding: 10px; /* Reduzir padding */
    border-radius: 50%;
    width: 50px; /* Definir largura */
    height: 50px; /* Definir altura */
  }

  div {
    width: 100%;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: 'Lilita One', sans-serif;
    text-align: left;
    font-size: 24px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    font-family: 'Lilita One', sans-serif;
    text-align: right;
    color: #888;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #888;
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: 20px;
  }

  &:hover {
    transform: translateY(-5px); /* Adiciona um efeito de elevação */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra mais forte */
  }
`;

export interface ProgressBarProps {
    progress: string;
    color: string;
  }

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 15px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;

  div {
    width: ${({ progress }) => progress || '0%'};
    height: 100%;
    background-color: ${({ color }) => color || '#000'};
    border-radius: 5px;
  }
`;

export const PuzzleButton = styled.button`
  display: flex;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 20px;
  background-color: #6c5ce7;
  
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  p {
    margin: 0;
    font-family: 'Lilita One', sans-serif;
    font-weight: 300;
    font-size: 20px;
    padding: 10px 10px;
  }

  &:hover {
    background-color: #4834d4;
    color: white;
    transform: translateY(-5px); /* Adiciona um efeito de elevação */
  }
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatusItem = styled.div`
  position: relative; /* Necessário para posicionar o balão */
  display: flex;
  align-items: center;
  margin: 0 40px; /* Adiciona margem horizontal para espaçamento */
  transition: transform 0.3s ease; /* Adiciona transição para o efeito de hover */

  img {
    margin-right: 8px;
    width: 24px; /* Ajusta a largura */
    height: 24px; /* Ajusta a altura */
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho do ícone */
  }
`;

export const Tooltip = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 50px; /* Ajusta a posição para aparecer mais abaixo do ícone */
  left: 50%; /* Ajusta a posição para aparecer mais à esquerda */
  transform: translateX(-50%);
  
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
  border: 1px solid #ddd; /* Adiciona contorno */
  white-space: nowrap; /* Impede quebra de linha */
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 9999; /* Garante que o tooltip fique por cima de tudo */
  max-width: 90vw; /* Garante que o tooltip não encoste na lateral da página */
  box-sizing: border-box; /* Inclui padding e border no tamanho total */

  img {
    margin-bottom: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px; /* Ajusta a posição da seta */
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }

  &:hover {
    transform: translateY(-5px); /* Adiciona um efeito de elevação */
  }
`;

export const DaysList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  li {
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-bottom: 5px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o SearchBar */
  padding: 0 20px;
`;

export const NoRoadmapMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%; /* Mesma largura do contêiner pai */
  max-width: 1200px; /* Define uma largura máxima */

  p {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    opacity: 0.7; /* Abaixa a opacidade para 70% */
  }
`;

export const AddRoadmapButton = styled.button`
  padding: 12px 24px;
  background-color: #ff9800; /* Laranja */
  color: #fff;
  border: 2px solid #ff9800; /* Contorno laranja mais escuro */
  border-radius: 24px; /* Mais arredondado */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */

  &:hover {
    background-color: #ff9800; /* Laranja mais escuro */
    transform: translateY(-3px); /* Efeito de elevação */
  }

  &:active {
    transform: translateY(1px); /* Efeito de clique */
  }
`;
