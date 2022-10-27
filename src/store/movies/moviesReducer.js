import { movies } from "../../movieData/movies";
import { MovieActionTypes } from "./moviesTypes";

export const MOVIES_INITIAL_STATE = {
  movies: movies,
  filteredMovies: movies,
};

export const moviesReducer = (state = MOVIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MovieActionTypes.GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case MovieActionTypes.FILTER_MOVIE:
      return {
        ...state,
        filteredMovies: payload,
      };
    case MovieActionTypes.FILTER_RATING:
      return {
        ...state,
        filteredMovies: payload,
      };

    // case MovieActionTypes.FILTER_YEAR:
    //   return {
    //     ...state,
    //     filteredMovies: payload,
    //   };

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
