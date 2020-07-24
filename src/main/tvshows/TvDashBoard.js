import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function TvDashboard(props) {
  const {tvData} = props;
  return (
    <div className="show-wrapper">
      <div className="show">
        {tvData.map((v, i) => {
          return (
            <Zoom key={i + "tvshow"}>
              <div className="image-wrapper">
                <Link to="movies/id">
                  <img
                    src={
                      v.poster_path
                      ? baseMovieUrl + v.poster_path
                      : v.backdrop_path
                      ? baseMovieUrl + v.backdrop_path
                      : altUrl
                    }
                    alt = {v.original_name}
                  />
                </Link>

                <p className="title"> Title: {v.original_name}</p>
                <p className="rating">{v.vote_average}/10</p>
                <p className="release-date">First Aired: {v.first_air_date}</p>
                <p className = "link"> More: <a href = "#"> 🔗 </a></p>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}

export default TvDashboard;
