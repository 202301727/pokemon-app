import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        width: "150px",
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100px" }} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
