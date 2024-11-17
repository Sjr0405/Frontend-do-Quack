import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home.tsx';
import Aprender from './Components/Dashboard/Inicio.tsx';
import Atividade from './Components/Dashboard/Desafio.tsx';
import Rankings from './Components/Dashboard/Rankings.tsx';
import FazerAtividade from './Components/Dashboard/FazerAtividade.tsx';
import Perfil from './Components/Dashboard/TeladePefil/Perfil.tsx';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil.tsx';
import PrivateRoute from './Components/Dashboard/PrivateRoute';
import { AuthProvider } from './AuthContext.tsx';
import GlobalStyles from './Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes';
import LandingPage from './Pages/LandingPage/LandingPage';
import Trilhas from './Pages/Trilhas/Trilhas';
import Errors from './Pages/Errors'; // Importando o componente Errors
import CentraldeAjuda from './Pages/CentraldeAjuda'; // Importando o componente CentraldeAjuda

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
              <FazerAtividade changeSection={(section: string) => console.log(section)} />
            </PrivateRoute>
          } />
          <Route path="/Aprender" element={
            <PrivateRoute>
              <Aprender changeSection={(section: string) => console.log(section)} />
            </PrivateRoute>
          } />
          <Route path="/Atividade" element={
            <PrivateRoute>
              <Atividade changeSection={(section: string) => console.log(section)} />
            </PrivateRoute>
          } />
          <Route path="/Rankings" element={
            <PrivateRoute>
              <Rankings />
            </PrivateRoute>
          } />
          <Route path="/Perfil" element={
            <PrivateRoute>
              <Perfil changeSection={(section: string) => console.log(section)} />
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