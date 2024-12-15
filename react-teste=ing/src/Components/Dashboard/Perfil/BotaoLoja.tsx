import styled from 'styled-components';
import Loja from '../../../Assets/svgs/Home-svgs/Perfil/Loja.svg';

const BotaoLojaStyled = styled.button`
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

const BolhaImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

const BotaoLoja = ({ changeSection }: { changeSection: (section: string) => void }) => (
  <BotaoLojaStyled onClick={() => changeSection('Loja')}>
    <BolhaImagem>
      <img src={Loja} alt="Icône de loja" />
    </BolhaImagem>
    Acesse nossa loja!
  </BotaoLojaStyled>
);

export default BotaoLoja;
