import React, { useState } from "react";
import { movies } from "../movieData/movies";
import Filter from "../components/Filter/Filter";
import Ratings from "../components/Ratings/Ratings";
import ReleaseYear from "../components/ReleaseYear/ReleaseYear";
import {
  HomeContainer,
  FeatureBox,
  MovieContainer,
  HeaderSubtitle,
} from "../styles/HomepageStyle";
import Search from "../components/Search/Search";
import MovieCard from "../components/MovieCard/MovieCard";
import Header from "../components/Header/Header";

const Homepage = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [search, setSearch] = useState("");

  const filterItem = (category) => {
    const newMovies = movies.filter((movie) => {
      return movie.category === category;
    });

    setMoviesList(newMovies);
  };

  const filterRating = (rating) => {
    const newMovies = movies.filter((movie) => {
      return Number(movie.rating) === Number(rating);
    });

    setMoviesList(newMovies);
  };

  const filterReleaseYear = (year) => {
    const newMovies = movies.filter((movie) => {
      return Number(movie.releaseYear) === Number(year);
    });

    setMoviesList(newMovies);
  };

  return (
    <HomeContainer>
      <Header title="Incredible Task Movies" />
      <HeaderSubtitle>
        Want to watch movies ! Scroll Below for Free Access
      </HeaderSubtitle>
      <FeatureBox>
        <Search setSearch={setSearch} search={search} />

        <Filter
          filterItem={filterItem}
          movies={movies}
          setMoviesList={setMoviesList}
        />

        <Ratings filterRating={filterRating} />

        <ReleaseYear filterReleaseYear={filterReleaseYear} />
      </FeatureBox>

      <MovieContainer>
        {moviesList
          .filter((result) => {
            if (search === "") {
              return result;
            } else if (
              result.name.toLowerCase().includes(search.toLowerCase()) ||
              result.category.toLowerCase().includes(search.toLowerCase()) ||
              result.releaseYear.toLowerCase().includes(search.toLowerCase())
            ) {
              return result;
            }
          })
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </MovieContainer>
    </HomeContainer>
  );
};

export default Homepage;
