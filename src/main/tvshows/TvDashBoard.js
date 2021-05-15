import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { formatUriComponent } from "../../utils/utils";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";
const altUrl =
  "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg";

function TvDashboard(props) {
  const { tvData, isLoading, genre, genreId } = props;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="show-wrapper">
      <div className="show">
        {tvData.map((v, i) => {
          return (
            <Fade key={i + "tvshow"}>
              <div className="image-wrapper">
                <img
                  src={
                    v.poster_path
                      ? baseMovieUrl + v.poster_path
                      : v.backdrop_path
                      ? baseMovieUrl + v.backdrop_path
                      : altUrl
                  }
                  alt={v.original_name}
                  width="300"
                  height="450"
                />
                <p className="title">
                  <span className="label"> Title:</span> {v.original_name}
                </p>
                <p className="rating">{v.vote_average}/10</p>
                <p className="release-date">
                  <span className="label"> First Aired: </span>
                  {v.first_air_date}
                </p>
                <p className="link">
                  <span className="label"> More: </span>
                  <Link to={{ pathname: `/tvshow/${formatUriComponent(v.original_name)}`,
                      search: `?genre=${formatUriComponent(
                       genre
                      )}&genreId=${genreId}&id=${v.id}`,}}>
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

export default TvDashboard;
