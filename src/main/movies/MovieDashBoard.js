import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function MovieDashboard(props) {
  const { movieData, movieGenreList, id } = props;
  let genre = movieGenreList.find((v) => v.id === id);
  genre = genre ? genre.name : "All";
  return (
    <div className="show-wrapper">
      <div className="show">
        {movieData.map((v, i) => {
          return (
            <Zoom key={i + "movies"}>
              <div className="image-wrapper">
                <img
                  src={
                    v.poster_path
                      ? baseMovieUrl + v.poster_path
                      : v.backdrop_path
                      ? baseMovieUrl + v.backdrop_path
                      : altUrl
                  }
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
                  <Link to={`/movies/${genre.replace(/\s+/g, "")}/${v.id}`}>
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </Link>
                </p>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDashboard;
