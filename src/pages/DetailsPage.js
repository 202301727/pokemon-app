import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams(); // Obtén el ID del Pokémon desde la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error("Error fetching Pokémon details:", error));
  }, [id]);

  if (!pokemon) {
    return <p>Loading Pokémon details...</p>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
};

export default DetailsPage;
