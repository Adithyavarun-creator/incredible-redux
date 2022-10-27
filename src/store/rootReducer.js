import { combineReducers } from "redux";
import { moviesReducer, singleMovieReducer } from "./movies/moviesReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  singleMovie: singleMovieReducer,
});
