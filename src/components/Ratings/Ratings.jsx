import React from "react";
import { useDispatch } from "react-redux";
import { myRatings } from "../../store/movies/moviesAction";
import { RatingBtn, RatingsContainer } from "../../styles/RatingsStyle";

const Ratings = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickRating = (rating) => {
    dispatch(myRatings(allMovies, rating));
  };

  return (
    <RatingsContainer>
      <RatingBtn onClick={() => clickRating(4.1)}>4.1</RatingBtn>
      <RatingBtn onClick={() => clickRating(4.2)}>4.2</RatingBtn>
      <RatingBtn onClick={() => clickRating(4.3)}>4.3</RatingBtn>
      <RatingBtn onClick={() => clickRating(4.4)}>4.4</RatingBtn>
      <RatingBtn onClick={() => clickRating(4.5)}>4.5</RatingBtn>
      <RatingBtn onClick={() => clickRating(4.9)}>4.9</RatingBtn>
      <RatingBtn onClick={() => clickRating(5)}>5</RatingBtn>
    </RatingsContainer>
  );
};

export default Ratings;
