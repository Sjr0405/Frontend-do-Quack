import { Routes, Route } from 'react-router-dom'; 
import Login from '../Pages/Login/Login.tsx'; 
import EsqueciSenha from '../Pages/EsqueciSenha/EsqueciSenha.tsx'; 
import Cadastro from '../Pages/Cadastro/Cadastro.tsx';
import Home from '../Pages/Home/Home.tsx';
import Aprender from '../Components/Dashboard/Aprender/Aprender.tsx';
import Desafio from '../Components/Dashboard/Missoes/Desafio.tsx';
import Rankings from '../Components/Dashboard/Rankings/Rankings.tsx';
import FazerAtividade from '../Components/Dashboard/Missoes/Fazer Atividade/FazerAtividade.tsx';
import Perfil from '../Components/Dashboard/Perfil/Perfil.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import Quacksensei from '../Components/Dashboard/Missoes/Quacksensei.tsx';
import PerfilQuacksensei from '../Components/Dashboard/Missoes/PerfilQuacksensei.tsx';
import CodeReview from '../Components/Dashboard/Missoes/CodeReview.tsx';
import Respostas from '../Components/Dashboard/Missoes/Respostas/Respostas.tsx';
import EditarPerfil from '../Components/Dashboard/EditarPerfil/EditarPerfil.tsx';
import { AuthProvider } from '../AuthContext.tsx';
import GlobalStyles from '../Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../Styles/Themes';
import LandingPage from '../Pages/LandingPage/LandingPage.tsx';
import Trilhas from '../Pages/Trilhas/Trilhas.tsx';
import Errors from '../Pages/Errors.tsx'; 
import CentraldeAjuda from '../Pages/CentraldeAjuda.tsx'; 

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
          <Route path="/Respostas" element={
            <PrivateRoute>
              <Respostas changeSection={() => {}} />
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
          <Route path="/Trilhas" element={
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