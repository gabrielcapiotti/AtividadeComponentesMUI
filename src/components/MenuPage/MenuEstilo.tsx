import styled from "styled-components";


export const MenuEstilo = styled.main`
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
  color: black;
  font-style: italic;
  align-items: center; /* Centraliza os itens horizontalmente */
  width: 100%;
`;


export const MenuPagina = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  background-color: brown;
  justify-content: center;
  align-items: center;
`;


export const Centro = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os elementos "quebrem" linha */
  justify-content: center; /* Centraliza os itens na linha */
  align-items: flex-start; /* Alinha os itens no topo */
  width: 100vw; /* Evita uso total da largura da viewport */
  height: auto; /* Ajusta a altura conforme o conteúdo */
  min-height: 70vh; /* Define uma altura mínima */
  background-color: #32156b;
  padding: 20px; /* Espaçamento interno */
  gap: 20px; /* Espaço entre os cartões */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
`;

export const Baixo = styled.div`
  width: 100%;
  height: 15vh;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paginar = styled.div`
  background-color: gray;
  padding: 10px; /* Aumenta o padding para maior área clicável */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve para destaque */
  margin-top: 20px; /* Espaço superior */
`;

/* Estilos de Contêiner para Cards (Adicional) */
export const CardContainer = styled.div`
  background-color: #444;
  border-radius: 10px;
  overflow: hidden;
  width: 250px; /* Largura fixa para os cartões */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Espaço entre cartões */
`;