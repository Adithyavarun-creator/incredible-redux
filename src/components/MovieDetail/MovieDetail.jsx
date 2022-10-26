import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../movieData/movies";
import {
  MoviePageContainer,
  ShareLinkBox,
} from "../../styles/MovieDetailStyle";
import { BsShareFill } from "react-icons/bs";
import BackButton from "../BackButton/BackButton";
import ReactPlayer from "react-player";


const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const url = `https://incredible-indol.vercel.app/movie/${id}`;

  const shareMovie = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${movie.name}`,
          text: "Watch this movie for free without paying",
          url: url,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    const findMovie = movies.find((movie) => movie.id === parseInt(id));
    setMovie(findMovie);

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <MoviePageContainer>
        {!movie ? (
          "Loading "
        ) : (
          <>
            <div className="pageContainer">
              <img
                src={movie.coverImage}
                className="coverAllImage"
                alt={movie.name}
              />

              <div className="desc">
                <BackButton link="/" text="Go Back" />
                <h1 className="movieName">{movie.name}</h1>

                <ShareLinkBox onClick={shareMovie}>
                  <span style={{ color: "#1da1f2" }}>Share</span>
                  <span>
                    <BsShareFill className="shareIcon" />
                  </span>
                </ShareLinkBox>

                <h2 className="movieYear">Released on {movie.releaseYear}</h2>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width="100%"
                  height="400px"
                  className="videoPlayer"
                />

                <h3 className="movieDes">{movie.description}</h3>
              </div>
            </div>
          </>
        )}
      </MoviePageContainer>
    </>
  );
};

export default MovieDetail;
