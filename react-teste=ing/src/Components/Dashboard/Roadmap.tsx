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
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

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

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: ${({ active }) => (active ? '#6a1b9a' : '#ccc')};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6a1b9a;
  }
`;

const LanguageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
`;

const RoadmapCard = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor || '#fff'};
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

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const PopupTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const PopupDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #6a1b9a;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a148c;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #999;
  }
`;

// Data for Languages
const languages = [
  { name: "JavaScript", img: javascriptIcon, description: "Linguagem popular para web.", bgColor: "#FFEB99" },
  { name: "Kotlin", img: kotlinIcon, description: "Linguagem moderna para desenvolvimento Android.", bgColor: "#D9B3FF" },
  { name: "Lua", img: luaIcon, description: "Conhecida por ser leve e embutível.", bgColor: "#CCE0FF" },
  { name: "PHP", img: phpIcon, description: "Popular para desenvolvimento web.", bgColor: "#CCFFCC" },
  { name: "TypeScript", img: typescriptIcon, description: "JavaScript com tipagem estática.", bgColor: "#FFD700" },
  // Adicione mais linguagens aqui
];

const modules = [
  { name: 'Lógica de Programação', img: logicProgrammingIcon, description: 'Fundamentos de lógica de programação.', bgColor: "#CCFFCC" },
  { name: 'Frontend', img: '/src/svgs/Home-svgs/Frontend.svg', description: 'Desenvolvimento de interfaces de usuário.', bgColor: "#FFEB99" },
  { name: 'Backend', img: '/src/svgs/Home-svgs/Backend.svg', description: 'Desenvolvimento de lógica de servidor e banco de dados.', bgColor: "#D9B3FF" },
  { name: 'Full Stack', img: fullStackIcon, description: 'Desenvolvimento completo de aplicações web.', bgColor: "#CCE0FF" },
  { name: 'DevOps', img: '/src/svgs/Home-svgs/DevOps.svg', description: 'Integração e entrega contínua.', bgColor: "#CCFFCC" },
  { name: 'Data Analyst', img: dataAnalystIcon, description: 'Análise e visualização de dados.', bgColor: "#FFD700" },
  { name: 'AI Engineer', img: aiEngineerIcon, description: 'Desenvolvimento de soluções de inteligência artificial.', bgColor: "#FFEB99" },
  { name: 'Cyber Security', img: cyberSecurityIcon, description: 'Proteção de sistemas e dados.', bgColor: "#D9B3FF" },
  { name: 'Software Architect', img: softwareArchitectIcon, description: 'Design e arquitetura de software.', bgColor: "#CCE0FF" },
];

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "languages" | "modules">("all");
  const [selectedRoadmap, setSelectedRoadmap] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModules = modules.filter((mod) =>
    mod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredLanguages.length > 0 || filteredModules.length > 0;

  const handleFilterChange = (newFilter: "all" | "languages" | "modules") => {
    setFilter(newFilter);
  };

  const handleCardClick = (roadmap: any) => {
    setSelectedRoadmap(roadmap);
  };

  const handleClosePopup = () => {
    setSelectedRoadmap(null);
  };

  const handleRegister = () => {
    // Adicionar o item na lista do Aprender.tsx
    const newModule = {
      nome: selectedRoadmap.name,
      aulasCompletas: 0,
      totalAulas: 0,
      corBarra: '#FFD700',
      bgColor: selectedRoadmap.bgColor,
      rota: '/Backend_Roadmap',
      icon: selectedRoadmap.img,
    };
    // Atualizar o estado da localização com o novo módulo
    navigate(location.pathname, { state: { newModule } });
    Swal.fire({
      title: 'Sucesso!',
      text: 'Cadastrado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    handleClosePopup();
  };

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

      {/* Filter Section */}
      <FilterSection>
        <FilterButton active={filter === "all"} onClick={() => handleFilterChange("all")}>
          Todos
        </FilterButton>
        <FilterButton active={filter === "languages"} onClick={() => handleFilterChange("languages")}>
          Linguagens
        </FilterButton>
        <FilterButton active={filter === "modules"} onClick={() => handleFilterChange("modules")}>
          Módulos
        </FilterButton>
      </FilterSection>

      {/* Lista de Roadmaps */}
      {hasResults ? (
        <LanguageList>
          {(filter === "all" || filter === "languages") && filteredLanguages.map((lang) => (
            <RoadmapCard key={lang.name} bgColor={lang.bgColor} onClick={() => handleCardClick(lang)}>
              <RoadmapImage src={lang.img} alt={`${lang.name} logo`} />
              <RoadmapName>{lang.name}</RoadmapName>
              <RoadmapDescription>{lang.description}</RoadmapDescription>
            </RoadmapCard>
          ))}
          {(filter === "all" || filter === "modules") && filteredModules.map((mod) => (
            <RoadmapCard key={mod.name} bgColor={mod.bgColor} onClick={() => handleCardClick(mod)}>
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

      {/* Popup */}
      {selectedRoadmap && (
        <PopupOverlay>
          <PopupContent>
            <RoadmapImage src={selectedRoadmap.img} alt={`${selectedRoadmap.name} logo`} />
            <PopupTitle>{selectedRoadmap.name}</PopupTitle>
            <PopupDescription>{selectedRoadmap.description}</PopupDescription>
            <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
            <PopupButton onClick={handleRegister}>Cadastrar-se</PopupButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </PageContainer>
  );
};

export default Header;
