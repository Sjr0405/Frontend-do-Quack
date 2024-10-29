import React, { Suspense, lazy } from 'react';
import { PageContainer } from './LandingPageStyles';
import ScrollToTop from '../../Components/Londpage/Utils/ScrollToTop';
import Loading from '../../Components/Londpage/Utils/Loading';
import Wave from '../../Components/Londpage/Utils/Wave';

// Lazy loading dos componentes
const About = lazy(() => import('../../Components/Londpage/About/About'));
const CallToAction = lazy(() => import('../../Components/Londpage/CallToAction/CallToAction'));
const Footer = lazy(() => import('../../Components/Londpage/Footer/Footer'));
const Navigation = lazy(() => import('../../Components/Londpage/Navigation/Navigation'));
const Showcase = lazy(() => import('../../Components/Londpage/Showcase/Showcase'));
const Hero = lazy(() => import('../../Components/Londpage/Hero/Hero'));
const Join = lazy(() => import('../../Components/Londpage/Join/Join'));
const Team = lazy(() => import('../../Components/Londpage/Team/Team'));
const Faq = lazy(() => import('../../Components/Londpage/Faq/Faq'));

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Hero />
        <Wave topColor="#F7F5F9" bottomColor="#FFFFFF" />
        <About />
        <Wave topColor="#1D1534" bottomColor="#F7F5F9" />
        <Showcase />
        <Wave topColor="#FF7300" bottomColor="#1D1534" />
        <CallToAction />
        <Wave topColor="#FFFFFF" bottomColor="#FF7300" />
        <Team />
        <Wave topColor="#292929" bottomColor="#FFFFFF" />
        <Faq />
        <Wave topColor="#1D1534" bottomColor="#292929" />
        <Join />
        <Footer />
      </Suspense>
    </PageContainer>
  );
};

export default LandingPage;