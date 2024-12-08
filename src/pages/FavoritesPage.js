const addToFavorites = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(pokemon);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
