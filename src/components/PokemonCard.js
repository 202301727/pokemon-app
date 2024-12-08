import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default PokemonCard;
