import { Input } from "@mui/material";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  // Função para renderizar a barra de pesquisa
  return (
    <Input
      type="search"
      placeholder="Pesquisar por Trilhas..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
