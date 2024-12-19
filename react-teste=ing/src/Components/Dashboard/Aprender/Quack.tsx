import { QuackContainer, ProfileSection, ProfileImage, ProfileInfo, ProfileName, ProfileSubtitle, Divider, WelcomeSection, WelcomeImage, WelcomeTextContainer, WelcomeTitle, WelcomeText } from './AprenderStyles';
import Falando from '../../../Assets/Svg_thigas/FALANDO.svg';

interface User {
  imagePath?: string;
  username?: string;
  name?: string;
  surname?: string;
}

const Quack = ({ user }: { user: User }) => {
  // Função para renderizar o componente Quack com informações do usuário
  return (
    <QuackContainer>
      <ProfileSection>
        <ProfileImage src={user?.imagePath || "https://via.placeholder.com/64"} alt="Foto de Perfil" />
        <ProfileInfo>
          <ProfileName>{user?.name} {user?.surname}</ProfileName>
          <ProfileSubtitle>@{user?.username || "username"}</ProfileSubtitle>
        </ProfileInfo>
      </ProfileSection>
      <Divider />
      <WelcomeSection>
        <WelcomeImage src={Falando} alt="Imagem de boas-vindas" />
        <WelcomeTextContainer>
          <WelcomeTitle>Bem-vindo de volta, {user?.name}!</WelcomeTitle>
          <WelcomeText>
            Explore caminhos de aprendizado estruturados para impulsionar sua jornada como desenvolvedor.
          </WelcomeText>
        </WelcomeTextContainer>
      </WelcomeSection>
    </QuackContainer>
  );
};

export default Quack;
