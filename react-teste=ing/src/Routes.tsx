import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home.tsx';
import Aprender from './Components/Dashboard/Aprender.tsx';
import Desafio from './Components/Dashboard/Desafio.tsx';
import Rankings from './Components/Dashboard/Rankings.tsx';
import FazerAtividade from './Components/Dashboard/FazerAtividade.tsx';
import Quacksensei from './Components/Dashboard/Quacksensei.tsx';
import PerfilQuacksensei from './Components/Dashboard/PerfilQuacksensei.tsx';
import Perfil from './Components/Dashboard/Perfil.tsx';
import CodeReview from './Components/Dashboard/CodeReview.tsx';
import EditarPerfil from './Components/Dashboard/EditarPerfil.tsx';
import PrivateRoute from './Components/Dashboard/PrivateRoute.tsx';
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
        <Route path="/Login" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />

        <Route path="/Home" element={ 
          <PrivateRoute>
          <Home />
        </PrivateRoute>
          } 
        />

        <Route path="/Aprender" element={
          <PrivateRoute>
            <Aprender changeSection={(section: string) => console.log(section)} />
          </PrivateRoute>
        } />

        <Route path="/FazerAtividade" element={
          <PrivateRoute>
            <FazerAtividade changeSection={(section: string) => console.log(section)} />
          </PrivateRoute>
        } />

        <Route path="/Desafio" element={
          <PrivateRoute>
            <Desafio changeSection={(section: string) => console.log(section)} />
          </PrivateRoute>
        } />

        <Route path="/Quacksensei" element={
          <PrivateRoute>
            <Quacksensei changeSection={(section: string) => console.log(section)} 
              setSelectedProfessor={() => console.log('setSelectedProfessor called')} />
          </PrivateRoute>
        } />

        <Route path="/PerfilQuacksensei" element={
          <PrivateRoute>
            <PerfilQuacksensei 
              changeSection={(section : string) => console.log(section)}
              selectedProfessor={{ name: "name", email:"email", ensina:"ensina", linguagem:"linguagem", photo:"photo" }} 
              messages={{ messages: [{ message: "message" }] }} 
              setMessages={() => console.log('setMessages called')} 
            />
          </PrivateRoute>
        } />

        <Route path="/CodeReview" element={
          <PrivateRoute>
            <CodeReview 
              changeSection={(section: string) => console.log(section)} 
              submittedCode="código submetido" 
            />
          </PrivateRoute>
        } />

        <Route path="/Rankings" element={
          <PrivateRoute>
            <Rankings />__
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