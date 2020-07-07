import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const url = "https://image.tmdb.org/t/p/w300/";
function Movies(props) {
  const { generalConfig, data } = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> Movies </h1>
      <div className="show">
        {data &&
          data.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <img src={url + v.backdrop_path} />
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
