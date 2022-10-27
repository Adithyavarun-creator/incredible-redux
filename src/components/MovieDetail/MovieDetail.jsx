import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MoviePageContainer,
  ShareLinkBox,
} from "../../styles/MovieDetailStyle";
import { BsShareFill } from "react-icons/bs";
import BackButton from "../BackButton/BackButton";
import ReactPlayer from "react-player";
import { movies } from "../../movieData/movies";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../store/movies/moviesAction";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const oneProduct = useSelector((state) => state.singleMovie);
  const dispatch = useDispatch();

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

  const findMovie = () => {
    const one = movies.find((movie) => movie.id === parseInt(id));
    dispatch(getMovie(one));
  };

  useEffect(() => {
    // const findMovie = movies.find((movie) => movie.id === parseInt(id));
    // setMovie(findMovie);
    if (id && id !== "") findMovie();

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <MoviePageContainer>
        {!oneProduct ? (
          "Loading "
        ) : (
          <>
            <div className="pageContainer">
              <img
                src={oneProduct.coverImage}
                className="coverAllImage"
                alt={oneProduct.name}
              />

              <div className="desc">
                <BackButton link="/" text="Go Back" />
                <h1 className="movieName">{oneProduct.name}</h1>

                <ShareLinkBox onClick={shareMovie}>
                  <span style={{ color: "#1da1f2" }}>Share</span>
                  <span>
                    <BsShareFill className="shareIcon" />
                  </span>
                </ShareLinkBox>

                <h2 className="movieYear">
                  Released on {oneProduct.releaseYear}
                </h2>
                <ReactPlayer
                  url={oneProduct.videoLink}
                  width="100%"
                  height="600px"
                  className="videoPlayer"
                  playbackRate={1}
                  controls={true}
                  light={true}
                />

                <h3 className="movieDes">{oneProduct.description}</h3>
              </div>
            </div>
          </>
        )}
      </MoviePageContainer>{" "}
    </>
  );
};

export default MovieDetail;
