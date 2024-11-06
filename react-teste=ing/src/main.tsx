import { createRoot } from 'react-dom/client'
import { MainRoutes } from '../src/Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import './Styles/main.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
)


