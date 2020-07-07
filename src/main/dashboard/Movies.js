import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
function Movies(props) {
  const {movies} = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> Movies </h1>
      <div className="show">
        {movies &&
          movies.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <div>
                  <img src={baseMovieUrl + v.backdrop_path}/>
                  <p> Title: {v.title}</p>
                  <p> Rating: {v.vote_average}</p>
                </div>
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
