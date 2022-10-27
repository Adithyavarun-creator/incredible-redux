import { createAction } from "../utils/reducer";
import { MovieActionTypes } from "./moviesTypes";

const filterItem = (movies, category) => {
  const newMovies = movies.filter((movie) => {
    return movie.category === category;
  });
  return newMovies;
};

export const setMovies = (movies) =>
  createAction(MovieActionTypes.GET_ALL_MOVIES, movies);

export const getMovie = (movie) =>
  createAction(MovieActionTypes.GET_SINGLE_MOVIE, movie);

export const myFilter = (movies, category) => {
  const all = filterItem(movies, category);
  createAction(MovieActionTypes.FILTER_MOVIE_RATING, all);
};
