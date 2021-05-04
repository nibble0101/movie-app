import React from "react";
const baseMovieUrl = "https://image.tmdb.org/t/p/w300";
function Image(props) {
  return (
    <div className="image-wrapper">
      <img src={`${baseMovieUrl}/${props.src}`} alt="movie" />
    </div>
  );
}

export default Image;
