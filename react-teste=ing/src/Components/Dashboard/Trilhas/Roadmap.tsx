import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import { PageContainer, Title, Description, Link, SearchBarSection, FilterSection, FilterButton, LanguageList, RoadmapCard, RoadmapImage, RoadmapName, RoadmapDescription, NoResults, SadIcon, PopupOverlay, PopupContent, PopupTitle, PopupDescription, PopupButton, CloseButton } from './StyledComponents';
import { languages, modules } from '../Trilhas/';
import tristeIcon from "../../Assets/Svg_thigas/TRISTE.svg";

interface Roadmap {
  name: string;
  img: string;
  description: string;
}

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "languages" | "modules">("all");
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const filteredLanguages = languages.filter((lang: Roadmap) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModules = modules.filter((mod: Roadmap) =>
    mod.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredLanguages.length > 0 || filteredModules.length > 0;

  const handleFilterChange = (newFilter: "all" | "languages" | "modules") => {
    setFilter(newFilter);
  };

  const handleCardClick = (roadmap: Roadmap) => {
    setSelectedRoadmap(roadmap);
  };

  const handleClosePopup = () => {
    setSelectedRoadmap(null);
  };

  const handleRegister = () => {
    const newModule = {
      nome: selectedRoadmap?.name,
      aulasCompletas: 0,
      totalAulas: 0,
      corBarra: '#FFD700',
      rota: '/Backend_Roadmap',
      icon: selectedRoadmap?.img,
    };
    const newModules = location.state?.newModules ? [...location.state.newModules, newModule] : [newModule];
    navigate(location.pathname, { state: { newModules } });
    Swal.fire({
      title: 'Sucesso!',
      text: 'Iniciado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    handleClosePopup();
  };

  return (
    <PageContainer>
      <Title>Todas as Trilhas para você dominar</Title>
      <Description>
        Torne-se fluente nas linguagens de programação escolhidas completando esses trilhas criados por nossa{" "}
        <Link href="#">incrível equipe de colaboradores</Link>.
      </Description>
      <SearchBarSection>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Pesquisar trilhas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', borderRadius: '16px' }}
        />
      </SearchBarSection>
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
      {hasResults ? (
        <LanguageList>
          {(filter === "all" || filter === "languages") && filteredLanguages.map((lang: Roadmap) => (
            <RoadmapCard key={lang.name} onClick={() => handleCardClick(lang)}>
              <RoadmapImage src={lang.img} alt={`${lang.name} logo`} />
              <RoadmapName>{lang.name}</RoadmapName>
              <RoadmapDescription>{lang.description}</RoadmapDescription>
            </RoadmapCard>
          ))}
          {(filter === "all" || filter === "modules") && filteredModules.map((mod: Roadmap) => (
            <RoadmapCard key={mod.name} onClick={() => handleCardClick(mod)}>
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
      {selectedRoadmap && (
        <PopupOverlay>
          <PopupContent>
            <RoadmapImage src={selectedRoadmap.img} alt={`${selectedRoadmap.name} logo`} />
            <PopupTitle>{selectedRoadmap.name}</PopupTitle>
            <PopupDescription>{selectedRoadmap.description}</PopupDescription>
            <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
            <PopupButton onClick={handleRegister}>Iniciar !</PopupButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </PageContainer>
  );
};

export default Header;
