import React, { useState } from "react";
import styled from "styled-components";
import javascriptIcon from "../../Assets/icones/javascript.svg";
import kotlinIcon from "../../Assets/icones/kotlin.svg";
import luaIcon from "../../Assets/icones/lua.svg";
import phpIcon from "../../Assets/icones/php.svg";
import typescriptIcon from "../../Assets/icones/typescript.svg";
import aiEngineerIcon from "../../Assets/icones/ai engineer.png";
import cyberSecurityIcon from "../../Assets/icones/Cyber Security.png";
import dataAnalystIcon from "../../Assets/icones/data analyst.png";
import fullStackIcon from "../../Assets/icones/FullStack.svg";
import softwareArchitectIcon from "../../Assets/icones/Software Architecture.png";
import logicProgrammingIcon from "../../Assets/iconprogramming.svg";
import tristeIcon from "../../Assets/Svg_thigas/TRISTE.svg";
import { TextField } from '@mui/material';

// Styled Components
const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;




const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
  max-width: 800px;
  border-radius: 16px;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #6a1b9a;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchBarSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 16px;
`;

const LanguageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
`;

const RoadmapCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const RoadmapImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 16px;
`;

const RoadmapName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  border-radius: 16px;
`;

const RoadmapDescription = styled.p`
  font-size: 14px;
  color: #555;
  border-radius: 16px;
`;

const NoResults = styled.div`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
`;

const SadIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

// Data for Languages
const languages = [
  { name: "JavaScript", img: javascriptIcon, description: "Linguagem popular para web." },
  { name: "Kotlin", img: kotlinIcon, description: "Linguagem moderna para desenvolvimento Android." },
  { name: "Lua", img: luaIcon, description: "Conhecida por ser leve e embutível." },
  { name: "PHP", img: phpIcon, description: "Popular para desenvolvimento web." },
  { name: "TypeScript", img: typescriptIcon, description: "JavaScript com tipagem estática." },
  // Adicione mais linguagens aqui
];

const modules = [
  { name: 'Frontend', img: '/src/svgs/Home-svgs/Frontend.svg', description: 'Desenvolvimento de interfaces de usuário.' },
  { name: 'Backend', img: '/src/svgs/Home-svgs/Backend.svg', description: 'Desenvolvimento de lógica de servidor e banco de dados.' },
  { name: 'Full Stack', img: fullStackIcon, description: 'Desenvolvimento completo de aplicações web.' },
  { name: 'DevOps', img: '/src/svgs/Home-svgs/DevOps.svg', description: 'Integração e entrega contínua.' },
  { name: 'Data Analyst', img: dataAnalystIcon, description: 'Análise e visualização de dados.' },
  { name: 'AI Engineer', img: aiEngineerIcon, description: 'Desenvolvimento de soluções de inteligência artificial.' },
  { name: 'Cyber Security', img: cyberSecurityIcon, description: 'Proteção de sistemas e dados.' },
  { name: 'Software Architect', img: softwareArchitectIcon, description: 'Design e arquitetura de software.' },
  { name: 'Lógica de Programação', img: logicProgrammingIcon, description: 'Fundamentos de lógica de programação.' },
];


const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModules = modules.filter((mod) =>
    mod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredLanguages.length > 0 || filteredModules.length > 0;

  return (
    <PageContainer>
      {/* Título */}
      <Title>Todas as Roadmaps para você dominar</Title>

      {/* Descrição */}
      <Description>
        Torne-se fluente nas linguagens de programação escolhidas completando esses roadmaps criados por nossa{" "}
        <Link href="#">incrível equipe de colaboradores</Link>.
      </Description>

      {/* Search Bar Section */}
      <SearchBarSection>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Pesquisar roadmaps"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', borderRadius: '16px' }}
        />
      </SearchBarSection>

      {/* Lista de Roadmaps */}
      {hasResults ? (
        <LanguageList>
          {filteredLanguages.map((lang) => (
            <RoadmapCard key={lang.name}>
              <RoadmapImage src={lang.img} alt={`${lang.name} logo`} />
              <RoadmapName>{lang.name}</RoadmapName>
              <RoadmapDescription>{lang.description}</RoadmapDescription>
            </RoadmapCard>
          ))}
          {filteredModules.map((mod) => (
            <RoadmapCard key={mod.name}>
              <RoadmapImage src={mod.img} alt={`${mod.name} logo`} />
              <RoadmapName>{mod.name}</RoadmapName>
              <RoadmapDescription>{mod.description}</RoadmapDescription>
            </RoadmapCard>
          ))}
        </LanguageList>
      ) : (
        <NoResults>
          <SadIcon src={tristeIcon} alt="Pato triste" />
          Nenhum resultado encontrado
        </NoResults>
      )}
    </PageContainer>
  );
};

export default Header;
