import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login.tsx'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Dashboard/Home.tsx';
import { AuthProvider } from './AuthContext.tsx';
import GlobalStyles from './Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes.tsx';
export { MainRoutes }

//Landpage Imports//
import Navigation from "./Pages/Home/Navigation.tsx"
import Landpage from "./Pages/Home/landpage/Landpage.tsx"
import About from "./Pages/Home/landpage/About.tsx"
import Roadmap from "./Pages/Home/landpage/Roadmap.tsx"
import Showcase from "./Pages/Home/landpage/Showcase.tsx"
// import Team from "./Pages/Home/home/Team.tsx"
import Faq from "./Pages/Home/landpage/Faq.tsx"
import Footer from "./Pages/Home/Footer.tsx"
//Landpage imports// 


function MainRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <div>
          <GlobalStyles /> 
          <ThemeProvider theme={light|| dark}/> 
          <Navigation /> 
          <Landpage /> 
          <About /> 
          <Roadmap /> 
          <Showcase /> 
          {/* <Team />  */}
          <Faq /> 
          <Footer /> 
          </div>} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </AuthProvider>


    
  );
}


