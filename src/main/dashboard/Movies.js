import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
import { Link } from "react-router-dom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";
function Movies(props) {
  const { movies } = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> Movies </h1>
      <div className="show">
        {movies &&
          movies.results.map((v, i) => {
            return (
              <Zoom key={i + "movie"}>
                <div className="image-wrapper">
                  <Link to = "movies/id">
                    <img
                      src={
                        v.backdrop_path
                          ? baseMovieUrl + v.backdrop_path
                          : altUrl
                      }
                    />
                  </Link>

                  <p className="title"> Title: {v.title}</p>
                  <p className="rating">{v.vote_average}/10</p>
                  <p className="release-date">
                    Release Date: {v.release_date}
                  </p>
                </div>
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
