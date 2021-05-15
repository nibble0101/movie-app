import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Loader from "../Loader";
import personPlaceholderImage from "../../img/movie-place-holder-image.png";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300/";

function PeopleDashboard(props) {
  const { peopleData, isLoading } = props;
  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="show-wrapper">
      <div className="show">
        {peopleData.map((v, i) => {
          return (
            <Fade key={i + "people"}>
              <div className="image-wrapper">
                <img
                  src={v.profile_path ? baseMovieUrl + v.profile_path : personPlaceholderImage}
                  alt={v.name}
                  width="200"
                  height="300"
                />
                <p className="title">
                  <span className="label"> Name:</span> {v.name}
                </p>
                <p className="rating">{v.popularity}</p>
                <p className="designation">
                  <span className="label"> Known for: </span>
                  {v.known_for_department}
                </p>
                <p className="link">
                  <span className="label"> More: </span>
                  <Link to={`/people/${v.id}`}>
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

export default PeopleDashboard;
