import { combineReducers } from "redux";
import { filterReducer, moviesReducer, singleMovieReducer } from "./movies/moviesReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  singleMovie: singleMovieReducer,
  filter: filterReducer,
});
