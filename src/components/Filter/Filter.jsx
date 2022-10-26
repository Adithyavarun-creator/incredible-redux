import React from "react";
import { FilterContainer, FilterButton } from "../../styles/FilterStyle";

const Filter = ({ movies, filterItem, setMoviesList }) => {
  return (
    <FilterContainer>
      <FilterButton onClick={() => setMoviesList(movies)}>All</FilterButton>
      <FilterButton onClick={() => filterItem("Action")}>Action</FilterButton>
      <FilterButton onClick={() => filterItem("Thriller")}>
        Thriller
      </FilterButton>
      <FilterButton onClick={() => filterItem("Romantic")}>
        Romantic
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
