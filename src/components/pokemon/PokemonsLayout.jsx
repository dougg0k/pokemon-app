import React from "react";
import styled from "styled-components";
import PokemonsCard from "./PokemonCard";

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
  margin: 0 20px;
`;

const PokemonsLayout = ({ pokemons }) => (
  <List>
    {pokemons.map(item => (
      <PokemonsCard key={item.id} pokemon={item} />
    ))}
  </List>
);

PokemonsLayout.defaultProps = {
  pokemons: []
};

export default PokemonsLayout;
