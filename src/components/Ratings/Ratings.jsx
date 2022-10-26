import React from "react";
import { RatingBtn, RatingsContainer } from "../../styles/RatingsStyle";

const Ratings = ({ filterRating }) => {
  return (
    <RatingsContainer>
      <RatingBtn onClick={() => filterRating(4)}>4.1</RatingBtn>
      <RatingBtn onClick={() => filterRating(4.2)}>4.2</RatingBtn>
      <RatingBtn onClick={() => filterRating(4.3)}>4.3</RatingBtn>
      <RatingBtn onClick={() => filterRating(4.4)}>4.4</RatingBtn>
      <RatingBtn onClick={() => filterRating(4.5)}>4.5</RatingBtn>
      <RatingBtn onClick={() => filterRating(4.9)}>4.9</RatingBtn>
    </RatingsContainer>
  );
};

export default Ratings;
