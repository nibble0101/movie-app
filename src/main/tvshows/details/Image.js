import React from "react";
import moviePlaceholderImage from "../../../img/movie-place-holder-image.png";
const baseTvUrl = "https://image.tmdb.org/t/p/w300/";
function Image(props) {
  return (
    <div className="image-wrapper">
      <img
        src={props.src ? baseTvUrl + props.src : moviePlaceholderImage}
        alt="backdrop"
      />
    </div>
  );
}

export default Image;
