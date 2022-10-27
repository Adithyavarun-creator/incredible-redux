import { movies } from "../../movieData/movies";
import { MovieActionTypes } from "./moviesTypes";

export const MOVIES_INITIAL_STATE = {
  movies: movies,
  filteredMovies: [],
};

export const moviesReducer = (state = MOVIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MovieActionTypes.GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    default:
      return state;
  }
};

export const filterReducer = (state = MOVIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MovieActionTypes.FILTER_MOVIE_RATING:
      return {
        ...state,
        filteredMovies: payload,
      };

    default:
      return state;
  }
};

export const singleMovieReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case MovieActionTypes.GET_SINGLE_MOVIE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
