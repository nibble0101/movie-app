import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const baseTvUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function TVShows(props) {
  const { tvShows } = useContext(context);
  return (
    <div className="show-wrapper">
      <h1> Tv Shows </h1>
      <div className="show">
        {tvShows &&
          tvShows.results.map((v, i) => {
            return (
              <Zoom key={i + "tvshow"}>
                <div className="image-wrapper">
                  <img
                    src={v.backdrop_path ? baseTvUrl + v.backdrop_path : altUrl}
                  />
                  <p className = "title">Title: {v.name}</p>
                  <p className = "rating"> {v.vote_average}/10</p>
                  <p className = "release-date">First Aired: {v.first_air_date}</p>
                </div>
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default TVShows;
