import React from "react";
import moviePlaceholderImage from "../../../img/movie-place-holder-image.png";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300";
function Image(props) {
  return (
    <div className="image-wrapper">
      <img
        src={props.src ? `${baseMovieUrl}/${props.src}` : moviePlaceholderImage}
        alt="movie"
      />
    </div>
  );
}

export default Image;
