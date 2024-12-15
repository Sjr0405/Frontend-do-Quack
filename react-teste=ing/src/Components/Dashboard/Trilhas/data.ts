import javascriptIcon from "../../Assets/icones/javascript.svg";
import kotlinIcon from "../../Assets/icones/kotlin.svg";
import luaIcon from "../../Assets/icones/lua.svg";
import phpIcon from "../../Assets/icones/php.svg";
import typescriptIcon from "../../Assets/icones/typescript.svg";
import backend from '../../Assets/svgs/Home-svgs/Backend.svg';
import logicProgrammingIcon from "../../Assets/iconprogramming.svg";
import fullStackIcon from "../../Assets/icones/FullStack.svg";
import devops from '../../Assets/svgs/Home-svgs/DevOps.svg';
import frontend from '../../Assets/svgs/Home-svgs/Frontend.svg';
import dataAnalystIcon from "../../Assets/icones/data analyst.png";
import cyberSecurityIcon from "../../Assets/icones/Cyber Security.png";
import aiEngineerIcon from "../../Assets/icones/ai engineer.png";
import softwareArchitectIcon from "../../Assets/icones/Software Architecture.png";

export const languages = [
  { name: "JavaScript", img: javascriptIcon, description: "Linguagem popular para web." },
  { name: "Kotlin", img: kotlinIcon, description: "Linguagem moderna para desenvolvimento Android." },
  { name: "Lua", img: luaIcon, description: "Conhecida por ser leve e embutível." },
  { name: "PHP", img: phpIcon, description: "Popular para desenvolvimento web." },
  { name: "TypeScript", img: typescriptIcon, description: "JavaScript com tipagem estática." },
  // Adicione mais linguagens aqui
];

export const modules = [
  { name: 'Lógica de Programação', img: logicProgrammingIcon, description: 'Fundamentos de lógica de programação.' },
  { name: 'Frontend', img: frontend, description: 'Desenvolvimento de interfaces de usuário.' },
  { name: 'Backend', img: backend, description: 'Desenvolvimento de lógica de servidor e banco de dados.' },
  { name: 'Full Stack', img: fullStackIcon, description: 'Desenvolvimento completo de aplicações web.' },
  { name: 'DevOps', img: devops, description: 'Integração e entrega contínua.' },
  { name: 'Data Analyst', img: dataAnalystIcon, description: 'Análise e visualização de dados.' },
  { name: 'AI Engineer', img: aiEngineerIcon, description: 'Desenvolvimento de soluções de inteligência artificial.' },
  { name: 'Cyber Security', img: cyberSecurityIcon, description: 'Proteção de sistemas e dados.' },
  { name: 'Software Architect', img: softwareArchitectIcon, description: 'Design e arquitetura de software.' },
];
