import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectAllMovies = createSelector(
  [selectMovies],
  (movieSlice) => movieSlice.movies
);

const selectFilter = (state) => state.filter;

export const filterMovies = createSelector(
  [selectFilter],
  (filter) => filter.filteredMovies
);
