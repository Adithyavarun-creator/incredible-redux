import { createAction } from "../utils/reducer";
import { MovieActionTypes } from "./moviesTypes";

const filterItem = (movies, category) => {
  const newMovies = movies.filter((movie) => movie.category === category);
  return newMovies;
};

const filterRatings = (movies, rating) => {
  const newMovies = movies.filter(
    (movie) => Number(movie.rating) === Number(rating)
  );
  return newMovies;
};

const filterYear = (movies, year) => {
  const newMovies = movies.filter(
    (movie) => Number(movie.releaseYear) === Number(year)
  );
  return newMovies;
};

export const setMovies = (movies) =>
  createAction(MovieActionTypes.GET_ALL_MOVIES, movies);

export const getMovie = (movie) =>
  createAction(MovieActionTypes.GET_SINGLE_MOVIE, movie);

export const myFilter = (movies, category) => {
  const all = filterItem(movies, category);
  return createAction(MovieActionTypes.FILTER_MOVIE, all);
};

export const myRatings = (movies, rating) => {
  const all = filterRatings(movies, rating);
  return createAction(MovieActionTypes.FILTER_RATING, all);
};

export const myYear = (movies, year) => {
  const all = filterYear(movies, year);
  return createAction(MovieActionTypes.FILTER_YEAR, all);
};
