import React, { Suspense, lazy } from 'react';
import { PageContainer, HeroContainer } from './LandingPageStyles';
import ScrollToTop from '../../Components/Londpage/Utils/ScrollToTop';
import Loading from '../../Components/Londpage/Utils/Loading';
import Wave from '../../Components/Londpage/Utils/Wave';

// Lazy loading dos componentes
const About = lazy(() => import('../../Components/Londpage/About/About'));
const CallToAction = lazy(() => import('../../Components/Londpage/CallToAction/CallToAction'));
const Footer = lazy(() => import('../../Components/Londpage/Footer/Footer'));
const Showcase = lazy(() => import('../../Components/Londpage/Showcase/Showcase'));
const Hero = lazy(() => import('../../Components/Londpage/Hero/Hero'));
const Team = lazy(() => import('../../Components/Londpage/Team/Team'));
const Faq = lazy(() => import('../../Components/Londpage/Faq/Faq'));

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
 
        <Hero />
        <Wave topColor="#dbd5e0" bottomColor="#f9f9f9" />
        <About />
        <Wave topColor="#1D1534" bottomColor="#dbd5e0" />
        <Showcase />
        <Wave topColor="#FFFFFF" bottomColor="#1D1534" />
        <Team />
        <Wave topColor="#FF7300" bottomColor="#FFFFFF" />
        <CallToAction />
        <Wave topColor="#292929" bottomColor="#FF7300" />
        <Faq />  
        <Footer />
      </Suspense>
    </PageContainer>
  );
};

export default LandingPage;