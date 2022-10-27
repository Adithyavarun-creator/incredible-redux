import React from "react";
import { useDispatch } from "react-redux";
import { myFilter } from "../../store/movies/moviesAction";
import { FilterContainer, FilterButton } from "../../styles/FilterStyle";

const Filter = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickAction = (category) => {
    dispatch(myFilter(allMovies, category));
  };

  return (
    <FilterContainer>
      <FilterButton onClick={() => clickAction(allMovies)}>All</FilterButton>
      <FilterButton onClick={() => clickAction("Action")}>Action</FilterButton>
      <FilterButton onClick={() => clickAction("Thriller")}>
        Thriller
      </FilterButton>
      <FilterButton onClick={() => clickAction("Romantic")}>
        Romantic
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
