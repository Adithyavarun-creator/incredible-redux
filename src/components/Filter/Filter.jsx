import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { myFilter } from "../../store/movies/moviesAction";
import {
  filterMovies,
  selectAllMovies,
} from "../../store/movies/moviesSelector";
import { FilterContainer, FilterButton } from "../../styles/FilterStyle";

const Filter = ({ filterItem }) => {
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMovies);

  const clickAction = () => dispatch(myFilter(allMovies, "Action"));

  console.log(allMovies);

  return (
    <FilterContainer>
      <FilterButton>All</FilterButton>
      <FilterButton onClick={clickAction}>Action</FilterButton>
      <FilterButton>Thriller</FilterButton>
      <FilterButton>Romantic</FilterButton>
    </FilterContainer>
  );
};

export default Filter;
