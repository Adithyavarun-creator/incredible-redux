import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const filterNewMovies = createSelector(
  [selectMovies],
  (movieSlice) => movieSlice.filteredMovies
);
