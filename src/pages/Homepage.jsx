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
import { useSelector } from "react-redux";
import {
  selectAllMovies,
  filterNewMovies,
} from "../store/movies/moviesSelector";

const Homepage = () => {
  const allMovies = useSelector(filterNewMovies);
  //console.log(allMovies);

  const [search, setSearch] = useState("");

  return (
    <>
      <HomeContainer>
        <Header title="Incredible Task Movies" />
        <HeaderSubtitle>
          Want to watch movies ! Scroll Below for Free Access
        </HeaderSubtitle>
        <FeatureBox>
          <Search setSearch={setSearch} search={search} />

          <Filter allMovies={movies} />

          <Ratings allMovies={movies} />

          <ReleaseYear allMovies={movies} />
        </FeatureBox>

        <MovieContainer>
          {allMovies
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
    </>
  );
};

export default Homepage;
