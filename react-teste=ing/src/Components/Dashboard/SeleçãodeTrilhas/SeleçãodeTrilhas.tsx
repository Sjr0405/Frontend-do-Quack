import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import { PageContainer, Title, Description, Link, SearchBarSection, FilterSection, FilterButton, LanguageList, NoResults, SadIcon, PopupOverlay, PopupContent, PopupTitle, PopupDescription, PopupButton, CloseButton } from './StyledComponents';
import { fetchRoadmapsByFilter } from './data';
import tristeIcon from "../../../Assets/Svg_thigas/TRISTE.svg";
import RoadmapCard from './RoadmapCard';
import { useAuth } from '../../../AuthContext';
import axios from 'axios';

interface Roadmap {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  subtitle: string;
  color: string;
}

const Header: React.FC = () => {
  const { token, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"Todos" | "Linguagens" | "Módulos">("Todos");
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const getRoadmaps = async () => {
      if (token) {
        const fetchedRoadmaps = await fetchRoadmapsByFilter(token, filter);
        setRoadmaps(fetchedRoadmaps);
      }
    };
    getRoadmaps();
  }, [token, filter]);

  const filteredRoadmaps = roadmaps.filter((roadmap: Roadmap) =>
    roadmap.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredRoadmaps.length > 0;

  const handleFilterChange = (newFilter: "Todos" | "Linguagens" | "Módulos") => {
    setFilter(newFilter);
  };

  const handleCardClick = (roadmap: Roadmap) => {
    setSelectedRoadmap(roadmap);
  };

  const handleClosePopup = () => {
    setSelectedRoadmap(null);
  };

  const handleRegister = async () => {
    if (!user || !selectedRoadmap) return;

    try {
      const response = await axios.post('/api/users/roadmaps/start', {
        userId: user.id,
        roadmapId: selectedRoadmap.id
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Iniciado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        handleClosePopup();
      }
    } catch (error) {
      console.error('Erro ao iniciar roadmap:', error);
      Swal.fire({
        title: 'Erro!',
        text: 'Falha ao iniciar roadmap.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (roadmaps.length === 0) {
    return <div>No roadmaps available</div>;
  }

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
        <FilterButton active={filter === "Todos"} onClick={() => handleFilterChange("Todos")}>
          Todos
        </FilterButton>
        <FilterButton active={filter === "Linguagens"} onClick={() => handleFilterChange("Linguagens")}>
          Linguagens
        </FilterButton>
        <FilterButton active={filter === "Módulos"} onClick={() => handleFilterChange("Módulos")}>
          Módulos
        </FilterButton>
      </FilterSection>
      {hasResults ? (
        <LanguageList>
          {filteredRoadmaps.map((roadmap: Roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} onClick={() => handleCardClick(roadmap)} />
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
            <img style={{ width: '100px', height: '100px' }} src={selectedRoadmap.imagePath} alt={`${selectedRoadmap.title} logo`} />
            <PopupTitle>{selectedRoadmap.title}</PopupTitle>
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
