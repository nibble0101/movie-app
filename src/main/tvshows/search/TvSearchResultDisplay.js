import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function TvSearchResultDisplay(props) {
  const { tvData} = props;
  return (
    <div className="show-wrapper">
      <div className="show">
        {tvData.map((v, i) => {
          return (
            <Zoom key={i + "tvshows-search"}>
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
                <p className="title"> Title: {v.original_name}</p>
                <p className="rating">{v.vote_average}/10</p>
                <p className="release-date">First Aired: {v.first_air_date}</p>
                <p className="link">
                  More:
                  <Link to={`/tvshows/all/${v.id}`}>
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

export default TvSearchResultDisplay;
