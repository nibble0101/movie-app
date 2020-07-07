import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import {context} from "../../store/ContextProvider";
const url = "https://image.tmdb.org/t/p/w300/";

function TVShows(props) {
    const { generalConfig, data } = useContext(context);
    return (
        <div className="show-wrapper">
          <h1> Tv Shows </h1>
          <div className="show">
            {data &&
              data.results.map((v, i) => {
                return (
                  <Zoom>
                    <img src={url + v.backdrop_path} key={"image" + i} />
                  </Zoom>
                );
              })}
          </div>
        </div>
      );
}

export default TVShows;