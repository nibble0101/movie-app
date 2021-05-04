import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Loader from "../Loader";
import { formatUriComponent } from "../../utils/utils";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function MovieDashboard(props) {
  const { movieData, genreId, name, isLoading } = props;

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
                      : altUrl
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
                      search: `?id=${v.id}&genre=${genreId}`,
                      state: { name, genreId },
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
