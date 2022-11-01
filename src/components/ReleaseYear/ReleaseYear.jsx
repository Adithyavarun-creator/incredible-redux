import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myYear } from "../../store/movies/moviesAction";
import { ReleaseContainer, ReleaseButton } from "../../styles/ReleaseYear";

const ReleaseYear = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickYear = (year) => {
    dispatch(myYear(allMovies, year));
  };

  return (
    <ReleaseContainer>
      <Link to="?releaseYear=2000">
        <ReleaseButton onClick={() => clickYear(2000)}>2000</ReleaseButton>
      </Link>
      <Link to="?releaseYear=2010">
        <ReleaseButton onClick={() => clickYear(2010)}>2010</ReleaseButton>{" "}
      </Link>
      <Link to="?releaseYear=2015">
        <ReleaseButton onClick={() => clickYear(2015)}>2015</ReleaseButton>{" "}
      </Link>
      <Link to="?releaseYear=2020">
        <ReleaseButton onClick={() => clickYear(2020)}>2020</ReleaseButton>{" "}
      </Link>
    </ReleaseContainer>
  );
};

export default ReleaseYear;
