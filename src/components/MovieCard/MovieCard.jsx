import React, { useEffect } from "react";
import {
  ImageContainer,
  MovieCardWrapper,
  Title,
  ReleaseYear,
  Description,
  ContentBox,
  RatingBox,
  Rating,
} from "../../styles/MovieCardStyle";
import { LinkStyle } from "../../styles/LinkStyle";
import { BsFillStarFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const MovieCard = ({ movie }) => {
  const { id, coverImage, name, releaseYear, description, rating, category } =
    movie;

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <MovieCardWrapper data-aos="fade-up">
      <LinkStyle to={`/movie/${id}`}>
        <ImageContainer src={coverImage} alt={name} />
        <ContentBox>
          <Title>{name}</Title>
          <ReleaseYear>{releaseYear}</ReleaseYear>
          <ReleaseYear>{category}</ReleaseYear>
          <Description>{description.slice(0, 20)}...</Description>
        </ContentBox>
      </LinkStyle>

      <RatingBox>
        <BsFillStarFill className="starIcon" />
        <Rating>{rating}</Rating>
      </RatingBox>
    </MovieCardWrapper>
  );
};

export default MovieCard;
