import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import CadastroNovo from './Pages/Cadastro/cadastronovo.tsx'; // Importando o componente CadastroNovo
import Home from './Pages/Home/Home.tsx';
import Aprender from './Components/Aprender.tsx';
import Atividade from './Components/Desafio.tsx';
import Rankings from './Components/Rankings.tsx';
import FazerAtividade from './Components/FazerAtividade.tsx';
import Perfil from './Components/Perfil.tsx';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil.tsx';
import PrivateRoute from './Components/PrivateRoute.tsx';
import { AuthProvider } from './AuthContext.tsx';
import GlobalStyles from './Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes';
import LandingPage from './Pages/LandingPage/LandingPage'; // Importando o componente LandingPage
import Trilhas from './Pages/Trilhas/Trilhas';

export { MainRoutes }

function MainRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <div> 
          <GlobalStyles /> 
          <ThemeProvider theme={light|| dark}/> 
          <LandingPage /> 

          </div>} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/CadastroNovo" element={<CadastroNovo />} /> {/* Adicionando a rota para CadastroNovo */}
        <Route path="/Login" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />

        <Route path="/Home" element={ 
          <PrivateRoute>
          <Home />
        </PrivateRoute>
          } 
        />

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

      </Routes>
    </AuthProvider>
  );
}