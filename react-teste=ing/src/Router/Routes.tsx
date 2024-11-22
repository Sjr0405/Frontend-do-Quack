import { Routes, Route } from 'react-router-dom'; 
import Login from '../Pages/Login/Login'; 
import EsqueciSenha from '../Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from '../Pages/Cadastro/Cadastro';
import Home from '../Pages/Home/Home.tsx';
import Aprender from '../Components/Dashboard/Aprender.tsx';
import Desafio from '../Components/Dashboard/Desafio.tsx';
import Rankings from '../Components/Dashboard/Rankings.tsx';
import FazerAtividade from '../Components/Dashboard/FazerAtividade.tsx';
import Perfil from '../Components/Dashboard/TeladePefil/Perfil.tsx';
import PrivateRoute from './PrivateRoute';
import Quacksensei from '../Components/Dashboard/Quacksensei.tsx';
import PerfilQuacksensei from '../Components/Dashboard/PerfilQuacksensei.tsx';
import CodeReview from '../Components/Dashboard/CodeReview.tsx';
import EditarPerfil from '../Components/Dashboard/EditarPerfil/EditarPerfil.tsx';
import { AuthProvider } from '../AuthContext.tsx';
import GlobalStyles from '../Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../Styles/Themes';
import LandingPage from '../Pages/LandingPage/LandingPage';
import Trilhas from '../Pages/Trilhas/Trilhas';
import Errors from '../Pages/Errors'; // Importando o componente Errors
import CentraldeAjuda from '../Pages/CentraldeAjuda.tsx'; // Importando o componente CentraldeAjuda

export { MainRoutes }

function MainRoutes() {
  return (
    <AuthProvider>
      <ThemeProvider theme={light || dark}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
          <Route path="/Home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/FazerAtividade" element={
            <PrivateRoute>
              <FazerAtividade changeSection={() => {}} />
            </PrivateRoute>
          } />
          <Route path="/Aprender" element={
            <PrivateRoute>
              <Aprender changeSection={() => {}} />
            </PrivateRoute>
          } />
          <Route path="/Desafio" element={
            <PrivateRoute>
              <Desafio changeSection={() => {}} />
            </PrivateRoute>
          } />
          <Route path="/Quacksensei" element={
            <PrivateRoute>
              <Quacksensei changeSection={() => {}} 
                setSelectedProfessor={() => console.log('setSelectedProfessor called')} />
            </PrivateRoute>
          } />
          <Route path="/PerfilQuacksensei" element={
            <PrivateRoute>
              <PerfilQuacksensei 
                changeSection={() => {}}
                selectedProfessor={{ name: "name", email:"email", ensina:"ensina", linguagem:"linguagem", photo:"photo" }} 
                messages={{}}
                setMessages={() => console.log('setMessages called')} 
              />
            </PrivateRoute>
          } />
          <Route path="/CodeReview" element={
            <PrivateRoute>
              <CodeReview 
                changeSection={() => {}} 
                submittedCode="código submetido" 
              />
            </PrivateRoute>
          } />
          <Route path="/Rankings" element={
            <PrivateRoute>
              <Rankings />
            </PrivateRoute>
          } />
          <Route path="/Perfil" element={
            <PrivateRoute>
              <Perfil changeSection={() => {}} />
            </PrivateRoute>
          } />
          <Route path="/EditarPerfil" element={
            <PrivateRoute>
              <EditarPerfil />
            </PrivateRoute>
          } />
          <Route path="/Backend_Roadmap" element={
            <PrivateRoute> 
              <Trilhas />
            </PrivateRoute>
          } />
          <Route path="/CentraldeAjuda" element={
            <PrivateRoute>
              <CentraldeAjuda />
            </PrivateRoute>
          } />
          <Route path="*" element={<Errors />} /> {/* Adicionando a rota para a página de erros */}
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MainRoutes;