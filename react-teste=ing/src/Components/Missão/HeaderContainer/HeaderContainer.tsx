import React from 'react';
import { StyledSection, ContentWrapper, LeftColumn, RightColumn, ProfileImage } from './HeaderContainerStyles';
import QuoteBox from './QuoteBox/QuetBox';
import WelcomeHeader from './WelcomeHeader/WelcomeSection';

interface WelcomeSectionProps {
  userName: string;
  quoteText: string;
  quoteAuthor: string;
  imageSrc: string;
}

const HeaderContainer: React.FC<WelcomeSectionProps> = ({ userName, quoteText, quoteAuthor, imageSrc }) => {
  return (
    <StyledSection>
      <ContentWrapper>
        <LeftColumn>
          <WelcomeHeader userName={userName} />
          <QuoteBox text={quoteText} author={quoteAuthor} />
        </LeftColumn>
        <RightColumn>
          <ProfileImage src={imageSrc} alt="Profile" loading="lazy" />
        </RightColumn>
      </ContentWrapper>
    </StyledSection>
  );
};

export default HeaderContainer;