import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtén la lista de Pokémon desde la API
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        const results = response.data.results;

        // Agrega las imágenes a cada Pokémon
        const detailedResults = results.map((pokemon, index) => ({
          ...pokemon,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));

        setPokemonList(detailedResults);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  if (loading) {
    return <p>Loading Pokémon...</p>;
  }

  return (
    <div>
      <h1>Pokémon List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

