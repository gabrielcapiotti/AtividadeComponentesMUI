import { InputBase } from "@mui/material"; // Importação correta do InputBase
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search"; // Ícone de busca

// Estilização do contêiner de busca
export const SearchContainer = styled.div`
  display: flex;
  border-radius: 15px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.tertiary || '#ffffff'}; // Cor de fundo com fallback
  margin: 20px auto; // Centraliza horizontalmente e ajusta a margem
  width: 50%; // Ajuste da largura para ocupar metade da tela
  max-width: 600px; // Largura máxima para evitar que fique muito grande
  height: 40px; // Altura do campo de busca
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a9a9a9; // Cor ao passar o mouse
  }
`;

// Estilização do contêiner do ícone de busca
export const SearchIconWrapper = styled.div`
  padding: 4px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilização do campo de entrada
export const StyledInputBase = styled(InputBase)`
  color: inherit;
  padding: 8px; // Adicionando padding ao campo
  width: 100%;
  font-size: 1rem; // Tamanho da fonte
  background: none;
  border: none; // Remover borda do input
  outline: none; // Remover outline ao focar
  height: 100%;
`;

// Componente de busca
export function SearchComponent() {
    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon /> {/* Renderizando o ícone de busca */}
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Buscar..." // Texto do placeholder
                inputProps={{ 'aria-label': 'search' }} // Propriedades de acessibilidade
            />
        </SearchContainer>
    );
}
