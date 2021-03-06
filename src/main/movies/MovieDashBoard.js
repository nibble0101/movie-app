import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Loader from "../Loader";
import { formatUriComponent } from "../../utils/utils";
import moviePlaceholderImage from "../../img/movie-place-holder-image.png";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";

function MovieDashboard(props) {
  const { movieData, genreId, genre, isLoading } = props;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="show-wrapper">
      <div className="show">
        {movieData.map((v, i) => {
          return (
            <Fade key={i + "movies"}>
              <div className="image-wrapper">
                <img
                  src={
                    v.poster_path
                      ? baseMovieUrl + v.poster_path
                      : v.backdrop_path
                      ? baseMovieUrl + v.backdrop_path
                      : moviePlaceholderImage
                  }
                  width="300"
                  height="450"
                  alt={v.title}
                />
                <p className="title">
                  <span className="label"> Title: </span> {v.title}
                </p>
                <p className="rating">{v.vote_average}/10</p>
                <p className="release-date">
                  <span className="label"> Release Date: </span>
                  {v.release_date}
                </p>
                <p className="link">
                  <span className="label"> More: </span>
                  <Link
                    to={{
                      pathname: `/movie/${formatUriComponent(v.title)}`,
                      search: `?genre=${formatUriComponent(
                        genre
                      )}&genreId=${genreId}&id=${v.id}`,
                    }}
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </Link>
                </p>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDashboard;
