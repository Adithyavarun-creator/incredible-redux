import React from "react";
import { useDispatch } from "react-redux";
import { myYear } from "../../store/movies/moviesAction";
import { ReleaseContainer, ReleaseButton } from "../../styles/ReleaseYear";

const ReleaseYear = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickYear = (year) => {
    dispatch(myYear(allMovies, year));
  };

  return (
    <ReleaseContainer>
      <ReleaseButton onClick={() => clickYear(2000)}>2000</ReleaseButton>
      <ReleaseButton onClick={() => clickYear(2010)}>2010</ReleaseButton>
      <ReleaseButton onClick={() => clickYear(2015)}>2015</ReleaseButton>
      <ReleaseButton onClick={() => clickYear(2020)}>2020</ReleaseButton>
    </ReleaseContainer>
  );
};

export default ReleaseYear;
