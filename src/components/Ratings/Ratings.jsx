import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myRatings } from "../../store/movies/moviesAction";
import { RatingBtn, RatingsContainer } from "../../styles/RatingsStyle";

const Ratings = ({ allMovies }) => {
  const dispatch = useDispatch();

  const clickRating = (rating) => {
    dispatch(myRatings(allMovies, rating));
  };

  return (
    <RatingsContainer>
      <Link to="?rating=4.1">
        <RatingBtn onClick={() => clickRating(4.1)}>4.1</RatingBtn>
      </Link>
      <Link to="?rating=4.2">
        <RatingBtn onClick={() => clickRating(4.2)}>4.2</RatingBtn>
      </Link>

      <Link to="?rating=4.3">
        <RatingBtn onClick={() => clickRating(4.3)}>4.3</RatingBtn>
      </Link>

      <Link to="?rating=4.4">
        <RatingBtn onClick={() => clickRating(4.4)}>4.4</RatingBtn>
      </Link>

      <Link to="?rating=4.5">
        <RatingBtn onClick={() => clickRating(4.5)}>4.5</RatingBtn>
      </Link>

      <Link to="?rating=4.9">
        <RatingBtn onClick={() => clickRating(4.9)}>4.9</RatingBtn>
      </Link>

      <Link to="?rating=4.5">
        <RatingBtn onClick={() => clickRating(5)}>5</RatingBtn>
      </Link>
    </RatingsContainer>
  );
};

export default Ratings;
