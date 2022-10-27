export const filterItem = (category) => {
  const newMovies = moviesList.filter((movie) => {
    return movie.category === category;
  });
  return newMovies;
};
