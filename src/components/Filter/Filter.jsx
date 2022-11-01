import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myFilter } from "../../store/movies/moviesAction";
import { FilterContainer, FilterButton } from "../../styles/FilterStyle";

const Filter = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickAction = (category) => {
    dispatch(myFilter(allMovies, category));
  };

  return (
    <FilterContainer>
      <Link to="?name=all">
        <FilterButton onClick={() => clickAction(allMovies)}>All</FilterButton>
      </Link>
      <Link to="?name=action">
        <FilterButton onClick={() => clickAction("Action")}>
          Action
        </FilterButton>
      </Link>
      <Link to="?name=thriller">
        <FilterButton onClick={() => clickAction("Thriller")}>
          Thriller
        </FilterButton>
      </Link>
      <Link to="?name=romantic">
        <FilterButton onClick={() => clickAction("Romantic")}>
          Romantic
        </FilterButton>
      </Link>
    </FilterContainer>
  );
};

export default Filter;
